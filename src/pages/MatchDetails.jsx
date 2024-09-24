import React from 'react'
import Match from '../components/match/Match'
import LiveScore from '../components/livescore/LiveScore'

const MatchDetails = () => {
  return (
    <div>
    <Match /> 
    <div className="pb-10">
    <LiveScore/> 
      </div> 
    </div>
  )
}

export default MatchDetails
