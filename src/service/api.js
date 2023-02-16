import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e6dd013832438287848010ce0261a371'

export const getData = async(city ,country) =>
{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}