import {ResponceData} from "@/models/interface/responceData";
import {Posts} from "@/models/interface/posts";
import {Commit} from "@/models/interface/commit";
import {UserData} from "@/models/interface/userData";
import {DataCart} from "@/models/interface/dataCart";

interface State {
    purchaseCards: ResponceData[]
    featureCard: ResponceData[]
    posts: Posts[]
    user: UserData,
    cartHistory: DataCart[]
    searchResult: string[]
    isLoginModal: boolean
    isRegisterModal: boolean
    newPersonEmail: string
}

interface Actions {
    setPurchaseCard({commit}: Commit, path: string): void;
    setPosts({commit}: Commit, flag: number): void;
    setFeatureCard({commit}: Commit, path: string): void;
    updateCart({commit}: Commit, cart: DataCart[]): void
    setLocalStorageCart({commit}: Commit): void
    searchProduct({commit}: Commit, str: string): void
    setUser({commit}:Commit,  user: UserData): void
    visibleModalLogin({commit}:Commit,  value: boolean): void
    visibleModalReg({commit}:Commit,  value: boolean): void
    setNewEmail({commit}:Commit,  email: string): void
    setGuestEmail({commit}:Commit,  email: string): void
    removeCart({commit}:Commit,  name: string): void
}

interface Mutations {
    setPurchaseCard(state: State, data: ResponceData[]): void;
    setPosts(state: State, data: Posts[]): void;
    setFeatureCard(state: State, data: ResponceData[]): void
    setCart(state: State, data: DataCart[]): void
    setSearchLabels(state: State, data: string[]): void
    setUser(state: State,  user: UserData): void
    setLoginValue(state: State, value: boolean): void
    setRegValue(state: State, value: boolean): void
    setNewEmail(state: State, email: string): void
    setGuestEmail(state: State, email: string): void
    deleteCart(state: State, name: string): void
}

interface Getters {
    getPurchaseCard:(state: State) => ResponceData[]
    getPosts:(state: State) => Posts[]
    getFeatureCard:(state: State) => ResponceData[]
    getCart:(state: State) => DataCart[]
    getLabelsSearch:(state: State) => string[]
    getUser:(state: State) => UserData
    isModalLogin:(state: State) => boolean
    isModalRegister:(state: State) => boolean
    getNewEmail:(state: State) => string
}

export interface GlobalModuleStores {
    state: State
    actions: Actions
    mutations: Mutations
    getters: Getters
}