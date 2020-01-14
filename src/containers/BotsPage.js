import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bots: [],
       userBots: []
    }
  }
  

  fetchBots = async() =>{
    const response = await fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    const apiData = await response.json()
    console.log(apiData)
    this.setState({
      bots: apiData
    })
  }

  componentDidMount(){
    this.fetchBots()
  }

  render() {
    return (
      <div>
        <BotCollection allBots={this.state.bots}/>
        <YourBotArmy allBots={this.state.bots} userBots={this.state.userBots} />
      </div>
    );
  }

}

export default BotsPage;
