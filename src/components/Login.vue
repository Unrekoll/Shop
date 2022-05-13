<template id="comment-form"> 
  <div class="form-wrap container">
    <div class="submit-block" v-if="!submitted">
      <div class="form-group">
        <label for="login">Login</label>
        <input
           v-model="login" 
           v-bind:class="{'form-control':true, 'is-invalid' : !validLogin(login) && loginBlured}"
           placeholder="Login"
           v-on:blur="loginBlured = true">
        <div v-if="!validLogin(login) && loginBlured" class="invalid-feedback">A valid login is required</div>
        <div v-else style="display:block" class="invalid-feedback">
        </div>
        <div class="pass-block">
        <label for="pass">Password</label>
        <input 
           v-model="pass" 
           v-bind:class="{'form-control':true, 'is-invalid' : !validPass(pass) && passBlured}"
           placeholder="Password"
           v-on:blur="passBlured = true">
        <div v-if="!validPass(pass) && passBlured" class="invalid-feedback">A valid password is required</div>
         <div v-else style="display:block" class="invalid-feedback">
        </div>
        </div>
      </div>           

      <div class="form-group">
        <a type="submit" href="#" v-on:click.stop.prevent="submit" class="btn btn-lg btn-success">Submit</a>
      </div>    
    </div>
    <div v-else class="alert alert-success" role="alert">
      <h5>Thank you {{login}}</h5>
      <p>Your validation was a success!</p>
      <router-link :to="'/todo'">Go to your Todo</router-link>
    </div>
  </div><!--end form-wrapper-->
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data: function () {
        return {
            login : "", 
            loginBlured : false,
            pass : "", 
            passBlured : false,
            valid : false, 
            submitted : false
        }
    },
  methods : {
    validate : function(){
      this.valid = this.validLogin(this.login) && this.validPass(this.pass);
    },
    validLogin : function(login) {
       return login === 'Admin';
    },
     validPass : function(pass) {
       return pass === '12345';
    },
    submit : function(){                   
        this.validate();     
        if(this.valid){
          this.submitted = true;
        }
        this.setAuthToken('NJy-yZY4')
      },
      ...mapActions([
        'setAuthToken'
      ])
  }
}
</script>
<style scoped>
.form-wrap {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.invalid-feedback {
  font-size: 12px;
  color: red;
}
.form-control {
  margin-bottom: 5px !important;
}
.pass-block {
  margin-top: 35px;
}
.btn {
  display: flex;
  justify-content: center;
  background-color: blue;
  color: white;
}
.submit-block {
  border: solid 1px rgb(100, 100, 100);
  padding: 20px;
}

</style>