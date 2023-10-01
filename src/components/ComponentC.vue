<template>
    <div>
        <h2>Component C</h2>

        <br>
        firstName in ComponentC : {{ firstName }}

    </div>
</template>

<script>
export default {
    name: "ComponentC",



    inject:['firstName']
}
</script>

<style lang="scss" scoped></style>