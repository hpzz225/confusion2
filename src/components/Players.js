import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";
export default class Player extends Component {
  render() {
    return (
      <div className="container">
        {Players.map((Player) => (
          <div className="column" key={Player.id}>
            <div className="card">
              <img src={Player.img} alt="#"></img>
              <h3>{Player.name}</h3>
              <p className="title">{Player.club}</p>
              <p>
                <button>Detail</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
