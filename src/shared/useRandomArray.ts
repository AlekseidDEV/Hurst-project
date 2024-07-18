export function useRandomArray<T>(array: T[], numSlice: number){

    let randomCards: Array<T> = array

    for(let i = (array as Array<T>).length - 1; i > - 1; i--){
        let tmp = randomCards[i]
        let rnd = Math.floor(Math.random() * (i + 1))

        randomCards[i] = randomCards[rnd]
        randomCards[rnd] = tmp
    }

    return randomCards.slice(0, numSlice)
}