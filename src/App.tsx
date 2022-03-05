import React from 'react';
import Info from './components/Info'
import { apiCall } from './services';
import { API_URL } from './constants';
import { IUsersResponse } from './interface';
import './App.css';

interface IState {
  counter : number;
  data: IUsersResponse[]
}

class App extends React.Component <{}, IState>{
  constructor(props: {}) {
      super(props);
      this.state = {
          counter: 0
          data: [],
      }
  }
  
  componentDidMount(){
    apiCall(API_URL.users)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    }) 
  }

  componentDidUpdate(){
      console.log('did update')
  }

  // renderInfo = () => {
  //     const { counter } = this.state;
  //     if (counter % 2 === 0) {
  //         return <Info />
  //     }
  //     return null;
  // }

  render() {
    const { counter } = this.state;
    return (
        <div className='app-wrapper'>
            {/* <button> onClick={() => this.setState({counter : counter + 1})}>click me</button>
            <h1>{counter}</h1>
            <br />
            {this.renderInfo()} */}
        </div>
    )
  }
}

export default App;