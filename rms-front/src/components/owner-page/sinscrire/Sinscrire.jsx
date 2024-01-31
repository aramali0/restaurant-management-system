import React, { useState } from 'react';
import styles from './Sinscrire.module.css';

const Sinscrire = () => {
  const [nomPersonne, setNomPersonne] = useState('');
  const [email, setEmail] = useState('');
  const [motPass, setMotPass] = useState('');
  const [motdePassVerif, setMotdePassVerif] = useState('');
  const [numTelel, setNumTelel] = useState('');

  const handleSignup = () => {
    console.log('Signing up with:', nomPersonne, email, motPass, numTelel);
  };

  const handlePasswordChange = (e) => {
    setMotPass(e.target.value);
  };

  const handlePasswordVerificationChange = (e) => {
    setMotdePassVerif(e.target.value);
  };

  const isPasswordValid = motPass === motdePassVerif && motPass !== '';

  return (
    <div className={styles.signupContainer}>
      <h2>S'inscrire</h2>
      <form className={styles.signupForm}>
        <label htmlFor="nomPersonne">Nom</label>
        <input
          type="text"
          id="nomPersonne"
          value={nomPersonne}
          onChange={(e) => setNomPersonne(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="motPass">Mot de passe</label>
        <input
          type="password"
          id="motPass"
          value={motPass}
          onChange={handlePasswordChange}
        />

        <label htmlFor="motdePassVerif">Vérification du mot de passe</label>
        <input
          type="password"
          id="motdePassVerif"
          value={motdePassVerif}
          onChange={handlePasswordVerificationChange}
          className={isPasswordValid ? 'valid' : 'invalid'}
        />

        <label htmlFor="numTelel">Numéro de téléphone</label>
        <input
          type="tel"
          id="numTelel"
          value={numTelel}
          onChange={(e) => setNumTelel(e.target.value)}
        />

        <button type="button" onClick={handleSignup} disabled={!isPasswordValid}>
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Sinscrire;
