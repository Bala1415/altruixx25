import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const events = [
    { id: 1, name: "TECHNOVERSE" },
    { id: 2, name: "404 - PROMPT NOT FOUND" },
    { id: 3, name: "THE CIPHER CUT" },
    { id: 4, name: "JADE JOURNEY" },
    { id: 5, name: "PAPER PRESENTATION" }
  ];

  const handleEventSelection = (eventId) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter(id => id !== eventId));
    } else if (selectedEvents.length < 2) {
      setSelectedEvents([...selectedEvents, eventId]);
    } else {
      alert("You can only select up to 2 events");
    }
  };

  const onSubmit = async (data) => {
    if (selectedEvents.length === 0) {
      alert("Please select at least one event");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const registrationData = {
        ...data,
        events: selectedEvents.map(eventId => ({
          eventId,
          eventName: events.find(e => e.id === eventId).name
        }))
      };

      const response = await fetch("http://localhost:5000/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        alert("Registration successful! You will receive a WhatsApp confirmation shortly.");
        navigate("/");
      } else {
        const error = await response.json();
        alert(error.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-page">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              {...register("fullName", { required: "Name is required" })}
              className={errors.fullName ? "error" : ""}
            />
            {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number"
                }
              })}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="teamMembers">Team Members (if applicable)</label>
            <textarea
              id="teamMembers"
              {...register("teamMembers")}
              placeholder="Enter team member names, separated by commas"
            />
          </div>

          <div className="form-group">
            <label>Select Events (maximum 2) *</label>
            <div className="events-checkbox-group">
              {events.map((event) => (
                <div key={event.id} className="event-checkbox">
                  <input
                    type="checkbox"
                    id={`event-${event.id}`}
                    checked={selectedEvents.includes(event.id)}
                    onChange={() => handleEventSelection(event.id)}
                  />
                  <label htmlFor={`event-${event.id}`}>{event.name}</label>
                </div>
              ))}
            </div>
            {selectedEvents.length === 0 && <span className="error-message">Please select at least one event</span>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || selectedEvents.length === 0}
            className="submit-button"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
