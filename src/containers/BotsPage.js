import React from "react";
import BotCollection from "../containers/BotCollection";

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
       allBots: []
    }
  }
  
  componentDidMount() {
    const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    fetch(URL)
      .then(res => res.json())
      .then(result => {
        this.setState({
          allBots: result,
        });
      });
  }


  render() {
    return (
      <div>
        < BotCollection allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
