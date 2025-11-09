import projektiData from "../../assets/data/projekti";

const ProjektMore = ({ projektId }) => {
  const pData = projektiData.find((el) => el.id === projektId);

  return (
    <div className="projekt-more-info">
      <div className="sidebar">
        <div className="mobile-join">
          <div className="projekt-number">
            <span>
              {pData.letter}
              {pData.number}
            </span>
          </div>
          <div className="projekt-text">
            <span>{pData.text}</span>
          </div>
        </div>

        <div className="projekt-tloris">
          <img
            src=""
            width="100%"
            height="100"
            style={{ backgroundColor: "black" }}
          />
        </div>
      </div>
      <div className="main-gallery">
        <img src="./src/assets/images/2-1-spalnica.jpg" width="300" />
        <img src="./src/assets/images/2-1-spalnica.jpg" width="150" />
        <img src="./src/assets/images/2-1-spalnica.jpg" width="200" />
        <img src="./src/assets/images/2-1-spalnica.jpg" width="150" />
        <img src="./src/assets/images/2-1-spalnica.jpg" width="150" />
        <img src="./src/assets/images/2-1-spalnica.jpg" width="300" />
      </div>
    </div>
  );
};

export default ProjektMore;

/*
TODO:
Tu bi tut rabla vedt, če je omejeno št. slik, al če se bo slajdal v desno, kaj se zgodi ob robu...
*/
