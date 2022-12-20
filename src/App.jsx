import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Kali",
      breed: "Siamese Mix",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Loki",
      breed: "Tuxedo Bowtie",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Bebay",
      breed: "Salt & Pepper Black",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
