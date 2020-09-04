import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { newQuote, addTweet } from './redux/action';
import Twitter from './component/Twitter'; 

///const quotes=["hello","world","universe","galaxy","multi-verse"];

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      //quote: quotes[0]
      
    };
    this.generateQuote=this.generateQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
    
  };
  
   generateQuote() {
     console.log("handle Change fired");
     console.log(this.props.quote);
     this.props.generateQuote();
  //   this.setState({
  //     quote: quotes[Math.floor(Math.random() * quotes.length)]
  //   })  
    
   };
   //let newQuote = {this.props.quote};

    tweetQuote() {
     console.log("add to twitter");
     this.props.tweetQuote(this.props.quote, this.props.author);
   };
  
  render(){
    return(
      <div className="App">
        
          <div id="quote-box" className="quoteBox">
            <div id="text" className="text">
              <p>{JSON.stringify(this.props.quote)}</p>          

            </div>
            <div id="author" className="author">
              <p>- {JSON.stringify(this.props.author)}</p>
            </div>
            <div id="new-quote" className="newQuote">
              <button onClick={this.generateQuote}>New Quote</button>
            </div>
            <a id="tweet-quote" class="btn btn-info btn-lg" href="https://twitter.com/intent/tweet?text=female-tech-quote+ – +female-tech-name" target="_blank">tweetQuote</a>
            {/* <div id="tweet-quote" className="tweetQuote">
              <button onClick={this.tweetQuote}>Tweet Quote</button>
            </div> */}
            <div>
              <Twitter/>
            </div>
          </div>
               
      </div>
      

    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    quote: state.QuoteReducer.quote,
    author: state.QuoteReducer.author
    
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    generateQuote: () => {
      setTimeout (()=> {
        dispatch(newQuote)
      },10000);
      
    },
    tweetQuote: (newQuote,newAuthor) =>{
      dispatch(addTweet(newQuote,newAuthor))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
