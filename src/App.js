import React, {Component} from 'react'

class App extends Component{
    render(){
        return(
            <div>
                <div className="app-title">Music Master from App</div>
                <div>
                    <input placeholder="Search an artist ..."/>
                    <button>button</button>
                </div>
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