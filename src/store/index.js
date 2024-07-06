import {createStore} from "vuex";
import footerStore from "@/store/Stores/footerStore.js";
import sliders from "@/store/Stores/sliders.js";

const store = createStore({
    modules: {
        footerStore,
        sliderBanner: sliders
    }
})

export default store