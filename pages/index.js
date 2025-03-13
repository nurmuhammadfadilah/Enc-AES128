import { useState } from "react";
import Navbar from "@/components/Navbar";
import Encrypt from "@/components/Encrypt";
import Decrypt from "@/components/Decrypt";

export default function Home() {
  const [activePage, setActivePage] = useState("encrypt"); // State untuk menyimpan halaman aktif

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar akan mengontrol perubahan halaman */}
      <Navbar setActivePage={setActivePage} />

      {/* Tampilkan komponen sesuai state activePage */}
      {activePage === "encrypt" ? <Encrypt /> : <Decrypt />}
    </div>
  );
}
