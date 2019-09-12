import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'; 

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         ingredients:{
    //             salad:1,
    //             cheese:2,
    //             meat:1,
    //             bacon:1

    //         }
    //     };
    // }

    state={
        ingredients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0

        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls</div>

            </Aux>
        )
    }
}

export default BurgerBuilder;