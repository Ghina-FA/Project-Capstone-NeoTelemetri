// src/components/FileListItem.jsx
import React from 'react';
import { formatBytes } from "../services/UploadedFilesData";

const FileListItem = ({ file }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.fileName}>{file.name}</h3>
      <p style={styles.details}>**Pengunggah:** {file.uploader}</p>
      <p style={styles.details}>**Tanggal Unggah:** {file.uploadDate}</p>
      <p style={styles.details}>**Tipe:** {file.type}</p>
      <p style={styles.details}>**Ukuran:** {formatBytes(file.size)}</p>
      <a href={file.url} target="_blank" rel="noopener noreferrer" style={styles.viewButton}>
        Lihat/Unduh
      </a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '18px',
    margin: '15px',
    width: '320px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    transition: 'transform 0.2s ease-in-out',
  },
  fileName: {
    fontSize: '1.25em',
    color: '#333',
    marginBottom: '10px',
    wordBreak: 'break-word', // Memastikan nama file panjang tidak keluar box
  },
  details: {
    fontSize: '0.9em',
    color: '#666',
    marginBottom: '5px',
  },
  viewButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '15px',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
};

export default FileListItem;