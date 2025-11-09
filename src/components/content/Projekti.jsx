import projektiData from "../../assets/data/projekti";

const Projekti = ({ setCurrentContent, setProjektId }) => {
  const showProjektDetails = (id) => {
    setProjektId(id);
    setCurrentContent("projekt-more");
  };
  return (
    <div className="galerija" id="projekti">
      <div className="galerija-grid">
        {projektiData.map(({ id, src, letter, number }) => (
          <div key={id} onClick={() => showProjektDetails(id)}>
            <img src={src} alt={`${letter}${number}`} />
            <span className="besedilo">
              {letter} <span className="stevilka">{number}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projekti;

/* TODO: 

Pretvor v seznam da ne bo copy paste

- Dodana senca, da se boljše vid tekst spredaj
- Oranžno bi blo tut kul mal updejtat
- Na hover temnejša senca


Ema pove:
- Koliko projektov ma za pokazat (4?)
- Če več, se odloči kako bodo slajdali in kam bodo usmerjeni (dol ali proti desni)
*/
