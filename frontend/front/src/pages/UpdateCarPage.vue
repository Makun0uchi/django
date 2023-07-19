<template>
    <div class="x-update-car">
        <header class="x-update-car-header">
            <h1>Обновление машины</h1>
        </header>
        <label>Введите новые номера машины</label>
        <x-input type="text" class="item" placeholder="Введите номера машины..." v-model.trim="car.car_nums" />
        <label>Введите новую марку машины</label>
        <x-input type="text" class="item" placeholder="Введите марку машины" v-model.trim="car.car_brand" />
        <label>Введите новую скорость машины</label>
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
        <div class="x-buttons">
            <x-button class="x-update-car-btn" @click="update">Обновить запись</x-button>
            <x-button class="x-back" @click="back">Назад</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateCarPage",
    data() {
        return {
            car: {
                car_nums: this.new_car.car_nums,
                car_brand: this.new_car.car_brand,
                car_speed: this.new_car.car_speed,
                country_of_origin: this.new_car.country_of_origin,
                car_details: this.new_car.car_details,
            },
        }
    },
    props: {
        new_car: {
            type: Object,
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
        back() {
            this.$router.push({name: 'main'})
        },
        update() {
            if ((this.car.car_nums=="") || (this.car.car_brand=="") || (this.car.car_speed=="") || (this.car.country_of_origin=="") || (this.car.car_details.length == 0)) {
                alert('Заполните форму!')
                return
            }

            if (this.car.car_speed <= 0) {
                alert('Некорректные данные!')
                return
            }

            this.$ajax.put(`api/carlist/${this.new_car.id}/`, {...this.car})
            this.$router.push({name: 'main'})
        }
    }
}
</script>

<style scoped>
.x-update-car {
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

.x-update-car-header {
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

.x-update-car-btn {
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}

.x-back {
    text-align: center;
    background-color: rgba(255, 47, 47, 0.3) !important;
}

.selects {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    margin-top: 10px;
    width: 75%;
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
</style>