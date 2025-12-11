# Chrome Web Store Submission Guide for ReCalibri

This guide walks you through the complete process of submitting ReCalibri to the Chrome Web Store.

## Prerequisites

### 1. Google Account
You need a Google account to create a Chrome Web Store developer account.

### 2. Developer Registration Fee
- **One-time fee**: $5 USD
- This allows you to publish up to 20 extensions
- Payment is required before you can publish any extensions
- Accepted payment methods: Credit card, debit card

### 3. Required Materials Checklist

Before starting, make sure you have:

- ✅ Extension ZIP file (already created: `times-to-calibri-extension.zip`)
- ✅ Extension icons (already included in the ZIP)
- ⬜ At least 1 screenshot (1280x800 or 640x400 pixels) - **REQUIRED**
- ⬜ Small promotional image (440x280 pixels) - **REQUIRED**
- ⬜ Marquee promotional image (1400x560 pixels) - Optional but recommended
- ⬜ Privacy policy (if collecting user data) - Not needed for ReCalibri
- ⬜ Detailed description of the extension

---

## Step-by-Step Submission Process

### Step 1: Register as a Chrome Web Store Developer

1. Go to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your Google account
3. Accept the Chrome Web Store Developer Agreement
4. Pay the **$5 USD one-time registration fee**
5. Provide a developer email address (this will be publicly visible)

**Note**: You can only create one developer account per email address.

---

### Step 2: Prepare Your Store Listing Assets

You'll need to create the following images before uploading:

#### A. Screenshots (REQUIRED - minimum 1, maximum 5)
- **Dimensions**: 1280x800 pixels OR 640x400 pixels
- **Format**: PNG or JPEG
- **Requirements**:
  - Square corners, no padding (full bleed)
  - Show actual user experience and core features
  - Demonstrate the extension in action

**Recommendation**: Create 3-5 screenshots showing:
1. The extension popup interface
2. Before/after comparison of Times New Roman vs Calibri
3. The extension working on a .gov website
4. The settings/options screen
5. Dynamic content demonstration

#### B. Small Promotional Image (REQUIRED)
- **Dimensions**: 440x280 pixels
- **Format**: PNG or JPEG
- **Requirements**:
  - Avoid excessive text
  - Use saturated colors
  - Should work on light gray background
  - Fill the entire region
  - Communicate the brand, not just a screenshot

#### C. Marquee Promotional Image (OPTIONAL but recommended)
- **Dimensions**: 1400x560 pixels
- **Format**: PNG or JPEG
- **Purpose**: Allows your extension to be featured prominently
- **Same requirements as small promotional image**

---

### Step 3: Upload Your Extension

1. Go to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in to your developer account
3. Click the **"Add new item"** button
4. Click **"Choose file"** and select your ZIP file: `times-to-calibri-extension.zip`
5. Click **"Upload"**
6. If the manifest and ZIP are valid, you'll proceed to the item details page

**Important**: Maximum ZIP file size is 2GB (ReCalibri is only ~8KB, so no issues)

---

### Step 4: Complete the Store Listing Tab

Fill out the following information:

#### Product Details
- **Name**: ReCalibri (already in manifest)
- **Summary**: Short description (132 characters max)
  - Example: "Automatically changes Times New Roman to Calibri on .gov sites or globally. Improve readability instantly!"

- **Description**: Detailed description (up to 16,000 characters)
  - Use the content from your README.md
  - Highlight key features
  - Explain the two modes (.gov only vs global)
  - Mention that it's lightweight and privacy-focused

#### Category
- **Primary category**: Accessibility or Productivity
- **Secondary category** (optional): Fun

#### Language
- **Default language**: English

#### Store Icon
- Already included in your manifest (128x128 pixels)

#### Screenshots
- Upload at least 1 screenshot (you'll create these in the next phase)
- Upload up to 5 screenshots total

#### Promotional Images
- Upload the small promotional image (440x280 pixels)
- Optionally upload the marquee image (1400x560 pixels)

#### Additional Fields (Optional)
- **Official URL**: https://dr.eamer.dev (if you have a website)
- **Homepage URL**: Link to GitHub repo or project page (if available)
- **Support URL**: Email or support page

---

### Step 5: Complete the Privacy Tab

This is where you declare how your extension handles user data.

#### Single Purpose
- **Single purpose description**: "Changes Times New Roman font to Calibri for improved readability"

#### Permissions Justification
Explain why you need each permission:
- **Storage**: "To save user preferences (gov-only or global mode)"
- **Active Tab**: "To detect current tab URL for .gov domain checking"

#### Data Usage
- **Does this item collect user data?**: NO
- ReCalibri does NOT collect, transmit, or sell user data
- It only stores local preferences in Chrome's sync storage

#### Certification
- Certify that your extension complies with the Chrome Web Store policies

---

### Step 6: Complete the Distribution Tab

#### Visibility
- **Public**: Anyone can find and install your extension
- **Unlisted**: Only people with the link can install
- **Private**: Only specific users/groups can install

**Recommendation**: Choose **Public** for maximum reach

#### Pricing
- **Is this a paid item?**: No (ReCalibri is free)

#### Countries
- **Select countries**: All countries (or select specific ones)

---

### Step 7: Test Instructions Tab (Optional)

Only needed if your extension requires:
- Login credentials
- Special setup
- Specific testing scenarios

**For ReCalibri**: You can provide optional test instructions:
```
Test Instructions:
1. Install the extension
2. Click the extension icon to open settings
3. Test ".gov sites only" mode by visiting usa.gov or whitehouse.gov
4. Test "All websites" mode by visiting any site with Times New Roman font
5. Verify fonts change from Times New Roman to Calibri
```

---

### Step 8: Submit for Review

1. Review all your information carefully
2. Click **"Submit for Review"**
3. Choose publishing option:
   - **Publish immediately after review** (recommended)
   - **Defer publishing** (manual publish after approval)

#### Review Process
- **Timeline**: Typically 1-7 days (can vary based on complexity)
- **Email notifications**: You'll receive emails about:
  - Review status
  - Approval or rejection
  - Publishing confirmation

#### What Reviewers Check
- Compliance with Chrome Web Store policies
- Manifest validity
- Privacy practices
- Permissions usage
- Content quality
- No malware or deceptive practices

---

## After Submission

### If Approved ✅
- Your extension will be published to the Chrome Web Store
- You'll receive a confirmation email
- Users can find and install ReCalibri
- You'll get a public Chrome Web Store URL

### If Rejected ❌
- You'll receive an email with rejection reasons
- Fix the issues mentioned
- Re-upload the corrected ZIP file
- Submit for review again (no additional fee)

---

## Post-Publishing Tasks

### 1. Promote Your Extension
- Share the Chrome Web Store link
- Add the link to your website (dr.eamer.dev)
- Share on social media
- Write a blog post about it

### 2. Monitor Reviews and Ratings
- Respond to user reviews
- Address bug reports
- Collect feedback for improvements

### 3. Update Your Extension
- Fix bugs or add features
- Increment version number in manifest.json
- Upload new ZIP file
- Submit update for review

---

## Important Policies to Follow

### Chrome Web Store Developer Program Policies
Your extension must:
- Have a single, clear purpose (✅ ReCalibri does)
- Not collect unnecessary data (✅ ReCalibri doesn't)
- Use minimal permissions (✅ ReCalibri does)
- Not include malware or deceptive content (✅ Clean code)
- Respect user privacy (✅ No tracking)
- Not infringe on trademarks (✅ Original name)

### Manifest V3 Compliance
- ✅ ReCalibri already uses Manifest V3
- This is the current standard required by Chrome

---

## Troubleshooting Common Issues

### Issue: ZIP file rejected
**Solution**: Ensure manifest.json is valid and all referenced files exist

### Issue: Images rejected
**Solution**: Check dimensions, file format, and content guidelines

### Issue: Privacy concerns
**Solution**: Clearly explain data usage (or lack thereof) in the Privacy tab

### Issue: Permissions questioned
**Solution**: Justify each permission with a clear explanation

---

## Quick Reference Links

- **Chrome Developer Dashboard**: https://chrome.google.com/webstore/devconsole
- **Developer Program Policies**: https://developer.chrome.com/docs/webstore/program-policies
- **Publishing Documentation**: https://developer.chrome.com/docs/webstore/publish
- **Image Guidelines**: https://developer.chrome.com/docs/webstore/images
- **Best Practices**: https://developer.chrome.com/docs/webstore/best_practices

---

## Estimated Timeline

| Task | Time Required |
|------|---------------|
| Developer registration | 5-10 minutes |
| Creating store assets (images) | 1-2 hours |
| Filling out store listing | 20-30 minutes |
| Review process | 1-7 days |
| **Total** | **~2-3 hours + review time** |

---

## Cost Summary

| Item | Cost |
|------|------|
| Developer registration (one-time) | $5 USD |
| Extension publishing | Free |
| Updates and maintenance | Free |
| **Total** | **$5 USD** |

---

## Next Steps

1. ✅ Register as a Chrome Web Store developer ($5 fee)
2. ⬜ Create required screenshots and promotional images
3. ⬜ Fill out store listing information
4. ⬜ Submit for review
5. ⬜ Wait for approval (1-7 days)
6. ⬜ Celebrate when ReCalibri goes live! 🎉

---

**Good luck with your submission!**

If you have questions during the process, refer to the [Chrome Web Store documentation](https://developer.chrome.com/docs/webstore) or contact Chrome Web Store support.

---

**ReCalibri** - Created by Luke Steuber (dr.eamer.dev) - 2025 - MIT License
