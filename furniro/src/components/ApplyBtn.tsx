import React from "react";
import './styles.css'; // Importando o CSS

interface ApplyBtnProps {
  handleSubmit: (event: React.FormEvent) => void;
}

const ApplyBtn: React.FC<ApplyBtnProps> = ({ handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="apply-btn"
    >
      Apply
    </button>
  );
};

export default ApplyBtn;
