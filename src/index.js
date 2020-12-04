import "./styles.css";
import * as dataBusiness from "./data-business";
import * as utils from "./utils";

const root = document.getElementById("root");

dataBusiness.getCharacters().then( characters => {
    const nodes = [];
  
    root.innerText = "";
  
    for (let character of characters) {
      const node = utils.createCharacterRow(character);
      nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
      }
})