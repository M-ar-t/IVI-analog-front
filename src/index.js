import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store';
import Container from 'react-bootstrap/esm/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Container fluid className='bg-dark'style ={{minHeight:'100vh'}}>
          <App />
      </Container>

    </Provider>
  </React.StrictMode>
);
