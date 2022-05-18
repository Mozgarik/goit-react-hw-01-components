import friends from './friends.json'
import { FriendlistItem } from './FriendslistItem'
import s from './friendsList.module.css'

export const Friendlist = () => {
    return (
        <ul className={s.friends}>
            {friends.map(el => {
               return <FriendlistItem 
               isOnline = {el.isOnline}
               avatar = {el.avatar}
               name = {el.name} 
               key = {el.id}
               /> 
            })}
        </ul>
    )
} 
