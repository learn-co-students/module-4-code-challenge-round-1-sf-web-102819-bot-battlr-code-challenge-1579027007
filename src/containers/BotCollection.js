import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "../containers/YourBotArmy";

class BotCollection extends React.Component {
  
	constructor() {
		super()
		this.state = {
			YourBotArmyState: false,
			YourBotArmyArray: []
		}
	}
	
	YourBotArmyFunction = (event) => {
		  this.setState(prevState => ({
			YourBotArmyState: !prevState.YourBotArmyState,
			YourBotArmyArray: event
			}) )
	}

	// botArmyLogic = (event) => {     // conditional for true/false
		// if (this.state.YourBotArmyState !== false) {
		//   return this.state.YourBotArmyArray
		// }
		// else {
		//   return ""
		// }
	//   }

  render(){
  	return (

	<div> <YourBotArmy YourBotArmyState={this.state.YourBotArmyArray} /> 
  	  <div className="ui four column grid">
	
    		<div className="row">
			{this.props.allBots.map(bot =>
        <BotCard bot={bot} key={bot.id} YourBotArmyFunction={this.YourBotArmyFunction} YourBotArmyState={this.state.YourBotArmyState}/>)}

    		</div>
  	  </div>
	</div>
  	);
  }

};

export default BotCollection;
