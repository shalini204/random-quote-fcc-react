import { NEW_QUOTE, TWEET } from './actionTypes';

export const newQuote =  {  
    
        type: NEW_QUOTE
        
};

export const addTweet = (quote,author) => {
    return {
        type: TWEET,
        quote,
        author
    };
    
};