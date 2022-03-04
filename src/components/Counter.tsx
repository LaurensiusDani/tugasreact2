import React from 'react';
import { isThisTypeNode } from 'typescript';

interface IProps {
    counter : number;
    handleAppState() : void;
}

class counter extends React.Component<IProps> {
    // constructor(props :any){
    //     super(props);

    //     this.handleClick=this.handleClick.bind(this);

    state = {
        counter : 0
    }

    handleClick = () => {
        const { counter } = this.state
        this.setState({counter: counter + 1});
    }
    
    render() {
        const { counter } = this.state
        return (
            <>
            <h1>{this.state.counter}</h1>
            <button type="button" onClick={this.handleClick}>
            Click me</button>
            </>
        )
    }
}
export default counter