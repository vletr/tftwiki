import React from 'react'
import Calculator from './Calculator.jsx'
import Leaderboard from './Leaderboard.jsx'
import SetList from './SetList.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'set7',
    }
    this.handleView = this.handleView.bind(this)
  }

  handleView (value, e){
    this.setState({view: value})
  }

  render() {

    let currentView;
    if (this.state.view === 'set7') {
      currentView = <div>Set 7</div>
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