import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore";
import sliders from "@/store/Stores/sliders";
import globalStore from "@/store/Stores/globalStore";

const store = createStore({
    modules: {
        footerStore,
        sliders,
        globalStore: globalStore
    }
})

export default store