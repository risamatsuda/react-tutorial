import react from 'react';
import { useState } from 'react';

const Name = () => {
  //名前の状態を管理する
  let [fistName, setFirstName] = useState();
  //苗字の状態を管理する
  let [lastName, setlastName] = useState();
  return (
    <div>
      <input 
        type="text" 
        //入力された値をfistNameにセットする
        onChange = {(e) => setFirstName(e.target.value)}
      />
       <input 
        type="text" 
        //入力された値をlastNameにセットする
        onChange = {(e) => setlastName(e.target.value)}
      />
      <p>私の名前は {fistName} {lastName}です</p>
    </div>
  )
}

export default Name;