import React from 'react'
import './Home.scss'

import Jamaica from '../../static/assets/imgs/jamaicasite.png'

const Home = () => {
  return (
    <>
      <div className="home-wrapper container">
        <img src={Jamaica} alt="logo wogo filmes" />
      </div>
    </>
  )
}

export default Home
