<template>
    <div class="x-carlist">
        <header class="x-carlist-header">
            <h1>Список машин</h1>
        </header>
        <div class="x-carlist-body">
            <table class="x-carlist-body-table" v-if="SearchInSortedCars.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Номера</th>
                    <th>Марка</th>
                    <th>Скорость</th>
                    <th>Страна-производитель</th>
                    <th>Детали</th>
                </tr>
                <tr v-for="car, index in SearchInSortedCars" :key="index">
                    <td>{{ car.id }}</td>
                    <td>{{ car.car_nums }}</td>
                    <td>{{ car.car_brand }}</td>
                    <td>{{ car.car_speed }}</td>
                    <td>{{ car.country_of_origin }}</td>
                    <td>{{ car.car_details }}</td>
                    <td><x-button class="x-delete" @click="deletingCar(index)">x</x-button></td>
                </tr>
            </table>
            <div v-else class="x-carlist-empty"><strong>Список пуст</strong></div>
        </div>
        <div class="x-carlist-toolbar">
            <x-select v-model="sort_by" :sort_list="sort_by_list" />
            <x-input placeholder="Поиск..." class="search-input" v-model="search_text" />
            <x-button class="x-carlist-add" @click="toggleCreateCarForm">{{ btnText }}</x-button>
        </div>
        <div class="x-carlist-create-car" v-if="showCreateCarForm">
            <header class="x-carlist-create-car-header">
                <h1>Добавление новой машины</h1>
            </header>
            <div class="x-carlist-create-car-form">
                <x-input type="text" class="item" placeholder="Введите номера машины..." v-model.trim="car.car_nums" />
                <x-input type="text" class="item" placeholder="Введите марку машины" v-model.trim="car.car_brand" />
                <x-input type="number" class="item" placeholder="Введите скорость машины..." v-model.trim="car.car_speed" />
                <div class="selects">
                    <select class="chooseCountry" v-model.trim="car.country_of_origin" >
                        <option disabled selected value="">Выберите страну...</option>
                        <option v-for="country in countries" :key="country.country_name" :value="country.country_name">
                            {{ country.country_name }}
                        </option>
                    </select>
                    <select multiple class="chooseSpares" v-model.trim="car.car_details">
                        <option disabled selected value="">Выберите детали...</option>
                        <option v-for="spare in spares" :key="spare.spares_name" :value="spare.spares_name">
                            {{ spare.spares_name }}
                        </option>
                    </select>
                </div>
                <x-button class="x-add-car" @click="addCar">Добавить запись</x-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarList",
    data() {
        return {
            car: {
                car_nums: "",
                car_brand: "",
                car_speed: "",
                country_of_origin: "",
                car_details: [],
            },

            search_text: "",

            showCreateCarForm: false,

            sort_by: "",
            sort_by_list: [
                {id: 1, by: "Сначала новые"},
                {id: 2, by: "По номеру машины"},
                {id: 3, by: "По марке машины"},
                {id: 4, by: "По скорости машины"},
                {id: 5, by: "По стране производства"},
                {id: 6, by: "Сначала старые"},
            ]
        }
    },
    props: {
        cars: {
            type: Array,
            required: true,
        }, 
        countries: {
            type: Array,
            required: true,
        },
        spares: {
            type: Array,
            required: true,
        }
    },
    methods: {
        deletingCar(index) {
            this.$emit('delete', index)
        },

        toggleCreateCarForm() {
            this.showCreateCarForm = !this.showCreateCarForm
        },
        addCar() {
            if ((this.car.car_nums=="") || (this.car.car_brand=="") || (this.car.car_speed=="") || (this.car.country_of_origin=="") || (this.car.car_details.length == 0)) {
                alert('Заполните форму!')
                return
            }

            this.$emit('create', {...this.car})
        }
    },
    computed: {
        btnText: function() {
            if (this.showCreateCarForm) {
                return 'Скрыть'
            }
            return 'Добавить'
        },
        SortedCars() {
            let carsCopy = this.cars.slice()
            
            switch (this.sort_by) {
                case "Сначала новые":
                    carsCopy = carsCopy.sort((a, b) => b.id - a.id)
                    break
                case "По номеру машины":
                    carsCopy = carsCopy.sort((a, b) => a.car_nums.localeCompare(b.car_nums))
                    break
                case "По марке машины":
                    carsCopy = carsCopy.sort((a, b) => a.car_brand.localeCompare(b.car_brand))
                    break
                case "По скорости машины":
                    carsCopy = carsCopy.sort((a, b) => a.car_speed - b.car_speed)
                    break
                case "По стране производства":
                    carsCopy = carsCopy.sort((a, b) => a.country_of_origin.localeCompare(b.country_of_origin))
                    break
                case "Сначала старые":
                    carsCopy = carsCopy.sort((a, b) => a.id - b.id)
                    break
            }
            return carsCopy
        },
        SearchInSortedCars() {
            return this.SortedCars.filter(car => car.car_brand.toLowerCase().includes(this.search_text.toLowerCase()))
        }
    }
}
</script>

<style scoped>
.x-carlist-header {
    font-family: "Oldtimer";
    color: white;
    text-align: center;
}

.x-carlist-body-table {
    font-family: "Oldtimer";
    color: white;
    border-collapse: collapse;
    border-color: white;
    text-align: center;
    margin: auto;
}
th, td {
    padding: 5px;
}

.x-carlist-empty {
    text-align: center;
    font-family: "Oldtimer";
    color: red;
    text-decoration: underline;
    padding: 40px;
}

.x-carlist-toolbar {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
}

.search-input {
    width: 43%;
}

.x-delete {
    background-color: rgba(255, 0, 0, 0.2) !important;
}

.x-carlist-add {
    background-color: rgba(173, 255, 47, 0.3) !important;
}

.x-carlist-create-car {
    font-family: "Oldtimer";
    color: white;
    margin-top: 40px;
}

.x-carlist-create-car-header {
    text-align: center;
}

.x-carlist-create-car-form {
    display: flex;
    flex-direction: column;
}

.item {
    margin: 7px auto;
    width: 90%;
}

.selects {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    margin-top: 10px;
}

.chooseCountry {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    border-color: white;
    font-family: "Oldtimer";
    outline: none;
    color: white;  
    height: 40px;
    flex-grow: 1;
    margin-right: 7px;
}

.chooseCountry:hover {
    transform: scale(1.05);
}

.chooseCountry option {
    background: rgb(238, 174, 202, 0.7);
}

.chooseSpares {
    background-color: rgba(0, 0, 0, 0);
    border-color: white;
    font-family: "Oldtimer";
    outline: none;
    color: white;
    flex-grow: 1;
    margin-left: 7px;
}

.chooseSpares:hover {
    transform: scale(1.05);
}

.x-add-car {
    margin: 20px auto 0;
    width: 30%;
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}
</style>