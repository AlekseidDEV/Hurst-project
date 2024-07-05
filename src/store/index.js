import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore.js";
import sliderBanner from "@/store/Stores/sliderBanner.js";

const store = createStore({
    modules: {
        footerStore,
        sliderBanner
    }
})

export default store