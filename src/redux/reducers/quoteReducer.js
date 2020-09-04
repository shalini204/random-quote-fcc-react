import { NEW_QUOTE } from '../actionTypes';

const quotes = ["hello","world","universe","galaxy","multi-verse"];
const quotesObject = [
    {
        quote: "hello",
        author: "abc"

    },
    {
        quote: "world",
        author: "acd"
    },
    {
        quote: "universe",
        author: "xyz"
    },
    {
        quote: "multi-verse",
        author: "vogon"
    },
    {
        quote: "betelguese",
        author: "ford"
    },
    {
        quote: "galaxy",
        author: "zaphod"
    }
];
    

const QuoteReducer = (state= quotesObject[0],action) => {
    switch(action.type){
        case NEW_QUOTE:
            const random = Math.floor(Math.random() * quotesObject.length);
            console.log("quotereducer");
            return quotesObject[random];
            //return quotesObject[Math.floor(Math.random() * quotesObject.length)];
            break;
        default:
            return state;    
            
    }
    

};

export default QuoteReducer;