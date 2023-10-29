<template>
  <div style="text-align: center;">
    <h2> User form</h2>

    <button @click="isAdd = true">Add user</button>
    <button @click="isEdit = true">Edit User</button>

    <user-form title="Add" @addUser="addUser" v-show="isAdd"></user-form>
    <user-form title="Edit" @editUser="editUser" :existingPerson="existingPerson" v-show="isEdit"></user-form>
    {{ userData }}
 </div>
</template>

<script>
import UserForm from './components/UserForm.vue'
export default {
  components: { UserForm },
  name: 'App',

  data() {
    return {
      isAdd: false,
      isEdit: false,

      existingPerson: {
        fName: "Ravi",
        lName: "sharma"
      },
      userData:{},
    }
  },
  methods: {
    addUser(userData) {
      console.log("addUser" + userData.fName);
      this.userData = userData;
      this.isAdd = false;
      //http backend
    },

    editUser(userData) {
      console.log("editUser" + userData.fName);
      this.userData = userData;

      //BL ajax
      this.isEdit = false;
    }

  },

}
</script>

