import './App.css';
import React from 'react'

import { Button } from 'react-bootstrap'
import Personne from './Components/Personne'


class App extends React.Component {
  state = {
    show: false
  }
    handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  
  render (){
    return (
    <div className="App">
     <Button variant="dark"
          onClick={this.handleShow}
          className="btn">details</Button>
                     {this.state.show &&
                    <Personne />

                    
        }
    </div>
    );
    }
}

export default App;
