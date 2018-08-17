import React, { Component } from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import Cardlist from '../components/Cardlist';
import {Doctors} from '../components/Doctors';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Tardis from '../img/Tardis.png';
import './App.css';

import { setSearchField} from '../Action';


const particlesOptions = {
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 3000,
      }
    },
    shape:{
      type: 'image',
      stroke:{
        width : 3,
        color: '#d5deac'
      },
      polygon:{
        polygon_nb_sides: 5
      },
      image:{
        src: `${ Tardis }`,
        width: 200,
        height: 300}
    },
    size: {
        value: 50
    },
    line_linked: {
      opacity: 0
    },
    move: {
      enable: true,
      speed: 19
    },
    interactivity: {
      onclick:{
        enable: true,
        mode: 'bubble'
      }
    }
  }
};

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
    Doctors: Doctors,
    // searchfield: ''
    }
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const { Doctors } = this.state;
    const { searchField, onSearchChange } = this.props;
    let filteredDoctors ;
    if(searchField === "1"){
      filteredDoctors = Doctors.filter(Doctors =>{
        return Doctors.name.toLowerCase().includes("william hartnell");
      })
    }else if(searchField.length === 1 && !isNaN(searchField)){
      filteredDoctors = Doctors.filter(Doctors =>{
        return Doctors.name.toLowerCase().slice(0, 1).match(searchField.toLowerCase());
      })
    }else{
        filteredDoctors = Doctors.filter(Doctors =>{
        return Doctors.name.toLowerCase().includes(searchField.toLowerCase());
      })
    }
    
    return(
      <div className="App tc">
        <Particles className= 'particles'
              params={particlesOptions}
              props= {Tardis}
        />
        <h1>POLICE BOX</h1>
        <Searchbox searchChange= {onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
              <Cardlist Doctors = {filteredDoctors}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
