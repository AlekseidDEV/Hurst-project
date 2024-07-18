export function useUuidGenerator(){
    let nameSpace = 'abcdefghijklmnopqrstuvwxyz1234567890$&*?!@#'
    let uuid = ''

    for(let i = 0; i < 4; i++){
        let rnd = Math.floor(Math.random() * nameSpace.length)

        uuid += nameSpace[rnd]
    }

    return uuid
}