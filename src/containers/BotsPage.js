import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots: [ ],
      userBots: [ ]
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(json => this.setState({allBots: json}))
  }

  addBots = (botId) =>{
    
     if(this.state.userBots.filter(bot => bot.id == botId) == !true) {
      let botToAdd = this.state.allBots.filter(bot => bot.id === botId)
      this.setState({
       userBots: this.state.userBots.concat(botToAdd)
     })
      
     }
   
        
      
     }
      
    
  
  
  

  render() {
    return (
      <div>
        <BotCollection botInfo={this.state.allBots} addBots={this.addBots}/>
        <YourBotArmy bots={this.state.userBots} />
      </div>
    );
  }

}

export default BotsPage;
