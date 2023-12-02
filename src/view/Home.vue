<template>
    <div>
        <h2>Home Page</h2>

        <p>{{ count }}</p>
        <button @click="increment">Increment</button>

        <p>Store data is : {{ $store.state.firstName}}</p>

    
        <p>{{ $store.getters.fullName }}</p>


        <p>{{ $store.getters.fullNameValue("Mr") }}</p>

        <p>{{ $store.state.counter }}</p>
        <button @click="incrCount"> increase count</button>


        <!-- <p>{{ $store.getters.getCounter }}</p>
        <button @click="incrementCounter">Increment Count</button>

        <button @click="incrementCounterByValue">Increment Count by 5</button> -->


    </div>
</template>

<script>

export default {
    name: 'HomePage',

    data() {
        return {
            count: 0
        }
    },

    methods: {
        incrementCounter() {
            this.$store.commit("incrementCounter");
        },
        incrementCounterByValue() {
            this.$store.commit("incrementCounterByValue", 5);
        },

        increment() {
            this.count++;
        },

        incrCount(){
            // this.$store.state.counter++;

            this.$store.commit("incrementCounter");
        }
    }

}
</script>