<template>
    <div class="x-content">
        <x-button @click="toggleCarList">Список машин</x-button>
        <x-button @click="toggleCountryList">Список стран</x-button>
        <x-button @click="toggleSpareList">Список деталей</x-button>

        <x-dialog v-model="showCarList" @close="showCarList=false"><car-list></car-list></x-dialog>
        <x-dialog v-model="showCountryList" @close="showCountryList=false"><country-list></country-list></x-dialog>
        <x-dialog v-model="showSpareList" @close="showSpareList=false"><spare-list></spare-list></x-dialog>
    </div>
</template>

<script>
import CarList from "@/components/CarList.vue"
import CountryList from "./CountryList.vue"
import SpareList from "./SpareList.vue"

export default {
    name: "AppContent",
    components: {
        CarList, CountryList, SpareList,
    },
    data() {
        return {
            showCarList: false,
            showCountryList: false,
            showSpareList: false,
        }
    },
    methods: {
        toggleCarList() {
            this.showCarList = !this.showCarList
        },
        toggleCountryList() {
            this.showCountryList = !this.showCountryList
        },
        toggleSpareList() {
            this.showSpareList = !this.showSpareList
        },
    }
}
</script>

<style scoped>
.x-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 10px;
    align-items: center;
    margin-top: 10px;
}

.x-button {
    margin: 0 10px;
}
</style>