<template>
    <div class="home">
        <h1 class="text-center my-4 fw-bolder text-info">Mediusware Jobs</h1>
        <div class="container">
            <div class="row">
                <div class="col-3" v-if="isLoading">
                    <img class="img-thumbnail w-25" src="http://mystiquevalley.com/images/loading.gif" alt="">
                </div>
                <div class="col-12">
                    <a class="btn btn-primary mb-2" @click="$router.push('create')">Create</a>
                </div>
                <div class="col-3" v-for="(job, index) in jobs">
                    <div class="card mb-3">
                        <div class="d-flex justify-content-between align-items-center card-header">
                            <div class="fw-bold">
                                {{ job.name }}
                            </div>
                            <div class="d-flex gap-2">
                                <a @click="$router.push(`view/${job.id}`)" class="btn btn-info"><i class="fa fa-eye"></i></a>
                                <a @click="$router.push(`edit/${job.id}`)" class="btn btn-warning"><i class="fa fa-edit"></i></a>
                                <a @click="deleteList(job.id)" class="btn btn-danger"><i class="fa fa-trash"></i></a>
                            </div>
                        </div>
                        <div class="card-body">
                            <img :src="job.avatar" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            jobs     : [],
            isLoading: false

        }
    },
    methods: {
        getJobs() {
            this.isLoading = true;
            axios.get('https://61937ef6d3ae6d0017da860f.mockapi.io/users').then(res => {
                this.jobs      = res.data;
                this.isLoading = false;
            })
        },
        deleteList(index){
            axios.delete(`https://61937ef6d3ae6d0017da860f.mockapi.io/users/${index}`).then(res => {
                this.getJobs();
            })
        }
    },
    mounted() {
        this.getJobs();
    }
}
</script>
