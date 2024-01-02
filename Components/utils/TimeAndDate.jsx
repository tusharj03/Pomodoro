"use client";
import React, { useState, useEffect } from "react";

const TimeAndDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedTime = new Intl.DateTimeFormat("en-IN", options).format(date);

    // Manually construct the formatted date with month day, year format
    const month = date.toLocaleString("en-IN", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}, ${formattedTime}`;

    // Remove "at" from the formatted date
    if (formattedDate.includes("Saturday")) {
      return formattedDate;
    } else {
      const dateWithoutAt = formattedDate.replace("at", "|");
      return dateWithoutAt;
    }
  };

  return (
    <div className="timeAndDate-wrapper">
      <p className="timeAndDate">{formatDate(currentDate)}</p>
    </div>
  );
};

export default TimeAndDate;
