import CryptoJS from "crypto-js";
import {axiosClient} from "@/axiosClient";
import store from "@/store";

export function useCoockieLogin(){
    const regExp = /token=[A-Z0-9]\S+/gi
    const coockieStore = document.cookie.split(';')
    const matchToken = coockieStore.toString().match(regExp)
    const searchStr = matchToken ? matchToken[0] : null

    if(searchStr?.split('=')[1] !== 'undefined'){
        const bytes = CryptoJS.AES.decrypt(searchStr!.split('=')[1], new Date().getDay() + 'Hurst')
        const decode = bytes.toString(CryptoJS.enc.Utf8)
        const keys = decode.split(':')

        axiosClient.get(`/users?email=${keys[0]}`).then((res) => {
            store.dispatch('setUser', res.data[0])
        })
    }
}