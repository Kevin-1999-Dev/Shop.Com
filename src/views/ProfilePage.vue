<template>
  <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <div class="card">
            <div class="card-body text-center">
              <h1 class="mb-5">Your Profile</h1>
                <div class="row">
                  <div class="col-6">
                    <img src="../assets/logo.png" class="img-fluid" alt="Profile Image">
                  </div>
                  <div class="col-6 text-start">
                    <h5>Name - Kevin</h5>
                    <h5>Email - kzh@gmail.com</h5>
                    <h5>Address - Yangon</h5>
                    <h5>Phone - 09123456789</h5>
                  </div>
                </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-success float-end">Edit</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  name: 'ProfilePage',

  }
</script>

<style scoped>
  img{
    width: 60%;
  }
  .container {
    height: 50vh;
  }
</style>


