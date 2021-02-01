<template>
    <div>
        <div class="navbar row d-flex flex-row-reverse m-0 py-3 py-md-4 px-md-3">
            <div class="col-6 d-flex flex-row-reverse p-0">  
                <div class="col-12 col-lg-3 image mx-0 px-0 mx-lg-2 px-lg-2 d-flex justify-content-end ">  
                    <router-link
                        :to="{name:'home'}" 
                    >
                        <img src="../assets/images/tamata.png"  alt="" >
                    </router-link> 
                    <div class="d-md-none">
                        <button class="navbar-toggler d-inline m-0 p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span ><i class="fas fa-bars fa-fw text-dark font-weight-bold me-icon"  ></i></span>
                        </button> 
                    </div> 
                </div>
                <div class="col-9  m-0 p-0 d-none d-lg-block">
                    <form @submit.prevent="searchDone">
                        <div class="form-group m-0"> 
                            <input id="search" type="text" name="q" v-model="searchValue" placeholder="ما اللذي تبحث عنه؟" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off" aria-expanded="true">
                            <span><i class="fas fa-search"></i></span>
                        </div>
                    </form> 
                </div>
            </div>
            <div class="col-6 row navbar-item ">
                <div class="d-flex pt-2 link" @click="checkout"> 
                        <div class='badge-div'><span class="badge badge-danger mr-1 ">{{count_cart}}</span></div>
                        <div class='text-11 mr-1 font-weight-bold d-none d-md-block'>سلة التسوق </div>
                        <div><i class="fas fa-shopping-cart fa-fw nav-icon font-weight-bold"  ></i></div> 
                </div>
                <div  class="ml-md-3 pl-3 d-flex pt-2 link login" :data-toggle="user.name ?'dropdown':'modal'" :data-target="user.name ?'':'#loginModel'">
                    <div class='text-11 mr-1 font-weight-bold d-none d-md-block' >{{user.name ? user.name:'تسجيل الدخول'}} </div> 
                    <ul class="dropdown-menu">
                        <li class="text-right my-1 " @click="logout()"><a href="#" class="text-decoration-none">تسجيل خروج</a></li> 
                    </ul> 
                    <div><i class="fas fa-user fa-fw nav-icon font-weight-bold"></i></div>
                </div>
                <div  class="ml-md-3 pl-3 d-flex pt-2 d-block d-lg-none sear" @click="search">  
                    <div><span><i class="fas fa-search nav-icon "></i></span></div>
                </div>
                
            </div> 
            <div class="col-12  sear-md m-0 p-0 mt-2 px-3  d-lg-none">
                <form @submit.prevent="searchDone">
                    <div class="form-group m-0"> 
                        <input id="search2" type="text" v-model="searchValue" placeholder="ما اللذي تبحث عنه؟" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off" aria-expanded="true">
                        
                    </div>
                </form> 
            </div>
        </div>
        <nav class="navbar nav-bar navbar-expand-md collapse navbar-collapse d-md-flex justify-content-md-center" id="navbarSupportedContent" v-if="categories[0]">
            <div class="mx-auto" >
                <ul class="navbar-nav mx-auto"> 
                <li class="nav-item dropdown" v-for="(category,index) in categories" :key="index" >
                    <span class="nav-link dropdown-toggle font-weight-bold" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{category.name}}
                    </span>
                    <div class="dropdown-menu " aria-labelledby="navbarDropdown" >
                        <span class="dropdown-item " v-for="(subc) in category.subCategory" :key="subc.id">
                            <router-link :to="{ name: 'shoping', params: { sub_slug: subc.slug }}" class="text-dark text-decoration-none">
                                {{subc.name}}
                            </router-link >
                        </span>  
                    </div>
                </li> 
                </ul> 
            </div>
            </nav> 
        <Login />
        <Signup />

    </div>
</template>
<script>
import Login from './login'
import Signup from './signup'
import $ from 'jquery';
import Service from '../Service'
import router from '../router/index'
export default {
    name:'navbar',
    data() {
        return {
            categories:[ 
            ],
            searchValue:''
        }
    },
    components:{
        Login,
        Signup
    },
    computed: {
        count_cart(){ 
            return this.$store.getters.get_count;
        },
        user(){ 
            return this.$store.getters.get_user;
        }
    }, 
    mounted() {
        this.$store
            .dispatch("me");
        Service.get('/categories').then((data) => { this.categories = data.data.data; console.log(data.data.data) })
    },
    methods: {
        search(){
                $('.sear-md').toggle('fade');
        },
        logout(){
            this.$store
            .dispatch("logout");
        },
        searchDone(){
            router.push({ name: 'shoping', params: { sub_slug: this.searchValue } }) 
        },
        checkout(){
            if(this.count_cart > 0){
                this.$router.push({name:'checkout'})
            }
            else
            {
                window.Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'لاتوجد عناصر في السلة ...تسوق اولا', 
                })
            }
        }
    },
} 
</script>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';
.navbar-item{
    color: #4d4d4d;
    > div:nth-last-child(2)
    {
        border-left: 1px solid #dbdbdb;
    }
    .link:hover{
        color: $maincolor;
    }
    > div{ 
        cursor: pointer;
        .badge
        {               
            font-size: 11px;
            font-weight: 500;
            border-radius: 50%;
            padding: 4px 7px;               
        }
    } 
    div.badge-div
    {
        line-height: 15px;
    }
    .link
    {
        color: #4d4d4d;
    }
    
}
input{
        margin: 0;
        padding-left: 35px;
        position: static;
        border: #898989 solid 1px;
        border-radius: 4px;
        background: #f6f6f6;
        height: 37px;
        padding-right: 17px;
        font-size: 12px;
        line-height: 22px !important;
        direction: rtl;
        width: 100%;
    }
.form-group{
    span{
        font-size: 14px;
        position: absolute;
        left: 11px;
        top: 23%;
        font-weight: 100;
        color: #474747;
    }
}
img{
    width: 90%;
}
.nav-bar{
    background-color: $maincolor; 
    color: white; 
} 


.link{ 
        .dropdown-menu.show
        {
            position: absolute !important;
            top: 27px !important;
            left: 52px !important;
            will-change: transform;
            padding: 0px 7px;
            direction: rtl;
        }
        .dropdown-menu li a
        {
            color:black;
            font-weight: 500;
            font-size: 12px;
        }
        .dropdown-menu li a:hover
        {
            color:$maincolor !important;
        } 
    
} 
@media screen and (max-width: 1920) {
    .image{   
        img{
            width: 100%;
        } 
    } 
}
@media screen and (max-width: 991px) {
    .image{   
        img{
            width: 50%;
        } 
    } 
}
@media screen and (max-width: 768px) {
    .image{   
        img{
            width: 80%;
        } 
    }
    .navbar {
        box-shadow: black -3px -8px 16px;
        .badge{
            margin: 5px 0!important;
            font-size: 12px!important;
            padding: 5px 7px!important;
        }
    }
    .navbar-item{
    > div:nth-last-child(2)
        {
            border-left: none;
        }
    } 
    .nav-icon
    {
        font-size: 30px;
    }
    
}

@media screen and (max-width: 576px) {
    .navbar {
        box-shadow: black -3px -8px 16px;
        .badge{
            margin: 0!important;
            font-size: 11px!important;
            padding: 5px !important;
        }
    }
    .navbar-item{
    > div:nth-last-child(2)
        {
            border-left: none;
        }
    }
    .image{   
        img{
            width: 90%;
        }
        .me-icon{
            font-size: 30px;
        }
    }
    .sear-md
    {
        display: none
    }
    .nav-icon
    {
        font-size: 20px;
    }
    
} 
nav {
    box-shadow: none !important;

}
.me-icon{
    font-size: 40px;
}

.sear-md
{
    display: none
}

</style>