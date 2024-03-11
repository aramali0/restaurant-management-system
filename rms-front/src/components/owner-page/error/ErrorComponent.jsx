import React, { useEffect } from 'react'
import styles from './ErrorComponent.module.css'
const ErrorComponent = ({ message, onClose, color }) => {
 useEffect(() => {
   const timeout = setTimeout(() => {
     onClose();
   }, 4000);

   return () => clearTimeout(timeout);
 }, [onClose]);

 return <div style={{color: color}} className={styles.error}>{message}</div>;
};

export default ErrorComponent