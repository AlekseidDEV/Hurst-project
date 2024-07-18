import {FooterObj} from "@/models/interface/footerLinks";

export interface FooterModuleStore {
    state: State
    getters: Getters
}

interface State {
    footerLinks: FooterObj[]
}

interface Getters {
    getFooterLink:(state: State) => FooterObj[]
}


