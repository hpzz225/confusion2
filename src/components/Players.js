import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="container">
        <div className="column">
          <div className="card">
            <img src="assets/images/cr.jpg" alt="cr"></img>
            <h3>Cristiano Ronaldo</h3>
            <p className="title">Manchester United</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/kante.jpg" alt="kante"></img>
            <h3>Kante</h3>
            <p className="title">Chelsea</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/messi.jpg" alt="messi"></img>
            <h3>Messi</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/neymar.jpg" alt="neymar"></img>
            <h3>Neymar</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/kane.jpg" alt="kane"></img>
            <h3>Kane</h3>
            <p className="title">Totterham</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/haaland.jpg" alt="haaland"></img>
            <h3>haaland</h3>
            <p className="title">Manchester City</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
