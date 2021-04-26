<template>
    <div class="people-modal" :class="people ? 'show' : ''" v-click-outside="closeModal">
        <div class="close" @click="closeModal"><i class="fas fa-times"></i></div>

        <div class="head" v-if="people">
            <img :src="require(`@/assets/team/${people.img}`)" alt="">
            <div class="info">
                <h2>{{people.name}}</h2>
                <p>{{people.title}}</p>
                <p>Age: {{calculate_age(new Date(people.birthday))}}</p>
                <q>{{people.moto}}</q>
            </div>
            
        </div>
        <div class="body">
            <div class="info-mobile" v-if="people">
                <q>{{people.moto}}</q>
            </div>
            <div class="about" v-if="people">
                <h3>About me</h3>
                <p>{{people.about}}</p>
            </div>
            <div class="skills" v-if="people">
                <h3>Skills:</h3>
                <div>
                    <div class="img" v-for="(tech, index) in people.skills" :key="`be${index}`">
                        <img :src="require('@/assets/skills/php.svg')" alt="" v-if="tech === 'php'">
                        <img :src="require('@/assets/skills/python.svg')" alt="" v-if="tech === 'python'">
                        <img :src="require('@/assets/skills/laravel.png')" alt="" v-if="tech === 'laravel'">
                        <img :src="require('@/assets/skills/symfony.svg')" alt="" v-if="tech === 'symphony'">
                        <img :src="require('@/assets/skills/java.svg')" alt="" v-if="tech === 'java'">
                        <img :src="require('@/assets/skills/node.svg')" alt="" v-if="tech === 'node'">
                        <img :src="require('@/assets/skills/express.svg')" alt="" v-if="tech === 'express'">
                        <img :src="require('@/assets/skills/electron.svg')" alt="" v-if="tech === 'electron'">
                        <img :src="require('@/assets/skills/mongodb.svg')" alt="" v-if="tech === 'mongodb'">
                        <img :src="require('@/assets/skills/mysql.svg')" alt="" v-if="tech === 'mysql'">
                        <img :src="require('@/assets/skills/gitlab.svg')" alt="" v-if="tech === 'gitlab'">

                        <img :src="require('@/assets/skills/js.svg')" alt="" v-if="tech === 'js'">
                        <img :src="require('@/assets/skills/angular.svg')" alt="" v-if="tech === 'angular'">
                        <img :src="require('@/assets/skills/react.svg')" alt="" v-if="tech === 'react'">
                        <img :src="require('@/assets/skills/vue.svg')" alt="" v-if="tech === 'vue'">
                        <img :src="require('@/assets/skills/nuxt.svg')" alt="" v-if="tech === 'nuxt'">
                        <img :src="require('@/assets/skills/redux.svg')" alt="" v-if="tech === 'redux'">
                        <img :src="require('@/assets/skills/sass.svg')" alt="" v-if="tech === 'sass'">

                        <img :src="require('@/assets/skills/flutter.png')" alt="" v-if="tech === 'flutter'">
                        <img :src="require('@/assets/skills/reactnative.svg')" alt="" v-if="tech === 'reactnative'">
                        <img :src="require('@/assets/skills/nativescript.svg')" alt="" v-if="tech === 'nativescript'">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'PeopleDetails',
    props: ['people', 'show'],
    methods: {
        closeModal() {
            this.$root.$emit('remove-people')
        },
        calculate_age(dob) { 
            var diff_ms = Date.now() - dob.getTime();
            var age_dt = new Date(diff_ms); 
        
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss" scoped>
    .people-modal {
        position: fixed;
        padding-bottom: 30px;
        top: -100vh;
        height: 80vh;
        width: 820px;
        left: calc(50% - 410px);
        background: linear-gradient(#6f6f6f 30%, darken(#6f6f6f, 30%));
        box-shadow: 0px 0px 30px 20px #0000001a;
        border-radius: 50px;
        z-index: 20;
        transition: all .3s ease-in-out;
        @media only screen and (max-width: 768px) {
            width: 90%;
            left: 5%;
        }
        &.show{
            top: 12vh;
            @media only screen and (max-width: 768px) {
                top: 75px;
            }

        }
        .head{
            background: #F29B30;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom: 4px solid #fdfdfd;
            height: 304px;
            

            @media only screen and (max-width: 768px) {
                height: 104px;
                left: 5%;
            }
        }
        img{
            border-top-left-radius: 50px;
            height: 300px;

            @media only screen and (max-width: 768px) {
                height: 100px;
                left: 5%;
                
            }
        }
        .info{
            display: inline-block;
            vertical-align: top;
            padding: 20px;
            
        }
        h2{
            display: inline-block;
            vertical-align: top;
            font-family: 'Roboto', sans-serif;
            font-size: 36px;
            font-weight: lighter;
            color: black;

            @media only screen and (max-width: 768px) {
                font-size: 24px;
                
            }

        }
        .info-mobile{
            display: none;
        }

        q{
            display: inline-block;
            font-style: italic;
            font-size: 22px;
            margin-top: 20px;
            color: white;
        }
        @media only screen and (max-width: 768px) {
            .info {
                q {
                    display: none;
                }
            }
            .info-mobile{
                display: block;
                text-align: center;
                padding: 0 20px;
                color: #F29B30;
                height: 100px;
            }
        }
    }
    .about, .skills{
        width: 100%;
        display: inline-block;
        padding: 30px;
        h3{
            font-weight: lighter;
            font-size: 36px;
            color: #F29B30;
        }
        p{
            color: #fdfdfd;
            font-weight: 20px;
        }
    }
    .body{
        overflow: scroll;
        height: calc(100% - 300px);
        
        &::-webkit-scrollbar{
            display: none;
        }
        @media only screen and (max-width: 768px) {
            height: calc(100% - 100px);
        }

    }
    .skills{
        padding-bottom: 0;
        .img{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border-radius: 20px;
            background: #fdfdfd;
            img{
                width: 50px;
                height: 50px;
                object-fit: contain;
                border-top-left-radius: 0px;
            }
        }
    }

    .close{
        cursor: pointer;
        position: absolute;
        right: 30px;
        top: 20px;
        color: #6f6f6f;
        i{
            font-size: 36px;
        }
    }
</style>
