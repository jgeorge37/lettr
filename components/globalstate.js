import React from 'react';
import SignInContext from '../components/context';

export default class GlobalState extends React.Component {

  constructor() {
    super()

    this.state = {
      signedin: false
    }
  }

  togglesignin = () => {
    this.setState({signedin: !this.state.signedin})
  }

render(){
 return (
  <SignInContext.Provider
   value={{
    signedin: this.state.signedin,
    togglesignin: this.togglesignin
   }}
  >
    {this.props.children}
  </SignInContext.Provider>
 );
 }
}
