import axios from "axios";

const getCharacters = () => {
    return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        return response.data;
    })
}

export { getCharacters };