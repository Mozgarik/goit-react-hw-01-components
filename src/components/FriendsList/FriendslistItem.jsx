import PropTypes from 'prop-types';
import st from './friendsList.module.css'

export const FriendlistItem = ({ isOnline, avatar, name }) => {
    return (
            <li className={isOnline ? st.itemOnl : st.itemOff}>
    <span className={isOnline ? st.online : st.offline}>{isOnline}</span>
    <img className={st.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={st.name}>{name}</p>
    </li>
    )
}

FriendlistItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
   }


