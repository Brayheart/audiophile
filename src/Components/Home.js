import React from 'react';
import header from '../info/assets/home/mobile/image-header.jpg';
import './Home.scss'

const Home = () => {
  return (
    <section>
      <img src={header} alt="" />
      <div className="wrapper">
        <div className="content">Hello, SCSS!</div>
      </div>
    </section>
  );
}

export default Home;
