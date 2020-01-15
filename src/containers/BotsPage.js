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
        // console.log(data)
        this.setState({
          allBots: data
        })
      })
  }

  handleAddToArmy = botId => {
    const botIndex = this.state.allBots.findIndex(bot => bot.id === botId)
    // console.log(`botIndex: ${botIndex}`)

    const clickedBot = this.state.allBots[botIndex]
    // console.log(`clickedBot: ${clickedBot}`)

    if (!this.state.enlistedBots.includes(clickedBot)) {
      this.setState(prevState => {
        return {
          enlistedBots: [...prevState.enlistedBots, clickedBot]
        }
      })

      // Removes it from allBots state object
      this.state.allBots.splice(botIndex, 1)
    } else {
      return null
    }
  }

  handleRemoveFromArmy = botId => {
    // console.log(`removeFromArmy botIndex: `)
    const botIndex = this.state.enlistedBots.findIndex(bot => bot.id === botId)
    // console.log(`botIndex: ${botIndex}`)

    const clickedBot = this.state.enlistedBots[botIndex]
    // console.log(`clickedBot: ${clickedBot}`)

    this.setState(prevState => {
      return {
        allBots: [clickedBot, ...prevState.allBots]
      }
    })

    this.state.enlistedBots.splice(botIndex, 1)
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          renderEnlistedBots={this.state.enlistedBots}
          handleBotClick={this.handleRemoveFromArmy}
        />

        <BotCollection
          renderAllBots={this.state.allBots}
          handleBotClick={this.handleAddToArmy}
        />

        {/* <BotSpec /> */}
      </div>
    )
  }
}

export default BotsPage
