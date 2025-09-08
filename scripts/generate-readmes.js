// Node script to generate Arabic README.md in every folder
// Skips common ignored directories

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  '.turbo',
  '.vercel',
]);

/**
 * Provide a short Arabic description based on directory path heuristics
 */
function describeDir(relPath) {
  const lower = relPath.replace(/\\/g, '/').toLowerCase();
  if (lower === '') return 'جذر المشروع ويحتوي على الإعدادات العامة والتهيئة.';
  if (lower.startsWith('app')) return 'مسارات تطبيق Next.js (صفحات، تخطيطات، خرائط الموقع).';
  if (lower.startsWith('components')) return 'مكونات واجهة المستخدم القابلة لإعادة الاستخدام.';
  if (lower.startsWith('components/ui')) return 'مكونات واجهة المستخدم الأساسية (أزرار، مدخلات، نصوص).';
  if (lower.startsWith('data')) return 'بيانات ثابتة ومصادر محتوى داخلية.';
  if (lower.startsWith('hooks')) return 'خطافات React مخصّصة (منطق قابل لإعادة الاستخدام).';
  if (lower.startsWith('lib')) return 'دوال وأدوات مساعدة مشتركة عبر المشروع.';
  if (lower.startsWith('public')) return 'ملفات عامة ثابتة تُقدّم مباشرة (صور، فيديوهات، SVG).';
  if (lower.startsWith('public/portfolio')) return 'ملفات أعمال وعينات مشاريع ضمن قسم البورتفوليو.';
  if (lower.startsWith('public/شركاء النجاح') || lower.startsWith('شركاء النجاح')) return 'شعارات وصور شركاء النجاح.';
  return 'مجلد ضمن المشروع يحتوي على ملفات مساعدة مرتبطة بهذا المسار.';
}

function listDirContents(absPath) {
  const entries = fs.readdirSync(absPath, { withFileTypes: true });
  const files = [];
  const dirs = [];
  for (const e of entries) {
    if (e.isDirectory()) dirs.push(e.name);
    else files.push(e.name);
  }
  // Sort for stable output
  dirs.sort((a, b) => a.localeCompare(b, 'ar'));
  files.sort((a, b) => a.localeCompare(b, 'ar'));
  return { files, dirs };
}

function ensureReadmeForDir(absPath) {
  const relPath = path.relative(projectRoot, absPath).replace(/\\/g, '/');
  const readmePath = path.join(absPath, 'README.md');
  const description = describeDir(relPath);
  const { files, dirs } = listDirContents(absPath);

  const lines = [];
  lines.push(`# توثيق المجلد`);
  lines.push('');
  lines.push(`- **المسار**: \
\`${relPath || '.'}\``);
  lines.push(`- **الوصف المختصر**: ${description}`);
  lines.push('');
  if (dirs.length) {
    lines.push('## المجلدات الفرعية');
    for (const d of dirs) {
      lines.push(`- ${d}`);
    }
    lines.push('');
  }
  if (files.length) {
    lines.push('## الملفات');
    for (const f of files) {
      lines.push(`- ${f}`);
    }
    lines.push('');
  }
  lines.push('> هذا الملف يُولّد تلقائيًا للمساعدة في فهم هيكل المشروع بسرعة.');

  const content = lines.join('\n');

  // Create or overwrite to keep content updated
  fs.writeFileSync(readmePath, content, 'utf8');
}

function walk(absPath) {
  const rel = path.relative(projectRoot, absPath);
  const base = path.basename(absPath);
  if (IGNORE_DIRS.has(base)) return; // skip ignored roots entirely

  // Always generate README for this directory
  ensureReadmeForDir(absPath);

  // Recurse into children
  const entries = fs.readdirSync(absPath, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      walk(path.join(absPath, e.name));
    }
  }
}

function main() {
  walk(projectRoot);
  console.log('تم إنشاء/تحديث README.md لجميع المجلدات.');
}

main();



