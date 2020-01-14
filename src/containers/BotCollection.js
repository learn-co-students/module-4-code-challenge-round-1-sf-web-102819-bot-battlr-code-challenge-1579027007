import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
	  			{this.props.botData.map(bot => <BotCard recruit = {this.props.recruit} key = {bot.id} botData ={bot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
