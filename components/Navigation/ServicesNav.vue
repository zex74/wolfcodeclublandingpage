<template>
    <div class="services-nav" :class="extend ? 'extend' : ''">
        <div class="items">
            <h3>Our Services</h3>
            <article v-for="(serv, index) in services" :key="index" @click="scrollToEl(serv.short)">
                <img :src="require(`@/assets/${serv.img}`)" alt="">
                <span>{{serv.short}}</span>
            </article>
        </div>
        <div class="arrow" @click="extend = !extend" :class="extend ? 'extend' : ''"><i class="fas fa-angle-right"></i></div>
    </div>
</template>
<script>
export default {
    name: 'ServicesNav',
    data () {
        return {
            services: [
                {
                    img: 'allinone.svg',
                    short: 'AI1',
                },
                {
                    img: 'mobile.svg',
                    short: 'MD',
                },
                {
                    short: 'FE',
                    img: 'desktop.svg',
                },
                {
                    img: 'server.svg',
                    short: 'BE',
                }
            ],
            extend: false
        }
    },
    props: ['top'],
    methods: {
        scrollToEl (id) {
            let el
            if (process.client) {
                el = document.getElementById(id)

            }
            el.scrollIntoView({ behavior: 'smooth' })
        }
    },
    watch: {
        top () {
            if (this.top) {
                this.extend = true
            }
            if (!this.top) {
                this.extend = false
            }
        }
    }
}
</script>
<style lang="scss">
    .services-nav{
        position: fixed;
        left: -160px;
        top: 270px;
        width: 220px;
        background: #6f6f6f;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-right: 2px solid #EBFF00;
        border-top: 2px solid #EBFF00;
        border-bottom: 2px solid #EBFF00;
        transition: all .3s ease-in-out;
        z-index: 1;
        &.extend{
            left: 0;
        }
        h3{
            font-weight: lighter;
            color: #fdfdfd;
            font-size: 30px;
            padding-left: 20px;
        }
        .items{
            cursor: pointer;
            width: 160px;
            display: inline-block;
            padding-bottom: 10px;
            padding-top: 10px;
            img{
                width: 70px;
                height: 50px;
                padding-left: 10px;
                object-fit: contain;
            }
            span{
                float: right;
                font-size: 36px;
                line-height: 50px;
                padding-left: 20px;
                color: #fdfdfd;
            }
        }
        .arrow{
            cursor: pointer;
            float: right;
            line-height: inherit;
            height: 274px;
            margin: auto 0;
            font-size: 36px;
            color: #fdfdfd;
            line-height: 274px;
            vertical-align: middle;
            padding-right: 20px;
            transition: all .3s ease-in-out;
            top: 0;
            bottom: 0;
            &.extend{
                transform: rotate(180deg);
                padding-left: 20px;
                padding-right: 0;
                color: #EBFF00;
            }
        }

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
</style>