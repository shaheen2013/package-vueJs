<template>
    <div class="view-section" id="view">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div v-if="isLoading">
                        <img class="img-thumbnail w-25" src="http://mystiquevalley.com/images/loading.gif" alt="">
                    </div>
                    <div class="card mb-3" v-if="isLoading===false">
                        <div class="d-flex justify-content-between align-items-center card-header">
                            <div class="fw-bold">
                                {{ list.name }}
                            </div>
                            <div class="d-flex gap-2">
                                <a @click="$router.back()" class="btn btn-warning">Back</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <img :src="list.avatar" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name   : "View",
    data   : () => ({
        list:[],
        listId: '',
        isLoading: false
    }),

    mounted() {
        this.isLoading = true;
        axios.get(`https://61937ef6d3ae6d0017da860f.mockapi.io/users/${this.$route.params.id}`).then(res =>{
            this.list = res.data;
            this.isLoading=false;
        })
    }
}
</script>

<style scoped>

</style>