import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Download, ExternalLink, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { INVITATION_CONTENT } from '../config/invitationContent';

export const AddToCalendarButton = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Event metadata
  const eventDetails = {
    title: "Nandini & Meet's Betrothal Ceremony",
    description: "The Joshi Family cordially invites you to celebrate the Betrothal Ceremony of Nandini & Meet.",
    location: `${INVITATION_CONTENT.venueName}, ${INVITATION_CONTENT.venueAddress}`,
    startIso: "20260916T103000",
    endIso: "20260916T150000",
    // UTC formatted dates for Google Calendar (10:30 AM IST = 05:00 UTC)
    utcStart: "20260916T050000Z",
    utcEnd: "20260916T093000Z"
  };

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventDetails.title
  )}&dates=${eventDetails.utcStart}/${eventDetails.utcEnd}&details=${encodeURIComponent(
    eventDetails.description
  )}&location=${encodeURIComponent(eventDetails.location)}`;

  // Download .ics file for Apple Calendar, Outlook, and Mobile devices
  const handleDownloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Joshi Family//Betrothal Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:${eventDetails.description}`,
      `LOCATION:${eventDetails.location}`,
      `DTSTART:${eventDetails.utcStart}`,
      `DTEND:${eventDetails.utcEnd}`,
      `STATUS:CONFIRMED`,
      "BEGIN:VALARM",
      "TRIGGER:-PT24H",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Betrothal Ceremony Tomorrow",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Nandini_Meet_Betrothal_Reminder.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Main Add to Calendar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white font-semibold font-sans text-xs sm:text-sm tracking-wider shadow-rose-glow hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Add Reminder to Calendar</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Options - Pops Upwards Above Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-ivory border-2 border-rose-300 shadow-2xl z-50 p-2 text-taupe select-none drop-shadow-2xl"
          >
            <div className="px-3 py-1.5 text-[10px] font-sans font-bold uppercase tracking-widest text-rose-800 border-b border-rose-200/60 mb-1">
              Select Calendar App
            </div>

            {/* Option 1: Google Calendar */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-rose-100/70 transition-colors text-xs font-sans font-semibold text-taupe group"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-base">📅</span>
                <span>Google Calendar</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-rose-500 opacity-70 group-hover:opacity-100" />
            </a>

            {/* Option 2: Apple Calendar / Outlook (.ics Download) */}
            <button
              onClick={handleDownloadIcs}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-rose-100/70 transition-colors text-xs font-sans font-semibold text-taupe group text-left"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-base"></span>
                <span>Apple Calendar / iCal</span>
              </div>
              {downloaded ? (
                <Check className="w-4 h-4 text-emerald-600 font-bold" />
              ) : (
                <Download className="w-3.5 h-3.5 text-rose-500 opacity-70 group-hover:opacity-100" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
