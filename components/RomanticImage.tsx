import React, { useState, useEffect } from 'react';
import { ImageOff, Upload } from 'lucide-react';

interface RomanticImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
}

const RomanticImage: React.FC<RomanticImageProps> = ({ src, alt, className, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setAttempt(0);
    setHasError(false);
  }, [src]);

  // Handle image load errors by trying alternative paths
  const handleError = () => {
    // If we are already using a local blob URL (user uploaded), don't retry paths, just fail.
    if (currentSrc?.startsWith('blob:')) {
      setHasError(true);
      return;
    }

    if (!src || typeof src !== 'string') {
      setHasError(true);
      return;
    }

    const cleanName = src.startsWith('/') ? src.slice(1) : src;

    // Retry logic with multiple path assumptions
    if (attempt === 0) {
       // Attempt 1: Try relative path (clean name)
       setCurrentSrc(cleanName);
       setAttempt(1);
    } else if (attempt === 1) {
       // Attempt 2: Try explicit public folder
       setCurrentSrc(`public/${cleanName}`);
       setAttempt(2);
    } else if (attempt === 2) {
       // Attempt 3: Try assets folder as a fallback guess
       setCurrentSrc(`assets/${cleanName}`);
       setAttempt(3);
    } else {
       // All automatic attempts failed
       setHasError(true);
    }
  };

  const handleManualUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCurrentSrc(objectUrl);
      setHasError(false);
    }
  };

  const getFileName = () => {
    if (typeof src === 'string') {
      const parts = src.split('/');
      return parts[parts.length - 1];
    }
    return 'image.jpg';
  };

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-stone-100 border-2 border-dashed border-stone-300 text-stone-400 p-4 text-center h-full w-full min-h-[200px] ${className}`}>
        <ImageOff size={24} className="mb-3 opacity-50" />
        <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-rose-400 mb-2">Image Not Found</p>
        
        <div className="font-serif text-sm italic text-stone-500 mb-4">
          <p className="mb-1">Could not load: <strong className="text-stone-800">{getFileName()}</strong></p>
        </div>

        <label className="cursor-pointer group flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 rounded-full shadow-sm hover:bg-stone-50 transition-all z-10">
          <Upload size={14} className="text-stone-400 group-hover:text-rose-400" />
          <span className="text-xs font-sans font-bold text-stone-600 uppercase tracking-wide">Select File</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleManualUpload} />
        </label>
        
        <p className="text-[10px] text-stone-400 mt-2">Tap to browse your device</p>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default RomanticImage;