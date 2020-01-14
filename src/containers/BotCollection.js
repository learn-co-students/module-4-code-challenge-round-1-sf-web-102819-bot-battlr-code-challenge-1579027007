import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  constructor() {
	  super()
	  this.state = {
		  currentBot: ""
	  }
  }

  viewBot = (botId) => {
	let botIndex = this.props.bots.findIndex(bot => bot.id === botId)
	this.setState({currentBot: this.props.bots[botIndex] })
  }

  unviewBot = () => {
	  this.setState({currentBot: ""})
  }

  render(){
	  let botCards = 
	  	<div className="row">
    		  {this.props.bots.map(bot => < BotCard bot={bot} key={bot.id} botClick={this.viewBot}/>)}
    		  Collection of all bots
    	</div>
  	return (
  	  <div className="ui four column grid">
		{this.state.currentBot !== "" ? <BotSpecs bot={this.state.currentBot} unviewBot={this.unviewBot} addBot={this.props.addBot}/> : botCards}
		</div>
    		
  	);
  }

};

export default BotCollection;
