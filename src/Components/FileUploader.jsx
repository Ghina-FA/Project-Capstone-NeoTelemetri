// src/components/FileUploader.jsx
import React, { useState, useRef } from 'react';
import { uploadFile } from '../services/api';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const fileInputRef = useRef(null); // Ref untuk mengakses input file secara langsung

  const handleFileChange = (event) => {
    // Mengambil file pertama yang dipilih
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadMessage(''); // Reset pesan sebelumnya
      setIsError(false);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Mohon pilih file terlebih dahulu.');
      setIsError(true);
      return;
    }

    setUploading(true);
    setUploadMessage('Mengunggah...');
    setIsError(false);

    try {
      const response = await uploadFile(selectedFile);
      setUploadMessage(response.message);
      setIsError(!response.success); // Set isError berdasarkan 'success' dari response API
      setSelectedFile(null); // Hapus file yang dipilih dari state
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset input file HTML
      }
    } catch (error) {
      setUploadMessage(error.message || 'Terjadi kesalahan saat mengunggah file.');
      setIsError(true);
    } finally {
      setUploading(false); // Selesai mengunggah (baik sukses atau gagal)
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setUploadMessage('');
    setIsError(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input file HTML
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Unggah File Baru</h2>

      <div style={styles.inputGroup}>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef} // Kaitkan ref ke input file
          style={styles.fileInput}
        />
        {selectedFile && (
          <p style={styles.selectedFileName}>
            File terpilih: **{selectedFile.name}** ({ (selectedFile.size / 1024 / 1024).toFixed(2) } MB)
          </p>
        )}
      </div>

      <div style={styles.buttonGroup}>
        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          style={styles.uploadButton(uploading)}
        >
          {uploading ? 'Mengunggah...' : 'Unggah File'}
        </button>
        <button
          onClick={handleClear}
          disabled={uploading}
          style={styles.clearButton}
        >
          Batal
        </button>
      </div>

      {uploadMessage && (
        <p style={isError ? styles.errorMessage : styles.successMessage}>
          {uploadMessage}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '50px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    color: '#333',
    marginBottom: '25px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  fileInput: {
    display: 'block',
    margin: '0 auto 10px auto',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: 'calc(100% - 20px)',
  },
  selectedFileName: {
    fontSize: '0.9em',
    color: '#555',
    marginTop: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  uploadButton: (uploading) => ({
    backgroundColor: uploading ? '#cccccc' : '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: uploading ? 'not-allowed' : 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
  }),
  clearButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    color: '#28a745',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  errorMessage: {
    color: '#dc3545',
    fontWeight: 'bold',
    marginTop: '15px',
  },
};

export default FileUploader;