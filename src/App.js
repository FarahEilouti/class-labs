import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './components/data.json';
import Select from './components/Select';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectBeast: {},
      show:false
      
    }
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
      <Main beastData = {data} myFunction = {this.myFunction}/>
      <Footer />
      <Select showModel= {this.state.show} closeCard = {this.closeCard} selectBeast = {this.state.selectBeast}/>
    </div>
    )
  }

}

export default App;