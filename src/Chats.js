import React, { Component } from 'react';
import Mes from './Mes';

class Chats extends Component {
    state = {
        list: [],
        listMes: [],
    }

  componentDidMount() {
    this.getDataChat().then((data) => {
        this.setState({ list: data })
    })

    // this.getDataMes(2).then((data2) => {
    //     this.setState({ listMes: data2 })
    //     console.log(this.state.listMes)
    // })
  }

  getDataChat = () => {
      return fetch('https://60895abe8c8043001757e9c6.mockapi.io/chats')
      .then((res) => {
          return res.json()
      })
  }

  getDataMes = (id) => {
    return fetch(`https://60895abe8c8043001757e9c6.mockapi.io/chats/${id}/messages `)
    .then((res) => {
        return res.json()
    })
  }

  onClickHandler = (id) => {
    this.getDataMes(id).then((data2) => {
        this.setState({ listMes: data2 })
    })
  }

  render() {
    return (
      <main className="allchats">
        {
            this.state.list.map((el, index1) => {
            
                return  <div className='chats' onClick={() => this.onClickHandler(el.id)}>
                <div className='chat' scrolling="yes">
                    <img src={el.avatar} className="ava"></img>
                        <div className="namecontainer">
                            <h6 className="username">{el.title}</h6>
                            <p className="firsttextmes">Посмотреть сообщение..</p>
                        </div>
                </div>
                <hr></hr>
            </div>
            })
        }
        <div className="mes">
            <hr></hr>
            {
                this.state.listMes.map((mes) => {
                    return <p className="message">{mes.name}: {mes.text}</p>
                })
            }
        </div>
      </main>
    );
  }
}

export default Chats;