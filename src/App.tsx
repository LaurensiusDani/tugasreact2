import React from 'react';
import Info from './components/Info';
import Counter from './components/Counter';
import Image from './components/Image';
import './App.css';
import { isConstructorDeclaration } from 'typescript';

interface IState {
  counter : number;
}

class App extends React.Component <{}, IState>{
  incrementCounter: any;

  render() {
    this.state = {
      counter : 0
    }

    const incrementCounter = () => {
      const { counter } = this.state;
      this.setState({counter: counter + 1})
    }

    const renderImage = () => {
      const {counter} = this.state;
      if (counter%3 === 0 && counter !== 0){
        return <Image/>
      }
    }

    return(
      <div className='app-wraper'>
        <Info Nama="Dani" Kelas="XA" isMorning={true}/>
        <Counter counter={this.state.counter} handleAppState={this.incrementCounter}/>
        {this.renderImage()}
      </div>
    )
  }
  renderImage(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}
export default App;