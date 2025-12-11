/**
 * ReCalibri - Chrome Extension
 * Popup settings interface with accessibility features
 * 
 * Author: Luke Steuber (dr.eamer.dev)
 * Year: 2025
 * License: MIT
 */

// Font size levels
const fontSizes = ['normal', 'large', 'xlarge'];
let currentFontSizeIndex = 0;

// Load saved settings when popup opens
document.addEventListener('DOMContentLoaded', function() {
  // Load all settings
  chrome.storage.sync.get(['scope', 'font', 'theme', 'fontSize'], function(result) {
    // Set scope (default: gov)
    const scope = result.scope || 'gov';
    const scopeRadio = document.getElementById(scope === 'gov' ? 'govOnly' : 'global');
    if (scopeRadio) {
      scopeRadio.checked = true;
      updateSelectedState('scope', scope === 'gov' ? 'option-gov' : 'option-global');
    }
    
    // Set font (default: calibri)
    const font = result.font || 'calibri';
    const fontId = 'font' + font.charAt(0).toUpperCase() + font.slice(1);
    const fontRadio = document.getElementById(fontId);
    if (fontRadio) {
      fontRadio.checked = true;
      updateSelectedState('font', 'option-' + font);
      applyFontPreview(font);
    }
    
    // Set theme (default: light)
    const theme = result.theme || 'light';
    applyTheme(theme);
    
    // Set font size (default: normal)
    const fontSize = result.fontSize || 'normal';
    currentFontSizeIndex = fontSizes.indexOf(fontSize);
    if (currentFontSizeIndex === -1) currentFontSizeIndex = 0;
    applyFontSize(fontSize);
  });
  
  // Scope radio buttons
  const scopeRadios = document.querySelectorAll('input[name="scope"]');
  scopeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      updateSelectedState('scope', this.parentElement.id);
      saveSettings();
    });
  });
  
  // Font radio buttons
  const fontRadios = document.querySelectorAll('input[name="font"]');
  fontRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      updateSelectedState('font', this.parentElement.id);
      applyFontPreview(this.value);
      saveSettings();
    });
  });

  // Make entire label clickable for both scope and font options
  const allOptions = document.querySelectorAll('.radio-option');
  allOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      // If the click wasn't on the input itself, trigger the input
      if (e.target.tagName !== 'INPUT') {
        const input = this.querySelector('input[type="radio"]');
        if (input && !input.checked) {
          input.checked = true;
          // Manually trigger change event since setting checked property doesn't fire it
          const event = new Event('change');
          input.dispatchEvent(event);
        }
      }
    });
  });
  
  // Theme toggle button
  document.getElementById('themeToggle').addEventListener('click', function() {
    chrome.storage.sync.get(['theme'], function(result) {
      const currentTheme = result.theme || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      chrome.storage.sync.set({ theme: newTheme }, function() {
        applyTheme(newTheme);
      });
    });
  });
  
  // Font size button
  document.getElementById('fontSizeBtn').addEventListener('click', function() {
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    const newSize = fontSizes[currentFontSizeIndex];
    chrome.storage.sync.set({ fontSize: newSize }, function() {
      applyFontSize(newSize);
    });
  });
});

function updateSelectedState(groupName, selectedId) {
  // Remove selected class from all options in the group
  const options = document.querySelectorAll(`input[name="${groupName}"]`);
  options.forEach(option => {
    option.parentElement.classList.remove('selected');
  });
  
  // Add selected class to the chosen option
  document.getElementById(selectedId).classList.add('selected');
}

function applyFontPreview(fontName) {
  // Update the font of the entire popup to match selection
  // This gives immediate feedback on what the font looks like
  const fontMap = {
    'calibri': 'Calibri, sans-serif',
    'opensans': '"Open Sans", sans-serif',
    'opendyslexic': '"Comic Sans MS", sans-serif' // Fallback for preview if font not installed
  };
  
  document.body.style.fontFamily = fontMap[fontName] || 'sans-serif';
}

function saveSettings() {
  const scopeElement = document.querySelector('input[name="scope"]:checked');
  const fontElement = document.querySelector('input[name="font"]:checked');
  
  if (!scopeElement || !fontElement) return;
  
  const scope = scopeElement.value;
  const font = fontElement.value;
  
  chrome.storage.sync.set({ scope: scope, font: font }, function() {
    // Show status message
    const status = document.getElementById('status');
    status.classList.add('show');
    
    // Hide status after 2 seconds
    setTimeout(() => {
      status.classList.remove('show');
    }, 2000);
    
    // Reload all tabs to apply new settings
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(tab => {
        if (tab.url && !tab.url.startsWith('chrome://') && !tab.url.startsWith('chrome-extension://')) {
          chrome.tabs.reload(tab.id);
        }
      });
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.textContent = theme === 'light' ? '🌙' : '☀️';
  themeBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  themeBtn.title = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
}

function applyFontSize(size) {
  const body = document.body;
  body.classList.remove('font-normal', 'font-large', 'font-xlarge');
  body.classList.add('font-' + size);
  
  // Update button text and label
  const btn = document.getElementById('fontSizeBtn');
  const labels = {
    normal: 'A+',
    large: 'A++',
    xlarge: 'A'
  };
  const ariaLabels = {
    normal: 'Increase font size',
    large: 'Increase font size to maximum',
    xlarge: 'Reset font size to normal'
  };
  
  btn.textContent = labels[size];
  btn.setAttribute('aria-label', ariaLabels[size]);
  btn.title = ariaLabels[size];
}
