import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const Typewriter = ({ text, delay = 80, onComplete }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === text.length) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{currentText}</span>;
};

export default Typewriter;
