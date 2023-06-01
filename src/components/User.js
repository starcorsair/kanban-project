import React from "react";
import { useEffect, useState } from 'react';
import UserAvatar from "../images/user-avatar.png"

function useDelayUnmount(isMounted, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime);
      }
      return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
  }
  const mountedcss = { animation: "inAnimation 250ms" };
  const unmountedcss = { animation: "outAnimation 270ms" };


function User() {
    const [isMounted, setIsMounted] = useState(false);
    const showDiv = useDelayUnmount(isMounted, 250);
  
    return (
      <div className="login_wrapper" onClick={() => setIsMounted(!isMounted)}>
        <img src={UserAvatar} alt="user avatar" className="user_avatar" />
        <div className={isMounted ? 'icon' + ' ' + 'isopen' : 'icon'} />
        {showDiv &&
          <div
            className="login_dropdown"
            css={isMounted ? mountedcss : unmountedcss}
          >
            <button className="login_dropdown_button">Profile</button>
            <button className="login_dropdown_button">Log Out</button>
          </div>
  
        }
      </div>
    );
  }


export default User;
