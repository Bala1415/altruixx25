# Google Form Setup Instructions

## Setting up your Registration Form

### 1. Create a Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Click on "+ Blank" to create a new form
3. Title your form "ALTRUIXX 2K25 Registration"

### 2. Add Required Fields
Add the following fields to your Google Form:

**Personal Information:**
- Full Name (Short answer, Required)
- Email Address (Short answer, Required)
- Phone Number (Short answer, Required)
- College/Institution (Short answer, Required)

**Event Selection:**
- Select Events (Multiple choice, Required)
  - Add options: TECHNOVERSE, 404 - PROMPT NOT FOUND, THE CIPHER TEXT, JADE JOURNEY, PAPER PRESENTATION
  - Set "Allow multiple selections" and limit to 2 maximum

**Team Information:**
- Team Members (Long answer, Optional)
- Team Name (Short answer, Optional)

**Additional Information:**
- Experience Level (Multiple choice: Beginner, Intermediate, Advanced)
- Expectations from the event (Long answer, Optional)
- Dietary Restrictions (Short answer, Optional)

**Agreement:**
- Terms and Conditions Agreement (Multiple choice: "I agree to the terms and conditions", Required)
- Email Updates (Multiple choice: "Yes, I want to receive updates via email", Optional)

### 3. Get the Form URL
1. Click on "Send" button (top right)
2. Click on the link icon (🔗)
3. Check "Shorten URL" 
4. Copy the generated URL

### 4. Update the Frontend Code
1. Open `frontend/src/pages/Register.js`
2. Find the line: `const GOOGLE_FORM_URL = "https://forms.gle/your-google-form-id";`
3. Replace `"https://forms.gle/your-google-form-id"` with your copied Google Form URL

### 5. Configure Form Settings
1. In your Google Form, click on "Settings" (gear icon)
2. Under "General":
   - Check "Limit to 1 response per person" (recommended)
   - Check "Collect email addresses"
3. Under "Presentation":
   - Add a custom confirmation message: "Thank you for registering for ALTRUIXX 2K25! We'll contact you soon with further details."

### 6. Set up Response Collection
1. Click on "Responses" tab in your form
2. Click on the green spreadsheet icon to create a linked spreadsheet
3. This will automatically collect all responses in a Google Sheet

### 7. Optional: Email Notifications
1. In the linked Google Sheet, go to "Extensions" > "Apps Script"
2. You can set up email notifications for new submissions

## Example Google Form URL Format
Your URL should look like: `https://forms.gle/AbCdEfGhIjKlMnOp`

## Testing
1. After updating the URL in Register.js, test the registration flow
2. Make sure the "Register Now" button opens your Google Form
3. Submit a test registration to verify everything works

## Benefits of Using Google Forms
- ✅ No backend maintenance required
- ✅ Automatic data collection in Google Sheets
- ✅ Built-in form validation
- ✅ Email notifications available
- ✅ Responsive design works on all devices
- ✅ Free and reliable hosting by Google
- ✅ Easy to modify form fields as needed
- ✅ Built-in spam protection

## Contact
If you need help setting up the form, contact the development team at altruixx@srmvec.edu
