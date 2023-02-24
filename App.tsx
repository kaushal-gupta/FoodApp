import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/Redux/store/store';
import StackNav from './app/Routes';
const App = () => {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
};

export default App;
