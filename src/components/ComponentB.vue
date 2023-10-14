<template>
    <div>
        <h2>Component B</h2>
        <label for="">FirstName : </label>{{ person.firstName }}
        <label for="">LastName : </label>{{ person.lastName }}

        <br>
        <component-c></component-c>
    </div>
</template>

<script>
import ComponentC from './ComponentC.vue'
export default {
    components: { ComponentC },
    name: "ComponentB",
    inject:['person']
}
</script>

<style lang="scss" scoped></style>