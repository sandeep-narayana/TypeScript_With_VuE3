import {createStore} from "vuex"

const adminModule ={
    state:{
      userName:"Sandeep"
    }
}
export default createStore({
    state:{
        storeName:'Name from store',
        storeMainTitle:'*****No Title****',
        secreteKey :'9839'
        
    },
    mutations:{
        setStoreName(state,payload){
            state.storeName = payload.title
        }
    },
    actions:{
        newTitle(context,payload){
            console.log(payload)
            context.commit('setStoreName',payload)
        }
    },
    getters:{
        hashAdd(state){
            return state.secreteKey+'###############'
        },

        hashNewAdd(state,getters){
            return state.storeMainTitle +'====>   ' + getters.hashAdd
        }
    },
    modules:{
        admin:adminModule
    }
})