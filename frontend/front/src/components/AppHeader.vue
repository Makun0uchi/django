<template>
    <div class="x-header">
        <strong class="x-name">Владислав <br>Волков</strong>
        <h4 class="x-anekdot">
        Приходит мужик к доктору и говорит: -"у меня глисты". <br>
        Доктор говорит: -"ешьте 15 дней чай с булочкой, и они уйдут. <br>
        на 16 день нужно выпить только чай". <br>
        На 16й день глист вылезает и спрашивает: -"а булочка где?". <br>
        </h4>
        <x-button>Выход</x-button>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
}
</script>

<style scoped>
.x-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 10px;
  align-items: center;
  color: white;
}

.x-anekdot {
    font-family: "Oldtimer";
}

.x-name {
    margin: 0 0 0 10px;
    font-family: "Oldtimer";
}

.x-button {
    margin-right: 10px;
}
</style>