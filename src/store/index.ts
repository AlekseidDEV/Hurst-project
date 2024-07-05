import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore.ts";

const store = createStore({
    modules: {
        footerStore
    }
})

export default store