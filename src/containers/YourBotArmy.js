import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  // // handleOnClick = () => {
  // //   let addedBot = 
  // this.setState(previousState => {
  //   userBots: 
  // }) 
    
  // // }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.allBots.map(bot => <BotCard bot={bot} key={bot.id}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
