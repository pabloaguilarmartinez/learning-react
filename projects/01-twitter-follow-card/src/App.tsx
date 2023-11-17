import {ReactElement} from "react";
import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.tsx";

const users = [
  {
    username: 'SolanaFndn',
    name: 'Solana Foundation',
    isFollowing: false
  },
  {
    username: 'imdogefather',
    name: 'DogeFather (🦴)',
    isFollowing: true
  },
  {
    username: 'DegenApeAcademy',
    name: 'Degenerate Ape Academy',
    isFollowing: false
  },
  {
    username: 'graydomi',
    name: 'Graydomi',
    isFollowing: true
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