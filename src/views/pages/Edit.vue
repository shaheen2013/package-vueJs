<template>
    <div class="edit-section">
        <div class="container">
            <div class="row">
                <div class="col-3 mt-3">
                    <form @submit.prevent="updateData()">
                        <input type="text" class="form-control" v-model="list.name" name="name" placeholder="Name">
                        <div class="d-flex align-items-center gap-2 mt-2">
                            <input v-if="showEdit" type="submit" class="btn btn-primary" value="Save">
                            <input v-if="showEdit === false" type="submit" class="btn btn-primary" value="Update">
                            <div class="btn btn-warning" @click="$router.back()">Back</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name   : "Edit",
    data   : () => ({
        list: {
            name : '',
        },
        showEdit:true
    }),
    methods: {
        updateData() {
            if(this.$route.params.id === null){
                axios.post(`https://61937ef6d3ae6d0017da860f.mockapi.io/users`,this.list).then(res => {
                    this.$router.push('/');
                })
            }else {
                axios.put(`https://61937ef6d3ae6d0017da860f.mockapi.io/users/${this.$route.params.id}`,this.list).then(res => {
                    this.$router.push('/');
                })
            }
        }
    },
    mounted() {
        axios.get(`https://61937ef6d3ae6d0017da860f.mockapi.io/users/${this.$route.params.id}`).then(res => {
            this.list = res.data;
            this.showEdit=false;
        })
    }
}
</script>

<style scoped>

</style>