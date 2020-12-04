import "./styles.css";
import * as dataBusiness from "./data-business";
import * as utils from "./utils";

const root = document.getElementById("root");

const showMoreInfo = (character) => {
  dataBusiness
    .getCharacterById(character.char_id)
    .then((data) => {
      utils.showCharacter(data);
    })
    .then(
      dataBusiness
        .getRandomQuoteByCharacter(character.name.replace(" ", "+"))
        .then((quote) => {
          utils.showQuote(quote);
        })
        .catch((error) => {
          if (error instanceof TypeError) {
            //Do nothing
          };
        })
    );
};

dataBusiness.getCharacters().then((characters) => {
  const nodes = [];

  root.innerText = "";

  for (let character of characters) {
    const node = utils.createCharacterRow(character);
    node.onclick = () => {
      showMoreInfo(character);
    };
    nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
})
