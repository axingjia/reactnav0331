import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import MainComponent from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
      <Provider store={store}>
          
            <div className="App">
              <MainComponent />
            </div>
          
        </Provider>
  );
}

export default App;
