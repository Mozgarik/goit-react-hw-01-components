import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export const StatisticItem = ({ label, percentage, random }) => {
    return (
        <li className={s.item} style={{ backgroundColor: random}}> 
        <span className={s.label}>{label}</span>
        <span className={s.percentages}>{percentage}</span>
        </li>
    ) 
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    random: PropTypes.string.isRequired,
   }


