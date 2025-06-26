const uploadedFilesData = [
  {
    id: 'f1',
    name: 'Materi_React_Dasar.pdf',
    uploader: 'Budi Santoso',
    uploadDate: '2024-06-20',
    type: 'application/pdf',
    size: 2500000, // bytes (2.5 MB)
    url: 'https://example.com/files/Materi_React_Dasar.pdf', // URL untuk download/view
  },
  {
    id: 'f2',
    name: 'Tutorial_NodeJS.mp4',
    uploader: 'Ani Lestari',
    uploadDate: '2024-06-22',
    type: 'video/mp4',
    size: 50000000, // bytes (50 MB)
    url: 'https://example.com/files/Tutorial_NodeJS.mp4',
  },
  {
    id: 'f3',
    name: 'Panduan_UI_UX.docx',
    uploader: 'Joko Susanto',
    uploadDate: '2024-06-24',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 1200000, // bytes (1.2 MB)
    url: 'https://example.com/files/Panduan_UI_UX.docx',
  },
  {
    id: 'f4',
    name: 'Gambar_Desain_Aplikasi.png',
    uploader: 'Siti Rahayu',
    uploadDate: '2024-06-25',
    type: 'image/png',
    size: 3100000, // bytes (3.1 MB)
    url: 'https://example.com/files/Gambar_Desain_Aplikasi.png',
  },
];

export const fetchUploadedFiles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(uploadedFilesData);
    }, 1000); // Simulasi penundaan jaringan 1 detik
  });
};

// Fungsi helper untuk format ukuran file
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}