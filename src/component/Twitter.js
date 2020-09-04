import React from 'react';


import { connect } from "react-redux";

class Twitter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        //console.log(this.props.tweets);
        return(
            <div>
                {this.props.tweets && 
                    // console.log(this.props.tweets)
                    <ul>
                        {this.props.tweets.map((tweet,index) => {
                            return(
                            <li key={index} style={{color: "white"}}>{tweet.quote} -{tweet.author}</li>
                            )
                            })
                        }
                    </ul>
                
                }                
            </div>

        )
    };

};

const mapStateToProps = (state) =>{
    console.log("tweet props"+ state.TweetReducer);
    return {
        tweets: state.TweetReducer
    }        
};
 
export default connect(mapStateToProps, null)(Twitter);