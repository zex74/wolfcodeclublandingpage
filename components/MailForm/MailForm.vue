<template>
    <div class="mail-form" :class="mail.show ? 'show' : ''" v-click-outside="closeModal">
        <div class="side">
            <img :src="require('@/assets/mailus.svg')" alt="">
            <h2>Contact us</h2>
            <!-- <p>You can sand us an email on <a href="mailto:office@wiequee.com">office@wiequee.com</a> or you can fill out our form!</p> -->
            <p>You can sand us an email on <a href="#">wolfcodeclub@gmail.com</a> </p>
            <p>Or you can fill out our form!</p>
            <article class="social">
                <!-- <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a> -->
            </article>
        </div>
        <div class="form" v-if="form">
            <!-- <input type="text" placeholder="Enter your or your company's name" v-model="form.name"> -->
            <input type="email" placeholder="Enter your email" v-model="form.email">
            <input type="text" placeholder="Enter subject" v-model="form.subject" :disabled="mail.subject && form.subject ? true : false">
            <textarea name="body" rows="8" placeholder="Enter message" v-model="form.body"></textarea>
            <button @click="doSubmit"><i class="fas fa-envelope"></i>Send</button>
        </div>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'MailForm',
    data () {
        return {
            form: {
                email: '',
                name: '',
                subject: '',
                body: '',
                message: 'Successfuly sent mail!'
            }
        }
    },
    props: ['mail'],
    computed: {
        subject () {
            this.form.subject = this.mail.subject
            return this.mail.subject
        }
    },
     methods: {
        doSubmit(){
            this.$root.$emit('submit-form', this.form)
        },
        closeModal () {
            this.$root.$emit('hide-form')
        }
    },
    watch: {
        subject () {
            this.form.subject = this.mail.subject
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss" scoped>
    .mail-form{
        position: fixed;
        display: block;
        height: calc(100% - 200px);
        top: -150vh;
        width: 90vw;
        left: 5vw;
        z-index: 1;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        box-shadow: 0px 30px 20px rgba(0,0,0,0.10196);
        transition: all .3s ease-in-out;
        &.show{
            top: 100px;
            z-index: 20;
        }
        .side{
            width: 50%;
            float: left;
            display: block;
            background: #fdfdfd;
            height: 100%;
            &::-webkit-scrollbar {
                display: none;
            }
            overflow: scroll;
            padding-top: 200px;
            text-align: center;
            border-bottom-left-radius: 50px;
            border-top-left-radius: 50px;
            a{
                color: #6f6f6f;
                text-decoration: none;
            }
            img{
                width: 60%;
                max-width: 350px;
            }
            h2{
                font-size: 36px;
                font-weight: lighter;
                color: #6F6F6F;
            }
            .social{
                a{
                    outline: none;
                    text-decoration: none;
                    font-size: 26px;
                    display: inline-block;
                    color: #6f6f6f;
                    margin: 20px 0;
                    width: 50px;
                    transition: all .3s ease-in-out;
                    &:hover{
                        color: #B2B200;
                    }
                }
            }
        }
        .form{
            display: block;
            float: left;
            width: 50%;
            height: 100%;
            background: #6f6f6f;
            padding: 50px;
            border-bottom-right-radius: 50px;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
            input{
                padding: 10px;
                display: block;
                width: 100%;
                outline: none;
                border: 2px solid transparent;
                border-radius: 10px;
                margin: 10px 0;
            }
            textarea{
                padding: 10px;
                display: block;
                width: 100%;
                outline: none;
                border: 2px solid transparent;
                border-radius: 10px;
                margin: 10px 0;
                resize: none;
            }
            button{
                display: block;
                border: none;
                border-radius: 10px;
                background-color: #F29B30;
                color: #6f6f6f;
                text-align: center;
                padding: 10px;
                font-size: 18px;
                width: 100%;
                i{
                    margin-right: 20px;
                }
            }
        }
        @media only screen and (max-width: 768px) {
            top: -150vh;
            z-index: -1;
            &::-webkit-scrollbar {
                display: none;
            }
            &.show{
                top: 70px;
                overflow: scroll;
                height: calc(100% - 140px);
                padding-bottom: 30px;
                background-color: #6f6f6f;

            } 
            .side, .form{
                border-top-left-radius: 0;
                width: 100%;
                float: none;
                padding: 20px;
                height: auto;
            }
            .side{
                background-color: #6f6f6f;
                color: #fdfdfd;
                border-bottom-left-radius: 0;
                a{
                    color: #F29B30;

                }
                h2{
                    color: #F29B30;
                }
                .social{
                    a{
                        color: #fdfdfd;
                    }
                }
            }
        }
    }
    
</style>