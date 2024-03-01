
export const actionBusket = (product) => {
    return async (disptach) => {
        disptach({type:'ADD_TO_BUSKET', payload: product})
    }
}