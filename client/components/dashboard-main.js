import React from 'react'
import { Link } from 'react-router-dom'


const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div> 
          <Link to="/dashboard/dashboard/profile/9465eaa4-071c-4ea3-a592-b54c6deb3f7f"> Go To Profile </Link>
          <Link to="/dashboard"> Go To Root </Link>
        </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
