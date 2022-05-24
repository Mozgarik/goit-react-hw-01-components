import { FriendlistItem } from './FriendslistItem'
import s from './friendsList.module.css'
import PropTypes from 'prop-types';

export const Friendlist = ({friendsList}) => {
    return (
        <ul className={s.friends}>
            {friendsList.map(el => {
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


Friendlist.propTypes = {
   friendsList: PropTypes.array.isRequired
   }