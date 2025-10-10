import React from 'react'
import {useParams} from 'react-router-dom';
import ProfileComponent from '../../components/ProfileComponent'

function UserPage() {
  const params = useParams();

  return (
    <div className="container"> <ProfileComponent username={params.username}/></div>
  )
}

export default UserPage
