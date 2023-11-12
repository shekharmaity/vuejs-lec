<template>
    <div>
        <div v-for="res in apiResp.result" :key="res">

            <p>{{ res }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TristarDetails',
    data() {
        return {
            apiResp: {},
        }
    },
    created(){
        axios.get("https://www.tristarhealth.com/classesEvents/basicSearch?keywords=&startDate=&distance=&zipcode=&sponsoringFacilityCOID=34222&searchType=")
                .then(resp => {
                    this.apiResp = resp.data;
                    console.log(resp)
                })
    }

    

}
</script>

<style lang="scss" scoped></style>