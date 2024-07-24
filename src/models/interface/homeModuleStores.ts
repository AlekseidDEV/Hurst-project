import {ResponceData, ResponceDataCart} from "@/models/interface/responceData";
import {Posts} from "@/models/interface/posts";
import {Commit} from "@/models/interface/commit";
import {UserData} from "@/models/interface/userData";

interface State {
    purchaseCards: ResponceData[]
    featureCard: ResponceData[]
    posts: Posts[]
    user: UserData,
    cartHistory: ResponceDataCart[]
    searchResult: string[]
    isLoginModal: boolean
    isRegisterModal: boolean
    newPersonEmail: string
}

interface Actions {
    setPurchaseCard({commit}: Commit, path: string): void;
    setPosts({commit}: Commit, flag: number): void;
    setFeatureCard({commit}: Commit, path: string): void;
    updateCart({commit}: Commit, cart: ResponceDataCart[]): void
    setLocalStorageCart({commit}: Commit): void
    searchProduct({commit}: Commit, str: string): void
    setUser({commit}:Commit,  user: UserData): void
    visibleModalLogin({commit}:Commit,  value: boolean): void
    visibleModalReg({commit}:Commit,  value: boolean): void
    setNewEmail({commit}:Commit,  email: string): void
}

interface Mutations {
    setPurchaseCard(state: State, data: ResponceData[]): void;
    setPosts(state: State, data: Posts[]): void;
    setFeatureCard(state: State, data: ResponceData[]): void
    setCart(state: State, data: ResponceDataCart[]): void
    setSearchLabels(state: State, data: string[]): void
    setUser(state: State,  user: UserData): void
    setLoginValue(state: State, value: boolean): void
    setRegValue(state: State, value: boolean): void
    setNewEmail(state: State, email: string): void
}

interface Getters {
    getPurchaseCard:(state: State) => ResponceData[]
    getPosts:(state: State) => Posts[]
    getFeatureCard:(state: State) => ResponceData[]
    getCart:(state: State) => ResponceDataCart[]
    getLabelsSearch:(state: State) => string[]
    getUser:(state: State) => UserData
    isModalLogin:(state: State) => boolean
    isModalRegister:(state: State) => boolean
    getNewEmail:(state: State) => string
}

export interface HomeModuleStores {
    state: State
    actions: Actions
    mutations: Mutations
    getters: Getters
}