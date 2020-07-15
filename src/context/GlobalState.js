import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    shoes: [
      {
        id: 1,
          name: "Men's Relaxed Fit: Sargo - Sunview",
          description:"Soft woven fabric upper. Adjustable hook and loop closure at center panel for precise fit. 6mm heel drop height 2 inch heel height",
          photo:"assets/sandal-2.jpg",
          price:30,
          stock:13,
          category: "sandals",
      },      
      {
        id: 2,
        name: "Men's Skechers Max Cushioning Air - Tycoon Red",
        description:"Dual density midsole design with sculpted detail. Forefoot flex grooves aid in flexibility and promote a smooth transition",
        photo:"assets/sketch-4.jpg",
        price:310.00,
        stock:3,
        category: "shoes",
      },
      {
        id: 3,
        name: "Men's Skechers Max Cushioning Air - Tycoon Blue",
        description:"Lightweight, durable and flexible parametric web outsole provides multi-surface traction",
        photo:"assets/sketch-5.jpg",
        price:310.00,
        stock:3,
        category: "shoes",
      },
      {
        id: 4,
          name: "Boys' Hot Lights: Damager III - Police",
          description:"On/Off switch on top strap activates or deactivates light-up feature. Switch feature on Kids sizes only - Toddler shoes do not have the switch.",
          photo:"assets/kid-2.gif",
          price:52,
          stock:13,
          category: "kids",
      },
      {
        id: 5,
        name: "Men's Skechers Max Cushioning Ultimate - Distinct",
        description:"Upper: Smooth premium action leather and mesh fabric. 6mm heel drop height  2 inch heel height",
        photo:"assets/sketch-6.jpg",
        price:89.00,
        stock:3,
        category: "shoes",
      },
      {
        id: 6,
          name: "Boys' S Lights: Flex-Glow - Dezlo",
          description:"Slip on stretch laced front sporty casual light up sneaker design .Smooth hot-melt contrast colored overlays at toe and sides.",
          photo:"assets/kid-3.gif",
          price:47,
          stock:13,
          category: "kids",
      }, 
      {
        id: 7,
          name: "Men's Skechers Max Cushioning Slide",
          description:"Contrast colored logo embroidered detail. Padded soft fabric strap lining. Contrast color midsole top layer trim design. Color accent outsole panels",
          photo:"assets/sandal-1.jpg",
          price:45,
          stock:13,
          category: "sandals",
      },
      {
        id: 8,
          name: "Men's Relaxed Fit: Sargo - Sunview",
          description:"Soft woven fabric upper Athletic slide sandal design. Goga Mat® cushioned and contoured footbed. Color accent outsole panels",
          photo:"assets/sandal-3.jpg",
          price:30,
          stock:13,
          category: "sandals",
      },
      {
        id:9,
          name: "Kids' S Lights: Thermo-Flash",
          description:"Sporty mesh fabric upper. Smooth synthetic overlays. Mesh fabric panels for cooling effect",
          photo:"assets/kid-1.gif",
          price:49,
          stock:13,
          category: "kids",
      }
    ],
    cart: [],
  }

  export const GlobalContext = createContext(initialState);

  // Provider component
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    /*function deductQty(id) { 
      dispatch({
        type: 'DEDUCT_PROD_QTY',
        payload: id
        });
    }
  
    
      function deleteTransaction(id) { 
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
          });
      }
  
      function addTransaction(transaction) {
          dispatch({q
            type: 'ADD_TRANSACTION',
            payload: transaction
          });
        }
        */
  
    return(<GlobalContext.Provider value= {{
        shoes: state.shoes,
        //deleteTransaction,
        //addTransaction,
        //deductQty
    }}>
        {children}
    </GlobalContext.Provider>);
    } 