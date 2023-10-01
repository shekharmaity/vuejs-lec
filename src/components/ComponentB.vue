<template>
    <div>
        <h2>Component B</h2>

        <br>
        <component-c></component-c>
    </div>
</template>

<script>
import ComponentC from './ComponentC.vue'
export default {
    components: { ComponentC },
    name: "ComponentB"
}
</script>

<style lang="scss" scoped></style>