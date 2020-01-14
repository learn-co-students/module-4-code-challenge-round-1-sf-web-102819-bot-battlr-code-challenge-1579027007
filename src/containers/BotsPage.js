import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      displaySelectedBots: [],
      displayBots: [],
      yourArmyBots: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(res => {
      this.setState({
        displayBots: res
      })
    })
  }

  //when a specfic bot is clicked add the bot to the yourArmyBots array.
  //A bot should be enlisted only once: If the bot's ID is in the yourArmyBots array, make it so you can't enlist it.
  addToArmy = (bot) => {
    const botId = bot.id;
    console.log(botId)
    // console.log(this.state.displayBots[0].id)
    const botIdx = this.state.displayBots.findIndex(bot => bot.id === botId);
    const clickedBot = this.state.displayBots[botIdx];
    if(this.state.yourArmyBots.includes(this.state.displayBots[botIdx])) {
      return null
    } else {
      this.setState(prevState => ({
        yourArmyBots: [...prevState.yourArmyBots, clickedBot]
      }))
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.yourArmyBots} addToArmy={this.addToArmy}/>
        <BotCollection displayBots={this.state.displayBots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
