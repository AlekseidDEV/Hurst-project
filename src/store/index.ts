import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore.ts";
import sliders from "@/store/Stores/sliders.ts";
import globalStore from "@/store/Stores/globalStore.ts";

const store = createStore({
    modules: {
        footerStore,
        sliders,
        globalStore
    }
})

export default store