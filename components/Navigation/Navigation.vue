<template>
    <nav class="navigation" :class="hide && !mail.show ? 'hide' : ''" :style="mail.show ? 'z-index: 20' : ''"> 
        <img :src="require('@/assets/logo.svg')" alt="WolfCodeClub">

        <!-- <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> -->
        <!-- <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="1" data-height="50" data-clutchcompany-id="1377303"></div> -->

        <article class="burger" @click="emitNav">
            <div class="menu">
                <span class="line-one"></span>
                <span class="line-two"></span>
                <span class="line-three"></span>
            </div>
        </article>
        <article class="contact-us" @click="triggerForm" :class="mail.show ? 'opened' : ''">
            <div class="menu">
                <p><i class="fas fa-plus"></i>Get In Touch</p>
            </div>
        </article>
    </nav>
</template>
<script>
export default {
    name: 'Navigation',
    props: ['hide', 'mail'],
    methods: {
        emitNav (e) {
            e.stopPropagation();
            
            this.$emit('sideNav')
        },
        triggerForm (e) {
            e.stopPropagation()
                            console.log(this.mail.show)

            if (this.mail.show) {
                this.$root.$emit('hide-form')
            } else {
                this.$root.$emit('trigger-form')
            }
        }

    }
}
</script>
<style lang="scss" scoped>
    .navigation {
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: #fdfdfd;
        border-bottom: 1px solid #EBFF00;
        box-shadow: 0px 30px 20px rgba(0,0,0,0.10196);
        transition: all 0.5s ease-in-out;
        .contact-us{
            position: relative;
            float: right;
            height: 100px;
            color: #6F6F6F;
            font-size: 18px;
            line-height: 50px;
            vertical-align: middle;
            padding: 25px;
            margin-right: 20px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            i{
                margin-right: 20px;
                font-size: 40px;
                vertical-align: middle;
                transition: transform 0.5s ease-in-out;

            }
            &:hover{
                background-color: darken($color: #fdfdfd, $amount: 10);
                border-bottom: 1px solid #EBFF00;

            }
            &.opened, &.opened:focus{
                background: #6f6f6f;
                border-bottom: 1px solid #6f6f6f;
                z-index: 20;
                color: #EBFF00;
                i{
                    transform: rotate(45deg);
                }
                &:hover{
                    background: #6f6f6f;
                    border-bottom: 1px solid #EBFF00;
                    color: #EBFF00;

                }
            }
            @media only screen and (max-width: 786px) {
                height: 70px;
                padding: 10px;
                &.opened, &.opened:focus, &.opened:hover{
                    background: #6f6f6f;
                    border-bottom: 1px solid #6f6f6f;
                }
            }
        }
        .burger{
            position: relative;
            float: right;
            width: 100px;
            height: 100px;
            cursor: pointer;
            .menu{
                position: relative;
                margin: 25px;
                height: 50px;
                width: 50px;
            }
            @media only screen and (max-width: 786px) {
                width: 70px;
                height: 70px;
                .menu{
                    margin: 10px;
                }
            }
            span {
                position: absolute;
                right: 25px;
                display: inline-block;
                background-color: #6F6F6F;
                height: 5px;
                border-radius: 3px;
                transition: all 0.5s ease-in-out;
                &.line-one{
                    width: 20px;
                    top: 12px;
                }
                &.line-two{
                    width: 35px;
                    top: 22px;
                }
                &.line-three{
                    bottom: 12px;
                    width: 50px;
                }
            }
            @media only screen and (max-width: 786px) {
                width: 70px;
                height: 70px;
            }
            &:hover{
                .line-one{
                    width: 50px;
                }
                .line-two{
                    width: 50px;
                    background-color: #EBFF00;
                }
                .line-three{
                    background-color: #B2B200;
                }
            }
        }
        img{
            height: 40px;
            margin: 20px;
        }

        &.hide {
            top: -100px;
        }
        @media only screen and (max-width: 786px) {
            height: 70px;
            &.hide {
                top: -70px;
            }
            img{
                height: 50px;
                margin: 10px;
            }
        }
    }
    .clutch-widget{
        position: fixed;
        bottom: 30px;
        left: 30px;
    }
</style>