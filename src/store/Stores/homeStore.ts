import {axiosClient} from "@/axiosClient"
import {ResponceData} from "@/models/interface/responceData";
import {HomeModuleStores} from "@/models/interface/homeModuleStores.ts";
import {useRandomArray} from "@/shared/useRandomArray";

const homeStore: HomeModuleStores = {
    state: {
        purchaseCards: [],
        featureCard: [],
        posts: [],
        user: {
            userRole: 'guest',
            name: '',
            id: 0,
            email: '',
            phone: '',
            companyName: '',
            contry: '',
            state: '',
            townCity: '',
            address: '',
            billingAdress: {
                name: '',
                id: 0,
                email: '',
                phone: '',
                companyName: '',
                contry: '',
                state: '',
                townCity: '',
                address: '',
            },
            orderHistory: [],
            wishList: []
        },
        cartHistory: [],
        searchResult: []
    },
    actions: {
        async setPurchaseCard({commit}, path) {
            const responce = await axiosClient.get(path as string)
            let cards: ResponceData[] = useRandomArray(responce.data, 8)


            commit('setPurchaseCard', cards)
        },
        setPosts({commit}, flag) {
            axiosClient.get('posts').then((res) => {
                let arrPosts: ResponceData[] = []
                if (flag === 1) {
                    for (let i = 0; i < 2; i++) {
                        arrPosts = useRandomArray(res.data, 2) as ResponceData[]
                    }
                    commit('setPosts', arrPosts)
                } else {
                    commit('setPosts', res.data)
                }
            })
        },
        setFeatureCard({commit}, path) {
            axiosClient.get(path).then(response => {
                commit('setFeatureCard', response.data)
            })
        },
        updateCart({commit}, cart) {
            commit('setCart', cart)
        },
        setLocalStorageCart({commit}) {
            const data = localStorage.getItem('cart') || '[]'

            commit('setCart', JSON.parse(data))
        },
        async searchProduct({commit}, str) {
                if(str !== ''){
                    const response = await axiosClient.get(`/products?name_like=${str}`)
                    const arrName: string[] = []

                    response.data.forEach((item: ResponceData) => {
                        arrName.push(item.name)
                    })

                    commit('setSearchLabels', arrName)
                }else {
                    commit('setSearchLabels', [])
                }
        },
        setUser({commit}, user) {
            commit('setUser', user)
        }
    },
    mutations: {
        setPurchaseCard(state, data) {
            state.purchaseCards = data
        },
        setPosts(state, data) {
            state.posts = data
        },
        setFeatureCard(state, data) {
            state.featureCard = data
        },
        setCart(state, data) {
            state.cartHistory = data
        },
        setSearchLabels(state, data) {
            state.searchResult = data
        },
        setUser(state, user) {
            state.user = user
        }
    },
    getters: {
        getPurchaseCard(state) {
            return state.purchaseCards
        },
        getPosts(state) {
            return state.posts
        },
        getFeatureCard(state) {
            return state.featureCard
        },
        getCart(state) {
            return state.cartHistory
        },
        getLabelsSearch(state){
            return state.searchResult
        },
        getUser(state){
            return state.user
        }
    },
}

export default homeStore