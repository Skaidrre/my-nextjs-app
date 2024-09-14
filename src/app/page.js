import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <><section class="hero">
      <h1>Sveiki! Aš esu specialioji pedagogė Karolina</h1>
      <p> Padedu vaikams su specialiaisiais ugdymosi poreikiais pasiekti savo potencialą. Kartu siekiame stiprinti jų gebėjimus, tobulėti ir sėkmingai integruotis į mokymosi procesą.</p>
      <a id="susipazinkime" href="Apiemane"><p>Susipažinkime!</p></a>
    </section>
    <section class="paveiksliukas">
    <div class="tekst">
    <p><img src="https://i.ibb.co/7SyPNTN/marguerite.png" alt="logo" />Individualios specialiojo ugdymo konsultacijos</p>
    <p><img src="https://i.ibb.co/7SyPNTN/marguerite.png" alt="logo" />Kalbos ir komunikacijos gebėjimų lavinimas</p>
    <p><img src="https://i.ibb.co/7SyPNTN/marguerite.png" alt="logo" />Mokymosi įgūdžių stiprinimas</p>
    <p><img src="https://i.ibb.co/7SyPNTN/marguerite.png" alt="logo" />Sensorinės integracijos terapija</p>
    <p><img src="https://i.ibb.co/7SyPNTN/marguerite.png" alt="logo" />Individualūs užsiėmimai</p>
    <a class="placiau" href="Paslaugos"><p>Plačiau</p></a>
    </div>
    <img class="pic" src="https://i.ibb.co/7GZQnDC/452566515-8791629230852701-3687491088092244196-n.jpg"/>
    </section>
    </>
)
}



