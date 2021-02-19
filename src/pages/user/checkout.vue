<template>
    <div class="checkout w-100 h-100">
        <div class="container  px-5 pb-4">
            <div class=" col-md-12 d-flex flex-row-reverse text-url py-3">
                <router-link class="text-dark"  :to="{ name: 'home'}">
                    <span class="text-dark small">  / الصفحة الرئيسية</span>
                </router-link> 
                <div>
                    <a href='#' class="text-dark small font-weight-bold">انهاء الشراء</a>
                </div>
                
            </div> 
            <div class="row">
                <!-- Nav tabs -->
                    <ul class="nav nav-tabs col-12  nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active "  data-toggle="tab"  href="#stat1">تأكيد العناصر</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link disabled" data-toggle="tab"   href="#stat2">معلومات المشتري</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link disabled" data-toggle="tab" href="#stat3">اتمام الدفع</a>
                        </li>
                    </ul> 
            </div>
            <div class="row tab-content">
                <div class="col-12 items my-3 tab-pane active" id="stat1">
                    <div class="row" v-for="(item, index) in cart" :key="index">
                        
                        <div class="col-6 col-md-8 col-lg-10 text-right align-self-center">
                            <div class="title">
                                {{item.item.name}}
                            </div>
                            <div class="my-1 price title">
                                {{$parent.
                                $parent.formatToCurrency(item.item.price)}}
                            </div>
                            <p class="desc mb-2">{{item.item.description}}</p>
                            <div class="d-flex justify-content-between">
                                
                                <button class="btn btn-danger btn-sm px-3" @click="deleteFromCart(index)">حذف</button>
                                <input type='number' class="form-control p-0 pl-1 pl-md-3" v-model="item.quantity" min="1" :max="item.item.quantity">
                            </div> 
                        </div>
                        <div class="col-6 col-md-4 col-lg-2">
                            <img class="card-img-top " :src='item.item.image' alt="Card image cap">
                        </div>
                        <hr class="w-100">
                    </div>
                </div>
                <div class="user-info  col-12 p-0 p-md-3 tab-pane " id="stat2" >
                    <div class="card bg-dark text-right  m-md-3 my-3">
                        <div class="card-body pb-2">
                            <div class="title  text-white">
                                معلومات الزبون
                            </div>
                            <hr>  
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form @submit.prevent="handleSubmit(onSubmit)"  >
                                    <ValidationProvider name="name" rules="required" v-slot="{ errors }" v-if="!user_log.name">
                                        <div class="input-group mt-4" :class="errors[0] ? 'invalid':' mb-3 '"> 
                                            <input type="text" v-model="user.name" class="form-control" placeholder="ادخل الاسم ...">
                                            <div class="input-group-append"> 
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                        </div>
                                        <span class='error-msg pr-3' v-if="errors[0]">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <div class="text-white text-11" v-if="user_log.name">
                                        <div class="title  text-white mb-1" >
                                            {{user_log.name}} اهلاً  
                                        </div>
                                        <p>ادخل العنوان الذي تريد الشحن اليه</p>
                                    </div>
                                    
                                    <ValidationProvider name="location" rules="required" v-slot="{ errors }">
                                        <div class="input-group "  :class="errors[0] ? 'invalid mt-1':'mb-3'"> 
                                            <input type="text" v-model="user.location"  class="form-control" placeholder="ادخل العنوان ..." >
                                            <div class="input-group-append"> 
                                                <span class="input-group-text"><i class="fas fa-location-arrow"></i></span>
                                            </div>
                                        </div>
                                        <span class='error-msg pr-3' v-if="errors[0]">{{ errors[0] }}</span> 
                                    </ValidationProvider>

                                    <ValidationProvider name="phone" rules="required|integer|length:11" v-slot="{ errors }" v-if="!user_log.name">
                                        <div class="input-group "  :class="errors[0] ? 'invalid mt-1':''"> 
                                            <input type="text"  v-model="user.phone" value="0772" class="form-control" placeholder="ادخل رقم الهاتف ..." >
                                            <div class="input-group-append">
                                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                        </div>
                                        <span class='error-msg pr-3' v-if="errors[0]">{{ errors[0] }}</span><br>
                                    </ValidationProvider>
                                    <button  class='d-none'  id="user_form" ></button>
                                    
                                </form>
                            </ValidationObserver> 
                        </div>
                    </div> 
                </div>
                <div class="summary   col-12  p-0 p-md-3 tab-pane " id="stat3">
                    <div class="card bg-dark text-right   m-md-3 my-3">
                        <div class="card-body ">
                            <div class="title  text-white">
                                ملخص عملية الشراء
                            </div>
                            <hr>
                            <div class="title-2 d-flex justify-content-between">
                                <span>{{$parent.$parent.formatToCurrency(subtotal)}}</span>
                                <span>الكلفة</span> 
                            </div>
                            <div class="title-2 d-flex justify-content-between">
                                <span>{{$parent.$parent.formatToCurrency(3000)}} </span>
                                <span>التوصيل</span>
                            </div>
                            <hr>
                            <div class="title-2 d-flex justify-content-between">
                                <span>{{$parent.$parent.formatToCurrency(subtotal+3000)}} </span>
                                <span>الاجمالي</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-center pt-2">
                                <div id="paypal-button" :data='cart'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <button class="btn mx-auto btn-danger btn-sm option px-3" :class="stat==1 ? 'd-none':''" @click="back()">الرجوع</button>
                <button class="btn mx-auto btn-success btn-sm option px-3"  :class="stat==3 ? 'd-none':''" @click="next()">اكمال الشراء</button>
            </div>
            
            
        </div> 
    </div>
</template>

<script>
import Service from '../../Service'

// @ is an alias to /src
import $ from 'jquery';  
export default {
    name: "checkout",
    data() {
        return {
            cart:[], 
            stat:1,
            user:{
                name:'',
                location:'',
                phone:'',
            },
            errors:[]
        }
    },
    mounted() {
        this.cart=this.$store.getters.get_cart 
    }, 
    methods: {
        deleteFromCart(index){   
            this.$store
            .dispatch("remove_from_cart", {
                index: index, 
            })   
            window.toast.fire({
                icon: 'success',
                title: 'تمت الازالة من السلة'
            })
            if(!this.$store.getters.get_cart[0]){
                this.$router.push({name:'home'})
            }
        },
        async next(){
            if(this.stat<3)
            {
                if(this.stat==1){
                    localStorage.setItem('cart',JSON.stringify(this.cart))
                    this.stat=this.stat+1;
                    $('.nav-item .active').addClass('disabled').parent().next().children('a').removeClass('disabled').click()  
                }
                else if(this.stat==2){
                    if(this.user_log.name){
                        this.user.name=this.user_log.name
                        this.user.phone=this.user_log.phone
                    }
                    localStorage.setItem('user',JSON.stringify(this.user)) 
                    localStorage.setItem('cart',JSON.stringify(this.cart)) 
                    $('#user_form').click()
                } 
                else{
                    this.stat=this.stat+1;
                    $('.nav-item .active').addClass('disabled').parent().next().children('a').removeClass('disabled').click()
                } 
            }
        },
        back(){
            if(this.stat>1)
            {
                this.stat-=1;
                $('.nav-item .active').addClass('disabled').parent().prev().children('a').removeClass('disabled').click()   
            } 
        },
        statf(a){
            this.stat=a;
        },
        onSubmit(){
            localStorage.setItem('cart',JSON.stringify(this.cart))
            this.stat+=1;
            $('.nav-item .active').addClass('disabled').parent().next().children('a').removeClass('disabled').click()
        } 
    }, 
    computed:{
        subtotal(){
            var sub_total=0;
            this.cart.forEach(element => {
                sub_total+= (element.item.price*element.quantity);
            }); 
            return sub_total;
        }, 
        user_log(){  
            return this.$store.getters.get_user
        }
    },
    created() {
        window.paypal.Button.render({
            env: 'sandbox', // Or 'production'
            // Set up the payment:
            // 1. Add a payment callback 
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal',
            
            },
            
            payment: function() {
            // 2. Make a request to your server 
                return Service.post('/checkout',{
                    cart:JSON.parse(localStorage.getItem('cart')), 
                    })

                .then(function(res) {
                // 3. Return res.id from the response  
                    return res.data.id;
                });
            },
            // Execute the payment:
            // 1. Add an onAuthorize callback
            onAuthorize: function(data) {
            // 2. Make a request to your server
                return Service.post('status', {
                    paymentID: data.paymentID,
                    payerID:   data.payerID,
                    cart: JSON.parse(localStorage.getItem('cart')),
                    user:JSON.parse(localStorage.getItem('user'))
                })
                .then(function() { 
                    window.Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'checkout done!',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    localStorage.removeItem('cart')
                    setTimeout(function(){ location.reload(); } , 3000) 
                });
            }
        }, '#paypal-button');
    },
};

</script>
<style lang="scss" scoped>
.title{
    font-size: 14px;
    font-weight: 700;
}
.price{
    font-size: 12px;
    font-weight: 700;
}
.desc
{
    font-size: 10px;
}
.items {
    input 
    {
        width: 60px;
        height: 24px;
        padding: 0;
        font-size: 10px;
    } 
    button
    { 
        font-size: 9px;
    } 
}
.summary
{
    .title-2{
        font-size: 12px;
        color: #cecece;
    }
    hr{
        background-color: white; 
    }
}
.user-info{
    hr{
        background-color: white; 
    }
    ::placeholder
    {
        font-size: 12px;
        direction: rtl;
    }
    input
    {
        font-size: 12px;
        direction: rtl;
    }
    .error-msg{ 
            font-size: 10px;  
            color: #e10000;
    }
    .invalid{
        border: 2px solid red;
        border-radius: 5px;
        ::placeholder
        {
            color: red;
        }
        .input-group-text
        {
            color: red;
        }
    }
}
.nav-link.active
{
    font-weight: 900;
}
.option{
    font-size: 10px;
}
@media screen and (max-width: 576px) { 
    .price{
        font-size: 11px;
        font-weight: 700;
    }
    .desc
    {
        font-size: 8px;
    }
    .nav-item{
        font-size: 13px;
    }

    .items {
        input 
        {
            width: 30%; 
            text-align: center;
        }  
    }
}

</style>
