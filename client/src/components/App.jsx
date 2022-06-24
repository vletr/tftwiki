import React from 'react'
import Calculator from './Calculator.jsx'
import Leaderboard from './Leaderboard.jsx'
import SetList from './SetList.jsx'
import axios from 'axios'
import './App.css';

const posts = [
  {
    name: 'Vladimir',
    image: "https://cdn1.dotesports.com/wp-content/uploads/2022/05/23103006/TFT-Vladimir.jpg",
  },
  {
    name: 'Skarner',
    image: "https://cdn.tft.tools/face_full_wide/tft7_skarner.jpg",
  },
  {
    name: 'Nidalee',
    image: "https://cdnportal.mobalytics.gg/production/2022/05/0a13685d-nidalee.jpg",
  },
  {
    name: 'Nami',
    image: "https://cdn1.dotesports.com/wp-content/uploads/2022/06/10083623/TFT-Nami.jpg",
  },
];

const board = [
  {
      "summonerId": "i9ZBA_AuGxEY2HpWooY197-0U347_LCqfBz89VPS1vvjA259",
      "summonerName": "ttv avrilvv",
      "ratedTier": "ORANGE",
      "ratedRating": 8302,
      "wins": 165,
      "previousUpdateLadderPosition": 1
  },
  {
      "summonerId": "JFFhrgleqlJJvVhVCkab7CJpXb8Y8GsRI7FartecjpBVjCI",
      "summonerName": "JoeyJoJoJoey",
      "ratedTier": "ORANGE",
      "ratedRating": 6434,
      "wins": 126,
      "previousUpdateLadderPosition": 2
  },
  {
      "summonerId": "1LPL5QMKowncaAjKg90HTiOkTBlFjqj_p0G_cTPtN2NPbMnE0rfDiabhIQ",
      "summonerName": "LazyIno",
      "ratedTier": "ORANGE",
      "ratedRating": 6374,
      "wins": 106,
      "previousUpdateLadderPosition": 3
  },
  {
      "summonerId": "Hag2eun5EMU10TeOxq6XpWk23kX8fKBokYkeGved8RI8Ggtk",
      "summonerName": "Zenitszu20",
      "ratedTier": "ORANGE",
      "ratedRating": 6322,
      "wins": 77,
      "previousUpdateLadderPosition": 4
  },
  {
      "summonerId": "nl6RcijVqBlszVx7jBjNwpBMeU_QHuwj8tPzrtny2KAqMMwa",
      "summonerName": "Icecream Caked",
      "ratedTier": "ORANGE",
      "ratedRating": 6166,
      "wins": 117,
      "previousUpdateLadderPosition": 5
  }
]

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'set7',
      champions: posts,
      leaderboard: board,
    }
    this.handleView = this.handleView.bind(this)
    this.getLeaderBoard = this.getLeaderBoard.bind(this)
  }

  handleView (value, e){
    this.setState({view: value})
  }

  getLeaderBoard () {
    axios.get('https://na1.api.riotgames.com/tft/league/v1/rated-ladders/RANKED_TFT_TURBO/top?api_key=RGAPI-2e0fc47c-13f0-438e-952c-4044afb904b1')
      .then(response => {
        this.setState({leaderboard: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount(){
    this.getLeaderBoard()
  }


  render() {

    let currentView;
    if (this.state.view === 'set7') {
      currentView = <SetList champions={this.state.champions}/>
    } else if (this.state.view === 'leaderboard') {
      currentView = <Leaderboard leaderboard={this.state.leaderboard}/>
    } else if (this.state.view === 'calculator') {
      currentView = <Calculator/>
    }

    return(
      <>
        <ul>
          <button className="button" onClick={(e) => this.handleView('set7', e)} >Set 7</button>
          <div className="divider"/>
          <button className="button" onClick={(e) => this.handleView('leaderboard', e)} >Leaderboard</button>
          <div className="divider"/>
          <button className="button" onClick={(e) => this.handleView('calculator', e)} >Calculator</button>
        </ul>
        {currentView}
      </>
    )
  }

}


export default App;