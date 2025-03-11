import React, { useState, useEffect, useRef } from "react";
import styles from "./hologram.module.css";
import { ReactTyped } from "react-typed";
import { HashLink } from 'react-router-hash-link';

export default function HologramEffect({ src }) {
  const [showChatbox, setShowChatbox] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to track hover for the dropdown
  const [isHovered, setIsHovered] = useState(false);

  // State to control when typing animation starts
  const [startTyping, setStartTyping] = useState(false);

  const chatboxRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start typing when the chatbox enters the viewport
          setStartTyping(true);
        } else {
          // Stop typing when it's out of the viewport
          setStartTyping(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the chatbox is visible
    );

    if (chatboxRef.current) {
      observer.observe(chatboxRef.current);
    }

    return () => {
      if (chatboxRef.current) {
        observer.unobserve(chatboxRef.current);
      }
    };
  }, []);

  // Scroll event listener to show the chatbox
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowChatbox(true);
      } else {
        setShowChatbox(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Open the dropdown on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Close dropdown when the mouse leaves
  };

  return (
    <div className={styles.hologramContainer}>
      <img src={src} alt="Hologram" className={styles.hologram} />

      <div
        ref={chatboxRef}
        className={`${styles.chatbox} ${showChatbox ? styles.show : ""}`}
        onClick={toggleDropdown} // Open the dropdown when clicked
        onMouseEnter={handleMouseEnter} // Trigger dropdown on hover
        onMouseLeave={handleMouseLeave} // Close dropdown when the mouse leaves
      >
        <div className={styles.animatedTyping}>
          {startTyping && (
            <ReactTyped
              strings={["Hej mit navn er Helena, vil du vide mere om disse emner ?"]}
              typeSpeed={70}
            />
          )}
        </div>

        {/* Dropdown Menu - This will appear when the dropdown is opened */}
        <div
          className={`${styles.dropdownMenu} ${isDropdownOpen || isHovered ? styles.show : ""}`}
        >
          {/* Links inside the dropdown */}
          <HashLink smooth to="/article#ai-webdev">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["AI-Drevet Webudvikling"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "AI-Drevet Webudvikling"
            )}
          </HashLink>

          <HashLink smooth to="/article#voice-search">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["Optimering af Stemmesøgning"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "Optimering af Stemmesøgning"
            )}
          </HashLink>

          <HashLink smooth to="/article#arvr">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["Augmented Reality (AR) og Virtual Reality (VR)"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "Augmented Reality (AR) og Virtual Reality (VR)"
            )}
          </HashLink>

          <HashLink smooth to="/article#iot-webdev">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["Internet of Things (IoT) og Webudvikling"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "Internet of Things (IoT) og Webudvikling"
            )}
          </HashLink>

          <HashLink smooth to="/article#security-blockchain">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["Sikkerhed og Blockchain i Webudvikling"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "Sikkerhed og Blockchain i Webudvikling"
            )}
          </HashLink>

          <HashLink smooth to="/article#sustainable-webdev">
            {isDropdownOpen || isHovered ? (
              <ReactTyped
                strings={["Bæredygtighed i Webudvikling"]}
                typeSpeed={10}
                backSpeed={50}
                backDelay={500}
                showCursor={false}
              />
            ) : (
              "Bæredygtighed i Webudvikling"
            )}
          </HashLink>
        </div>
      </div>
    </div>
  );
}
