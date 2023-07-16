<template>
    <div class="x-sparelist">
        <header class="x-sparelist-header">
            <h1>Список деталей</h1>
        </header>
        <div class="x-sparelist-body">
            <table class="x-sparelist-body-table" v-if="spares.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Размер</th>
                    <th>Код</th>
                    <th>Наличие</th>
                </tr>
                <tr v-for="spare, index in spares" :key="index">
                    <td>{{ spare.id }}</td>
                    <td>{{ spare.spares_name }}</td>
                    <td>{{ spare.spares_num }}</td>
                    <td>{{ spare.spares_price }}</td>
                    <td>{{ spare.spares_availability }}</td>
                    <td><x-button class="x-delete" @click="deletingSpare(index)">x</x-button></td>
                </tr>
            </table>
            <div v-else class="x-sparelist-empty"><strong>Список пуст</strong></div>
        </div>
        <div class="x-sparelist-toolbar">
            <x-input placeholder="Поиск..." class="search-input" />
            <x-button class="x-sparelist-add">Добавить</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpareList",
    data() {
        return {
            spares: [
                {id: 1, spares_name: "Бензонасос", spares_num: "111", spares_price: 5200, spares_availability: true},
                {id: 2, spares_name: "КПП", spares_num: "111", spares_price: 1200, spares_availability: true},
            ],
            spares_name: "",
            spares_num: "",
            spares_price: "",
            spares_availability: "",

            search_text: "",
        }
    },
    methods: {
        deletingSpare(index) {
            this.spares.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.x-sparelist-header {
    font-family: "Oldtimer";
    color: white;
    text-align: center;
}

.x-sparelist-body-table {
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

.x-sparelist-empty {
    text-align: center;
    font-family: "Oldtimer";
    color: red;
    text-decoration: underline;
    padding: 40px;
}

.x-sparelist-toolbar {
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

.x-sparelist-add {
    background-color: rgba(173, 255, 47, 0.3) !important;
}
</style>