import React from 'react'
import './Home.scss'

import Logo from '../../static/assets/logos/Logo-Wogo.png'

const Home = () => {
  return (
    <>
      <div className="home-wrapper container">
        <img src={Logo} alt="logo wogo filmes" />
        <h3>
          Aqui as ideias que se transformam em vídeos capazes de conectar pessoas.
          Do roteiro, à produção e à finalização completa de cada projeto.
        </h3>
      </div>
    </>
  )
}

export default Home
