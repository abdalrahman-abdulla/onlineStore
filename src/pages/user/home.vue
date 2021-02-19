<template>
    <div class="home  "> 
        <!-- slider -->
        <div id="demo" class="carousel slide  " data-ride="carousel">
            <!-- Indicators -->
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <!-- The slideshow -->
            <div class="carousel-inner  w-100" >
                <router-link :to="{ name: 'shoping', params: { sub_slug: 'الحاسوب-وملحقاته' }}" class="carousel-item active w-100">
                    <img src="@/assets/images/cat-1.jpg" alt="Los Angeles" class="w-100">
                </router-link >
                <router-link :to="{ name: 'shoping', params: { sub_slug: 'كتب-علمية' }}" class="carousel-item">
                    <img src="@/assets/images/cat-2.jpg" alt="Chicago" class="w-100">
                </router-link>
                <router-link :to="{ name: 'shoping', params: { sub_slug: 'اكسسوارات-نسائية' }}" class="carousel-item">
                    <img src="@/assets/images/cat-3.jpg" alt="New York" class="w-100">
                </router-link>
            </div> 
        </div>


        <!-- icons -->
        <div class="col-12  icons py-2 py-md-4 my-4">
            <div class="container-fluid d-flex justify-content-center">
                <div class="">
                    <div class="m-2" v-for="(subcategory,index) in homeData.subcategories" :key="index">
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: subcategory.slug }}">
                            <div class="icon-item mx-auto "> 
                                <div class=" p-lg-4">
                                
                                    <i class="far fa-address-book fa-fw"></i>
                                </div>
                            </div>
                            <div class="icon-title">
                                {{subcategory.name}}  
                            </div>
                        </router-link> 
                    </div> 
                </div>
                
            </div>  
        </div>

        <!-- sections -->
        <div class="section w-100  bg-white">
            <div class="px-5">
                <div >
                    <div class="float-right w-50 p-2">
                        <router-link class="text-dark text-decoration-none  "  :to="{ name: 'shoping', params: { sub_slug: 'ملابس-رجالية	' }}">
                            <img src="@/assets/images/p1-d.jpg" alt="" class="d-none d-md-block w-100 h-100">
                            <img src="@/assets/images/p1-m.jpg" alt="" class="d-md-none w-100 ">
                        </router-link> 
                    </div>
                    <div class="w-26 float-left p-2 ">
                        <router-link class="text-dark text-decoration-none "  :to="{ name: 'shoping', params: { sub_slug: 'اكسسوارات-نسائية' }}">
                            <img src="@/assets/images/p4-d.jpg" alt="" class="d-none d-md-block  w-100 ">
                            <img src="@/assets/images/p4.jpg" alt="" class="d-md-none w-100 ">
                        </router-link>
                            
                    </div>
                    <div class="w-21 float-left p-md-2">
                        <router-link class="text-dark text-decoration-none "  :to="{ name: 'shoping', params: { sub_slug: 'ساعات' }}">
                            <div class="pb-2 mb-md-2">
                                <img src="@/assets/images/p2.jpg" alt="" class="w-100">
                            </div>
                        </router-link> 
                        
                        <div class="">
                        <router-link class="text-dark text-decoration-none "  :to="{ name: 'shoping', params: { sub_slug: 'احذية-نسائية' }}">
                            <div class="">
                                <img src="@/assets/images/p3.jpg" alt="" class="w-100">
                            </div>
                        </router-link>  
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- cloths cards -->
        <div class="cloths w-100 pl-4 pr-2 px-md-5">
            <div class="container-fluid"> 
                <div v-for="(item,index) in homeData.items2" :key="index">
                    <router-link  class="m-1 card text-dark text-decoration-none  border-0 p-0 text-right pt-4"   :to="{name:'showitem' ,params:{item_slug:item.slug,sub_slug:item.subcategory.slug}}">
                        
                        <img class="card-img-top " :src='item.image' >
                        <div class="card-body ">
                            <h5 class="card-title  text-16 m-0">{{item.name.length > 25 ? item.name.substring(0, 24) + "..." : item.name}}</h5>
                            <p class="card-text text-12 my-1 text-secondary">{{item.description.length > 25 ? item.description.substring(0, 24) + "..." : item.description}}</p>
                            <p class="card-text price text-14 font-weight-bold" >{{ $parent.$parent.formatToCurrency(item.price) }}</p>
                        </div>
                    </router-link> 
                </div>  
            </div>
        </div>
        <!-- sections-2 -->
        <div class="section-2 w-100 bg-white">
            <div class="px-5">
                <div >
                    <div class="float-right w-36 p-2">
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: 'اجهزة-ومنتجات-العاب' }}">
                            <img src="@/assets/images/p9.jpg" alt="" class="  w-100 pb-2 mb-md-2">
                        </router-link>
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: 'منتجات-havit' }}">
                            <img src="@/assets/images/p8.jpg" alt="" class="   w-100 ">
                        </router-link>
                    </div>	
                    <div class="w-36 float-left p-2 ">
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: 'الهواتف-والاكسسوارات' }}">
                            <img src="@/assets/images/p7.jpg" alt="" class="  pb-2 mb-md-2 w-100 ">
                        </router-link>
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: 'الاجهزة-اللوحية' }}">
                            <img src="@/assets/images/p6.jpg" alt="" class="   w-100 ">
                        </router-link> 
                    </div>
                    <div class="w-26 float-left p-md-2"> 
                        <router-link class="text-dark text-decoration-none m-2"  :to="{ name: 'shoping', params: { sub_slug: 'الحاسوب-وملحقاته' }}">
                            <img src="@/assets/images/p5.jpg" alt="" class="w-100">
                        </router-link> 
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- section-2 items --> 
        <div class="cloths  w-100 pl-4 pr-2 px-md-55">
            <div class="container-fluid"> 
                <div v-for="(item,index) in homeData.items" :key="index">
                    <router-link  class="m-1 card text-dark text-decoration-none  border-0 p-0 text-right pt-4"   :to="{name:'showitem' ,params:{item_slug:item.slug,sub_slug:item.subcategory.slug}}">
                        <img class="card-img-top " :src='item.image' >
                        <div class="card-body">
                            <h5 class="card-title  text-16 m-0 text-break">{{item.name.length > 25 ? item.name.substring(0, 24) + "..." : item.name}}</h5>
                            <p class="card-text text-12 my-1 text-secondary">{{item.description.length > 25 ? item.description.substring(0, 24) + "..." : item.description}}</p>
                            <p class="card-text price text-14 font-weight-bold" >{{ $parent.$parent.formatToCurrency(item.price) }}</p>
                        </div>
                    </router-link> 
                </div>  
            </div>
        </div>
        
    </div>
</template>

<script>
// @ is an alias to /src 
import 'jquery'
import Service from '../../Service'
export default {
    name: "Home",
    data() {
        return {
            homeData:[],
        }
    },
    beforeCreate() {
        Service.get('homedata').then(data => {
            this.homeData=data.data 
        })
    },
};
</script>
<style lang="scss" scoped> 
@import '../../assets/css/variables.scss';
.home
{
    background-color: #f7f8fa;
}
.card:hover
        {
            box-shadow: 0px 0px 15px -3px #888888;
        }
 
.carousel-indicators li {
    background-color: #999;
    background-color: rgba(70, 70, 70, 0.25);
    height: 4px;
}

.carousel-indicators .active {
    background-color: #444;
    width: 70px; 
} 

.icons{ 
        box-shadow: 0px 0px 26px -10px;
        .container-fluid > div::-webkit-scrollbar {
            display: none;
        }   
        .container-fluid > div {  
            overflow-x: scroll;
            white-space: nowrap;
            scrollbar-width: none;
        > div{
            display:inline-block;
        } 
        .icon-item
        {
            width: fit-content;
            cursor: pointer;
            background-color: #ececed;
            border-radius: 50%;
            padding: 6px;
            div{
                border: 2px solid white;
                border-radius: 50%;
                font-size: 45px; 
                color: $maincolor;
                line-height: 20px; 

            }  
        }
        .icon-item:hover
        {
            background-color: $maincolor;  
            div{
                color: #fff;
            } 
        }
        .icon-title{
            font-size: 12px;
            padding: 4px;
            font-weight: 700;
        }
    }
} 

@media screen and (max-width: 768px) { 
.icons{  
        .icon-item
        {  
            div{ 
                font-size: 30px !important;  
                padding: 13px; 
            }  
        } 
        .icon-title{
            font-size: 11px !important; 
        }
    }
} 
.section{
    box-shadow: 0px 0px 26px -10px;
   .w-21
    {
        width: 21.6% !important;
    }
    .w-26
    {
        width: 26.6% !important;
    }
    .w-50
    {
        width: 50.6% !important;
    } 
}
@media screen and (max-width: 768px) {
    .section{ 
    .w-21
    {
        width: 100% !important;
    }
    .w-26
    {
        width: 100% !important;
    }
    .w-50
    {
        width: 100% !important;
    }
    }
} 
.cloths { 
        .container-fluid::-webkit-scrollbar {
            display: none;
        }   
        .container-fluid {  
        overflow-x: scroll !important;
        white-space: nowrap;
        scrollbar-width: none !important;
        > div{
            display:inline-block !important;
            .card-img-top
            {
                width: 200px;
                height: 200px;
            }
            .card-body{
                max-width: 200px;
            }
        }
        } 
        .card{
            display: inline-block;
        }
}
.section-2{
    box-shadow: 0px 0px 26px -10px;
   .w-36
    {
        width: 36.5%!important;
    }
    .w-26
    {
        width: 26.6% !important;
    } 
}
@media screen and (max-width: 768px) {
    .section-2{ 
        .w-36
        {
            width: 100% !important;
        }
        .w-26
        {
            width: 100% !important;
        } 
    }
} 


</style>
