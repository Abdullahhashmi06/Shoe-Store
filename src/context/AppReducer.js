export default (state, action) => {
    switch(action.type) {
        // case 'DELETE_TRANSACTION':
        //   return {
        //     ...state,
        //     products: state.products.filter(products => products.id !==
        //     action.payload)
        //   }
        // case 'ADD_TRANSACTION':
        // return {
        //     ...state,
        //     products: [action.payload, ...state.transactions]
        // }
        // default:
        //     return state;
        case 'ADD_TRANSACTION':
            return {
                ...state,
                products: [action.payload, ...state.transactions]
            }
            default:
                return state;
    }
}