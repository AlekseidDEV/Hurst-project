import {ResponceData} from "@/models/interface/responceData";
import {Elem} from "@/models/types";
import {Ref} from "vue";

export function useGeneratorStars(data: ResponceData, elem: Ref<Elem | null>){
    for (let i = 0; i < 5; i++) {
        const items = document.createElement('i')

        if (Math.floor(data.rating) > i) {
            items.classList.add('zmdi', 'zmdi-star');
        } else if (data.rating - i < 1 && data.rating - i > 0) {
            items.classList.add('zmdi', 'zmdi-star-half');
        } else {
            items.classList.add('zmdi', 'zmdi-star-outline');
        }

        elem.value?.append(items)
    }
}
