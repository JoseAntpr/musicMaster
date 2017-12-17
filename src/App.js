import React, {Component} from 'react'
import './app.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('this.state', this.state)
    }
    render(){
        return(
            <div className="app">
                <div className="app-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="Search for an Artist"
                            value={this.state.query}
                            onChange={ e => {this.setState({query: e.target.value})}}
                            onKeyPress={e => {
                                if(e.key === 'Enter'){
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="profile"> 
                    <div>Artis Picture</div>
                    <div>Gallery</div>
                </div>
                <div className="Galley">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App