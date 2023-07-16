<template>
    <input class="x-input">
</template>

<script>
export default {
    name: "x-input"
}
</script>

<style scoped>
.x-input {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    font-family: "Oldtimer";
    border-radius: 10px;
    border-width: 1px;
    border-color: white;
    color: black;
    outline: none;
}

.x-input:hover {
    transform: scale(1.05);
}

.x-input::-webkit-input-placeholder {
    color: white;
}    
</style>