<template>
    <div class="x-dialog" v-if="value===true">
        <div class="x-dialog-container">
            <div class="x-close-btn"><x-button class="close-btn" @click="close">x</x-button></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "x-dialog",
    props: {
        value: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.x-dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;  
    overflow-y: auto;
}

.x-dialog-container {
    margin: auto;
    min-height: 10em;
    min-width: 40em;
    padding: 2em;
    background-color: white;
    border-radius: 10px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.close-btn {
    border-radius: 50% !important;
    background-color: rgba(255, 0, 0, 0.2);
}

.x-close-btn {
    text-align: right;
}
</style>