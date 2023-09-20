import axios from "axios";

const BASE_URL = 'https://book-finder1.p.rapidapi.com/api';
const options = {
  params: {
    results_per_page: '25',
  },
  headers: {
    'X-RapidAPI-Key': 'd11e0b10admsh5be3aa4109d8519p1e1e01jsn9e190d05d064',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data

}