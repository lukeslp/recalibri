/**
 * ReCalibri - Chrome Extension
 * Changes Times New Roman to accessible fonts
 * 
 * Author: Luke Steuber (dr.eamer.dev)
 * Year: 2025
 * License: MIT
 */

// Font mappings
const fontMap = {
  calibri: 'Calibri, sans-serif',
  opensans: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  opendyslexic: 'OpenDyslexic, "Comic Sans MS", sans-serif'
};

// Check if font replacement should be applied based on settings
chrome.storage.sync.get(['scope', 'font'], function(result) {
  const scope = result.scope || 'gov'; // Default to .gov only
  const font = result.font || 'calibri'; // Default to Calibri
  const currentHostname = window.location.hostname;
  
  let shouldApply = false;
  
  if (scope === 'global') {
    // Apply to all sites
    shouldApply = true;
  } else if (scope === 'gov') {
    // Only apply to .gov sites
    shouldApply = currentHostname.endsWith('.gov');
  }
  
  if (shouldApply) {
    const replacementFont = fontMap[font] || fontMap.calibri;
    
    // Add a class to the html element to trigger CSS
    document.documentElement.classList.add('recalibri-active');
    document.documentElement.setAttribute('data-recalibri-font', font);
    
    // Inject OpenDyslexic font if needed
    if (font === 'opendyslexic') {
      injectOpenDyslexicFont();
    }
    
    // Also use JavaScript to force font changes for dynamically loaded content
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            applyFontOverride(node, replacementFont);
          }
        });
      });
    });
    
    // Start observing
    observer.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
    });
    
    // Apply to existing elements
    applyFontOverride(document.documentElement, replacementFont);
  }
});

// Function to inject OpenDyslexic font
function injectOpenDyslexicFont() {
  if (document.getElementById('recalibri-opendyslexic-font')) {
    return; // Already injected
  }
  
  const style = document.createElement('style');
  style.id = 'recalibri-opendyslexic-font';
  style.textContent = `
    @font-face {
      font-family: 'OpenDyslexic';
      src: url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Regular.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'OpenDyslexic';
      src: url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Bold.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'OpenDyslexic';
      src: url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Italic.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/npm/opendyslexic@3.0.0/fonts/OpenDyslexic-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

// Function to apply font override to an element and its children
function applyFontOverride(element, replacementFont) {
  const allElements = [element, ...element.querySelectorAll('*')];
  
  allElements.forEach(el => {
    try {
      const computedStyle = window.getComputedStyle(el);
      const fontFamily = computedStyle.fontFamily.toLowerCase();
      
      // Check if Times New Roman is being used
      if (fontFamily.includes('times new roman') || 
          fontFamily.includes('times') || 
          fontFamily.includes('serif')) {
        // Override with selected accessible font
        el.style.setProperty('font-family', replacementFont, 'important');
      }
    } catch (e) {
      // Ignore errors for elements that can't be styled
    }
  });
}
