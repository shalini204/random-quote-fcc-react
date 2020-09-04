import { TWEET } from "../actionTypes";

const TweetReducer = (state=[], action) => {
    switch(action.type){
        case TWEET:
            return [
                ...state,
                {quote: action.quote,
                    author: action.author}
            ];
        default:
            return state;
    }
};

export default TweetReducer;