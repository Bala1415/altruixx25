# TechSymposium 2025 - College Symposium Website

A comprehensive web application for managing college symposium events with registration system.

## Features

### Frontend (React)
- **Modern Design**: Responsive UI with gradient backgrounds and smooth animations
- **Event Showcase**: Display of 5 different events with detailed descriptions
- **Registration System**: Comprehensive registration forms for each event
- **Navigation**: Easy navigation between different sections
- **Contact Form**: Contact form for inquiries and support

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Well-structured API endpoints
- **Data Storage**: MongoDB for storing registrations and contact messages
- **Validation**: Input validation and error handling
- **Statistics**: Admin endpoints for registration statistics

## Events Included

1. **Tech Innovation Challenge** - Competition for innovative tech solutions
2. **AI & Machine Learning Workshop** - Hands-on workshop with industry experts
3. **Cybersecurity Summit** - Interactive cybersecurity sessions
4. **Web Development Bootcamp** - Intensive web development training
5. **Startup Pitch Competition** - Platform for entrepreneurial ideas

## Project Structure

```
college-symposium/
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── App.js           # Main app component
│   │   └── App.css          # Styles
│   └── package.json
├── backend/                  # Node.js server
│   ├── server.js            # Main server file
│   ├── .env                 # Environment variables
│   └── package.json
└── package.json             # Root package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone and setup the project:**
   ```bash
   cd d:\Symosium
   npm run install-all
   ```

2. **Configure MongoDB:**
   - For local MongoDB: Ensure MongoDB is running on localhost:27017
   - For MongoDB Atlas: Update MONGODB_URI in backend/.env

3. **Update environment variables:**
   ```bash
   # Edit backend/.env file
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the application:**
   ```bash
   npm run dev
   ```

   This will start both frontend (port 3000) and backend (port 5000) concurrently.

### Individual Commands

- **Frontend only:** `npm run client`
- **Backend only:** `npm run server`
- **Build for production:** `npm run build`

## API Endpoints

### Registration
- `POST /api/registrations` - Submit new registration
- `GET /api/registrations` - Get all registrations (admin)
- `GET /api/registrations/event/:eventId` - Get registrations by event

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Statistics
- `GET /api/stats` - Get registration statistics
- `GET /api/health` - Health check

## Features in Detail

### Registration Form Fields
- Personal Information (Name, Email, Phone, Gender)
- Academic Information (Institution, Course, Year, Roll Number)
- Event-specific fields (Team members for competitions)
- Experience and expectations
- Terms and conditions agreement

### Responsive Design
- Mobile-friendly interface
- Smooth animations using Framer Motion
- Modern gradient backgrounds
- Card-based layouts

### Data Validation
- Frontend validation using React Hook Form
- Backend validation with Mongoose schemas
- Duplicate registration prevention
- Email format validation

## Technologies Used

### Frontend
- React 18
- React Router DOM
- React Hook Form
- Framer Motion (animations)
- React Toastify (notifications)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the build folder to your hosting service
3. Update API endpoints in production

### Backend (Heroku/Railway)
1. Set environment variables in your hosting service
2. Update MONGODB_URI to use MongoDB Atlas
3. Deploy the backend folder

## Future Enhancements

- [ ] Admin dashboard for managing registrations
- [ ] Email notifications for successful registrations
- [ ] Payment integration for paid events
- [ ] QR code generation for event tickets
- [ ] Real-time event updates
- [ ] Social media integration
- [ ] Event feedback system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For any issues or questions:
- Email: symposium@college.edu
- Phone: +91-9876543210

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**TechSymposium 2025** - Empowering the next generation of technologists!
