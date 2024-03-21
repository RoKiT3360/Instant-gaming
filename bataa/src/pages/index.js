import Image from "next/image";
import { Inter } from "next/font/google";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
