import { useEffect, useState } from "react";
import Domov from "./Domov";
import Info from "./Info";
import Projekti from "./Projekti";
import ProjektMore from "./ProjektMore";

const Content = ({
  currentContent,
  setCurrentContent,
  projektId,
  setProjektId,
}) => {
  return (
    <div id="content">
      {(() => {
        switch (currentContent) {
          case "projekti":
            return (
              <Projekti
                setCurrentContent={setCurrentContent}
                setProjektId={setProjektId}
              />
            );
          case "info":
            return <Info />;
          case "projekt-more":
            return <ProjektMore projektId={projektId} />;
          default:
            return <Domov />;
        }
      })()}
    </div>
  );
};

export default Content;
