<template>
    <div class="footer-nav w-100 pt-2">
        <ul class="row w-100 m-0 px-4 text-white pt-3 d-flex justify-content-end justify-content-md-around">
            <li class="d-flex " v-for="(temp,index) in bottombar" :key="index"> 
                <div class="text-right text">
                    <p class="mb-0 pt-2"><strong>{{temp.title}}</strong><br>{{temp.desc}}</p>
                    
                </div>
                <div class="icon pl-3">
                    <i class="fas fa-user-tie fa-fw"></i>
                </div>
            </li>
        </ul>
        <div class="about row m-0 w-100 pt-4">
            <div class="container-fluid d-flex flex-column flex-lg-row d justify-content-around" >
                    <div class="text-right about-list" v-for="index in [1,2,3,4]" :key="index">
                        <h6>فئات التسوق<a :href="'#demo' + index" class="float-left d-md-none" data-toggle="collapse"><i class="fas fa-caret-down fa-fw"></i></a></h6>
                        
                        <ul :id="'demo' + index" class="collapse d-md-block" >
                            <li v-for="(temp,index) in bottombar2" :key="index">{{temp}}</li>   
                        </ul>
                        <hr class="d-md-none" v-if="index !=4">
                    </div>
                    
                    
            </div> 
            
        </div>
        <hr class="last-hr"> 
        <div class="copyright">
            جميع حقوق النشر والتوزيع محفوظة لطماطة ©2020
        </div>
    </div>
</template>

<script>
// @ is an alias to /src 

export default {
    name: "FooterNav", 
    data() {
        return {
            bottombar:[
                {
                    title:'خدمة عملاء ممتازة',
                    desc:'جاهزون لخدمتك في كل الأوقات'
                },
                {
                    title:'فئات متنوعة',
                    desc:'مكان واحد للتسوق'
                },
                {
                    title:'إعادة وتبديل الطلبات بسهولة',
                    desc:'استرجع قيمة الطلب فورا'
                },
                {
                    title:'شحن سريع و مضمون',
                    desc:' تعبئة ممتازة'
                }
            ],
            bottombar2:[
                'إلكترونيات',
                'الأزياء',
                'المنزل والمطبخ', 
                'الصحة و الجمال',
                'منتجات الأطفال',
                'منطقة العروض',
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

*{
    overflow: hidden;
}
.footer-nav{
    >ul.row{
        background-color: $maincolor;
        .text {
            width: fit-content;
            p strong{
                font-size: 16px;
                font-weight: 700;
            }
            p {
                font-size: 14px;
                line-height: 20px;
                font-weight: 400;
            }
        }
        .icon{
            font-size: 50px;
            width: fit-content;
        }
    };
}

.about
{
    hr{
        border: 1px solid #f0f0f0; 
        margin: 10px;
    }
    .about-list 
    {
        h6{
            font-size: 16px;
            font-weight: 700;
            color: #45434a;
            margin: 0;
        }
        li{
            font-size: 14px;
            line-height: 29px;
            font-weight: 500;
            color: #55535a;
            
        }
        li:hover{ 
            color: $maincolor
        }
        a{
                padding: 0 20px;
                color: black;
                font-size: 20px;
            }
    }
    
} .last-hr{  
        margin: 10px 0 !important;
    }
    .copyright{
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
    }

@media screen and (max-width: 576px) {
    .text { 
            p strong{
                font-size: 14px !important; 
            }
            p {
                font-size: 12px  !important;  
            }
        }
        .icon{
            font-size: 30px;
            width: fit-content;
        }
}
.about-list li{
    cursor: pointer;
}
</style>
