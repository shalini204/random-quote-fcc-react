import { combineReducers,createStore } from "redux";
import QuoteReducer from "./quoteReducer";
import TweetReducer from "./tweetReducer";
const rootReducer = combineReducers({QuoteReducer, TweetReducer});
const store= createStore(rootReducer);

export default store;