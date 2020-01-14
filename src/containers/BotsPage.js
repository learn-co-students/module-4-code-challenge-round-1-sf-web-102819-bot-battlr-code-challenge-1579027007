import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'
import SearchFilter from './SearchFilter.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: [],
      displayBots: [],
      recruitedBots: [],
      thisBot: []
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
      bots: betterBots,
      displayBots: betterBots
    })
  }
  
  recruit = (id) => {
    console.log(id)
    let foundBot = this.state.bots.find(bot => bot.id === id)
    let recruited = this.state.recruitedBots.concat(foundBot)
    this.setState({
      recruitedBots: recruited,
      thisBot: []
    })
    console.log(this.state.recruitedBots)
  }

  recruitPage = (id) => {
    let foundBot = this.state.bots.find(bot => bot.id === id)
    let recruited = this.state.thisBot.concat(foundBot)
    this.setState({
      thisBot: recruited
    })
  }

  removeRecruit = () => {
    this.setState({
      thisBot: []
    })
  }

  handleSearch = (search) => {
    console.log(search)
    if (search !== ''){
      let display = this.state.bots.filter(bot => bot.name.toLowerCase().startsWith(search))
      this.setState ({
        displayBots: display
      })
    } else {
      
      this.setState ({
        displayBots: this.state.bots
      })
    }
  }

  render() {
    let BotPage = <BotCollection recruitPage = {this.recruitPage} botData = {this.state.displayBots}/>
    if (this.state.thisBot.length >= 1){
      BotPage = <BotSpecs botData = {this.state.thisBot} removeRecruit = {this.removeRecruit} recruit = {this.recruit}/>
    }
    return (
      <div> 
        <YourBotArmy recruitedBots= {this.state.recruitedBots} />
        <SearchFilter handleChange = {this.handleSearch}/>
        <br></br>
        {BotPage}
      </div>
    );
  }

}

export default BotsPage;
