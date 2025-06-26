export const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (file) {
        console.log('Mengunggah file:', file.name, 'Tipe:', file.type, 'Ukuran:', file.size);
      
        const formData = new FormData();
        formData.append('materiFile', file); // 'materiFile' adalah nama field di backend Anda

        fetch('/api/upload-materi', { // Ganti dengan endpoint API Anda
          method: 'POST',
          body: formData,
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));

        resolve({ success: true, message: `File '${file.name}' berhasil diunggah!` });
      } else {
        reject({ success: false, message: 'Tidak ada file yang dipilih.' });
      }
    }, 1500); // Simulasi penundaan jaringan 1.5 detik
  });
};