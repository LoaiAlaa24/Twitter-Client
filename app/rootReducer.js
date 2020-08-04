
import { combineReducers } from 'redux';
import homePageReducer from "./components/HomePage/reducer"
import followersPageReducer from "./components/FollowersPage/reducer"
import tabsScreenReducer from "./components/TabsScreen/reducer"

const appReducer = combineReducers({
    homePageReducer,
    followersPageReducer,
    tabsScreenReducer
});

const mainReducer = (state, action) => {

  return appReducer(state, action);
  
};

export default mainReducer;