import { compose, applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import domainServices from './domainServices';

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const setupStore = (services) => createStore(
    reducers, 
    composeEnhancers(applyMiddleware(...domainServices.map(f => f(services))))
);