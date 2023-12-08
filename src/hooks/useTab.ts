import { ref, reactive } from "vue";

export default function useTab() {
    const componentRef=ref(null)

    const state = reactive({
        active:'',
        options:[]
    });
  
    const initState = (newState) => {
        Object.keys(newState).forEach((key) => {
            state[key] = newState[key];
        });
    };

    
    return {
        state,
        initState,
        componentRef,
    };
}