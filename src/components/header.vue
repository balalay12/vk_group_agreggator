<template>
  <div class="">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            {{ Object.keys(this.$store.state.user).length != 0 ? this.$store.state.user.first_name : "Brand" }}
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Link</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button
                v-if="Object.keys(this.$store.state.user).length === 0"
                type="button"
                class="btn btn-primary navbar-btn"
                @click="vkAuth">Vk Auth</button>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
      vkAuth() {
        let store = this.$store
        let permission = '262144'
        VK.Auth.login(function(response, permission) {
          if (response.session) {
            /* Пользователь успешно авторизовался */
            store.dispatch('userLogin', response.session.user)
            localStorage.setItem('user', JSON.stringify(response.session.user))
            // VK.Api.call('users.get', {user_ids: [response.session.user.id], fields: ['photo_50']}, (photo) => {
            //   console.log(photo)
            //   this.user['photo'] = photo.response[0].photo_50
            // });
          } else {
            /* Пользователь нажал кнопку Отмена в окне авторизации */
          }
        });
      },
      vkOut: function() {
        VK.Auth.logout(function(response) {
          // console.log(response);
          localStorage.removeItem('user');
          localStorage.removeItem('photo');
        })
      }
  },

  // created() {
  //   let user_data = JSON.parse(localStorage.getItem('user'))
  //   let user_photo = JSON.parse(localStorage.getItem('photo'))
  //   if (user_data != null && user_photo != null) {
  //     this.user = user_data
  //     this.user.photo = user_photo
  //     // console.log(this.user)
  //   } else { console.log('user no auth')}
  // },
}
</script>

<style>
</style>
