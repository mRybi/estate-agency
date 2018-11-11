import { Location } from 'history';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { applyMiddleware, createStore, combineReducers } from '../../node_modules/redux';


export class RootState {
  location: Location;
  type: any
}

export const applicationHistory = createHistory();
const historyRouterMiddleware = routerMiddleware(applicationHistory);

const rootReducer = combineReducers({
  router: routerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(historyRouterMiddleware));
