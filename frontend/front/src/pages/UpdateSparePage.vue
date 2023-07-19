<template>
    <div class="x-update-spare">
        <header class="x-update-spare-header">
            <h1>Обновление детали</h1>
        </header>
        <label>Введите новое название детали:</label>
        <x-input type="text" class="item" placeholder="Введите название детали..." v-model.trim="spare.spares_name" />
        <label>Введите новый номер детали:</label>
        <x-input type="text" class="item" placeholder="Введите код детали..." v-model.trim="spare.spares_num" />
        <label>Введите новую стоимость детали:</label>
        <x-input type="number" class="item" placeholder="Введите стоимость детали..." v-model.trim="spare.spares_price" />
        <div class="spare-avai-check">
            <p>Наличие:</p>
            <x-input type="checkbox" class="spare-avai" v-model.trim="spare.spares_availability" />
        </div>
        <div class="x-buttons">
            <x-button class="x-update-spare-btn" @click="update">Обновить запись</x-button>
            <x-button class="x-back" @click="back">Назад</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateSparePage",
    data() {
        return {
            spare: {
                spares_name: this.new_spare.spares_name,
                spares_num: this.new_spare.spares_num,
                spares_price: this.new_spare.spares_price,
                spares_availability: this.new_spare.spares_availability
            }
        }
    },
    props: {
        new_spare:{
            type: Object,
            required: true,
        }
    },
    methods: {
        back() {
            this.$router.push({name: 'main'})
        },
        update() {
            if ((this.spare.spares_name=="") || (this.spare.spares_num=="") || (this.spare.spares_price=="")) {
                alert('Заполните форму!')
                return
            }

            if (this.spare.spares_availability=="on") {
                this.spare.spares_availability=true
            }
            else {
                this.spare.spares_availability=false
            }

            if (this.spare.spares_price <= 0) {
                alert('Некорректные данные!')
                return
            }

            this.$ajax.put(`api/sparelist/${this.new_spare.id}/`, {...this.spare})
            this.$router.push({name: 'main'})
        }
    }
}
</script>

<style scoped>
.x-update-spare {
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

.x-update-spare-header {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.item {
    margin: 7px auto;
    width: 70%;
}

.spare-avai-check {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
}

.x-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    width: 100%;
}

.x-update-spare-btn {
    text-align: center;
    background-color: rgba(173, 255, 47, 0.3) !important;
}

.x-back {
    text-align: center;
    background-color: rgba(255, 47, 47, 0.3) !important;
}
</style>