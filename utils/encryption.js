import * as CryptoJS from "crypto-js";

/**
 * Mengenkripsi file dengan AES-128-CBC
 */
export async function encryptFile(file, key) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const wordArray = CryptoJS.lib.WordArray.create(reader.result);
      const iv = CryptoJS.lib.WordArray.random(16); // IV Acak
      const encrypted = CryptoJS.AES.encrypt(wordArray, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: iv, // IV dipakai di sini
      });

      // Gabungkan IV, nama file, dan data terenkripsi
      const fileHeader = `${file.name}|${file.type}|${CryptoJS.enc.Base64.stringify(iv)}|`; 
      const encryptedBlob = new Blob([fileHeader, encrypted.toString()], { type: "application/octet-stream" });
      resolve(encryptedBlob);
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Mendekripsi file yang terenkripsi kembali ke format aslinya.
 */
export async function decryptFile(encryptedFile, key) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(encryptedFile);
    reader.onload = () => {
      try {
        const fileContent = reader.result;

        // Ambil metadata dari file yang dienkripsi
        const parts = fileContent.split("|");
        if (parts.length < 4) {
          reject("Format file tidak valid.");
          return;
        }

        const originalFileName = parts[0];
        const originalFileType = parts[1];
        const ivBase64 = parts[2];
        const encryptedData = parts.slice(3).join("|");

        const iv = CryptoJS.enc.Base64.parse(ivBase64); // Konversi IV dari base64
        const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(key), {
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
          iv: iv,
        });

        const typedArray = new Uint8Array(decrypted.sigBytes);
        for (let i = 0; i < decrypted.sigBytes; i++) {
          typedArray[i] = decrypted.words[i >>> 2] >>> (24 - (i % 4) * 8) & 0xff;
        }

        const decryptedBlob = new Blob([typedArray], { type: originalFileType });
        resolve({ blob: decryptedBlob, fileName: originalFileName });
      } catch (error) {
        reject("Gagal mendekripsi file. Pastikan kunci benar.");
      }
    };
    reader.onerror = (error) => reject(error);
  });
}
