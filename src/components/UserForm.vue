<template>
    <div>
        <h1>{{ title }} Page</h1>
        <pre>
        <form>
            <label for="">FirstName :</label>
            <input type="text" name="fname" id="fname" v-model="fName">

            <label>LastName :</label>
            <input type="text" name="lname" id="lname" v-model="lName">

            <button @click.prevent="formAction">{{ title }} record</button>   
            {{ existingPerson }}         
        </form>
    </pre>
    </div>
</template>

<script>
export default {
    name: "userForm",
    props: ['title', 'existingPerson'],

    data() {
        return {
            fName: "",
            lName: ""
        }
    },
    watch: {
        existingPerson: {
            handler(newValue) {
                console.log(newValue)
                if (newValue !== undefined && newValue !== null) {
                    this.fName = newValue.fName;
                    this.lName = newValue.lName;
                }
            },
            immediate: true,
        }
    },
    methods: {
        formAction() {
            console.log("button click");
            // login for add user form
            if (this.title == "Add") {
                let person = {
                    fName: this.fName,
                    lName: this.lName,
                }
                console.log(person)
                this.$emit("addUser", person);
            }
            // logic for edit user form 
            if (this.title == "Edit") {

                //validation
                let person = {
                    fName: this.fName,
                    lName: this.lName,
                }
                console.log(person)
                this.$emit("editUser", person);
            }

        },
    }
}
</script>
