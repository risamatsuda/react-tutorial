import React, { Component } from 'react';

const App = () => {
  return <Counter />
}

class Counter extends Component {
  constructor (props){
    super(props);
    this.state = {
      value: 0
    }
  }
  //インクリメントする関数
  onIncrement = () =>{
    this.setState({value: this.state.value +1});
  }

  //デクリメントする関数
  onDecrement = () =>{
    this.setState({value: this.state.value -1});
  }

  //リセットする関数
  onReset = () =>{
    this.setState({value: 0});
  }

  render(){
    return(
      <div>
        <div>カウント値: {this.state.value}</div>
        <div>
          <button type ="button" onClick = {this.onIncrement}>△</button>
          <button type ="button" onClick = {this.onDecrement}>▽</button>
        </div>
        <div>
          <button type ="button" onClick = {this.onReset}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;