import infoImage from "../../assets/images/info.webp";
import ImageWithFallback from "../misc/ImageWithFallback";

const Info = () => {
  return (
    <div id="page-info">
      <div className="slika-levo">
        <ImageWithFallback
          imgSrc={infoImage}
          alt="Naslovnica strani Info"
          height="100%"
        />
        <div className="tekst-slika">
          <div className="tekst">
            <p>
              To ni navadna hiša, <br />
              to moje je zatočišče.
            </p>
            <p>
              V njej ptički pojo, <br />
              tu rastline našle so si dom <br />
              in jaz umirim svoj pogled.
            </p>
            <p>
              Res revna je
              <br /> in stara morda že prek 100 let. <br />A nekomu je bila pa
              dražja kot celi, celi svet.
            </p>
          </div>
        </div>
      </div>
      <div className="tekst-desno">
        <p>
          Po imenu sem Ema Valand - gorenjka, ki je v času študija prišla v
          Ljubljano in na koncu v mestu ostala in pognala korenine. Srce pa me
          venomer vleče stran od betona v naravo.
        </p>
        <p>
          Po izobrazbi diplomirana dizajnerka - dokončala sem smer notranje
          opreme na Fakulteti za dizajn v Ljubljani.
        </p>
        <p>
          Po duši mešanica praktika in obrtnika - poseben prostor v srcu zaseda
          ljubezen do starega, ter težnja k (ponovni) uporabi obstoječega.
        </p>
        <p>
          Svoj prosti čas rada namenim ustvarjanju z lastnimi rokami, pa naj bo
          to polaganje ploščic ali tečaj pletarstva.
        </p>
        <p>Navdih je moč najti povsod okoli nas.</p>
        <p>
          Ema Valand
          <br />
          Ulica bratov Učakar 34
          <br />
          1000 Ljubljana
        </p>
        <p>
          T : +386 70 135 158
          <br />M :{" "}
          <a href="mailto:info@studio9.si" className="email">
            info@studio9.si
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
