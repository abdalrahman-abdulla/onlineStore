<template>
    <div class="w-100 showItem">
        <div class="container-fluid row  px-md-5 mb-4" v-if="item.name">
            <div class=" col-md-12 d-flex flex-row-reverse text-url py-3">
                <router-link class="text-dark"  :to="{ name: 'home'}">
                    <span class="text-dark small">  / الصفحة الرئيسية</span>
                </router-link>
                <router-link class="text-dark font-weight-bold"   :to="{ name: 'shoping', params: { sub_slug: this.$route.params.sub_slug }}">
                    <span class="text-dark small">  / {{this.$route.params.sub_slug}} </span>
                </router-link>
                <router-link class="text-dark font-weight-bold"  :to="{name:'showitem' ,params:{item_slug:item.slug,sub_slug:this.$route.params.sub_slug}}">
                    <span class="text-dark small font-weight-bold"> {{item.name}} </span>
                </router-link>  
            </div> 
            <div class="col-12 col-md-6">
                <img :src='this.$store.getters.get_url+"img/items/" + item.image' alt="" class="w-75 img-item">
            </div>
            <div class="col-12 col-md-6 text-right">
                <div class="title">
                    {{item.name}}
                </div>
                <div class="mt-1 price title" >
                    {{ $parent.$parent.formatToCurrency(item.price) }}
                </div>
                <hr>
                <div class="row text-right px-4 d-flex flex-column">
                    <span class="font-weight-bold float-right">الوصف</span>
                    <p>
                        {{ item.description}} 
                    </p>
                </div>
                <hr>
                <div class="quantity"  :class="item.quantity ? 'd-flex flex-column' : 'd-none'">
                    <div class="qua-title mb-2 text-secondary  text-right">
                        الكمية
                    </div>
                    <div>
                        <input class="form-control py-0 float-right" type="number" v-model="quantity" min="1" :max="item.quantity" id="example-number-input">
                    </div>

                </div>
                <hr :class="item.quantity ? ' ' : 'd-none'">
                <div class="">
                    <button  :disabled='item.quantity && add_to_cart' class="btn btn-success  font-weight-bold px-4" :class="item.quantity ? 'btn-success' : 'btn-danger'" @click="hi()">{{add_to_cart ? 
                        'مضاف الى السلة' 
                        :item.quantity ? 'اضف الى السلة ': "سيتوفر قريبا"}}</button>
                </div> 
            </div>
            
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import $ from 'jquery';
import Service from "../../Service";
export default {
    name: "showItem",
    data() {
        return {
            add_to_cart:false,
            item:{},
            quantity:1
        }
    },
    methods: { 
        hi(){
            this.$store
            .dispatch("add_to_cart", {
            item: this.item,
            quantity: this.quantity
            })  
            window.toast.fire({
                icon: 'success',
                title: 'تمت الاضافة الى السلة'
            })
            this.add_to_cart=true
        }
    },
    beforeCreate() {
        Service.get('/items/'+this.$route.params.item_slug).then(data => {
                this.item=data.data.data;  
            })
    },
}; 
</script>
<style lang="scss" scoped>
    .title
    {
        font-weight: 600;
        font-size: 24PX;
    }
    .price{
        font-size: 18PX;
        font-weight: 600;
    }
    input{
            width: 70px;  
            font-size: 14px; 
    }
    .qua-title
    {
        font-size: 14px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
    }
    .img-item{
        max-height: 500px;
    }
</style>
