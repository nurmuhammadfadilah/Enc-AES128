import { useState } from "react";
import { decryptFile } from "../utils/encryption";

export default function Decrypt() {
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [key, setKey] = useState("KUNCI-KELOMPOK-1");

  const handleEncryptedFileUpload = (event) => {
    const file = event.target.files[0];

    // Validasi ekstensi file
    if (file && !file.name.endsWith(".enc")) {
      alert("Hanya file dengan ekstensi .enc yang diperbolehkan!");
      event.target.value = ""; // Reset input file
      return;
    }

    setEncryptedFile(file);
  };

  async function handleDecrypt ()  {
    if (!encryptedFile || key.length !== 16) {
      alert("Harap pilih file terenkripsi dan pastikan kunci memiliki 16 karakter.");
      return;
    }

    try {
      const { blob, fileName } = await decryptFile(encryptedFile, key);
      const url = URL.createObjectURL(blob);

      // Membuat link untuk mengunduh file hasil dekripsi
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Terjadi kesalahan saat mendekripsi file. Pastikan kunci benar.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">🔓 Decrypt File</h2>

      <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
        <input type="file" accept=".enc" onChange={handleEncryptedFileUpload} className="mb-3 w-full border p-2" />
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter 16-character key"
          className="border p-2 w-full mb-3"
        />
        <button onClick={handleDecrypt} className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Decrypt & Download
        </button>
      </div>
    </div>
  );
}
