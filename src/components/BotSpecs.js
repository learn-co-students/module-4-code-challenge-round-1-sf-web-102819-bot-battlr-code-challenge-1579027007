import React from "react";

const BotSpecs = props => {
  console.log(props.botData)

  let botType;

  switch (props.botData[0].bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.botData[0].avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.botData[0].name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.botData[0].catchphrase}
            </p>
            <strong>
              Class: {props.botData[0].bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.botData[0].health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.botData[0].damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.botData[0].armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                props.removeRecruit()
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                props.recruit(props.botData[0].id)
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BotSpecs;
