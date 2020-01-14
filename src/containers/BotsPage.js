import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
// import BotSpec from '../components/BotSpec'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      allBots: [],
      enlistedArmy: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        allBots: data
      })
    })
  }


  handleAddBotToEnlistedArmy = (botId) => {
    // console.log(event.target)
    // this.setState(prevState => {
    //   enlistedArmy: [...prevState.enlistedArmy, newBot]
    // })

    let botIndex = this.state.enlistedBot.findIndex(bot => bot.id === botId)
    if (botIndex === -1){
        let notInEnlistedBotIndex = this.state.bots.findIndex(bot => bot.id === botId)
        this.setState(previousState => {
          return {
            enlistedArmy: [...previousState.enlistedArmy, previousState.allBots.botId]
          }
        }
      }
    }



  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy renderEnlistedArmy={this.state.enlistedArmy} />

        <BotCollection renderAllBots={this.state.allBots} addBotToEnlistedArmy={this.handleAddBotToEnlistedArmy} />


        {/* <BotSpec /> */}
      </div>
    );
  }

}

export default BotsPage;
