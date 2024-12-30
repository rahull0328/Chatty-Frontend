import React, { useEffect, useState } from 'react'
import './profile.css'
import assets from "../../assets/assets";
import { auth, db } from "../../config/firebase"
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import uploads from '../../lib/uploads';

const Profile = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
      if(!prevImage && image) {
        toast.error("Upload Profile Picture")
      }
      const docRef = doc(db, 'users', uid);
      if(image) {
        const imgUrl = await uploads(image);
        setPrevImage(imgUrl);
        await updateDoc(docRef, {
          avatar: imgUrl,
          bio: bio,
          name: name
        })
      } else {
        await updateDoc(docRef, {
          bio: bio,
          name: name
        })
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user)=> {
      if(user){
        setUid(user.uid)
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if(docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if(docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
      } else {
        navigate('/')
      }
    })
  })

  return (
    <div className='profile'>
        <div className="profile-container">
          <form onSubmit={profileUpdate}>
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
              <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
              Upload Profile Image
            </label>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter Your Name' required />
            <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder='Write Profile Bio' required></textarea>
            <button type="submit">Save</button>
          </form>
          <img src={image? URL.createObjectURL(image) : assets.logo_icon} className='profile-pic' />
        </div>
    </div>
  )
}

export default Profile;