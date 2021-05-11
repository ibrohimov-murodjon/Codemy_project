import React from 'react'
import './VP.css'
import Footer from '../Footer/Footer'
import Aforizm from '../Aforizms/Aforizms'
import Navbar from '../Navbar/Navbar'
import TopImage from '../../TopImage/TopImage'
import MenuBar from "../../MenuBar/MiddleMenu"
const VideosAbout = () => {
  return (
    <>
    <Navbar />
    <TopImage heading="Campus Camping and Learning Session" lorem="June 6, 2019 by Admin" />
    <MenuBar currentPath=" News" />
    <div className="VideosPage">
      <img src="./images/bg_1.jpg" alt="" className="Vp-images"/>
      <div className="Videos-page-text">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, facere inventore suscipit, et nemo possimus reiciendis dignissimos assumenda, cupiditate at consequatur minima natus deserunt optio ducimus deleniti. Voluptatum, aliquid aspernatur.</p><br />
      <p>Neque officia error quam suscipit necessitatibus placeat impedit, esse, quod voluptates eius facilis dolorum dolores at accusantium totam, quis minima voluptatem quisquam saepe hic. Ipsum cupiditate harum quae earum dolore?</p><br />
      <p>Ea similique vel eligendi ipsam, aspernatur odit itaque inventore. Alias veritatis, mollitia laudantium dignissimos, harum repellendus in tempora at autem velit laboriosam dolorum expedita dolorem commodi quia ipsam, earum et!</p><br />
      <p>Beatae sunt temporibus, at officiis repudiandae quasi dolore, deserunt nemo expedita illum dolor voluptatem reiciendis sit, iure odit harum nihil illo unde repellendus magni. Iusto perferendis quis officiis assumenda consectetur.</p><br />
      <p>Quisquam assumenda eum labore non in eligendi doloremque dicta sequi culpa corrupti reiciendis cupiditate libero accusantium quod, modi ipsa sed debitis deserunt sunt voluptatem sint maxime. Iure maxime consequatur ex.</p><br />
      </div>
      </div>
      <Aforizm />
      <Footer />
    </>
  )
}

export default VideosAbout
