import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        allBots: data
      })
    })
  }

  addToArmy = (botId) => {
    if(this.state.botArmy.some(bot => bot.id === botId)) {
      let armyIndex = this.state.botArmy.findIndex(bot => bot.id === botId)
      this.state.botArmy.splice(armyIndex)
      this.setState({
        botArmy: this.state.botArmy
      })
    } else {
      let botIndex = this.state.allBots.findIndex(bot => bot.id === botId)
      this.state.botArmy.push(this.state.allBots[botIndex])
      this.setState({
        botArmy: this.state.botArmy
      })
    }
  }

  removeFromArmy = (event) => {
    console.log("removing from army!")
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} addToArmy={this.addToArmy} />
        <BotCollection botInfo={this.state.allBots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
