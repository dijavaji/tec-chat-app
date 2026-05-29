import React from 'react'
import {useParams} from 'react-router-dom';
import ProfileComponent from '../../components/ProfileComponent'

function UserPage() {
  const params = useParams();

  return (
     <ProfileComponent username={params.username}/>
  )
}

export default UserPage
