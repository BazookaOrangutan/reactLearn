import React, {Component} from "react";
class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log('comonentDidMount');
        console.log(this.state);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        console.log(this.state);
    }

    componentWillUnmount(){
        
    }

    render(){
        console.log('render');
        const handlerClick = () =>{
            console.log('click');
            this.setState({count:this.state.count + 1});
        }
        return(
            <div>
                <h1>Заголовок</h1>
                <button onClick={handlerClick}>+</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Count;