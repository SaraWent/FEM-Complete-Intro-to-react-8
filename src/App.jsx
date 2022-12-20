import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Kali" animal="Cat" breed="mixed" />
    <Pet name="Loki" animal="Cat" breed="mixed" />
    <Pet name="Bebay" animal="Cat" breed="mixed" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
