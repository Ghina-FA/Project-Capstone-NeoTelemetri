import React from 'react';
import FileUploader from '../Components/FileUploader';
import UploadedFilesPage from './UploadedFilesPage';

const Materi = () => {
return (
<div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
<h1 class="block text-2xl font-bold text-gray-800 dark:text-white text-center">Materi</h1>
<br />
    
     {/* Anda bisa menambahkan elemen lain di sini, seperti header, navigasi, atau widget */}
      <h1 class="block text-sm mb-2 dark:text-white text-center">Selamat Datang di Dashboard Anda</h1>
      <p class="block text-sm mb-2 dark:text-white text-center">Berikut adalah ringkasan aktivitas Anda dan file-file terbaru.</p>

      {/* Komponen UploadedFilesPage yang diimpor */}
      <h2 class="block text-sm mb-2 dark:text-white text-center">File yang Baru Diunggah</h2>
      <UploadedFilesPage /> {/* Cukup panggil komponennya di sini */}

      {/* Konten lain dari dashboard */}
      <section>
        <h3 class="block text-sm mb-2 dark:text-white text-center">Statistik Penggunaan</h3>
        {/* ... komponen statistik lainnya ... */}
      </section>
<br/>
      <h1 class="block text-sm mb-2 dark:text-white text-center">Halaman Unggah Materi Baru</h1>
      <p class="block text-sm mb-2 dark:text-white text-center">Silakan gunakan formulir di bawah ini untuk mengunggah materi Anda.</p>

      {/* Komponen FileUploader yang diimpor */}
      <FileUploader />

      {/* Footer atau informasi lain */}
      <p class="block text-sm mb-2 dark:text-white text-center">Terima kasih telah berkontribusi!</p>

</div>
);
};
export default Materi;