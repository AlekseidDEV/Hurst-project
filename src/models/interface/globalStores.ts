import {ResponceData} from "@/models/interface/responceData.ts";
import {Posts} from "@/models/interface/posts.ts";
import {Commit} from "@/models/interface/commit.ts";

interface State {
    purchaseCards: ResponceData[]
    posts: Posts[]
}

interface Actions {
    setPurchaseCard({commit}: Commit, path: string): void;
    setPosts({commit}: Commit, flag: number): void;
}

interface Mutations {
    setPurchaseCard(state: State, data: ResponceData[]): void;
    setPosts(state: State, data: Posts[]): void;
}

interface Getters {
    getPurchaseCard:(state: State) => ResponceData[]
    getPosts:(state: State) => Posts[]
}

export interface GlobalStores {
    state: State
    actions: Actions
    mutations: Mutations
    getters: Getters
}