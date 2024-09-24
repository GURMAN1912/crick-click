import React from 'react'
import HeroBanner from '../components/hero/HeroBanner'
import LiveScore from '../components/livescore/LiveScore'
import Features from '../components/featured/Features'
import Testimony from '../components/testimony/Testimony'
import BookTicket from '../components/bookTicket/BookTicKet'

export default function HomePage() {
  return (
    <div>
        <HeroBanner />
        <LiveScore />
        <BookTicket />
        <Features />
        <Testimony />
        

    </div>
  )
}
