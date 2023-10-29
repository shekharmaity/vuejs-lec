<template>
    <div>
        <h2>Child component</h2>
    </div>
</template>

<script>
export default {
    name: "ChildNode",

    beforeCreate() {
        console.log("child before created");
    },

    created() {
        console.log("child created");
    },

    beforeUpdate() {
        console.log("child before update");
    },

    updated() {
        console.log("child update");
    },

    beforeMount() {
        console.log("child before Mount");
    },

    mounted() {
        console.log("child Mounted");
    },

    beforeUnmount() {
        console.log("child before Unmount");
    },

    unmounted() {
        console.log("child unmounted");
    }
}



</script>

<style lang="scss" scoped></style>