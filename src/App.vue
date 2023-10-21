<template>
  <div style="text-align: center;">
    <p>Slot Example App page</p>
    <!-- <slot-comp>
      <h2>Hello</h2>
    </slot-comp> -->

    <slot-comp>
      <template v-slot:header>
        <h2>Header</h2>
      </template>
      <template v-slot:default>
        <h2>Default template</h2>
      </template>
      <template v-slot:footer>
        <h2>Footer</h2>
      </template>

    </slot-comp>



  </div>
</template>

<script>
import SlotComp from './components/SlotComp.vue'

export default {
  components: { SlotComp },
  name: 'App',

  data() {
    return {

    }
  }
}
</script>

