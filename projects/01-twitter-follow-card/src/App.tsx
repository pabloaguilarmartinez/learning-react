import {ReactElement} from "react";
import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.tsx";

const users = [
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    username: 'kikobeats',
    name: 'Kiko Beats',
    isFollowing: false
  },
  {
    username: 'SolanaFndn',
    name: 'Solana Foundation',
    isFollowing: true
  },
  {
    username: 'twitter',
    name: 'Twitter',
    isFollowing: false
  }
]

export function App(): ReactElement {
  return (
    <section className="App">
      {
        users.map(({username, name, isFollowing}) => (
          <TwitterFollowCard
            key={username}
            username={username}
            name={name}
            initialIsFollowing={isFollowing}
          />
        ))
      }
    </section>
  )
}