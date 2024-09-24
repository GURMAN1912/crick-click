import React from 'react'
import Match from '../components/match/Match'
import LiveScore from '../components/livescore/LiveScore'

const MatchDetails = () => {
  return (
    <div>
    <Match />  
    <LiveScore className=""/> 
    </div>
  )
}

export default MatchDetails
