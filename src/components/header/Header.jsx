import logoImg from "../../assets/images/logo.svg";

const Header = ({ currentContent, setCurrentContent }) => {
  return (
    <div id="header">
      <div className="logo">
        <img src={logoImg} alt="Studio9 logo" />
      </div>
      <div className="meni">
        <ul>
          <li>
            <button
              id="domov"
              onClick={() => setCurrentContent("domov")}
              className={currentContent === "domov" ? "active" : ""}
            >
              Domov
            </button>
          </li>
          <li>
            <button
              id="projekti"
              onClick={() => setCurrentContent("projekti")}
              className={currentContent === "projekti" ? "active" : ""}
            >
              Projekti
            </button>
          </li>
          <li>
            <button
              id="info"
              onClick={() => setCurrentContent("info")}
              className={currentContent === "info" ? "active" : ""}
            >
              Info
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
