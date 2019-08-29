import React from 'react';
import ReactDOM from 'react-dom';
import SeasonPredict from './season'
import Spinner from './spinner'
class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={lat:null,cord:0.7693854934834089,lon:32432432}; 
    }
        
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        (position)=>{
            console.log(position);
            this.setState({lat:position.coords.latitude})
            this.setState({cord:position.coords.longitude})
        },
        (err)=>{console.log(err)}
        );
    }
    
    //we have to write render method
    render(){

                {/* latitute_1:{this.state.lat}
                longitute_1:{this.state.cord} */}
            if(!this.state.err && this.state.lat){
                return <SeasonPredict lat={this.state.lat} lon={this.state.lon}/>;
            }    
            return <Spinner/>
    };
};

ReactDOM.render(<App/>,document.getElementById('root'));