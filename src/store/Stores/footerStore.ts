import {FooterStores} from "@/models/interface/footerStores.ts";

const footerStore: FooterStores = {
    state: {
        footerLinks: [
            {
                title: "contact us",
                class: 'col-lg-4 col-md-6',
                ulClass: 'footer-contact',
                links: [
                    {title: "Address", text: `8 Green Tower, Street Name, <br>New York City, USA`, url: '#'},
                    {title: "Cell-phone", text: "012345 - 123456789", url: '#'},
                    {title: "Email", text: "your-email@gmail.com", url: '#'},
                ]
            },
            {
                title: "account",
                ulClass: 'footer-menu',
                class: 'col-lg-2 col-md-3 col-sm-6',
                links: [
                    {title: 'My Account', url: '#'},
                    {title: 'My Wishlist', url: '#'},
                    {title: 'Manufactirers', url: '#'},
                    {title: 'Suppliers', url: '#'},
                    {title: 'Check out', url: '#'},
                ]
            },
            {
                title: "shipping",
                ulClass: 'footer-menu',
                class: 'col-lg-2 col-md-3 col-sm-6',
                links: [
                    {title: 'New Products', url: '#'},
                    {title: 'Top Sellers', url: '#'},
                    {title: 'My Cart', url: '#'},
                    {title: 'Sign In', url: '#'},
                    {title: 'Specials', url: '#'},
                ]

            }
        ]
    },
    getters: {
        getFooterLink(state){
            return state.footerLinks
        }
    }
}

export default footerStore