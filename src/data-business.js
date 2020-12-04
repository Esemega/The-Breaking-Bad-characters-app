import axios from "axios";

const getCharacters = () => {
    return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        return response.data;
    })
}

const getCharacterById = (id) => {
    return axios
    .get("https://www.breakingbadapi.com/api/characters/" + id)
    .then(response => {
        return response.data[0];
    })
}

const getRandomQuoteByCharacter = (characterName) => {
    return axios
    .get("https://www.breakingbadapi.com/api/quote/random?author=" + characterName)
    .then(response => {
        return response.data[0].quote;
    })
}

export { getCharacters, getCharacterById, getRandomQuoteByCharacter };