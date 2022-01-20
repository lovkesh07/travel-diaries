// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete';


// const options = {

//   params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
//   }
// };


// export const getPlacesData = async () => {
//   try{
//     const {data:{data}} = await axios.get(URL, options);

//     return data;
//   }catch(error){
//       console.log(error)
//   }
// }


// export const getWeatherData = async (lat,lng) => {
//   try{
//     const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather' , {
//       params: {

//         lat: lat,
//         lon: lng,
//       },
//       headers: {
//         'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
//       }
        
//     });

//     return data;
//   }catch(error){
//       console.log(error)
//   }
// }







import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}locations/v2/auto-complete`, {

                                         //    'https://travel-advisor.p.rapidapi.com/${type}locations/v2/auto-complete'

      
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key':'850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather` , {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '850d5affb0msh5f331611f71a851p1a9329jsn0a69a4070853'
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};