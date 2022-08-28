import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './components/data.json';
import Select from './components/Select';
import Hornes from './components/Hornes';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectBeast: {},
      show:false,
      hornesNumber: 0,
      dataBeast: data,

      
    }

  }
  selectNumber = (e) => {
    e.preventDefault()

    this.setState({
      hornesNumber: parseInt(e.target.value),
    })

    var myArray = [];
    var numOfHornes = parseInt(e.target.value);
    myArray = data.filter(item => {
      
      switch (this.state.hornesNumber){

        case 1 : 
          return(item.horns === numOfHornes) 
        case 2 :
          return(item.horns === numOfHornes) 
        case 3: 
          return(item.horns >= numOfHornes)    
        
        default: return true; 
      }
    }) 

    this.setState({
      dataBeast: myArray

    })
  }

  myFunction = (title) => {

    const Select = data.find(card => card.title === title);
    this.setState({
      show:true,
      selectBeast: Select
    })

  }
  closeCard = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return(
    <div id = "background">
      <Header />
      < Hornes selectNumber = {this.selectNumber}/>
      <Main beastData = {this.state.dataBeast} myFunction = {this.myFunction}/>
      <Footer />
      <Select showModel= {this.state.show} closeCard = {this.closeCard} selectBeast = {this.state.selectBeast}/>
    </div>
    )
  }

}

export default App;