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
            <h2 className={style.text}>Space Website</h2>
            <a href="#" className={style.btn}>
              Explore
            </a>
            <img src="mountains_front.png" className={style.mountains_front} />
          </section>
        </div>
        <div className={style.sec}>
          <h2>parrallax scrolling effects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            exercitationem provident debitis ullam hic temporibus tenetur magnam
            consectetur, quo illo sit ipsam at suscipit velit voluptas minima,
            est doloremque quisquam. <br></br> Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Illum, laborum temporibus! Magni
            necessitatibus asperiores saepe, tempore animi impedit tempora, amet
            exercitationem veritatis debitis consectetur modi enim ratione
            consequuntur delectus deserunt? <br></br> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero assumenda distinctio deserunt
            nostrum? Incidunt sunt aliquid, officia nam impedit harum quos aut
            exercitationem. Vitae fuga sed laudantium, culpa sequi ullam!
            <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Iste architecto repudiandae facere est vitae provident dolore
            delectus sed omnis necessitatibus! Sit quibusdam ipsam quod, fugit
            libero deleniti? Saepe, eum ab.
          </p>
        </div>
      </div>
    </div>
  );
}
