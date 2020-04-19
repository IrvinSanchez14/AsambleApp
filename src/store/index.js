import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Imports: Redux Root Reducer
import rootReducer from './reducers';
// Imports: Redux Root Saga
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Redux: Store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, createLogger())),
);

let persistor = persistStore(store);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store, persistor};
