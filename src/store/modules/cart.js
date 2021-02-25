//import Service from '../../Service'
export default {
    state: {
        cart:JSON.parse(localStorage.getItem('cart')) || [],
    },
    mutations: {
        add_to_cart(state, payload) {
            let productInCart = state.cart.find(item => { 
                return item.item.id === payload.item.id;
            });
            if (productInCart) {
                productInCart.quantity*1;
                productInCart.quantity += (payload.quantity*1);
            } else{
                state.cart.push(payload); 
            } 
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cart)
            ) 

        },
        remove_from_cart(state,index){
            state.cart.splice(index,1)
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cart)
            ) 
        }
    },
    actions: {
        add_to_cart({ commit }, payload){
            return new Promise(() => { 
                commit("add_to_cart", payload);
            });
        },
        remove_from_cart({ commit }, payload){  
            commit("remove_from_cart", payload.index);
        }
    },
    getters: {
        get_cart(state) {
            return state.cart;
        },
        get_count(){
            return JSON.parse(localStorage.getItem('cart')).length;
        }
    }
};
