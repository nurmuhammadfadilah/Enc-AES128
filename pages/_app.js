import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Encrypt from "./encrypt";
import Decrypt from "./Decrypt";

export default function App() {
  const [activePage, setActivePage] = useState("encrypt");

  // Mengubah title halaman saat aktifPage berubah
  useEffect(() => {
    document.title = activePage === "encrypt" ? "Encrypt File - AES128" : "Decrypt File - AES128";
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setActivePage={setActivePage} />
      {activePage === "encrypt" ? <Encrypt /> : <Decrypt />}
    </div>
  );
}
