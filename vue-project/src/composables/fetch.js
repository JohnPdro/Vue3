import { onBeforeMount, ref } from "vue"


export function useFetch(url){
    const data = ref(null)
    const error = ref(null)
    const carregando = ref(true)

    const findInformations = async () => {
        try {
            const req = await fetch(url);
            const json = await req.json();
            data.value = json.data;
        } catch (err) {
            error.value = "Erro ao obter informações na API"
        } finally {
            carregando.value = false
        }
    };

    onBeforeMount(async () => {
        await findInformations();
    })

    return {
        data,
        error,
        carregando
    }
}