import SportCard from './Sporcard';
import type { SportsType } from './type';

const sports: SportsType[] = [
  {name:'football',player:11},
  {name:'chess',player:4}
]


export default function Sports() {
  return (
    <div>
      {

        sports.map(item => <SportCard props= {item}></SportCard>)
      }
    </div>
  )
}