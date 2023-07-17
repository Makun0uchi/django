<template>
    <div class="x-countrylist">
        <header class="x-countrylist-header">
            <h1>Список стран</h1>
        </header>
        <div class="x-countrylist-body">
            <table class="x-countrylist-body-table" v-if="SearchInSortedCountries.length > 0" border="2">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Размер</th>
                    <th>Код</th>
                </tr>
                <tr v-for="country, index in SearchInSortedCountries" :key="index">
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
            <x-select v-model="sort_by" :sort_list="sort_by_list" />
            <x-input placeholder="Поиск..." class="search-input" v-model="search_text" />
            <x-button class="x-countrylist-add" @click="toggleCreateCountryForm">{{ btnText }}</x-button>
        </div>
        <div class="x-countrylist-create-country" v-if="showCreateCountryForm">
            <header class="x-countrylist-create-country-header">
                <h1>Добавление новой страны</h1>
            </header>
            <div class="x-countrylist-create-country-form">
                <x-input type="text" class="item" placeholder="Введите название страны..." v-model.trim="country.country_name" />
                <x-input type="number" class="item" placeholder="Введите размер страны..." v-model.trim="country.country_size" />
                <x-input type="text" class="item" placeholder="Введите код страны..." v-model.trim="country.country_code" />
                <x-button class="x-add-country" @click="addCountry">Добавить запись</x-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryList",
    data() {
        return {
            country: {
                country_name: "",
                country_size: "",
                country_code: "",
            },

            showCreateCountryForm: false,

            search_text: "",

            sort_by: "",
            sort_by_list: [
                {id: 1, by: "Сначала новые"},
                {id: 2, by: "По названию страны"},
                {id: 3, by: "По размеру страны"},
                {id: 4, by: "По коду страны"},
                {id: 5, by: "Сначала старые"},
            ]
        }
    },
    props: {
        countries: {
            type: Array,
            required: true,
        }
    },
    methods: {
        deletingCountry(index) {
            this.$emit('delete', index)
        },
        addCountry() {
            if ((this.country.country_name=="") || (this.country.country_size=="") || (this.country.country_code=="")) {
                alert('Заполните форму!')
                return
            }

            this.$emit('create', {...this.country})
        },
        toggleCreateCountryForm() {
            this.showCreateCountryForm = !this.showCreateCountryForm
        }
    },
    computed: {
        btnText: function() {
            if (this.showCreateCountryForm) {
                return 'Скрыть'
            }
            return 'Добавить'
        },
        SortedCountries() {
            let countriesCopy = this.countries.slice()
            
            switch (this.sort_by) {
                case "Сначала новые":
                    countriesCopy = countriesCopy.sort((a, b) => b.id - a.id)
                    break
                case "По названию страны":
                    countriesCopy = countriesCopy.sort((a, b) => a.country_name.localeCompare(b.country_name))
                    break
                case "По размеру страны":
                    countriesCopy = countriesCopy.sort((a, b) => a.country_size - b.country_size)
                    break
                case "По коду страны":
                    countriesCopy = countriesCopy.sort((a, b) => a.country_code.localeCompare(b.country_code))
                    break
                case "Сначала старые":
                    countriesCopy = countriesCopy.sort((a, b) => a.id - b.id)
                    break
            }
            return countriesCopy
        },
        SearchInSortedCountries() {
            return this.SortedCountries.filter(country => country.country_name.toLowerCase().includes(this.search_text.toLowerCase()))
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
    justify-content: space-between;
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

.x-countrylist-create-country {
    font-family: "Oldtimer";
    color: white;
    margin-top: 40px;
}

.x-countrylist-create-country-header {
    text-align: center;
}

.x-countrylist-create-country-form {
    display: flex;
    flex-direction: column;
}

.item {
    margin: 7px auto;
    width: 90%;
}

.x-add-country {
    margin: 20px auto 0;
    width: 30%;
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}
</style>