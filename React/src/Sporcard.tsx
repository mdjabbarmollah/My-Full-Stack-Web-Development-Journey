import type { SportsType } from './type';
export default function SportCard({ props }: { props: SportsType }) {
  return (
    <div className="etasuducssersatheconnectkorarjonnoecharaetarsathekonosomporkoneikonokisur">
      <h5>name:{props.name}</h5>
      <p>palyer:{ props.player}</p>
    </div>
  )
}