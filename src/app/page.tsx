import { Navbar } from "@/componets/navbar/navbar";
import style from "./page.module.css";

export default function HomePage() {
return ( 
    <>
    <Navbar/>
    <main>
    <section className={style.home}>
      <br />
      <h1>SOMOS MAS DE</h1>
      <span>numero variable</span>
      <h1>EMPRENDEDORES</h1>
    </section>

    <section className={style.home_two}>
      <br />
      <h1>UNETE Y DISFRUTA DE NUESTROS BENEFICIOS</h1>
      <iframe class="elementor-video" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="EQUIPO GEN" width="640" height="360" src="https://www.youtube.com/embed/3KjzPaBj-eE?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fequipogen.com&amp;widgetid=1" id="widget2"></iframe>
    </section>

    <section className={style.home_three}>

      <div className="frist_tool">
      <div className="tool_text">
        <h2>HERRAMIENTAS DE NEGOCIO</h2>
        <h2>CON EL PROPÓSITO DE IMPULSAR EL ÉXITO DE TU NEGOCIO, TE PROPORCIONAMOS HERRAMIENTAS QUE TE GUIARÁN EN CADA ETAPA DE TU PROCESO.</h2>
        <button>ACCEDER</button>
      </div>
      <div className="tool_img">
        <img src="" alt="imagen de herramient de negocio" />
      </div>
      </div>

      <div className="second_tool">
      <div className="tool_img">
        <img src="" alt="imagen de herramient de negocio" />
      </div>
      <div className="tool_text">
        <h2>HERRAMIENTAS DE NEGOCIO</h2>
        <h2>CON EL PROPÓSITO DE IMPULSAR EL ÉXITO DE TU NEGOCIO, TE PROPORCIONAMOS HERRAMIENTAS QUE TE GUIARÁN EN CADA ETAPA DE TU PROCESO.</h2>
        <button>ACCEDER</button>
      </div>
      </div>
    </section>

    <section className={style.home_four}>
      <div className="home_mentality">
        <h2>ACCEDE A NUESTROS ESPACIOS DE</h2>
        <h1>MENTALIDAD</h1>
        <div className="img_mentality">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="audio_community">
        <div className="person_audio">
          <img src="" alt="" />
          <h5>formato de video</h5>
        </div>
      </div>
    </section>

    </main>
    </>
  );
}
