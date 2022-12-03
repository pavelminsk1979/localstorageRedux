


const initialState = {
    showValue:1
}
export type InitialStateType = typeof initialState

export const counterReduser= (state: InitialStateType = initialState,
                           action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PLAS-ONE':{
            return {...state,  showValue:state.showValue+1}
        }
        case "SET-VALUE-FROM-LOCALSTORAGE":{
            return {...state,showValue:action.valueLocalstorage }
        }

        default:
            return state
    }
}
export type ActionsType=plasOneACType|setValueFromLocalstorageACType


export type plasOneACType = ReturnType<typeof plasOneAC>
export const plasOneAC = () => ({type: 'PLAS-ONE'} as const)


export type setValueFromLocalstorageACType = ReturnType<
    typeof setValueFromLocalstorageAC>
export const setValueFromLocalstorageAC = (valueLocalstorage:number) => ({
    type: 'SET-VALUE-FROM-LOCALSTORAGE',
    valueLocalstorage
} as const)

