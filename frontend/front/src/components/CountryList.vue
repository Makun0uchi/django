<template>
    <div class="x-countrylist">
        <header class="x-countrylist-header">
            <h1>Список стран</h1>
        </header>
        <div class="x-countrylist-body">
            <table class="x-countrylist-body-table" v-if="countris.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Размер</th>
                    <th>Код</th>
                </tr>
                <tr v-for="country, index in countris" :key="index">
                    <td>{{ country.id }}</td>
                    <td>{{ country.country_name }}</td>
                    <td>{{ country.country_size }}</td>
                    <td>{{ country.country_code }}</td>
                    <td><x-button class="x-delete" @click="deletingCountry(index)">x</x-button></td>
                </tr>
            </table>
            <div v-else class="x-countrylist-empty"><strong>Список пуст</strong></div>
        </div>
        <div class="x-countrylist-toolbar">
            <x-input placeholder="Поиск..." class="search-input" />
            <x-button class="x-countrylist-add">Добавить</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryList",
    data() {
        return {
            countris: [
                {id: 1, country_name: "Россия", country_size: 17100000, country_code: "+7"},
                {id: 2, country_name: "Япония", country_size: 385000, country_code: "+81"},
            ],
            country_name: "",
            country_size: "",
            country_code: "",

            search_text: "",
        }
    },
    methods: {
        deletingCountry(index) {
            this.countris.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.x-countrylist-header {
    font-family: "Oldtimer";
    color: white;
    text-align: center;
}

.x-countrylist-body-table {
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

.x-countrylist-empty {
    text-align: center;
    font-family: "Oldtimer";
    color: red;
    text-decoration: underline;
    padding: 40px;
}

.x-countrylist-toolbar {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-around;
}

.search-input {
    width: 43%;
}

.x-delete {
    background-color: rgba(255, 0, 0, 0.2) !important;
}

.x-countrylist-add {
    background-color: rgba(173, 255, 47, 0.3) !important;
}
</style>