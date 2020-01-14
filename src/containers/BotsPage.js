import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
// import BotSpec from '../components/BotSpec'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      allBots: [],
      enlistedBots: []
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

  // handleAddBotToEnlistedArmy = bot => {
    // const botId = bot.id
    // console.log(botId)

    // let botIndex = this.state.allBots.findIndex(bot => bot.id === botId)
    // let clickedBot = this.state.allBots[botIndex]
    // // Prevent adding to enlistedBots again
    // if (this.state.enlistedBots.includes(clickedBot)) {
    //   return null
    // } else {
    //   this.setState(previousState => ({
    //     enlistedBots: [
    //         ...previousState.enlistedBots,
    //         previousState.clickedBot
    //       ]

    //   }))
    // }

  // }


  // handleAddBotToEnlistedArmy = botId => {
    // const enlistedBotIndex = this.state.enlistedBots.findIndex( bot => bot.id === botId)

    // if (enlistedBotIndex === -1) {
    //   const allBotIndex = this.state.allBots.findIndex( bot => bot.id === botId)
    //   this.setState( prevState => {
    //     enlistedBots: [...prevState.enlistedBots, prevState.allBots[allBotIndex]]
    //   })
    // }
  // }

handleAddBotToEnlistedArmy = botId => {
  if(this.state.enlistedBots.some(bot => bot.id === botId)) {
    let armyIndex = this.state.enlistedBots.findIndex(bot => bot.id === botId)
    this.state.enlistedBots.splice(armyIndex)
    this.setState({
      enlistedBots: this.state.enlistedBots
    })
  } else {
    let botIndex = this.state.allBots.findIndex(bot => bot.id === botId)
    this.state.enlistedBots.push(this.state.allBots[botIndex])
    this.setState({
      enlistedBots: this.state.enlistedBots
    })
  }
}

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy renderEnlistedArmy={this.state.enlistedArmy} />

        <BotCollection
          renderAllBots={this.state.allBots}
          addBotToEnlistedArmy={this.handleAddBotToEnlistedArmy}
        />

        {/* <BotSpec /> */}
      </div>
    )
  }
}

export default BotsPage
