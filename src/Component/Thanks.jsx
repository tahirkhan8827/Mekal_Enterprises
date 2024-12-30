import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You for Your Purchase!</h1>
      <p style={styles.text}>We truly appreciate your order. Your purchase has been successfully processed.</p>
      <p style={styles.text}>We hope you enjoy your product! Feel free to shop more items.</p>
      <Link to={'/'} style={styles.button}>Shop More</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  heading: {
    color: '#4CAF50',
  },
  text: {
    fontSize: '18px',
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '20px',
  }
};

export default Thanks;
