import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  addBot = () => {
    console.log("already added")
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.userBots.map(bot => < BotCard bot={bot} addBot={this.addBot} key={bot.id}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
