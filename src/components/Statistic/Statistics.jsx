import data from './data.json';
import { StatisticItem } from './StatisticItem';
import styleStat from './Statistics.module.css'

export const Statistics = () => {
    return (
<section className={styleStat.statistics}>
  <h2 className={styleStat.title}>Upload stats</h2>

  <ul className={styleStat.list}>
      {data.map(el => {
         return <StatisticItem
         label = {el.label}
         percentage = {el.percentage}
         key = {el.id}
         s = {styleStat}  
         random = {getRandomHexColor()}
         /> 
      })}
  </ul>
  <ul className={styleStat.list}>
      {data.map(el => {
         return <StatisticItem
         label = {el.label}
         percentage = {el.percentage}
         key = {el.id}
         s = {styleStat}
         random = {getRandomHexColor()}
         /> 
      })}
  </ul>
  <ul className={styleStat.list}>
      {data.map(el => {
         return <StatisticItem
         label = {el.label}
         percentage = {el.percentage}
         key = {el.id}
         s = {styleStat}
         random = {getRandomHexColor()}
         /> 
      })}
  </ul>
  <ul className={styleStat.list}>
      {data.map(el => {
         return <StatisticItem
         label = {el.label}
         percentage = {el.percentage}
         key = {el.id}
         s = {styleStat}
         random = {getRandomHexColor()}
         /> 
      })}
  </ul>
  <ul className={styleStat.list}>
      {data.map(el => {
         return <StatisticItem
         label = {el.label}
         percentage = {el.percentage}
         key = {el.id}
         s = {styleStat}
         random = {getRandomHexColor()}
         /> 
      })}
  </ul>
</section>
    )
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

