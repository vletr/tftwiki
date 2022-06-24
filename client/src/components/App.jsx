import React from 'react'
import Calculator from './Calculator.jsx'
import Leaderboard from './Leaderboard.jsx'
import SetList from './SetList.jsx'

const posts = [
  {
    name: 'Astra',
    image: "https://bit.ly/3BQdTqk",
  },
  {
    name: 'Skarner',
    image: "https://bit.ly/3CQFPvv",
  },
  {
    name: 'Nidalee',
    image: "https://bit.ly/3ERuyMd",
  },
  {
    name: 'Nami',
    image: "https://bit.ly/3CQKSwb",
  },
];

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'set7',
      champions: posts,
    }
    this.handleView = this.handleView.bind(this)
  }

  handleView (value, e){
    this.setState({view: value})
  }

  render() {

    let currentView;
    if (this.state.view === 'set7') {
      currentView = <SetList champions={this.state.champions}/>
    } else if (this.state.view === 'leaderboard') {
      currentView = <Leaderboard/>
    } else if (this.state.view === 'calculator') {
      currentView = <Calculator/>
    }

    return(
      <>
        <div>
          <button onClick={(e) => this.handleView('set7', e)} >Set 7</button>
          <button onClick={(e) => this.handleView('leaderboard', e)} >Leaderboard</button>
          <button onClick={(e) => this.handleView('calculator', e)} >Calculator</button>
        </div>
        {currentView}
      </>
    )
  }

}


export default App;