<template>
    <div class="x-content">
        <x-button @click="toggleCarList">Список машин</x-button>
        <x-button @click="toggleCountryList">Список стран</x-button>
        <x-button @click="toggleSpareList">Список деталей</x-button>

        <x-dialog v-model="showCarList" @close="showCarList=false">
            <car-list :cars="cars" :countries="countries" :spares="spares" @delete="deletingCar" @create="addCar"></car-list>
        </x-dialog>
        <x-dialog v-model="showCountryList" @close="showCountryList=false">
            <country-list :countries="countries" @delete="deletingCountry" @create="addCountry"></country-list>
        </x-dialog>
        <x-dialog v-model="showSpareList" @close="showSpareList=false">
            <spare-list :spares="spares" @delete="deletingSpare" @create="addSpare"></spare-list>
        </x-dialog>
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
            cars: [
                {id: 1, car_nums: "111", car_brand: "Lada", car_speed: 200, country_of_origin: "Russia", car_details: [1, 2, 3]},
                {id: 2, car_nums: "111", car_brand: "Lada", car_speed: 200, country_of_origin: "Russia", car_details: [1, 2, 3]},
            ],
            car_nums: "",
            car_brand: "",
            car_speed: "",
            country_of_origin: "",
            car_details: "",

            countries: [
                {id: 1, country_name: "Россия", country_size: 17100000, country_code: "+7"},
                {id: 2, country_name: "Япония", country_size: 385000, country_code: "+81"},
            ],
            country_name: "",
            country_size: "",
            country_code: "",

            spares: [
                {id: 1, spares_name: "Бензонасос", spares_num: "111", spares_price: 5200, spares_availability: true},
                {id: 2, spares_name: "КПП", spares_num: "111", spares_price: 1200, spares_availability: true},
            ],
            spares_name: "",
            spares_num: "",
            spares_price: "",
            spares_availability: "",

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
        deletingCar(index) {
            this.cars.splice(index, 1)
        },
        deletingCountry(index) {
            this.countries.splice(index, 1)
        },
        deletingSpare(index) {
            this.spares.splice(index, 1)
        },
        addCar(car) {
            car.id = this.cars.length + 1
            this.cars.push(car)
        },
        addCountry(country) {
            country.id = this.countries.length + 1
            this.countries.push(country)
        },
        addSpare(spare) {
            spare.id = this.spares.length + 1
            this.spares.push(spare)
        }
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