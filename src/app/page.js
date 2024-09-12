import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header class="header">
        <h2>KŽ</h2>
        <nav>
          <a href="#">Apie mane</a>
          <a href="#">Paslaugos</a>
          <a href="#">Kontaktai</a>
          <a href="#">Kainos</a>
          <a href="#">Laiko rezervacija</a>
        </nav>
        <div>Burgeris</div>
      </header>
    </div>
  );
}
