import About from "../About";
import style from "./index.module.css";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.header}>
          <a href="#" className={style.logo}>
            Logo
          </a>
          <ul className={style.headerUl}>
            <li>
              <a href="#" className={style.aActive}>
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.content}>
          <section className={style.section}>
            <img src="stars.png" className={style.stars} />
            <img src="moon.png" className={style.moon} />
            <img src="mountains_behind.png" className={style.mountains} />
            <h2 className={style.text}>
              Mission Mars: Colonize the Red Planet
            </h2>
            <a href="#" className={style.btn}>
              Explore
            </a>
            <img src="mountains_front.png" className={style.mountains_front} />
          </section>
        </div>
        <About />
      </div>
    </div>
  );
}
