import Image from "next/image";
import NavBar from "./components/pages/NavBar";
import Acceuil from "./components/Acceuil";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <NavBar/>
    <Acceuil/>
    <Footer/>
   </div>
  );
}
