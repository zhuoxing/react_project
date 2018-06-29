import {combineReducers} from 'redux';
import indexList from './indexList';
import details from './details';
import user from './user';

let reducer = combineReducers({
    indexList,
    details,
    user
})

export default reducer;