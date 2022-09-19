import "./ColombianModal.scss";
import React from "react";
import ReactDOM from 'react-dom'

export function ColombianModal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal__background">{children}</div>,
    document.getElementById("modal")
  );
}
