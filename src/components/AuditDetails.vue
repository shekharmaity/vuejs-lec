<template>
    <div>
        <label for="">Last Modified by : </label>{{ auditDetails.lastModifiedBy }}
        <br>
        <label for=""> Last Modified Date : </label>{{ auditDetails.lastModifiedDate }}

        <br>
        <label for=""> Created By :</label>{{ auditDetails.createdBy }}
        <br>
        <label for="">Created Date : </label>{{  auditDetails.createdDate}}
    </div>
</template>

<script>
    export default {
        name :"AuditDetails",
        data(){
            return{

            }
        },
        props:{
            auditDetails:Object,
        }
    }
</script>

<style lang="sass" scoped>

</style>