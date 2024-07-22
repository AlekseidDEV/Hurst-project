import {ResponceData, ResponceDataCart} from "@/models/interface/responceData";
import {Posts} from "@/models/interface/posts";
import {Commit} from "@/models/interface/commit";
import {UserData} from "@/models/interface/userData";

interface State {
    purchaseCards: ResponceData[]
    featureCard: ResponceData[]
    posts: Posts[]
    user: UserData,
    userRole: string,
    cartHistory: ResponceDataCart[]
}

interface Actions {
    setPurchaseCard({commit}: Commit, path: string): void;
    setPosts({commit}: Commit, flag: number): void;
    setFeatureCard({commit}: Commit, path: string): void;
    updateCart({commit}: Commit, cart: ResponceDataCart[]): void
    setLocalStorageCart({commit}: Commit): void
}

interface Mutations {
    setPurchaseCard(state: State, data: ResponceData[]): void;
    setPosts(state: State, data: Posts[]): void;
    setFeatureCard(state: State, data: ResponceData[]): void
    setCart(state: State, data: ResponceDataCart[]): void
}

interface Getters {
    getPurchaseCard:(state: State) => ResponceData[]
    getPosts:(state: State) => Posts[]
    getFeatureCard:(state: State) => ResponceData[]
    getCart:(state: State) => ResponceDataCart[]
}

export interface HomeModuleStores {
    state: State
    actions: Actions
    mutations: Mutations
    getters: Getters
}