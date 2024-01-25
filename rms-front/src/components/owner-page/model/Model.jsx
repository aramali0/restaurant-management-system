import React from 'react';
import styles from './model.module.css';

const Modal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <div
      className={styles.modalBackdrop}
      onClick={onRequestClose}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.modalCloseButton} onClick={onRequestClose}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
