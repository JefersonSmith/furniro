import React, { useEffect } from 'react';

interface AlertProps {
  message: string;
  duration: number;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, duration, onClose }: AlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="alert">
      {message}
    </div>
  );
};

export default Alert;
