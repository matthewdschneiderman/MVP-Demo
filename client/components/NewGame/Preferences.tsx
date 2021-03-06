import React from "react";
import { Prefs } from './../../app';
// import './main.scss'

interface IProps {
  prefs: Prefs,
  setPrefs: React.Dispatch<React.SetStateAction<Prefs>>
}

interface Option {
  title: string,
  set: number[]
}

const Preferences: React.FC<IProps> = (props) => {

  const options: Option[] = [{title: 'Rounds', set: [3, 5, 7, 10]},
    {title: 'Questions', set: [2, 3, 4, 5]},
    {title: 'Time', set: [15, 30, 45, 60]}];


  return (
    <div className='prefs'>
      {options.map((option) => {
        return <div className='prefCol' key={option.title}>
          <div style={{width: '100%', height: '8%', border: '1px solid black', backgroundColor: 'white'}}>
            {option.title}
            </div>
          {option.set.map((pref) => {
            var selected: Boolean = props.prefs[option.title] === pref;
              return <div className={selected ? 'selectedPref' : 'prefItem'} key={pref} onClick={() => {
                var newPrefs = props.prefs;
                newPrefs[option.title] = selected ? null : pref;
                props.setPrefs(newPrefs);
          }}>
            {pref}
            </div>
        })}
        </div>
      })}
    </div>
  )
}

export default Preferences;