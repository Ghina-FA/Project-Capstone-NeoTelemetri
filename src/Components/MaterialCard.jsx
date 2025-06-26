import React from 'react';

const MaterialCard = ({ material }) => {
  return (
    <div style={styles.card}>
      <img src={material.thumbnail} alt={material.title} style={styles.thumbnail} />
      <h3 style={styles.title}>{material.title}</h3>
      <p style={styles.details}>**Pengunggah:** {material.uploader}</p>
      <p style={styles.details}>**Tanggal Unggah:** {material.uploadDate}</p>
      <p style={styles.details}>**Tipe:** {material.type} | **Ukuran:** {material.size}</p>
      <button style={styles.button}>Lihat Detail</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.2em',
    marginBottom: '8px',
    color: '#333',
  },
  details: {
    fontSize: '0.9em',
    color: '#666',
    marginBottom: '4px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
};

export default MaterialCard;