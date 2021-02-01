//import Service from '../../Service'
export default {
    state: {
        cart:JSON.parse(localStorage.getItem('cart')) || [],
        count:JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0
    },
    mutations: {
        add_to_cart(state, payload) {
            let productInCart = state.cart.find(item => { 
                return item.item.id === payload.item.id;
            });
            if (productInCart) {
                productInCart.quantity*1;
                productInCart.quantity += (payload.quantity*1);
                return;
            }
            state.cart.push(payload);
            state.count++;
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cart)
            )
            localStorage.setItem(
                "cart_count",
                JSON.stringify(state.count)
            )

        },
        remove_from_cart(state,index){
            state.cart.splice(index,1)
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cart)
            )
            state.count--; 
        }
    },
    actions: {
        async add_to_cart({ commit }, payload){
            return new Promise(() => {
                console.log(payload)
                commit("add_to_cart", payload);
                
            });
        },
        remove_from_cart({ commit }, payload){ 
            console.log(payload)
            commit("remove_from_cart", payload.index);
        }
    },
    getters: {
        get_cart(state) {
            return state.cart;
        },
        get_count(state){
            return state.count;
        }
    }
};
