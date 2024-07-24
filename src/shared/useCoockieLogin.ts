import CryptoJS from "crypto-js";
import {axiosClient} from "@/axiosClient.ts";
import store from "@/store";

export function useCoockieLogin(){
    const regExp = /token\S[\S]+/
    const coockieStore = document.cookie.split(';')
    const matchToken = coockieStore.toString().match(regExp)

    if(matchToken){
        const bytes = CryptoJS.AES.decrypt(matchToken[0].slice(6), new Date().getDay() + 'Hurst')
        const decode = bytes.toString(CryptoJS.enc.Utf8)
        const keys = decode.split(':')


        axiosClient.get(`/users?email=${keys[0]}`).then((res) => {
            store.dispatch('setUser', res.data[0])
        })
    }
}