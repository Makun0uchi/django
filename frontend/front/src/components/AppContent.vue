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
    inject: ['reload'],
    data() {
        return {
            cars: [],
            id: "",
            car_nums: "",
            car_brand: "",
            car_speed: "",
            country_of_origin: "",
            car_details: "",

            countries: [],
            country_name: "",
            country_size: "",
            country_num: "",

            spares: [],
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
        deletingCar(id) {
            this.$ajax.delete(`api/carlist/${id}`)
            this.cars = this.cars.filter(elem => elem.id !== id)
        },
        deletingCountry(country) {
            if (this.cars.some(car => car.country_of_origin === country.country_name)) {
                alert("Невозможное действие!")
                return
            } 
            this.$ajax.delete(`api/countrylist/${country.id}`)
            this.countries = this.countries.filter(elem => elem.id !== country.id)
        },
        deletingSpare(spare) {
            if (this.cars.some(car => car.car_details == spare.spares_name)) {
                alert("Невозможное действие!")
                return
            } 
            this.$ajax.delete(`api/sparelist/${spare.id}`)
            this.spares = this.spares.filter(elem => elem.id !== spare.id)
        },
        addCar(car) {
            car.id = this.cars.length + 1
            this.cars.push(car)
            //location.reload()
            this.reload()
        },
        addCountry(country) {
            country.id = this.countries.length + 1
            this.countries.push(country)
            //location.reload()
            this.reload()
        },
        addSpare(spare) {
            spare.id = this.spares.length + 1
            this.spares.push(spare)
            //location.reload()
            this.reload()
        }
    },
    mounted() {
        this.$ajax.get("api/carlist").then((response) => {
            this.cars = response.data
        }),
        this.$ajax.get("api/sparelist").then((response) => {
            this.spares = response.data
        })
        this.$ajax.get("api/countrylist").then((response) => {
            this.countries = response.data
        })
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