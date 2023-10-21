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
    watch:{
        // existingPerson:{
        //     handler(newValue){
        //         console.log(newValue)
        //         this.fName= newValue.fName;
        //     },
        //     immediate:true,
        // }
    },
    mounted() {
        console.log("create");

        console.log(this.existingPerson)
        // console.log(Object.values(this.existingPerson.fName))

        // let person = JSON.parse(this.existingPerson);
        this.fName = "vishal";
        this.lName = "sharma"
        // this.lName = this.existingPerson.lName;
    },
    methods: {
        formAction() {
            console.log("button click");
            if (this.title == "Add") {
                let person = {
                    fName: this.fName,
                    lName: this.lName,
                }
                console.log(person)
                this.$emit("addUser", person);
            }
            if(this.title == "Edit"){

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
