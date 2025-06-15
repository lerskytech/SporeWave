import React, { useEffect, useRef } from 'react';

interface KofiButtonProps {
  kofiId: string;
  color?: string;
  title?: string;
}

const KofiButton: React.FC<KofiButtonProps> = ({ 
  kofiId, 
  color = '#9900ff', 
  title = 'Support SporeWave on Ko-fi' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create container for the widget
    const container = containerRef.current;
    if (!container) return;
    
    // Clean the container
    container.innerHTML = '';

    // Load the Ko-fi widget script
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';
    script.onload = () => {
      // Once the script is loaded, initialize the widget
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        kofiwidget2.init('${title}', '${color}', '${kofiId}');
        kofiwidget2.draw();
      `;
      container.appendChild(initScript);
    };
    
    // Add the script to the DOM
    container.appendChild(script);

    // Clean up on unmount
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [kofiId, color, title]);

  return (
    <div className="kofi-button-container flex justify-center my-4" ref={containerRef}>
      {/* Ko-fi widget will be inserted here */}
    </div>
  );
};

export default KofiButton;
