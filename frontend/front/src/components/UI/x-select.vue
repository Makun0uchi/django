<template>
    <select class="x-select" :value="sort_by_selected" @change="chooseSorting($event.target)">
        <option disabled selected value="">Сортировать по...</option>
        <option v-for="choose in sort_list" :key="choose.by" :value="choose.by">{{ choose.by }}</option>
    </select>
</template>

<script>
export default {
    name: "x-select",
    props: {
        sort_by_selected: {
            type: String
        },
        sort_list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        chooseSorting(target) {
            const sort_by_selected = target.value;
            this.$emit("input", sort_by_selected);
        }
    }
}
</script>

<style scoped>
.x-select {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    border-color: white;
    font-family: "Oldtimer";
    outline: none;
    color: white;
}

.x-select option {
    background: rgb(238, 174, 202, 0.7);
}

.x-select:hover {
    transform: scale(1.05);
}
</style>