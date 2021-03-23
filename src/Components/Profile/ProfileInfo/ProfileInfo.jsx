import React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return(
      <div>
     <img src='https://radioiskatel.ru/wp-content/uploads/2018/12/dead-sea-1.jpg' alt='' />
      <div>
          <img src={props.profile.photos.large}    />
          {props.profile.fullName}

      </div>
  </div>
    )
}

export default ProfileInfo;