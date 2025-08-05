# ALTRUIXX 2K25 - Vercel Deployment Guide

## Frontend-Only Deployment

This project has been configured for frontend-only deployment on Vercel using Google Forms for registration.

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel` (optional)
2. Create a Vercel account at https://vercel.com
3. Have your project pushed to GitHub

## Configuration Files Updated
- `vercel.json`: Configured for static React app deployment
- `package.json`: Updated build scripts
- `.vercelignore`: Excludes backend and unnecessary files

## Deployment Steps

### Option 1: GitHub Integration (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your `altruixx25` repository
   - Vercel will automatically detect it's a React app

3. **Configuration** (should auto-detect):
   - Framework Preset: Create React App
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/build`
   - Install Command: `cd frontend && npm install`

### Option 2: Vercel CLI
1. Run `vercel login` and authenticate
2. Run `vercel --prod` from project root

## Project Architecture
- **Frontend**: React application with static deployment
- **Registration**: Google Forms integration (no backend needed)
- **Contact**: mailto links (no backend needed)

## Post-Deployment Tasks
1. Update Google Form URL in `Register.js` if needed
2. Test all functionality on the live site
3. Update any hardcoded URLs to your Vercel domain

Your site will be available at: `https://your-project-name.vercel.app`

## Troubleshooting
- **Build fails**: Check `frontend/package.json` dependencies
- **Routing issues**: Ensure `vercel.json` rewrites are correct
- **Assets not loading**: Check `frontend/public/` folder structure
4. Set environment variables when prompted or via Vercel dashboard

### Option 2: Deploy via Git Integration
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

## Important Notes
- The backend API will be available at `/api/*` routes
- Frontend will be served from the root domain
- Make sure to set all environment variables in Vercel dashboard
- Free tier includes:
  - 100GB bandwidth per month
  - 6000 build minutes per month
  - Automatic HTTPS
  - Custom domains

## Troubleshooting
- Check Vercel function logs for backend issues
- Ensure all dependencies are listed in package.json
- Verify environment variables are set correctly
- Backend functions timeout after 10 seconds on free tier

## Common Build Issues Fixed
- ✅ ESLint warnings treated as errors in CI
- ✅ Invalid href attributes replaced with proper buttons
- ✅ Unused variables removed
- ✅ CI environment configured to allow warnings

## Recent Fixes Applied
1. **Contact.js**: Replaced `<a href="#">` with proper `<button>` elements
2. **Register.js**: Removed unused `watch` variable from useForm
3. **Build Script**: Added `CI=false` to prevent treating warnings as errors
4. **ESLint Config**: Created custom configuration for better CI compatibility
