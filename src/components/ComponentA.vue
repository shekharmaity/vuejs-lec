<template>
    <div>
        <h2>Component A</h2>
        <br>
        <component-b></component-b>
    </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    components: { ComponentB },
    name: "ComponentA"
}
</script>

<style lang="scss" scoped></style>