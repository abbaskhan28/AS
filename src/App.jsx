import { useState } from "react";
import "./App.css";
import ChickuSticker from "./Pages/ChickuSticker";
import CheckuNo from "./Pages/CheckuNo";

function App() {
  const [showCheckuNo, setShowCheckuNo] = useState(false);

  if (showCheckuNo) {
    return <CheckuNo />;
  }

  return (
    <div>
      <ChickuSticker onNoClick={() => setShowCheckuNo(true)} />
    </div>
  );
}

export default App;
