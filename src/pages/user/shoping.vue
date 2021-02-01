<template>
    <div class="shoping w-100 p-3 px-md-5">
        <div class="d-flex flex-row-reverse text-url">
            <router-link class="text-dark"  :to="{ name: 'home'}">
                <span class="text-dark small">  / الصفحة الرئيسية</span>
            </router-link>
            <router-link class="text-dark font-weight-bold"   :to="{ name: 'shoping', params: { sub_slug:this.$route.params.sub_slug  }}">
                <span class="text-dark small font-weight-bold">{{this.$route.params.sub_slug }}</span>
            </router-link> 
        </div>
        <div class="row mt-3 flex-md-row flex-column-reverse">
            
            <div class="row col-12 col-md-9 m-0 pr-md-4 items mb-2" v-if="items[0]">
                <div class="col-12 d-flex flex-row-reverse nav-icon font-weight-bold">
                    <span> {{subcat ?subcat.name:'نتائج البحث عن '+ this.$route.params.sub_slug }} ( {{items.length}} )</span>
                </div>
                <div class="col-6 col-sm-4 col-md-3 m-0 p-1" v-for="(item, index) in items" :key="index" :class="item.price >= price.minPrice && item.price <= price.maxPrice ? '':'d-none'">
                    <router-link :to="{name:'showitem' ,params:{item_slug:item.slug,sub_slug:$route.params.sub_slug}}" class="text-decoration-none "  >
                        <div class="m-1 card h-100 border-0 p-0 text-right pt-4" >
                            <img class="card-img-top w-100" :src='"http://127.0.0.1:8000/img/items/" + item.image' alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title mb-2">{{item.name}}</h5>
                                <p class="card-text  mb-2">{{item.description.length > 25 ? item.description.substring(0, 24) + "..." : item.description}}</p>
                                <p class="card-text price">{{ $parent.$parent.formatToCurrency(item.price) }}</p>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
            </div>
            <div class="row col-12 col-md-9 m-0 pr-md-4 items mb-2" v-if="!items[0]">
                <div class="col-12 d-flex flex-row-reverse nav-icon font-weight-bold">
                    <span> {{subcat ?subcat.name:'نتائج البحث عن '+ this.$route.params.sub_slug }} ( {{items.length}} )</span>
                    
                </div>
                <div class="col-12 d-flex flex-row justify-content-center nav-icon  py-5 my-5">لاتوجد عناصر</div>
            </div>
            <div class="col-12 col-md-3 px-3 py-2">
                <div class="card right-list">
                    <ul class="list-group list-group-flush text-right"> 
                        <li class="list-group-item">
                            <span class=" font-weight-bold">فلتر للسعر</span>
                            <button class="float-left  font-weight-bold font-weight-bold m-0 p-0 border-0 bg-white" data-toggle="collapse" data-target="#collapseTwo" ><i class="fas fa-plus"></i></button>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <div class="card-body">
                                    <ul class="list-group border-0">
                                        <li class="list-group-item border-0 p-1 ">
                                            <div class="input-group mb-2"> 
                                                <div class="input-group-prepend">
                                                <span class="input-group-text">من</span>
                                                </div>
                                                <input type="number" class="form-control" placeholder="Min Price" :max="price.maxPrice" v-model="price.minPrice">
                                            </div>  
                                        </li>
                                        <li class="list-group-item border-0 p-1 ">
                                            <div class="input-group mb-2"> 
                                                <div class="input-group-prepend">
                                                <span class="input-group-text">الى</span>
                                                </div>
                                                <input type="number" class="form-control" placeholder="Min Price" :min="price.minPrice" v-model="price.maxPrice">
                                            </div>  
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script> 
import Service from '../../Service' 
export default {
    name: "shoping",
    data() {
        return {
            items:[],
            subcat:'',
            price:{
                minPrice:0,
                maxPrice:0,
            }
            
        }
    },
    beforeCreate() {
        Service.get('/'+this.$route.params.sub_slug+'/items').then(data => {
                if(data.data.data){
                    this.items=data.data.data;
                }
                else{
                    this.items=data.data[1];
                    this.subcat=data.data[0]; 
                } 
            })
    },
    methods: { 
        priceFilter(){
            this.temp=JSON.parse(JSON.stringify(this.items));
            if(this.toDate && this.fromDate)
            {   
                for (let index = 0; index < this.temp.length; index++) {
                    if(!(this.temp[index].paid_date <= this.toDate && this.temp[index].paid_date >= this.fromDate))
                    { 
                        this.temp.splice(index,1);
                        index--;
                    }
                }
            }
            this.revenues=this.temp;
        }, 
        
    },
    watch:{ 
        items(){
            this.items.forEach(element => {
                this.price.minPrice=this.items[0].price
                if(element.price>this.price.maxPrice)
                    this.price.maxPrice=element.price;
                
            }); 
        },  
    }
};
</script>
<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
.shoping{
    background-color: #f7f8fa;
    .items{
        .card{ 
        cursor: pointer;
        color: #333333;
        .card-text
        {
            font-size: 12px;
        }
        .card-title
        {
            font-size: 16px;
        }
        .price
        {
            font-size: 18px;
            font-weight: 700;
            color: black;
        }
        .card-img-top{
            width: 200px;
            height: 250px;
        }
        }
        .card:hover
        {
            box-shadow: 0px 0px 15px -3px #888888;
        }
    }
    .right-list
    {
        ul li ul li:hover{
            color: $maincolor;
        }
    }
    
}

</style>
