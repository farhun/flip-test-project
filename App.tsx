// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import Navigation from './navigation/Navigation';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
};

export default App;