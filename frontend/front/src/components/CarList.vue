<template>
    <div class="x-carlist">
        <header class="x-carlist-header">
            <h1>Список машин</h1>
        </header>
        <div class="x-carlist-body">
            <table class="x-carlist-body-table" v-if="cars.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Номера</th>
                    <th>Марка</th>
                    <th>Скорость</th>
                    <th>Страна-производитель</th>
                    <th>Детали</th>
                </tr>
                <tr v-for="car, index in cars" :key="index">
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
            <x-input placeholder="Поиск..." class="search-input" />
            <x-button class="x-carlist-add" @click="toggleCreateCarForm">{{ btnText }}</x-button>

            <!-- <x-dialog v-model="showCreateCarForm" @close="showCreateCarForm=false"><create-new-car></create-new-car></x-dialog> -->
        </div>
        <div class="x-carlist-create-car" v-if="showCreateCarForm">
            <header class="x-carlist-create-car-header">
                <h1>Добавление новой машины</h1>
            </header>
            <div class="x-carlist-create-car-form">
                <x-input class="item" placeholder="Введите номера машины..." />
                <x-input class="item" placeholder="Введите марку машины" />
                <x-input class="item" placeholder="Введите скорость машины..." />
            </div>
        </div>
    </div>
</template>

<script>
// import CreateNewCar from "@/components/CreateNewCar.vue"

export default {
    name: "CarList",
    // components: {
    //     CreateNewCar,
    // },
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

            search_text: "",

            showCreateCarForm: false,

            sort_by: "",
            sort_by_list: [
                {id: 1, by: "По добавлению записи"},
                {id: 2, by: "По номеру машины"},
                {id: 3, by: "По марке машины"},
                {id: 4, by: "По скорости машины"},
                {id: 5, by: "По стране производства"},
            ]
        }
    },
    methods: {
        deletingCar(index) {
            this.cars.splice(index, 1)
        },

        toggleCreateCarForm() {
            this.showCreateCarForm = !this.showCreateCarForm
        }
    },
    computed: {
        btnText: function() {
            if (this.showCreateCarForm) {
                return 'Скрыть'
            }
            return 'Добавить'
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
</style>