import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import {
  QueryParamProvider,
  
  transformSearchStringJsonSafe,
} from 'use-query-params';

const queryStringifyOptions = {
  transformSearchString: transformSearchStringJsonSafe,
};


ReactDOM.render(
  <React.StrictMode>
   <Router>
    <QueryParamProvider
      ReactRouterRoute={Route}
      stringifyOptions={queryStringifyOptions}
    >
      <App />
    </QueryParamProvider>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
