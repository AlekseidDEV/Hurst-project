export interface Commit {
    commit: <T>(type: string, payload?: T[] | T, options2?: {root: boolean}) => void
}











