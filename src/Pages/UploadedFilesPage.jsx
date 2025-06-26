// src/pages/UploadedFilesPage.jsx
import React, { useEffect, useState } from 'react';
import FileListItem from '../Components/FileListItem';
import { fetchUploadedFiles } from '../services/UploadedFilesData';

const UploadedFilesPage = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const data = await fetchUploadedFiles();
        setFiles(data);
      } catch (err) {
        setError('Gagal mengambil daftar file. Silakan coba lagi nanti.');
        console.error('Error fetching uploaded files:', err);
      } finally {
        setLoading(false);
      }
    };

    getFiles();
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali setelah render pertama

  if (loading) {
    return <div style={styles.messageContainer}>Memuat daftar file...</div>;
  }

  if (error) {
    return <div style={{ ...styles.messageContainer, color: 'red' }}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Daftar File yang Diunggah</h1>
      {files.length === 0 ? (
        <p style={styles.messageContainer}>Belum ada file yang diunggah.</p>
      ) : (
        <div style={styles.filesGrid}>
          {files.map((file) => (
            <FileListItem key={file.id} file={file} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    color: '#2c3e50',
    marginBottom: '35px',
    fontSize: '2.5em',
  },
  messageContainer: {
    padding: '20px',
    fontSize: '1.1em',
    color: '#555',
  },
  filesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    padding: '10px 0',
  },
};

export default UploadedFilesPage;