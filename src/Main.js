import React from 'react';
//redux
import {Provider} from 'react-redux';
import store from './store'


function Main() {
  return (
    <Provider store={store}>
 <div className="Main">
     HELLO
    </div>
    </Provider>
   
  );
}

export default Main;
