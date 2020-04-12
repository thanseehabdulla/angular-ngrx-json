import { Action } from "@ngrx/store";


export function SimpleReducer (state:string = 'Hello world', action: Action){
    console.log(action.type, state)
    
    switch(action.type){
        case 'SP':
            return state = 'Hola Mundo'
        case 'EN':
            return state = 'Hello mundo'
        default:
            return state;        
    }
}