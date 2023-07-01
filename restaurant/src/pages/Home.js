import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/layout'
import Banner from "../images/banner.jpeg"
import '../styles/homeStyle.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p className='slogan'>Grab best healther food of the TOWN</p>
          <Link to='/menu'>
          <button> <p className='innerButton'>ORDER NOW</p></button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
