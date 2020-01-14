import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: [],
      recruitedBots: []
    }
  }
  
  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(response => response.json())
    .then(json => {this.setState({
      bots: json
    })
    console.log(this.state.bots)
    this.addRecruitmentVariable()
  })
  }

  addRecruitmentVariable = () => {
    let betterBots = this.state.bots.map(bot => ({...bot, recruited: false}))
    this.setState({
      bots: betterBots
    })
  }
  
  recruit = (id) => {
    let foundBot = this.state.bots.find(bot => bot.id === id)
    let recruited = this.state.recruitedBots.concat(foundBot)
    this.setState({
      recruitedBots: recruited
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy recruitedBots= {this.state.recruitedBots} />
        <BotCollection recruit = {this.recruit} botData = {this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
