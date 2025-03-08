import { useState } from "react";
import { encryptFile } from "../utils/encryption";

export default function Encrypt() {
  const [file, setFile] = useState(null);
  const [key, setKey] = useState("KUNCI-KELOMPOK-1");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEncrypt = async () => {
    if (!file || key.length !== 16) {
      alert("Harap pilih file dan pastikan kunci memiliki 16 karakter.");
      return;
    }

    try {
      const encryptedBlob = await encryptFile(file, key);
      const url = URL.createObjectURL(encryptedBlob);

      const a = document.createElement("a");
      a.href = url;
      a.download = file.name + ".enc"; // Simpan dengan format .enc
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Terjadi kesalahan saat mengenkripsi file.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔐 Encrypt File</h2>

      <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
        <input type="file" onChange={handleFileUpload} className="mb-3 w-full border p-2" />
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter 16-character key"
          className="border p-2 w-full mb-3"
        />
        <button onClick={handleEncrypt} className="bg-purple-600 text-white px-4 py-2 rounded w-full">
          Encrypt & Download
        </button>
      </div>
    </div>
  );
}
