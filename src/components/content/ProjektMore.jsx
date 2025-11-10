import projektiArray from "../../assets/data/projektiArray.js";
import ImageWithFallback from "../misc/ImageWithFallback.jsx";
import Slider from "./Slider.jsx";

const ProjektMore = ({ projektId }) => {
  const pData = projektiArray.find((el) => el.id === projektId);

  return (
    <div className="projekt-more-info">
      <div className="sidebar">
        <div className="mobile-join">
          <div className="projekt-number">
            <span>
              {pData.id}
              {pData.kvadratura}
            </span>
          </div>
          <div className="projekt-text">
            <p className="text-strong">Projektna naloga:</p>
            <p>{pData.projektnaNaloga}</p>
            <p className="text-strong">{pData.vrsta}</p>
            <p className="text-strong">Kvadratura {pData.kvadratura} m2</p>
            <p className="text-strong">
              {pData.lokacija}, {pData.leto}
            </p>
          </div>
        </div>

        {pData.hasTloris && (
          <div className="projekt-tloris">
            <ImageWithFallback
              imgSrc={`/images/${pData.id}${pData.kvadratura}/tloris.gif`}
              alt={`Tloris projekta ${pData.id}${pData.kvadratura}`}
              width="150px"
              height="150px"
              marginLeft={"auto"}
            />
          </div>
        )}
      </div>
      <div className="main-gallery">
        <Slider
          data={pData}
          switchAll={pData.mainImageCount < pData.staticImageCount}
        />
      </div>
    </div>
  );
};

export default ProjektMore;
