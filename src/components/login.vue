<template > 
    <div class="modal fade" id="loginModel" tabindex="-1" role="dialog"   aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header border-bottom-0 pb-0">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-title text-center mb-4">
                <h4 class="">تسجيل الدخول</h4>
                </div>
                <div class="d-flex flex-column text-center"> 
                <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(login)"  >  
                    <ValidationProvider name="email" rules="required" v-slot="{ errors }"> 
                        <div class="input-group" :class="errors[0] ? 'invalid mt-1':'mb-3'">
                            <input type="email" class="form-control" name="email" v-model="email" placeholder="ادخل الايميل ..." >
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                            </div>
                        </div>
                        <div class="input-group mb-2 mt-1  text-right" v-if="errors[0]"> 
                            <label class=" font-weight-bold w-100 error-msg">{{errors[0] }}</label>
                        </div>  
                    </ValidationProvider>
                    <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                        <div class="input-group "  :class="errors[0] ? 'invalid mt-1':'mb-3'"> 
                            <input type="password"  v-model="password" class="form-control" placeholder="ادخل كلمة السر  ..." >
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                        </div>
                        <div class="input-group mb-2 mt-1  text-right" v-if="errors[0]"> 
                            <label class=" font-weight-bold w-100 error-msg">{{errors[0]}}</label>
                        </div> 
                    </ValidationProvider>
                    <div class="input-group mb-2 mt-1  text-danger text-center" v-if="err"> 
                        <label class=" font-weight-bold w-100 error-msg">خطأ في البريد الالكتروني او كلمة المرور </label>
                    </div>
                    <div class="text-danger error-sp" ></div>
                    <button type="submit" class="btn submit btn-block btn-round text-white text-12"  >
                        <span v-if="!isLoading">تسجيل الدخول</span>
                        <div class="spinner-border text-light" role="status" v-if="isLoading">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                </form>
                </ValidationObserver>
                <div class="text-center text-muted delimiter d-none">or use a social network</div>
                <div class=" social-buttons d-none">
                    <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                    <i class="fab fa-twitter"></i>
                    </button>
                    <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                    <i class="fab fa-facebook"></i>
                    </button>
                    <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                    <i class="fab fa-linkedin"></i>
                    </button>
                </div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <div class="signup-section text-11" >لا تمتلك حساب معنا ؟ <a href="#" class="signup text-info" @click="signUp"> سجل الان</a></div>
            </div>
            </div>
            
        </div>
    
    </div>
</template> 

<script>
// @ is an alias to /src   
import $ from 'jquery';
export default {
    name: "Login",
    data() {
        return {
            email:'',
            password:'',
            err:'',
            isLoading:false
        }
    },
    methods: { 
        signUp(){
            $('#loginModel').modal('hide')
            $('#signup').modal('show')
        },
        login(){
            this.isLoading=true
            this.$store
            .dispatch("login", {
            email: this.email,
            password: this.password
            }).then(()=>{
                window.toast.fire({
                icon: 'success',
                title: 'login successed'
                })
                $('#loginModel').modal('hide')
            })
            .catch(err => {
                this.err=err.response.data.error
                this.isLoading=false
            });  
            
        }
    },
};
 
</script>
<style lang='scss' scoped>

@import '../assets/css/variables.scss';

button.submit{
    background-color: $maincolor;
}
.modal-header .close { 
    margin-top: -1.5rem;
}
.form-title {
    margin: -1rem 0rem 1rem;
}
.btn-round {
    border-radius: 3rem;
}
.delimiter {
    padding: 1rem;  
}
.social-buttons .btn{
    
    margin: 0 0.5rem 1rem;
    
}
.signup-section {
padding: 0.3rem 0rem;
}
::placeholder
{
    font-size: 12px;
    direction: rtl;
}
input
{
    font-size: 12px;
}
@media (min-width: 576px){
.modal-dialog {
    max-width: 400px;
    }
    .modal-dialog .modal-content {
    padding: 1rem;
    }
} 
.invalid{
    input{
        border:1px solid red;
    }
    input::placeholder{
        color: red; 
    } 
    div span{
        color: red;
        border:1px solid red;
    }
    
}
.error-msg{ 
        font-size: 10px;  
        color: #e10000;
    }

</style>
