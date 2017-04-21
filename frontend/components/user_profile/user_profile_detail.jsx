import React from 'react';

const UserProfileDetail = ({ user, currentUser }) => {
  let hidden = currentUser === user ? '' : 'hidden';
  return(
    <div className='user-profile-detail'>
      <img src={ user.profile_pic_url } />
      <div className='user-details'>
        <div className='username-line'>
          <h2>{ user.username }</h2>
          <button
            className={`edit-user-btn ${hidden}`}
            onClick={() => <Link to={`/users/${currentUser.id}/edit`}/> }>Edit Profile</button>
        </div>

        <div className='post-follows'>
          <p>Post</p>
          <p>Follower</p>
          <p>Following</p>
        </div>
        <p className='description'>{ user.description }</p>
      </div>
    </div>
  );
};

export default UserProfileDetail;
