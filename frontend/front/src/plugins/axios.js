import axios from "axios"
import store from "@/store"


const instance = axios.create({
    baseURL: "https://makunouchi.pythonanywhere.com/"
})

instance.interceptors.request.use((config) => {
    const token = store.state.car.token

    if (token) {
        config.headers.Authorization = `Token ${token}`
    }

    return config
})

export default {
    install(Vue) {
        Vue.prototype.$ajax = instance
    }
}