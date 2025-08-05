# ALTRUIXX 2K25 - Frontend Only Setup

This project has been simplified to use Google Forms for registration instead of a backend server.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Configure Google Form
1. Follow the instructions in `GOOGLE_FORM_SETUP.md` to create your Google Form
2. Update the Google Form URL in `src/pages/Register.js`

### 3. Run the Application
```bash
npm start
```

The application will run on `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProfileCard.js
│   │   ├── SpotlightCard.js
│   │   └── countdown.js
│   ├── pages/
│   │   ├── Home.js          # Main landing page
│   │   ├── Events.js        # Events showcase
│   │   ├── Register.js      # Registration (Google Form redirect)
│   │   ├── Contact.js       # Contact page (mailto links)
│   │   └── About.js         # About page
│   └── App.js
└── package.json
```

## 🎯 Features

- **Modern React App** with Framer Motion animations
- **Responsive Design** works on all devices
- **Google Form Integration** for easy registration management
- **Contact Forms** using mailto links
- **Staff & Student Coordinators** display
- **Event Showcase** with detailed descriptions
- **Countdown Timer** for event dates
- **Social Media Integration**

## 📝 Customization

### Update Google Form URL
Edit `src/pages/Register.js`:
```javascript
const GOOGLE_FORM_URL = "https://forms.gle/your-actual-form-id";
```

### Update Contact Information
Edit coordinator details in `src/pages/Home.js` in the contact section.

### Update Event Information
Modify event details in `src/pages/Home.js` and `src/pages/Events.js`.

## 🛠 Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your Git repository

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 📧 Contact & Support

- **Email**: altruixx@srmvec.edu
- **Instagram**: [@altruixx_2k25](https://www.instagram.com/altruixx_2k25?igsh=MXdicnUyanQxb2c0eA==)

## 🎉 Benefits of This Setup

- ✅ **No Backend Required** - Simplified architecture
- ✅ **Google Forms** - Reliable form handling with automatic spreadsheet integration
- ✅ **Easy Deployment** - Static files can be deployed anywhere
- ✅ **Cost Effective** - No server hosting costs
- ✅ **Maintenance Free** - Google handles form storage and reliability
- ✅ **Mobile Friendly** - Responsive design works on all devices
- ✅ **Fast Loading** - Optimized React build with animations
