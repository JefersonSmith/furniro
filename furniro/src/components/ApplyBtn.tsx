import React from "react";
interface ApllayBtnProps {
  handleSubmit: (event: React.FormEvent) => void;
}
const ApplyBtn: React.FC<ApllayBtnProps> = ({ handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
    >
      Apply
    </button>
  );
};
export default ApplyBtn;