import React from "react";

interface AdvantageProps {
  icone: string;
  title: string;
  subtitle: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icone, title, subtitle }: AdvantageProps) => {
  return (
    <div className="advantage">
      <img src={icone} alt="" className="advantage-icon" />
      <div className="advantage-content">
        <h3 className="advantage-title">{title}</h3>
        <p className="advantage-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Advantage;
