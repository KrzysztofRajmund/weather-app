import {GET_DAY,GET_WEEK} from "../actions/types";

const initialState = {
   dayWeather:{},
   weekWeather:{}
}


export default function (state = initialState,action) {
    const {type,payload} = action;
  
    switch (type) {

        case GET_DAY:
            return{
                ...state,
                dayWeather: payload
                
            }

            case GET_WEEK:
                return{
                    ...state,
                    weekWeather: payload
                    
                }
            
            
        default:
            return state;
    }
    

    
}
