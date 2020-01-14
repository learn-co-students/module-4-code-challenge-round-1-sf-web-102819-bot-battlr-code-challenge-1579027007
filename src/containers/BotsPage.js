import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      userBots: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => {
      this.setState({bots: json})
    })
  }

  addBot = (botId) => {

    let botIndex = this.state.userBots.findIndex(bot => bot.id === botId)
    if (botIndex === -1){
      let foundBotIndex = this.state.bots.findIndex(bot => bot.id === botId)
      this.setState(previousState => {
        previousState.userBots.push(previousState.bots[foundBotIndex])
        return previousState
      })}
  }

  removeBot = (botId) => {

    let botIndex = this.state.userBots.findIndex(bot => bot.id === botId)
    this.setState(previousState => {
      previousState.userBots.splice(botIndex, 1)
      return previousState
    })
  }
  

  render() {
    return (
      <div>
        <YourBotArmy userBots={this.state.userBots} addBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
