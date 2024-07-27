
import store from "@/store";
import {DataCart} from "@/models/interface/dataCart";
import {ResponceData} from "@/models/interface/responceData";
export function useAddCart(card: ResponceData, Qty = 1) {
    const getCartStorage = localStorage.getItem('cart')
    const cartObject: DataCart = {
        ...card,
        size: 'S',
        colors: 'Black',
        qty: 0
    }
    let formatedArr: DataCart[] = getCartStorage ? JSON.parse(getCartStorage) : []
    let indexElement = 0

    const repeatedCard = (arr: DataCart[]) => {
        return arr.every((elem, index) => {
            if(elem.name === cartObject.name){
                indexElement = index
                return false
            }else {
                return true
            }
        })
    }

    if(formatedArr.length === 0){
        cartObject.qty = Qty
        formatedArr.push(cartObject)
    }else if(!repeatedCard(formatedArr)){
        formatedArr[indexElement].qty += Qty
    }else {
        cartObject.qty = Qty
        formatedArr.push(cartObject)
    }

    store.dispatch('updateCart', formatedArr)
    localStorage.setItem('cart', JSON.stringify(formatedArr))
}