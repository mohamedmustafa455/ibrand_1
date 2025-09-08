"use client"

import { useEffect, useState, useMemo } from 'react'

// Obfuscated Copyright Protection - Hidden and scrambled text
const ObfuscatedCopyright = () => {
  const [currentYear] = useState(new Date().getFullYear())
  const [isActive, setIsActive] = useState(false)

  // Build target phrase without exposing plaintext in source
  const targetCodes = useMemo(() => [
    67,111,112,121,114,105,103,104,116,32,68,32,47,77,111,104,97,109,101,100,32,83,97,114,104,97,110
  ], [])
  const targetPhrase = useMemo(() => String.fromCharCode(...targetCodes), [targetCodes])
  const b64 = useMemo(() => {
    try { return typeof window !== 'undefined' ? window.btoa(targetPhrase) : '' } catch { return '' }
  }, [targetPhrase])
  const hex = useMemo(() => targetPhrase.split('').map(c => c.charCodeAt(0).toString(16).padStart(2,'0')).join(''), [targetPhrase])
  const rev = useMemo(() => targetPhrase.split('').reverse().join(''), [targetPhrase])

  // Scrambled copyright text - each character separated
  const scrambledText = useMemo(() => [
    'C', 'o', 'p', 'y', 'r', 'i', 'g', 'h', 't', ' ', 
    '©', ' ', currentYear.toString().split('')[0], currentYear.toString().split('')[1], currentYear.toString().split('')[2], currentYear.toString().split('')[3], ' ',
    'M', 'o', 'h', 'a', 'm', 'e', 'd', ' ', 'S', 'a', 'r', 'h', 'a', 'n', ' ',
    '-', ' ', 'A', 'l', 'l', ' ', 'R', 'i', 'g', 'h', 't', 's', ' ', 'R', 'e', 's', 'e', 'r', 'v', 'e', 'd', ' ',
    'M', 'I', 'T', ' ', 'L', 'i', 'c', 'e', 'n', 's', 'e', ' ',
    'h', 't', 't', 'p', 's', ':', '/', '/', 'm', 'o', 'h', 'a', 'm', 'e', 'd', '-', 's', 'a', 'r', 'h', 'a', 'n', '.', 'v', 'e', 'r', 'c', 'e', 'l', '.', 'a', 'p', 'p', '/'
  ], [currentYear])

  // Additional obfuscated data
  const obfuscatedData = useMemo(() => ({
    author: ['M', 'o', 'h', 'a', 'm', 'e', 'd', ' ', 'S', 'a', 'r', 'h', 'a', 'n'],
    year: currentYear.toString().split(''),
    url: ['m', 'o', 'h', 'a', 'm', 'e', 'd', '-', 's', 'a', 'r', 'h', 'a', 'n', '.', 'v', 'e', 'r', 'c', 'e', 'l', '.', 'a', 'p', 'p'],
    license: ['M', 'I', 'T'],
    rights: ['A', 'l', 'l', ' ', 'R', 'i', 'g', 'h', 't', 's', ' ', 'R', 'e', 's', 'e', 'r', 'v', 'e', 'd']
  }), [currentYear])

  useEffect(() => {
    // Integrity check with obfuscated code
    const _0x1a2b = ['c', 'o', 'p', 'y', 'r', 'i', 'g', 'h', 't']
    const _0x3c4d = ['p', 'r', 'o', 't', 'e', 'c', 't', 'i', 'o', 'n']
    const _0x5e6f = ['m', 'o', 'h', 'a', 'm', 'e', 'd']
    const _0x7g8h = ['s', 'a', 'r', 'h', 'a', 'n']
    
    const checkSum = _0x1a2b.join('').length + _0x3c4d.join('').length + 
                    _0x5e6f.join('').length + _0x7g8h.join('').length
    
    if (checkSum === 33) {
      setIsActive(true)
    }

    // Console protection with scrambled text
    const consoleText = scrambledText.join('')
    console.log(`%c${consoleText}`, 'color: #00ff00; font-size: 10px; font-weight: bold; background: #000; padding: 2px;')
    
    // Periodic scrambled console messages
    const interval = setInterval(() => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const randomText = obfuscatedData.author.join('') + ' ' + obfuscatedData.year.join('')
      console.log(`%c${randomText}`, `color: ${randomColor}; font-size: 8px; font-weight: bold;`)
    }, 20000)

    // Hidden injection node with encoded signatures (not visible)
    try {
      const node = document.createElement('div')
      node.style.position = 'absolute'
      node.style.left = '-99999px'
      node.style.top = '-99999px'
      node.style.opacity = '0'
      node.style.pointerEvents = 'none'
      node.style.userSelect = 'none'
      node.style.fontSize = '1px'
      node.setAttribute('aria-hidden', 'true')
      node.dataset.sigB64 = b64
      node.dataset.sigHex = hex
      node.dataset.sigRev = rev
      node.dataset.sigLen = String(targetPhrase.length)
      node.dataset.sigChk = String(
        targetPhrase.split('').reduce((s, c) => s + c.charCodeAt(0), 0) % 9973
      )
      document.body.appendChild(node)
      setTimeout(() => { try { node.remove() } catch {} }, 60000)
    } catch {}

    return () => clearInterval(interval)
  }, [currentYear, obfuscatedData.author, obfuscatedData.year, scrambledText, b64, hex, rev, targetPhrase])

  if (!isActive) return null

  return (
    <>
      {/* Completely hidden scrambled copyright - not visible on page */}
      <div 
        style={{ 
          position: 'absolute', 
          left: '-99999px', 
          top: '-99999px',
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: '1px',
          color: 'transparent',
          zIndex: -99999,
          visibility: 'hidden',
          display: 'none'
        }}
        aria-hidden="true"
        data-copyright="obfuscated-mohamed-sarhan"
        data-year={currentYear}
        data-url="https://mohamed-sarhan.vercel.app/"
        data-license="MIT"
        data-author="Mohamed Sarhan"
        onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
        onCopy={(e: React.ClipboardEvent) => e.preventDefault()}
        onCut={(e: React.ClipboardEvent) => e.preventDefault()}
        onPaste={(e: React.ClipboardEvent) => e.preventDefault()}
        onDragStart={(e: React.DragEvent) => e.preventDefault()}
      >
        {/* Scrambled text as individual spans */}
        {scrambledText.map((char, index) => (
          <span 
            key={index} 
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 1000}px`,
              top: `${Math.random() * 1000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-char={char}
            data-index={index}
          >
            {char}
          </span>
        ))}

        {/* Encoded hidden signatures */}
        <span data-sig-b64={b64} data-sig-hex={hex} data-sig-rev={rev} data-sig-len={targetPhrase.length} style={{ display: 'none' }} />
      </div>

      {/* Additional hidden scrambled layers */}
      <div 
        style={{ 
          position: 'fixed', 
          left: '-99999px', 
          top: '-99999px',
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: '1px',
          color: 'transparent',
          zIndex: -99998,
          visibility: 'hidden',
          display: 'none'
        }}
        aria-hidden="true"
        data-copyright="scrambled-protection"
        data-year={currentYear}
        data-url="https://mohamed-sarhan.vercel.app/"
        data-license="MIT"
        data-author="Mohamed Sarhan"
      >
        {/* Obfuscated author name */}
        {obfuscatedData.author.map((char, index) => (
          <span 
            key={`author-${index}`}
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 2000}px`,
              top: `${Math.random() * 2000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-author-char={char}
            data-author-index={index}
          >
            {char}
          </span>
        ))}
        
        {/* Obfuscated year */}
        {obfuscatedData.year.map((char, index) => (
          <span 
            key={`year-${index}`}
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 3000}px`,
              top: `${Math.random() * 3000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-year-char={char}
            data-year-index={index}
          >
            {char}
          </span>
        ))}
        
        {/* Obfuscated URL */}
        {obfuscatedData.url.map((char, index) => (
          <span 
            key={`url-${index}`}
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 4000}px`,
              top: `${Math.random() * 4000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-url-char={char}
            data-url-index={index}
          >
            {char}
          </span>
        ))}
        
        {/* Obfuscated license */}
        {obfuscatedData.license.map((char, index) => (
          <span 
            key={`license-${index}`}
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 5000}px`,
              top: `${Math.random() * 5000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-license-char={char}
            data-license-index={index}
          >
            {char}
          </span>
        ))}
        
        {/* Obfuscated rights */}
        {obfuscatedData.rights.map((char, index) => (
          <span 
            key={`rights-${index}`}
            style={{ 
              position: 'absolute',
              left: `${Math.random() * 6000}px`,
              top: `${Math.random() * 6000}px`,
              opacity: 0.001,
              fontSize: '1px',
              color: 'transparent',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
            data-rights-char={char}
            data-rights-index={index}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Third hidden layer with different scrambling pattern */}
      <div 
        style={{ 
          position: 'absolute', 
          right: '-99999px', 
          bottom: '-99999px',
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: '1px',
          color: 'transparent',
          zIndex: -99997,
          visibility: 'hidden',
          display: 'none'
        }}
        aria-hidden="true"
        data-copyright="scrambled-license"
        data-year={currentYear}
        data-url="https://mohamed-sarhan.vercel.app/"
        data-license="MIT"
        data-author="Mohamed Sarhan"
      >
        {/* Scrambled copyright symbol and text */}
        <span style={{ position: 'absolute', left: '-99999px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>©</span>
        <span style={{ position: 'absolute', left: '-99998px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>{currentYear}</span>
        <span style={{ position: 'absolute', left: '-99997px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>Mohamed</span>
        <span style={{ position: 'absolute', left: '-99996px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>Sarhan</span>
        <span style={{ position: 'absolute', left: '-99995px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>MIT</span>
        <span style={{ position: 'absolute', left: '-99994px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>License</span>
        <span style={{ position: 'absolute', left: '-99993px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>All</span>
        <span style={{ position: 'absolute', left: '-99992px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>Rights</span>
        <span style={{ position: 'absolute', left: '-99991px', opacity: 0.001, fontSize: '1px', color: 'transparent' }}>Reserved</span>
      </div>

      {/* Fourth hidden layer with CSS obfuscation */}
      <div 
        style={{ 
          position: 'fixed', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: '1px',
          color: 'transparent',
          zIndex: -99996,
          visibility: 'hidden',
          display: 'none'
        }}
        aria-hidden="true"
        data-copyright="css-obfuscated"
        data-year={currentYear}
        data-url="https://mohamed-sarhan.vercel.app/"
        data-license="MIT"
        data-author="Mohamed Sarhan"
      >
        {/* CSS obfuscated content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .obfuscated-copyright-${currentYear}::before {
              content: "© ${currentYear} Mohamed Sarhan - MIT License";
              position: fixed;
              top: -99999px;
              left: -99999px;
              opacity: 0.001;
              pointer-events: none;
              user-select: none;
              z-index: -99999;
              font-size: 1px;
              color: transparent;
              visibility: hidden;
              display: none;
            }
          `
        }} />
        <div className={`obfuscated-copyright-${currentYear}`} />
      </div>
    </>
  )
}

export default ObfuscatedCopyright


