<template>
    <footer class="footer">
        <article class="logo">
            <img :src="require('@/assets/wiequee-full.svg')" alt="">
        </article>
        <article class="legal">
            <h3>Menu</h3>
            <span v-for="(na, index) in nav" :key="index" @click="scrollToEl(na.short)">{{na.name}}</span>
        </article>
        <article class="social">
            <h3>Contact us</h3>
            <a href="" @click="triggerForm"><i class="fas fa-envelope"></i></a>
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-linkedin-in"></i></a>
        </article>
        <div class="copyright"><span>©</span><span style="padding-right: 5px">{{new Date().getFullYear()}}</span> <span>WolfCodeClub</span></div>
    </footer>
</template>
<script>
export default {
    name: 'FooterCont',
    data () {
        return {
            nav: [
                {name: 'Home', short: 'thome'},
                {name: 'Our Services', short: 'WeDo'},
                {name: 'Meet the team', short: 'about'},
                {name: 'Portfolio', short: 'portfolio'},
            ]
        }
    },
    methods: {
        scrollToEl (id) {
            let el
            if (process.client) {
                el = document.getElementById(id)

            }
            this.$emit('sideNav')
            el.scrollIntoView({ behavior: 'smooth' })
        },
        triggerForm (e) {
            e.preventDefault()
            this.$root.$emit('trigger-form')
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer{
        vertical-align: top;
        border-top: 2px solid #EBFF00;
        padding: 50px;
        width: 100%;
        border-top-left-radius: 50px;
        margin-top: -50px;
        background: #fdfdfd;
        position: relative;
        z-index: 3;
        .logo{
            vertical-align: top;
            width: 20%;
            display: inline-block;
            img{
                width: 100%;
            }
            @media only screen and (max-width: 768px) {
                width: 100%;
                max-width: 200px;
                display: block;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 30px;
            }
        }
        .social, .legal{
            display: inline-block;
            vertical-align: middle;
            text-align: center;
        }
        .legal{
            width: calc(60% - 10px);
            h3 {
                font-size: 32px;
                color: #6f6f6f;

            }
            span{
                cursor: pointer;
                outline: none;
                text-decoration: none;
                font-size: 26px;
                display: block;
                color: #6f6f6f;
                margin: 20px auto;
                width: 200px;
                @media only screen and (max-width: 768px) {
                    margin: 0 auto;
                    text-align: center;
                }
                &:hover{
                    color: #B2B200;
                }
                &:focus {
                    color: #6f6f6f;
                }
                i{
                    display: inline-block;
                    width: 40px;
                }
            }
            @media only screen and (max-width: 768px) {
                width: 100%;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 30px;

            }
        }
        .social {
            width: 20%;
            @media only screen and (max-width: 768px) {
                width: 100%;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 30px;

            }
            h3 {
                font-size: 32px;
                color: #6f6f6f;

            }
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
                @media only screen and (max-width: 768px) {
                    margin: 0;
                    text-align: center;
                }
                &:focus {
                    color: #6f6f6f;
                }
                i{
                    display: inline-block;
                    width: 40px;
                }
            }
        }
    }
    .copyright{
        text-align: center;
    }
</style>