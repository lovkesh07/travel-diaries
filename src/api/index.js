import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete';


const options = {
  //method: 'GET',
//  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
  }
};


export const getPlacesData = async () => {
  try{
    const {data:{data}} = await axios.get(URL, options);

    return data;
  }catch(error){
      console.log(error)
  }
}


export const getWeatherData = async (lat,lng) => {
  try{
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather' , {
      params: {

        lat: lat,
        lon: lng,
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
      }
        
    });

    return data;
  }catch(error){
      console.log(error)
  }
}
