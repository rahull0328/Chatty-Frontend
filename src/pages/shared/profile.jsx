import React from 'react'
import './profile.css'
import assets from "../../assets/assets";

const profile = () => {
  return (
    <div className='profile'>
        <div className="profile-container">
          <form action="">
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
              <img src={assets.avatar_icon} alt="" />
              Upload Profile Image
            </label>
            <input type="text" placeholder='Enter Your Name' required />
            <textarea placeholder='Write Profile Bio' required></textarea>
            <button type="submit">Save</button>
          </form>
          <img src={assets.logo_icon} className='profile-pic' />
        </div>
    </div>
  )
}

export default profile
