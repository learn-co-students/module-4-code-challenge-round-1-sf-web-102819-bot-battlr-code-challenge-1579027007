import React from "react";

const BotCard = (props) => {
  
  let botType;
  
  // let recruit = () => {
  //   let botData = props.botData
  //   props.recruit(botData.id)
  // }

  let recruitPage = () => {
    let botData = props.botData
    props.recruitPage(botData.id)
  }

  switch (props.botData.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.botData.id}
        onClick={(e) => recruitPage(e)}
      >
        <div className="image">
          <img alt="oh no!" src={props.botData.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.botData.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.botData.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.botData.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.botData.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.botData.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
