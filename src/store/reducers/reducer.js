import * as actionTypes from '../actions/actionTypes';


const initialState={
    ingredients:null,
    // {
    //     salad:0,
    //     cheese:0,
    //     bacon:0,
    //     meat:0 },
    totalPrice:2,
    ingrPrice:{         //manage by redux
        salad:1,
        cheese:1,
        meat:2,
        bacon:1.5   
    },
    error:null
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.GET_INGR:

            //update totalPrice :long but secure way
            //ingr price
            let totalIngrPrice=0;
            Object.keys(action.ingredients).forEach((ingr)=>{
                totalIngrPrice += action.ingredients[ingr]*state.ingrPrice[ingr];
            });
            
            //base price
            const basePrice=2;
            //total price
            const updatedPrice=basePrice+totalIngrPrice;

            return{
                ...state,
                ingredients: action.ingredients,
                totalPrice: updatedPrice
             
            }
        case actionTypes.ERROR:
            return{
                ...state,
                error:action.error
            }   
        
        case actionTypes.ADD_INGR: {
            // increment ingredient count
            const updatedIngredients={...state.ingredients};
            updatedIngredients[action.ingrType]++
        
            //update price
            const updatedPrice=state.totalPrice+state.ingrPrice[action.ingrType];
        
            //update state
            return {
                ...state,
                ingredients:updatedIngredients,
                totalPrice:updatedPrice
            }
        }
        case actionTypes.REMOVE_INGR:{
             return {
                 ...state,
                 ingredients:{
                     ...state.ingredients,
                     [action.ingrType]:state.ingredients[action.ingrType]-1

                 },
                 totalPrice:state.totalPrice- state.ingrPrice[action.ingrType]
             }
        }

            
        default:
            return state;
    }
    
}

export default reducer;