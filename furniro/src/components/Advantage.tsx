import React from "react";

interface AdvantageProps {
  icone: string;
  title: string;
  subtitle: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icone, title, subtitle }: AdvantageProps) => {
  return (
    <div className="flex gap-3">
      <img src={icone} alt="" />
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-secondaryText text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Advantage;
