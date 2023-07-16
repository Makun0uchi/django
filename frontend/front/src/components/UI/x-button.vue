<template>
    <button class="x-button" v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "x-button"
}
</script>

<style scoped>
.x-button {
    padding: 15px;
    background-color: rgba(238,174,202,0);
    font-family: "Oldtimer";
    border-radius: 10px;
    border-width: 1px;
    border-color: white;
    cursor: pointer;
    color: white;
}

.x-button:hover {
    transform: scale(1.05);
}
</style>