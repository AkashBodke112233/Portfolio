import React, { useEffect } from "react";
import "./Dialog.css";
import {HeroData} from "../../Data/StaticData"

const Dialog = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="dialog-close">{HeroData?.Buttons?.Close}</button>
      </div>
    </div>
  );
};

export default Dialog;
