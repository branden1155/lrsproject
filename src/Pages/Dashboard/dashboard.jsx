import React from 'react'
import './dashboard.css'
import VideoBackground from '../../Components/HomeVideoHero/videoHero'
import OurServicesCard from '../../Components/ourServices/ourServicesCard'
import InAction from '../../Components/Action/inAction'
import LearnAboutUs from '../../Components/Learn/learnAboutUs'
import Footer from '../../Components/Footer/footer'

const dashboard = () => {
  return (
    <div className='flex flex-col'>
      <VideoBackground />
      <OurServicesCard />
      <InAction />
      <LearnAboutUs />
    </div>
  )
}

export default dashboard