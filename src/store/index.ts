import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore";
import sliders from "@/store/Stores/sliders";
import homeStore from "@/store/Stores/homeStore.ts";

const store = createStore({
    modules: {
        footerStore,
        sliders,
        globalStore: homeStore
    }
})

export default store