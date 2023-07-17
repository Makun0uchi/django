<template>
    <div class="x-sparelist">
        <header class="x-sparelist-header">
            <h1>Список деталей</h1>
        </header>
        <div class="x-sparelist-body">
            <table class="x-sparelist-body-table" v-if="SearchInSortedSpares.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Номер</th>
                    <th>Стоимость</th>
                    <th>Наличие</th>
                </tr>
                <tr v-for="spare, index in SearchInSortedSpares" :key="index">
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
            <x-select v-model="sort_by" :sort_list="sort_by_list" />
            <x-input placeholder="Поиск..." class="search-input" v-model="search_text" />
            <x-button class="x-sparelist-add" @click="toggleCreateSpareForm">{{ btnText }}</x-button>
        </div>
        <div class="x-sparelist-create-spare" v-if="showCreateSpareForm">
            <header class="x-sparelist-create-spare-header">
                <h1>Добавление новой детали</h1>
            </header>
            <div class="x-sparelist-create-spare-form">
                <x-input type="text" class="item" placeholder="Введите название детали..." v-model.trim="spare.spares_name" />
                <x-input type="text" class="item" v-filter placeholder="Введите код детали..." v-model.trim="spare.spares_num" />
                <x-input type="number" class="item" placeholder="Введите стоимость детали..." v-model.trim="spare.spares_price" />
                <div class="spare-avai-check">
                    <p>Наличие:</p>
                    <x-input type="checkbox" class="spare-avai" v-model="spare.spares_availability" />
                </div>
                <x-button class="x-add-spare" @click="addSpare">Добавить запись</x-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "spareList",
    data() {
        return {
            spare: {
                spares_name: "",
                spares_num: "",
                spares_price: "",
                spares_availability: ""
            },

            showCreateSpareForm: false,

            search_text: "",

            sort_by: "",
            sort_by_list: [
                {id: 1, by: "Сначала новые"},
                {id: 2, by: "По названию детали"},
                {id: 3, by: "По номеру детали"},
                {id: 4, by: "По стоимости детали"},
                {id: 5, by: "Сначала старые"},
            ]
        }
    },
    props: {
        spares: {
            type: Array,
            required: true,
        }
    },
    methods: {
        deletingSpare(index) {
            this.$emit('delete', index)
        },
        addSpare() {
            if ((this.spare.spares_name=="") || (this.spare.spares_num=="") || (this.spare.spares_price=="")) {
                alert('Заполните форму!')
                return
            }

            if (this.spare.spares_availability=="on") {
                this.spare.spares_availability=false
            }
            else {
                this.spare.spares_availability=true
            }
            this.$emit('create', {...this.spare})
        },
        toggleCreateSpareForm() {
            this.showCreateSpareForm = !this.showCreateSpareForm
        }
    },
    computed: {
        btnText: function() {
            if (this.showCreateSpareForm) {
                return 'Скрыть'
            }
            return 'Добавить'
        },
        SortedSpares() {
            let sparesCopy = this.spares.slice()
            
            switch (this.sort_by) {
                case "Сначала новые":
                    sparesCopy = sparesCopy.sort((a, b) => b.id - a.id)
                    break
                case "По названию детали":
                    sparesCopy = sparesCopy.sort((a, b) => a.spares_name.localeCompare(b.spares_name))
                    break
                case "По номеру детали":
                    sparesCopy = sparesCopy.sort((a, b) => a.spares_num.localeCompare(b.spares_num))
                    break
                case "По стоимости детали":
                    sparesCopy = sparesCopy.sort((a, b) => a.spares_price - b.spares_price)
                    break
                case "Сначала старые":
                    sparesCopy = sparesCopy.sort((a, b) => a.id - b.id)
                    break
            }
            return sparesCopy
        },
        SearchInSortedSpares() {
            return this.SortedSpares.filter(spare => spare.spares_name.toLowerCase().includes(this.search_text.toLowerCase()))
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
    justify-content: space-between;
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

.x-sparelist-create-spare {
    font-family: "Oldtimer";
    color: white;
    margin-top: 40px;
}

.x-sparelist-create-spare-header {
    text-align: center;
}

.x-sparelist-create-spare-form {
    display: flex;
    flex-direction: column;
}

.item {
    margin: 7px auto;
    width: 90%;
}

.x-add-spare {
    margin: 20px auto 0;
    width: 30%;
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}

.spare-avai-check {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
}
</style>