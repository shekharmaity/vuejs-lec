<template>
  <div style="text-align: center;">
    <h2>App Page {{ firstName }}</h2>

    Person details:{{ person }}
    <br>
    <component-a></component-a>
<br><br>
    <audit-details :auditDetails="auditDetails"></audit-details>

  </div>
</template>

<script>
import AuditDetails from './components/AuditDetails.vue'
// import ComponentA from './components/ComponentA.vue'

export default {
  components: {  AuditDetails },
  name: 'App',

  data() {
    return {
      firstName: "Shekhar Maity",
      person:{
        firstName:"Ravi",
        lastName:"Tejas",
        age:25,
      },
      auditDetails:{
        lastModifiedBy:"Vishal",
        lastModifiedDate:"27-09-2023",
        createdBy:"Shekhar",
        createdDate:"25-09-2023"
      }

    }
  },
  provide() {  // data value export
    return {
      firstName: this.firstName,
      person: this.person,
    }
  }


}
</script>

