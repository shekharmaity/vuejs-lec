<template>
    <div>
        <h1>Top Menu</h1>
        FirstName : {{ firstName }} {{ lastName }}
    </div>
</template>
<script>
export default {
    name: "TopNav",
    // props:['firstName', 'lastName'],
    props: {
        firstName: {
            type: Boolean,
            required: true,
            default: false
        },
        lastName: {
            type: Boolean,
        }
    },
    data() {
        return {
        }
    }
}
</script>

