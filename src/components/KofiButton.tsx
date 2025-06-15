import React from 'react';

interface KofiButtonProps {
  kofiId: string;
  color?: string;
  title?: string;
}

const KofiButton = ({ 
  kofiId, 
  color = '#9900ff', 
  title = 'Support SporeWave on Ko-fi' 
}: KofiButtonProps): React.ReactElement => {
  // Simple button linking to Ko-fi
  const kofiUrl = `https://ko-fi.com/${kofiId}`;
  
  return (
    <div className="flex justify-center my-4">
      <a 
        href={kofiUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block transform hover:scale-105 transition-transform duration-300"
      >
        <img 
          src="https://storage.ko-fi.com/cdn/kofi5.png"
          alt={title}
          className="w-64 h-auto rounded shadow-lg border-2"
          style={{ borderColor: color }}
        />
      </a>
    </div>
  );
};

export default KofiButton;
