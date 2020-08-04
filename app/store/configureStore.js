import { applyMiddleware, createStore } from 'redux';
import rootReducers from '../rootReducer';

import thunk from 'redux-thunk';

export default function configureStore () {

    const enhancer = applyMiddleware(thunk);

    const store = createStore(rootReducers, enhancer);

    if (module.hot) {

        module.hot.accept('../rootReducer', () => {

            const nextRootReducer = require('../rootReducer').default;
            store.replaceReducer(nextRootReducer);

        });

    }
    return store;

}