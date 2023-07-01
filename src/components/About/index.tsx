import { useEffect } from "react";
import style from "./index.module.css";

export default function About() {
  useEffect(() => {
    require("bootstrap/dist/css/bootstrap.min.css");
  });

  return (
    <div>
      <div className={style.header}>Mission Mars: Colonize the Red Planet"</div>
      <div className={style.introduction}>
        <div className={style.introductionTitle}>Introduction</div>
        <div className={style.introductionContent}>
          Welcome to Mission Mars, a cause dedicated to the future of humanity -
          colonizing the Red Planet. Our mission is to raise awareness and
          support for the scientific, technological, and human challenges and
          possibilities that Mars colonization presents.
        </div>
      </div>
      <div className={style.section}>
        <div className={style.sectionTitle}>Why Mars?</div>
        <div className={style.sectionContent}>
          Why should we colonize Mars? The answer lies in our innate human
          desire to explore, to push boundaries, and to ensure the survival of
          our species. Mars, with its similarities to Earth and its potential
          for habitation, presents a unique opportunity. Colonizing Mars could
          lead to breakthroughs in technology and science, potentially even
          answering the age-old question: Are we alone in the universe?
        </div>
      </div>
      <div className={style.section}>
        <div className={style.sectionTitle}>The Plan</div>
        <div className={style.sectionContent}>
          Our plan for colonizing Mars is ambitious yet achievable. It begins
          with unmanned missions to study the planet in detail. Next, we aim to
          establish a base for robots and, eventually, humans. Overcoming
          challenges such as radiation, low gravity, and limited resources will
          require innovation and determination. But we believe in the power of
          human ingenuity to rise to these challenges.
        </div>
      </div>
      <div className={style.section}>
        <div className={style.sectionTitle}>Get Involved</div>
        <div className={style.sectionContent}>
          Want to be a part of this exciting journey? You can help in several
          ways. Donate to support our research and technological development.
          Spread the word about our cause to your friends, family, and social
          media followers. Or get involved in space-related research or advocacy
          in your community. Every effort brings us one step closer to our goal
        </div>
      </div>
      <div className={style.contact}>
        <div className={style.contactTitle}>Contact Information</div>
        <div className={style.contactContent}>
          Have questions or want to get more involved? We'd love to hear from
          you. Contact us at your email address, or connect with us on your
          social media platforms
        </div>
      </div>
      <div className={style.footer}>
        <div>
          {" "}
          © 2023 Mission Mars. All rights reserved. Follow us on Facebook for
          updates."
        </div>
        <div>
          Remember to replace the placeholders with your actual contact
          information and links. I hope this helps! Let me know if you need
          further assistance.
        </div>
      </div>
    </div>
  );
}
