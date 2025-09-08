// Main Data Export File
// This file exports all data from the data directory

// Core Data - Export specific items to avoid conflicts
export { testimonialsData, getTestimonialsByService, getFeaturedTestimonials } from './testimonials'
export { careersData, getActiveJobs, getJobsByDepartment, getJobById } from './careers'
export { successPartnersData, getFeaturedPartners, getAllPartners, getPartnersByIndustry, getPartnerById } from './success-partners'
export { teamData, getFeaturedTeam, getAllTeam, getTeamByDepartment, getTeamMemberById } from './team'
export { portfolioResultsData, getFeaturedResults, getAllResults, getResultsByCategory, getResultById } from './portfolio-results'
export { contactInfoData, officeLocationsData, getContactInfo, getFeaturedOffices, getAllOffices, getOfficeById } from './contact-info'
export { socialLinksData, getSocialLinks, getFeaturedSocialLinks, getSocialLinkById } from './social-links'
export { navigationData, footerNavigationData, getMainNavigation, getFooterNavigation, getNavigationItemById, getFooterNavigationItemById } from './navigation'
export { defaultMetaData, pageMetaData, getMetaData, getPageMetaData } from './meta'

// Configuration
export * from './constants'
export * from './settings'

// Re-export existing data with specific exports
export { portfolioData, getAllPortfolioCategories, getPortfolioByCategory, getPortfolioById } from '../data/portfolio-data'
export * from '../data/portfolio'

// Content Writing Portfolio
export { contentWritingPortfolio } from './content-writing-portfolio'

// Helper Functions
export const getAllData = () => {
  return {
    testimonials: require('./testimonials'),
    careers: require('./careers'),
    successPartners: require('./success-partners'),
    team: require('./team'),
    portfolioResults: require('./portfolio-results'),
    contactInfo: require('./contact-info'),
    socialLinks: require('./social-links'),
    navigation: require('./navigation'),
    meta: require('./meta'),
    constants: require('./constants'),
    settings: require('./settings'),
    types: require('./types')
  }
}

// Data Validation
export const validateData = () => {
  const data = getAllData()
  const errors: string[] = []

  // Validate testimonials
  if (!data.testimonials.testimonialsData || data.testimonials.testimonialsData.length === 0) {
    errors.push('Testimonials data is missing or empty')
  }

  // Validate careers
  if (!data.careers.careersData || data.careers.careersData.length === 0) {
    errors.push('Careers data is missing or empty')
  }

  // Validate team
  if (!data.team.teamData || data.team.teamData.length === 0) {
    errors.push('Team data is missing or empty')
  }

  // Validate contact info
  if (!data.contactInfo.contactInfoData || data.contactInfo.contactInfoData.length === 0) {
    errors.push('Contact info data is missing or empty')
  }

  // Validate social links
  if (!data.socialLinks.socialLinksData || data.socialLinks.socialLinksData.length === 0) {
    errors.push('Social links data is missing or empty')
  }

  // Validate navigation
  if (!data.navigation.navigationData || data.navigation.navigationData.length === 0) {
    errors.push('Navigation data is missing or empty')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Data Statistics
export const getDataStats = () => {
  const data = getAllData()
  
  return {
    testimonials: data.testimonials.testimonialsData?.length || 0,
    careers: data.careers.careersData?.length || 0,
    successPartners: data.successPartners.successPartnersData?.length || 0,
    team: data.team.teamData?.length || 0,
    portfolioResults: data.portfolioResults.portfolioResultsData?.length || 0,
    contactInfo: data.contactInfo.contactInfoData?.length || 0,
    socialLinks: data.socialLinks.socialLinksData?.length || 0,
    navigation: data.navigation.navigationData?.length || 0,
    officeLocations: data.contactInfo.officeLocationsData?.length || 0
  }
}

// Data Export for API
export const getApiData = () => {
  return {
    testimonials: require('./testimonials').testimonialsData,
    careers: require('./careers').careersData,
    successPartners: require('./success-partners').successPartnersData,
    team: require('./team').teamData,
    portfolioResults: require('./portfolio-results').portfolioResultsData,
    contactInfo: require('./contact-info').contactInfoData,
    socialLinks: require('./social-links').socialLinksData,
    navigation: require('./navigation').navigationData,
    officeLocations: require('./contact-info').officeLocationsData,
    meta: require('./meta').defaultMetaData,
    settings: require('./settings').SITE_SETTINGS
  }
}

// Data Export for Static Generation
export const getStaticData = () => {
  return {
    testimonials: require('./testimonials').getFeaturedTestimonials(),
    careers: require('./careers').getActiveJobs(),
    successPartners: require('./success-partners').getFeaturedPartners(),
    team: require('./team').getFeaturedTeam(),
    portfolioResults: require('./portfolio-results').getFeaturedResults(),
    contactInfo: require('./contact-info').getContactInfo(),
    socialLinks: require('./social-links').getFeaturedSocialLinks(),
    navigation: require('./navigation').getMainNavigation(),
    officeLocations: require('./contact-info').getFeaturedOffices(),
    meta: require('./meta').defaultMetaData,
    settings: require('./settings').SITE_SETTINGS
  }
}

// Data Export for SEO
export const getSeoData = () => {
  return {
    meta: require('./meta').defaultMetaData,
    pageMeta: require('./meta').pageMetaData,
    settings: require('./settings').SITE_SETTINGS.seo
  }
}

// Data Export for Configuration
export const getConfigData = () => {
  return {
    constants: require('./constants'),
    settings: require('./settings').SITE_SETTINGS,
    types: require('./types')
  }
}

// Default Export
export default {
  getAllData,
  validateData,
  getDataStats,
  getApiData,
  getStaticData,
  getSeoData,
  getConfigData
}
