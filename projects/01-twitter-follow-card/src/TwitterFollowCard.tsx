import React, {Dispatch, SetStateAction} from "react";
import {useState} from "react";

interface TwitterFollowCardProps {
  username: string,
  name: string,
  initialIsFollowing: boolean
}

export const TwitterFollowCard: React.FC<TwitterFollowCardProps> = (
  {
    username,
    name,
    initialIsFollowing
  }
) => {
  const [isFollowing, setIsFollowing]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(initialIsFollowing);
  const text: string = isFollowing ? 'Following' : 'Follow';
  const buttonClassName: string = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  const handleClick = (): void => {
    setIsFollowing(!isFollowing);
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="Kiko Avatar"
          src={`https://unavatar.io/twitter/${username}`}/>
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Stop Following</span>
        </button>
      </aside>
    </article>
  )
}