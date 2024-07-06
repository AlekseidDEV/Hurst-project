const globalStore = {
    state: {
        cardProd: []
    },
    actions: {
        getCardProdServer(state) {

        }
    },
    mutations: {

    },
    getters: {
        getCardProd(state){
            return state.cardProd
        }
    }
}

export default globalStore