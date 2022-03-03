export const initialState = {
  basket: [],
  
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
        
      };

    case "REMOVE_FROM_BASKET":
      //LOGIC TO REMOVE FROM THE BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
