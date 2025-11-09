import { useState } from "react";
import "./base.css";
import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CursorFollower from "./components/misc/CursorFollower";

function App() {
  const [currentContent, setCurrentContent] = useState("domov");
  const [projektId, setProjektId] = useState(undefined);

  return (
    <>
      <CursorFollower />
      <Header
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <Content
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        projektId={projektId}
        setProjektId={setProjektId}
      />
      <Footer />
    </>
  );
}

export default App;
