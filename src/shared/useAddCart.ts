import {ResponceData, ResponceDataCart} from "@/models/interface/responceData";
import store from "@/store";
export function useAddCart(card: ResponceData, Qty = 1) {
    const getCartStorage = localStorage.getItem('cart')
    let formatedArr: ResponceDataCart[] = getCartStorage ? JSON.parse(getCartStorage) : []
    let indexElement = 0

    const repeatedCard = (arr: ResponceDataCart[]) => {
        return arr.every((elem, index) => {
            if(elem.name === card.name){
                indexElement = index
                return false
            }else {
                return true
            }
        })
    }

    if (formatedArr.length === 0) {
        card.qty = Qty
        formatedArr.push(card as ResponceDataCart)
    } else if(!repeatedCard(formatedArr)){
        formatedArr[indexElement].qty += Qty
    }else{
        card.qty = Qty
        formatedArr.push(card as ResponceDataCart)
    }

    store.dispatch('updateCart', formatedArr)
    localStorage.setItem('cart', JSON.stringify(formatedArr))
}