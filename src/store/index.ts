import { Location } from 'history';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, combineReducers, Reducer } from 'redux';
import { Logger } from '../common/loggerMiddleware';

export class RootState {
  location: Location;
}

export const applicationHistory = createHistory();
const historyRouterMiddleware = routerMiddleware(applicationHistory);

const rootReducer = combineReducers({
  router: routerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(Logger, historyRouterMiddleware));
