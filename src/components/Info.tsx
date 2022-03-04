import React from 'react';

interface IProps{
    Nama : string;
    Kelas : string;
    isMorning : boolean;
}

class info extends React.Component<IProps> {
    constructor(props:any){
        super(props);
        this.state = {
            Nama : 'Dani',
            Kelas : "XA",
            Pagi : true,
        }
    }
}

class Info extends React.Component<IProps> {
    render () {
        return (
            <>
            <h2>Nama: {this.props.Nama}</h2>
            <h1>Kelas: {this.props.Kelas}</h1>
            <h1>Paagi: {this.props.isMorning}</h1>
            </>
            );
    }
}

export default Info