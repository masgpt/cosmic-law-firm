/**
 * Accessibility Configuration Constants
 */
export const A11Y_CONFIG = {
  // Focus management
  FOCUSABLE_ELEMENTS: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  
  // ARIA Live Regions
  LIVE_REGIONS: {
    POLITE: 'polite',
    ASSERTIVE: 'assertive',
  },
  
  // Routes
  MAIN_CONTENT_ID: 'main-content',
  
  // Announcements
  ROUTE_CHANGE_ANNOUNCEMENT: 'Navigated to ',
  
  // Targets
  MIN_TOUCH_TARGET_SIZE: 44, // px
};

export default A11Y_CONFIG;
