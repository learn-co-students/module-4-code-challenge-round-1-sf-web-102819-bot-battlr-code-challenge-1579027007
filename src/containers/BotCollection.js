import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* <h2>Collection of all bots</h2> */}
					{this.props.renderAllBots.map( bot => {
						return <BotCard key={bot.id} bot={bot} addBotToEnlistedArmy={this.props.addBotToEnlistedArmy}/>
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
