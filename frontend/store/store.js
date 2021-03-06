import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/_root_reducer';

export default createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);