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
                <form @submit.prevent="login()"> 
                    <div class="input-group mb-3">
                        <input type="email" v-model="email" class="form-control" placeholder="ادخل الايميل ..."  required>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        </div>
                    </div>
                    <div class="input-group mb-3"> 
                        <input type="password" v-model="password" class="form-control" placeholder="ادخل كلمة السر ..."   required >
                        <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                    </div>
                    <div class="text-danger error-sp" ></div>
                    <button type="submit" class="btn submit btn-block btn-round text-white text-12"  >تسجيل الدخول</button>
                </form>
                
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
            password:''
        }
    },
    methods: {
        hi(){
            console.log()
        },
        signUp(){
            $('#loginModel').modal('hide')
            $('#signup').modal('show')
        },
        login(){
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
                console.log(err)
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

*{
            overflow: hidden;
        }

</style>
