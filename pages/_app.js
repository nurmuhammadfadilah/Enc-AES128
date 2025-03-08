import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Encrypt from "../components/Encrypt";
import Decrypt from "../components/Decrypt";

export default function App() {
  const [activePage, setActivePage] = useState("encrypt");
  const [isMounted, setIsMounted] = useState(false);
  
  // Mengubah title halaman saat aktifPage berubah
  useEffect(() => {
    setIsMounted(true);
    document.title = activePage === "encrypt" ? "Encrypt File - AES128" : "Decrypt File - AES128";
  }, [activePage]);
  
  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setActivePage={setActivePage} />
      {activePage === "encrypt" ? <Encrypt /> : <Decrypt />}
    </div>
  );
}