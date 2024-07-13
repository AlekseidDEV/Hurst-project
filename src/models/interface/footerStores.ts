export interface FooterStores {
    state: State
    getters: Getters
}

interface State {
    footerLinks: FooterLinks[]
}

interface Getters {
    getFooterLink:(state: State) => FooterLinks[]
}

export interface FooterLinks {
    title: string
    class: string
    ulClass: string
    links: Links[]
}

interface Links {
    title: string
    text?: string
    url: string
}

