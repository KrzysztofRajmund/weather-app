import {GET_DAY,GET_WEEK} from "./types";


console.log(process.env,"env")

export const getDay = (city) => async (dispatch) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}` ,

      );
  
      if (res.ok) {
        const dayWeather = await res.json();

        dispatch({
          type: GET_DAY,
          payload: dayWeather
          
        });
      
   
      }
    } catch (error) {
      console.log(error);
    }
    
  };


  export const getWeek = (city) => async (dispatch) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}` ,

      );
  
      if (res.ok) {
        const weekWeather = await res.json();

        // console.log(dayWeather,"action")

        dispatch({
          type: GET_WEEK,
          payload: weekWeather
          
        });
      
   
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  

  