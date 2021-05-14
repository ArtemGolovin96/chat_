import React, { Component } from 'react';
import Chats from './Chats';

class Mes extends Component {

  render() {
    return (
      <main className="message">
          {
              this.props.arrmess.map((el) => {
                <h6 className="namemess">{el.name}</h6>
              })
          }
      </main>
    );
  }
}

export default Mes;