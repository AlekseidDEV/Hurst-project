import {axiosClient} from "@/axiosClient.ts";

const globalStore = {
    state: {
        purchaseCards: [],
        posts: []
    },
    actions: {
        setPurchaseCard({commit}, path) {
            axiosClient.get(path).then((res) => {
                let randomCards = []

                randomCards = res.data

                for(let i = randomCards.length - 1; i > - 1; i--){
                    let tmp = randomCards[i]
                    let rnd = Math.floor(Math.random() * (i + 1))

                    randomCards[i] = randomCards[rnd]
                    randomCards[rnd] = tmp
                }

                commit('setPurchaseCard', randomCards.slice(0, 8))
            })
        },
        setPosts({commit}, flag){
            axiosClient.get('posts').then((res) => {
                let arrPosts = []

                if(flag === 1){
                    for(let i = 0; i < 2; i++){
                        const randomNumber = Math.floor(Math.random() * res.data.length)

                        arrPosts.push(res.data[randomNumber])
                    }

                    commit('setPosts', arrPosts)
                }else {
                    commit('setPosts', res.data)
                }
            })
        }
    },
    mutations: {
        setPurchaseCard(state, data) {
            state.purchaseCards = data
        },
        setPosts(state, data){
            state.posts = data
        }
    },
    getters: {
        getPurchaseCard(state) {
            return state.purchaseCards
        },
        getPosts(state){
           return  state.posts
        }
    },
}

export default globalStore