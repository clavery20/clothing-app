import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagsaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.sagas';
import rootSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagsaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default {store, persistor};