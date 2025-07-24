import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const events = {
    1: "Tech Innovation Challenge",
    2: "AI & Machine Learning Workshop", 
    3: "Cybersecurity Summit",
    4: "Web Development Bootcamp",
    5: "Startup Pitch Competition"
  };

  const eventName = events[eventId];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const registrationData = {
        ...data,
        eventId: parseInt(eventId),
        eventName: eventName,
        registrationDate: new Date().toISOString()
      };

      const response = await axios.post('/api/registrations', registrationData);
      
      if (response.status === 201) {
        toast.success('Registration successful! We will contact you soon.');
        navigate('/events');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!eventName) {
    return (
      <div className="events-section">
        <h1 className="section-title">Event Not Found</h1>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/events')} className="btn-primary">
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="events-section">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ textAlign: 'center', color: '#764ba2', marginBottom: '2rem' }}>
          Register for {eventName}
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Personal Information</h3>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                {...register('fullName', { 
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number'
                  }
                })}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                {...register('gender', { required: 'Please select your gender' })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender.message}</span>}
            </div>
          </div>

          {/* Academic Information */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Academic Information</h3>
            
            <div className="form-group">
              <label htmlFor="institution">College/Institution *</label>
              <input
                type="text"
                id="institution"
                {...register('institution', { required: 'Institution name is required' })}
                placeholder="Enter your college/institution name"
              />
              {errors.institution && <span className="error-message">{errors.institution.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="course">Course/Program *</label>
              <input
                type="text"
                id="course"
                {...register('course', { required: 'Course is required' })}
                placeholder="e.g., B.Tech Computer Science, MBA, etc."
              />
              {errors.course && <span className="error-message">{errors.course.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="year">Year of Study *</label>
              <select
                id="year"
                {...register('year', { required: 'Please select your year of study' })}
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="recent-graduate">Recent Graduate</option>
              </select>
              {errors.year && <span className="error-message">{errors.year.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number/Student ID</label>
              <input
                type="text"
                id="rollNumber"
                {...register('rollNumber')}
                placeholder="Enter your roll number or student ID"
              />
            </div>
          </div>

          {/* Event-Specific Information */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Event-Specific Information</h3>
            
            {(eventId === '1' || eventId === '5') && (
              <div className="form-group">
                <label htmlFor="teamMembers">Team Members (if applicable)</label>
                <textarea
                  id="teamMembers"
                  {...register('teamMembers')}
                  placeholder="List your team members' names and contact details (one per line)"
                  rows="4"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="experience">Relevant Experience/Skills</label>
              <textarea
                id="experience"
                {...register('experience')}
                placeholder="Briefly describe your relevant experience, skills, or projects"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="expectations">What do you hope to gain from this event?</label>
              <textarea
                id="expectations"
                {...register('expectations')}
                placeholder="Tell us about your expectations and goals for attending this event"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dietaryRestrictions">Dietary Restrictions/Special Requirements</label>
              <textarea
                id="dietaryRestrictions"
                {...register('dietaryRestrictions')}
                placeholder="Please mention any dietary restrictions or special requirements"
                rows="2"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  {...register('agreeTerms', { required: 'You must agree to the terms and conditions' })}
                />
                I agree to the terms and conditions and privacy policy *
              </label>
              {errors.agreeTerms && <span className="error-message">{errors.agreeTerms.message}</span>}
            </div>

            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  {...register('emailUpdates')}
                />
                I would like to receive updates about future events
              </label>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
              style={{ 
                width: '200px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Register Now'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
