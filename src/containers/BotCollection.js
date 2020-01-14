import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botInfo.map(bot => <BotCard info={bot} addBots={this.props.addBots}/>)}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
