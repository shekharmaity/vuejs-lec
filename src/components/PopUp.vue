<template>
    <div style="text-align: center;">
        <h2>This is a popup component</h2>
        <label for="name">Name : </label>
        <input type="text" name="name" id="name" v-model="userName">
        <button @click="$emit('close', userName)">Close PopUp</button>

    </div>
</template>

<script>
export default {
    name: "PopUp",
    emits:['close'],
    data(){
        return{
            userName:"",
        }
    }
}
</script>

<style lang="scss" scoped></style>