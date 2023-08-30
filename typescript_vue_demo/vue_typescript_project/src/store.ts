import {createStore} from "vuex"

export default createStore({
    state:{
        storeName:'Name from store',
        storeMainTitle:'*****No Title****',
        
    },
    mutations:{
        setStoreName(state,payload){
            state.storeName = payload.title
        }
    },
    actions:{
        newTitle(context,payload){
            context.commit('setStoreName',payload)
        }
    }
})