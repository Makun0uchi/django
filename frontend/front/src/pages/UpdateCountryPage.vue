<template>
    <div class="x-update-country">
        <header class="x-update-country-header">
            <h1>Обновление страны</h1>
        </header>
        <label>Введите новое название страны:</label>
        <x-input type="text" class="item" placeholder="Введите название страны..." v-model.trim="country.country_name" />
        <label>Введите новый размер страны:</label>
        <x-input type="number" class="item" placeholder="Введите размер страны..." v-model.trim="country.country_size" />
        <label>Введите новый код страны:</label>
        <x-input type="text" class="item" placeholder="Введите код страны..." v-model.trim="country.country_num" />
        <div class="x-buttons">
            <x-button class="x-update-country-btn" @click="update">Обновить запись</x-button>
            <x-button class="x-back" @click="back">Назад</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateCountryPage",
    data() {
        return {
            country: {
                country_name: this.new_country.country_name,
                country_size: this.new_country.country_size,
                country_num: this.new_country.country_num
            }
        }
    },
    props: {
        new_country: {
            type: Object,
            required: true,
        }
    },
    methods: {
        back() {
            this.$router.push({name: 'main'})
        },
        update() {
            if ((this.country.country_name=="") || (this.country.country_size=="") || (this.country.country_num=="")) {
                alert('Заполните форму!')
                return
            }

            if (this.country.country_size <= 0) {
                alert('Некорректные данные!')
                return
            }

            this.$ajax.put(`api/countrylist/${this.new_country.id}/`, {...this.country})
            this.$router.push({name: 'main'})
        }
    }
}
</script>

<style scoped>
.x-update-country {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
    border-radius: 10px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    color: white;
    align-items: center;
    font-family: "Oldtimer";
}

.x-update-country-header {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.item {
    margin: 7px auto;
    width: 70%;
}

.x-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    margin-top: 20px;
    width: 100%;
}

.x-update-country-btn {
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}

.x-back {
    text-align: center;
    background-color: rgba(255, 47, 47, 0.3) !important;
}
</style>