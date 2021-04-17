<template>
    <article class="card" @mouseleave="changeShow(false)" :id="card.short" >
        
        <img :src="require(`@/assets/${card.img}`)" alt="">
        <h3>Traje onoliko koliko se potrudis</h3>
        <h4>Da, samo od tvog truda zavisi.</h4>
        <p>Dobijas tri stepa ucenja od osnovnog do naprednog programiranja, a od
          tebe zavisi koliko brzo ces zavrsiti sa ucenjem.
        </p>
        <br>
        <h4>Lako ces pronaci posao.</h4>
        <p>U toku trajanja kursa imas testove, ali i rad na pravim projektima. Ukoliko se tu dobro pokazes dobijas 
          prve klijente. Cenimo tvoj rad i trud, podrska smo ti u svakom smislu.</p>

        <div class="readmore" @click="changeShow(false)">
            <!-- <span>Read more</span> -->
            <div class="line"></div>
        </div>
        <transition name="slide">
            <div class="extend" v-if="show">
                <p>Technologies we use for development</p>
                <ul>
                    <li v-for="(tech, idx) in card.tech" :key="`li${idx}`">
                        <img :src="require('@/assets/skills/flutter.png')" alt="" v-if="tech === 'flutter'">
                        <img :src="require('@/assets/skills/reactnative.svg')" alt="" v-if="tech === 'reactnative'">
                        <img :src="require('@/assets/skills/nativescript.svg')" alt="" v-if="tech === 'nativescript'">

                        <img :src="require('@/assets/skills/js.svg')" alt="" v-if="tech === 'js'">
                        <img :src="require('@/assets/skills/angular.svg')" alt="" v-if="tech === 'angular'">
                        <img :src="require('@/assets/skills/react.svg')" alt="" v-if="tech === 'react'">
                        <img :src="require('@/assets/skills/vue.svg')" alt="" v-if="tech === 'vue'">
                        <img :src="require('@/assets/skills/nuxt.svg')" alt="" v-if="tech === 'nuxt'">
                        <img :src="require('@/assets/skills/redux.svg')" alt="" v-if="tech === 'redux'">
                        <img :src="require('@/assets/skills/sass.svg')" alt="" v-if="tech === 'sass'">

                        <img :src="require('@/assets/skills/php.svg')" alt="" v-if="tech === 'php'">
                        <img :src="require('@/assets/skills/python.svg')" alt="" v-if="tech === 'python'">
                        <img :src="require('@/assets/skills/laravel.png')" alt="" v-if="tech === 'laravel'">
                        <img :src="require('@/assets/skills/symfony.svg')" alt="" v-if="tech === 'symphony'">
                        <img :src="require('@/assets/skills/java.svg')" alt="" v-if="tech === 'java'">
                        <img :src="require('@/assets/skills/node.svg')" alt="" v-if="tech === 'node'">
                        <img :src="require('@/assets/skills/express.svg')" alt="" v-if="tech === 'express'">
                        <img :src="require('@/assets/skills/electron.svg')" alt="" v-if="tech === 'electron'">
                        <img :src="require('@/assets/skills/mongodb.svg')" alt="" v-if="tech === 'mongodb'">
                    </li>
                </ul>
                <div class="mobile">
                    <h3>{{card.short}}</h3>
                    <p>Contact us <br> about this service</p>
                    <a href="" @click="sendMail">Mail us</a>
                </div>
            </div>
        </transition>
        <div class="info">
            <h3>{{card.short}}</h3>
            <p>Contact us <br> about this service</p>
            <a href="" @click="sendMail">Mail us</a>
        </div>
    </article>
</template>
<script>
export default {
    name: 'SingleFeature',
    data () {
        return {
            show: false
        }
    },
    props: ['card'],
    computed: {
        subject () {
            this.form.subject = this.card.subject
            return this.card.subject
        }
    },
    methods: {
        changeShow (a) {
            if (this.show === a && a === true) {
                this.show = false
            } else {
                this.show = a
            }
        },
        sendMail (e) {
            e.preventDefault();
            
            this.$root.$emit('trigger-form', {subject: this.card.subject})

        }
    }
}
</script>
<style lang="scss" scoped>
    .card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: left;
        margin: 50px auto;
        max-width: 650px;
        min-width: 650px;
        padding: 30px;
        background-color: #fdfdfd;
        box-shadow: 20px 50px 50px rgba(14,3,39,0.07059);
        border-radius: 30px;
        border: 2px solid #6f6f6f;
        z-index: 9;
        .info{
            display: block;
            position: absolute;
            width: 210px;
            top: -2px;
            height: calc(100% + 4px);
            right: -30px;
            transition: all .3s ease-in-out;
            z-index: 2;
            padding: 10px;
            opacity: 0;
            background: #6F6F6F;
            color: #fdfdfd;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            border-top: 2px solid #F29B30;
            border-bottom: 2px solid #F29B30;
            border-right: 2px solid #F29B30;
            a{
                outline: none;
                display: block;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                transition: all .3s ease-in-out;
                padding: 20px;
                color: #6F6F6F;
                background: #F29B30;
                border: none;
                border-radius: 40px;
                width: 100%;
                font-size: 24px;
                &:hover{
                    background: #B2B200;
                    font-weight: bold;
                    color: #fdfdfd;
                }
            }
            h3{
                font-size: 90px;
            }
            p{
                font-size: 22px;
                margin-bottom: 50px;
            }
        }
        // &:hover{
        //     border: 2px solid #EBFF00;
        //     .info {
        //         right: -180px;
        //         opacity: 1;
        //     }
        // }
        img{
            height: 350px;
            width: 100%;
            object-fit: contain;
        }
        h3{
            border-bottom: 3px solid #F29B30;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        .readmore{
            width: max-content;
            span {
                transition: all .3s ease-in-out;
                color: #6F6F6F;
            }
            .line{
                transition: all .3s ease-in-out;
                min-width: 0;
                width: 0;
                height: 2px;
                background-color: #B2B200;
            }
            &:hover{
                span{
                    color: #B2B200;
                }
                .line{
                    min-width: 100%;
                    width: 100%;
                }
            }
        }

        @media only screen and (max-width: 768px) {
            max-width: 90%;
            min-width: 90%;
            .info {
                display: none;
            }
        }
    }
    .slide-enter-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }
    .extend{
        padding-top: 20px;
        p{
            padding-bottom: 20px;
        }
        ul {
            padding-left: 0;
            padding-bottom: 20px;
            li{
                list-style-type: none;
                display: inline-block;
                margin: 0 10px;
                img{
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }
            }
        }
        .mobile{
            display: none;
            @media only screen and (max-width: 768px) {
                display: block;
                background: #6F6F6F;
                color: #fdfdfd;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
                border-top: 2px solid #F29B30;
                border-bottom: 2px solid #F29B30;
                border-right: 2px solid #F29B30;
                margin: 0 -30px -30px -30px;
                 a{
                    outline: none;
                    display: block;
                    text-decoration: none;
                    text-align: center;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    padding: 20px;
                    color: #6F6F6F;
                    background: #F29B30;
                    border: none;
                    border-radius: 28px;
                    width: 100%;
                    font-size: 24px;
                    &:hover{
                        background: #B2B200;
                        font-weight: bold;
                        color: #fdfdfd;
                    }
                }
                h3{
                    display: inline-block;
                    font-size: 90px;
                    border-right: 3px solid #F29B30;
                    border-bottom: 3px solid transparent;
                    padding-right: 10px;
                    height: 110px;
                    margin-bottom: 0;
                }
                p{
                    display: inline-block;
                    font-size: 22px;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
            }
        }
    }
</style>