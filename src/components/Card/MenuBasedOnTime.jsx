import React, { useState, useEffect } from "react";
import './MenuBasedOnTime.scss'

const MenuBasedOnTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); 

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 11) {
      setMenu("Breakfast Menu");
    } else if (hours >= 11 && hours < 16) {
      setMenu("Lunch Menu");
    } else if (hours >= 16 && hours < 22) {
      setMenu("Dinner Menu");
    } else {
      setMenu("Late Night Snacks Menu");
    }
  }, [currentTime]);

  return (
    <div style={{marginTop:"10px"}}>
      <h3>Welcome to Our Cafe</h3>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <h4>{menu}</h4>
    </div>
  );
};

export default MenuBasedOnTime;
