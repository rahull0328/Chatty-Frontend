import React, { useState } from 'react'
import './profile.css'
import assets from "../../assets/assets";

const profile = () => {

  const [image, setImage] = useState(false);

  return (
    <div className='profile'>
        <div className="profile-container">
          <form action="">
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
              <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
              Upload Profile Image
            </label>
            <input type="text" placeholder='Enter Your Name' required />
            <textarea placeholder='Write Profile Bio' required></textarea>
            <button type="submit">Save</button>
          </form>
          <img src={image? URL.createObjectURL(image) : assets.logo_icon} className='profile-pic' />
        </div>
    </div>
  )
}

export default profile
