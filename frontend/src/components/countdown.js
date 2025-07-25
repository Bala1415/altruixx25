import React, { useState, useEffect } from "react";
import "./countdown.css";

const CountdownTimer = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeRemaining = () => {
    const difference = new Date(eventDate).getTime() - new Date().getTime();
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setCountdownStarted(false);
    }
  };

  useEffect(() => {
    let timer;
    if (countdownStarted) {
      calculateTimeRemaining();
      timer = setInterval(calculateTimeRemaining, 1000);
    }
    return () => clearInterval(timer);
  }, [countdownStarted, eventDate]);

  const handleStartCountdown = (e) => {
    e.preventDefault();
    if (eventName && eventDate) {
      setCountdownStarted(true);
    }
  };

  return (
    <div className="countdown-timer-container">
      {!countdownStarted ? (
        <form onSubmit={handleStartCountdown} className="countdown-form">
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              placeholder="Enter event name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date & Time:</label>
            <input
              type="datetime-local"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="start-button">Start Countdown</button>
        </form>
      ) : (
        <div className="countdown-display">
          <h2>{eventName}</h2>
          <div className="time-blocks">
            <div className="time-block">
              <span className="number">{timeRemaining.days}</span>
              <span className="label">Days</span>
            </div>
            <div className="time-block">
              <span className="number">{timeRemaining.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="time-block">
              <span className="number">{timeRemaining.minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-block">
              <span className="number">{timeRemaining.seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
          <button 
            className="reset-button"
            onClick={() => {
              setCountdownStarted(false);
              setEventName("");
              setEventDate("");
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;