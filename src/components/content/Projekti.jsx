import projektiArray from "../../assets/data/projektiArray.js";
import ImageWithFallback from "../misc/ImageWithFallback.jsx";

const Projekti = ({ setCurrentContent, setProjektId }) => {
  const showProjektDetails = (id) => {
    setProjektId(id);
    setCurrentContent("projekt-more");
  };
  return (
    <div className="galerija" id="projekti">
      <div className="galerija-grid">
        {projektiArray.map(({ id, kvadratura }) => (
          <div key={id} onClick={() => showProjektDetails(id)}>
            <ImageWithFallback
              imgSrc={`/images/${id}${kvadratura}/naslovnica.webp`}
              alt={`Naslovnica projekta ${id}${kvadratura}`}
              height="100%"
            />
            <span className="besedilo">
              {id} <span className="stevilka">{kvadratura}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projekti;
