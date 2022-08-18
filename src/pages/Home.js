import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import MainBanner from '../components/MainBanner/MainBanner'
import TopProducts from '../components/TopProducts/TopProducts'
import UniqueSellingPoint from '../components/UniqueSellingPoint/UniqueSellingPoint'

const Home = () => {
  return (
    <>
      <MainBanner/>
      <TopProducts/>
      <UniqueSellingPoint/>
      <Benefits/>
    </>
  )
}

export default Home