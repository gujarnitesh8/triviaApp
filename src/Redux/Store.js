//LIBRARIES
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//ASSETS
import rootSaga from './Sagas';       // List of Sagas
import rootReducer from './Reducers'  // List of Reducers
import { sagaMonitor } from './Config';

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
}
const Reducers = persistReducer(persistConfig, rootReducer)
//createSagaMiddleware creates Redux Middleware and connects saga to the redux 
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware, logger);
enhancers.push(applyMiddleware(...middlewares));

export const Store = createStore(
  Reducers,
  compose(...enhancers),
)
//persistStore contains all the data from store
export const Persistor = persistStore(Store);
sagaMiddleware.run(rootSaga);