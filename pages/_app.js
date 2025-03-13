import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
// import Encrypt from "@/components/Encrypt";
// import Decrypt from "@/components/Decrypt";

export default function App({Component, pageProps}) {
  const [activePage, setActivePage] = useState("encrypt");
  
  // Mengubah title halaman saat aktifPage berubah
  useEffect(() => {
    document.title = activePage === "encrypt" ? "Encrypt File - AES128" : "Decrypt File - AES128";
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar setActivePage={setActivePage} /> */}
      {/* {activePage === "encrypt" ? <Encrypt /> : <Decrypt />} */}
      <Component {...pageProps} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}