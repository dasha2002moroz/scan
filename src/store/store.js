import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import appReducer from "@store/app-reducer";
import authReducer from "@store/auth-reducer";
import userReducer from "@store/user-reducer";
import dataReducer from "@store/data-reducer";

import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { reducer as formReducer } from 'redux-form'

const persistConfig = {
  key: 'root',
  storage,
}

let reducers = combineReducers({
  app: appReducer,
  token: authReducer,
  user: userReducer,
  form: formReducer,
  data: dataReducer
});
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export { store }

const persistor = persistStore(store)
export {persistor}
