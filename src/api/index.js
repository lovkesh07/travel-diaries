import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  //method: 'GET',
  //url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
  }
};

export const getWeatherData = async () => {
    try {
      
        const {data: {data }} = await axios.get( URL,options);
          //params: { lat, lon: lng },
        //  headers: {
         //   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
        //    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
       //   },
       // });
  
        return data;
      
    } catch (error) {
      console.log(error);
    }
  }