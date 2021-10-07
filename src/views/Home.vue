<template>
  <div class="home">
      <h1 class="text-center my-4 fw-bolder text-info">Mediusware Jobs</h1>
      <div class="container">
          <div class="row">
              <div class="col-4" v-for="(job, index) in jobs">
                  <div class="card">
                      <div class="card-header">
                          {{ job.title }}
                      </div>
                      <div class="card-body">

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
    data(){
      return{
          jobs : []

      }
    },
    methods:{
      getJobs(){
          axios.get('https://hr.mediusware.xyz/api/jobs/').then(res=>{
              this.jobs = res.data;
          })
      }
    },
    mounted() {
      this.getJobs();
    }
}
</script>
