import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/intro";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <Intro />
    </ParallaxProvider>
  );
}
