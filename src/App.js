import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showYesMessage, setShowYesMessage] = useState(false);
  const [noMessage, setNoMessage] = useState("");

  const handleClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (!showMessage) {
        setShowMessage(true);
      } else if (!showSecondMessage) {
        setShowSecondMessage(true);
      } else if (!showThirdMessage) {
        setShowThirdMessage(true);
      } else if (!showFinalMessage) {
        setShowFinalMessage(true);
      }
      setIsFadingOut(false);
    }, 500);
  };

  return (
    <div className="container">
      {!showMessage &&
      !showSecondMessage &&
      !showThirdMessage &&
      !showFinalMessage ? (
        <div className={`content ${isFadingOut ? "fade-out" : "fade-in"}`}>
          <div className="message">Hi Judy! 😊</div>
          <div className="tap-text" onClick={handleClick}>
            Tap...
          </div>
        </div>
      ) : showMessage && !showSecondMessage ? (
        <div
          className={`message-container ${
            isFadingOut ? "fade-out" : "fade-in"
          }`}
          onClick={handleClick}
        >
          <div className="floating-container">
            <img
              src="/top-image1.png"
              alt="Romantic"
              className="floating-image top"
            />
            <img
              src="/top-image2.jpg"
              alt="Romantic"
              className="floating-image top"
            />
          </div>
          <p className="love-message">
            I don’t need a special day to tell you how much I love you. Every
            day with you is special! 💖
          </p>
          <img
            src="/bottom-image1.jpg"
            alt="Romantic"
            className="floating-image bottom"
          />
        </div>
      ) : showSecondMessage && !showThirdMessage ? (
        <div
          className={`message-container ${
            isFadingOut ? "fade-out" : "fade-in"
          }`}
          onClick={handleClick}
        >
          <div className="floating-container">
            <img src="/judy1.jpg" alt="Judy" className="floating-image top" />
            <img src="/ourphoto1.jpg" alt="Us" className="floating-image top" />
          </div>
          <p className="love-message">
            Through thick and thin, I’ll always be by your side. 💑💕
          </p>
          <div className="bottom-images-container">
            <img
              src="/ourphoto2.jpg"
              alt="Us"
              className="floating-image bottom"
            />
            <img
              src="/judy2.jpg"
              alt="Judy"
              className="floating-image bottom"
            />
          </div>
        </div>
      ) : showThirdMessage && !showFinalMessage ? (
        <div
          className={`message-container ${
            isFadingOut ? "fade-out" : "fade-in"
          }`}
          onClick={handleClick}
        >
          <p className="love-message">On this day, 02/10/2025, I ask you...</p>
        </div>
      ) : showFinalMessage && !showYesMessage ? (
        <div
          className={`message-container ${
            isFadingOut ? "fade-out" : "fade-in"
          }`}
        >
          <p className="love-message">Will you be my Valentine? 💘</p>

          {noMessage && <p className="no-message">{noMessage}</p>}

          <div className="response-buttons">
            <button
              className="yes-button"
              onClick={() => setShowYesMessage(true)}
            >
              Yes 💖
            </button>
            <button
              className="no-button"
              onClick={() => setNoMessage("No is NOT an option! 😠 Try again!")}
            >
              No ❌
            </button>
          </div>
        </div>
      ) : showYesMessage ? (
        <div className="yes-container">
          <p className="yes-text">YAY! I LOVE YOU SO MUCH! ❤️💕</p>
          <div className="hearts-container">
            <span className="heart">❤️</span>
            <span className="heart">💖</span>
            <span className="heart">💞</span>
            <span className="heart">💕</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
