# ReCalibri

**Restoring accessibility, one font at a time.**

A Chrome extension that replaces Times New Roman with accessible fonts, restoring readability for people with visual disabilities, dyslexia, and reading difficulties.

**Created by:** Luke Steuber ([dr.eamer.dev](https://dr.eamer.dev))  
**License:** MIT  
**Year:** 2025

---

## Why ReCalibri Exists

In December 2025, the U.S. State Department reversed a 2023 accessibility directive that switched from Times New Roman to Calibri. The original change was made at the recommendation of the Secretary's Office of Diversity and Inclusion to **mitigate accessibility issues for individuals with disabilities**.

**The Problem with Times New Roman:**
- Serif fonts have decorative features (tails, wings, angular elements) that create accessibility barriers
- Harder to read for people with visual disabilities
- More difficult for people with dyslexia
- Less compatible with screen readers and assistive technologies

**ReCalibri's Mission:**
Restore accessible typography on government websites and beyond, ensuring everyone can read web content regardless of their abilities.

---

## Features

### Multiple Accessible Font Options
- **Calibri** - Clean, modern sans-serif recommended by accessibility experts
- **Open Sans** - Highly legible, optimized for screen reading
- **OpenDyslexic** - Specially designed for people with dyslexia

### Flexible Scope
- **.gov sites only** - Target government websites (default)
- **All websites** - Apply globally across the web

### Accessibility-First Design
- **Light/Dark Mode** - Toggle for comfortable viewing
- **Adjustable Font Sizes** - Increase popup text size for better readability
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Compatible** - Proper ARIA labels and semantic HTML

### Automatic & Real-Time
- Works on both static and dynamically loaded content
- Real-time monitoring ensures new content is transformed
- No page reload required

---

## Installation

### Method 1: Load Unpacked Extension (Developer Mode)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the `times-to-calibri-extension` folder
5. The extension icon will appear in your toolbar

### Method 2: Chrome Web Store (Coming Soon)

Once published, you'll be able to install directly from the Chrome Web Store.

---

## Usage

1. **Click the ReCalibri icon** in your Chrome toolbar
2. **Choose your scope:**
   - `.gov sites only` - Changes fonts only on government websites
   - `All websites` - Changes fonts everywhere
3. **Select your preferred font:**
   - Calibri (default)
   - Open Sans
   - OpenDyslexic
4. **Customize accessibility:**
   - Toggle light/dark mode (moon/sun icon)
   - Adjust font size (A+ button)
5. **Browse normally** - fonts are automatically replaced

---

## Technical Details

- **Manifest Version:** 3 (latest Chrome extension standard)
- **Permissions:** 
  - Storage (save user preferences)
  - Active Tab (detect .gov domains)
  - Host Permissions (inject content scripts)
- **Popup Interface:** Accessible, responsive design with light/dark mode
- **Content Scripts:** Efficient font detection and replacement

---

## Privacy & Security

This extension:
- ✅ Does NOT collect any data
- ✅ Does NOT track your browsing
- ✅ Does NOT communicate with external servers (except CDN for OpenDyslexic font)
- ✅ Only stores your preferences locally
- ✅ Open source and auditable

---

## Accessibility Features

### For Users
- Multiple font options for different accessibility needs
- Light and dark mode for visual comfort
- Adjustable font sizes in popup
- Keyboard navigation support
- Screen reader compatible

### For Developers
- Semantic HTML with proper ARIA labels
- High contrast ratios (WCAG AA compliant)
- Focus indicators for keyboard navigation
- Responsive design
- No color-only information

---

## Who Benefits from ReCalibri?

- **People with visual disabilities** - Sans-serif fonts are easier to read
- **People with dyslexia** - OpenDyslexic option improves readability
- **Government employees** - Restore accessibility on .gov websites
- **Accessibility advocates** - Support inclusive web design
- **Anyone who values readability** - Better typography for everyone

---

## The Science Behind Accessible Fonts

**Why sans-serif fonts are more accessible:**

1. **Clearer letter shapes** - No decorative elements to confuse similar characters
2. **Better screen rendering** - Optimized for digital displays
3. **Improved readability** - Especially for people with visual impairments
4. **Dyslexia-friendly** - Reduced visual clutter and confusion
5. **Screen reader compatible** - Better text-to-speech rendering

**Research shows:**
- Sans-serif fonts improve reading speed for people with dyslexia
- People with low vision find sans-serif fonts easier to read on screens
- Accessibility standards (WCAG, Section 508) recommend sans-serif fonts

---

## Troubleshooting

**Fonts not changing?**
- Ensure the extension is enabled in `chrome://extensions/`
- Check that you've selected the correct scope (.gov or global)
- Try refreshing the page after changing settings
- Some websites may use custom fonts that override the extension

**Extension not working on certain pages?**
- Chrome extensions cannot run on `chrome://` pages
- Chrome Web Store pages are restricted
- Some sites may have Content Security Policies that block modifications

**OpenDyslexic font not loading?**
- The font is loaded from a CDN (jsdelivr.net)
- Check your internet connection
- Some corporate networks may block CDN access

---

## Development

### Project Structure
```
times-to-calibri-extension/
├── manifest.json           # Extension configuration
├── content.js             # Font replacement logic
├── styles.css             # CSS overrides
├── popup/
│   ├── popup.html        # Popup interface
│   └── popup.js          # Popup functionality
├── icons/                # Extension icons
├── LICENSE               # MIT License
└── README.md            # This file
```

### Building from Source

1. Clone or download this repository
2. Make your changes
3. Test locally using `chrome://extensions/` in developer mode
4. Increment version in `manifest.json`
5. Create a ZIP file for distribution

---

## Contributing

Contributions are welcome! This is an accessibility project that benefits everyone.

**Ideas for contributions:**
- Additional accessible font options
- Improved font detection algorithms
- Better accessibility features
- Translations for international users
- Bug fixes and performance improvements

---

## License

MIT License - Copyright (c) 2025 Luke Steuber (dr.eamer.dev)

See [LICENSE](LICENSE) file for full details.

---

## Credits

**Author:** Luke Steuber  
**Website:** [dr.eamer.dev](https://dr.eamer.dev)  
**Year:** 2025

**Fonts Used:**
- Calibri - Microsoft
- Open Sans - Google Fonts
- OpenDyslexic - Abelardo Gonzalez (open source)

---

## Support

If you encounter issues or have suggestions:
- Open an issue on GitHub (if available)
- Contact via [dr.eamer.dev](https://dr.eamer.dev)
- Leave a review on the Chrome Web Store

---

**Accessibility isn't political—it's essential.**

Free to use, modify, and distribute under the MIT License.
