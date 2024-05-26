import React from "react";

const SearchModal = ({ isOpen, onClose, modalKey, allVases, onValueClick }) => {
  if (!isOpen) {
    return null;
  }

  const uniqueValues = [...new Set(allVases.map((vase) => vase[modalKey]))];

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{modalKey}</h2>
        <ul>
          {uniqueValues.map((value, index) => (
            <li key={index} onClick={() => onValueClick(modalKey, value)}>
              {value}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SearchModal;
