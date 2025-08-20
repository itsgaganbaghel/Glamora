import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start">
      {/* Navbar */}
      <Navbar />

      {/* Children */}
      <Outlet />
    </main>
  );
}
