import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore.js";
import sliders from "@/store/Stores/sliders.js";
import globalStore from "@/store/Stores/globalStore.js";

const store = createStore({
    modules: {
        footerStore,
        sliders,
        globalStore
    }
})

export default store