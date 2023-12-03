<template>
    <div>
        <h2>Home Page</h2>

        <p>{{ count }}</p>
        <button @click="increment">Increment</button>

        <p>Store data is : {{ $store.state.firstName }}</p>


        <p>{{ $store.getters.fullName }}</p>


        <p>{{ $store.getters.fullNameValue("Mr") }}</p>

        <p>{{ $store.state.counter }}</p>
        <button @click="incrementCounter"> increase count</button>


        <!-- <p>{{ $store.getters.getCounter }}</p>
        <button @click="incrementCounter">Increment Count</button>-->

        <button @click="incV(3)">Increment Count by 3</button>


    </div>
</template>

<script>

import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'HomePage',

    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment() {
            this.count++;
        },
        // incrementCounter() {
        //     this.$store.dispatch("incrementCounter");
        // },
        // incrementCounterByValue() {
        //     this.$store.commit("incrementCounterByValue", 5);
        // },


        // incrCount(){
        //     // this.$store.state.counter++;

        //     this.$store.commit("incrementCounter");
        // },
        // ...mapMutations(['incrementCounter', 'incrementCounterByValue']),
        ...mapMutations({ ind: 'incrementCounter', incV: 'incrementCounterByValue' }),

        ...mapActions(['incrementCounter']),




    }

}
</script>