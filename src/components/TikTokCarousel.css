.tiktok-carousel-container {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 auto;
  max-width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.glow-border {
  box-shadow: 
    0 0 5px #9333ea,
    0 0 15px #9333ea,
    0 0 25px #9333ea,
    inset 0 0 5px #9333ea;
  border: 2px solid #9333ea;
  border-radius: 0.5rem;
  z-index: 1;
  pointer-events: none;
  animation: pulse 5s infinite alternate;
  opacity: 0.8;
}

@keyframes pulse {
  0% {
    box-shadow: 
      0 0 5px #9333ea,
      0 0 15px #9333ea;
    border-color: #9333ea;
  }
  50% {
    box-shadow: 
      0 0 10px #9333ea,
      0 0 20px #9333ea,
      0 0 30px #9333ea;
    border-color: #a855f7;
  }
  100% {
    box-shadow: 
      0 0 15px #3b82f6,
      0 0 25px #3b82f6,
      0 0 35px #3b82f6;
    border-color: #3b82f6;
  }
}

/* Mobile swipe gestures support */
.tiktok-carousel-container {
  touch-action: pan-y;
}

/* Responsive styles */
@media (max-width: 768px) {
  .tiktok-carousel-container {
    max-height: 80vh;
    width: 100%;
    margin: 0 auto;
  }
  
  .aspect-w-9.aspect-h-16 {
    padding-bottom: 177.78%; /* 16:9 aspect ratio for mobile */
  }
}

/* Make buttons more visible on hover */
.tiktok-carousel-container button:hover {
  transform: scale(1.1) translateY(-50%);
  box-shadow: 0 0 10px #9333ea;
}

/* Make pagination dots glow when active */
.tiktok-carousel-container .bg-spore-purple {
  box-shadow: 0 0 5px #9333ea, 0 0 10px #9333ea;
}
