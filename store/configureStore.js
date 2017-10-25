import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialStae) {
    return createStore(rootReducer, initialStae, applyMiddleware(reduxImmutableStateInvariant()));
}