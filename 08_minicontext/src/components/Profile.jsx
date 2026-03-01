import React, {useContext} from 'react';
import userContext from '../context/userContent';

const Profile = ({ props }) => {
  const {user} = useContext(userContext)

  if(!user) return <div>Please Login</div>
  return <div>Welcome {user.username}</div>
};

export default Profile;