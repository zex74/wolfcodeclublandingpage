<template>
    <div class="portfolio-container" id="portfolio">
        <div class="logo">
            <img :src="require('@/assets/WieQuee-logo.svg')" alt="WieQuee">
        </div>
        <h3>What we've done</h3>
        <h2>Our Portfolio</h2>
        <p>Follow the 3 steps and get our portfolio!</p>
        <div class="steps">
            <div class="banner-first"></div>
            <div class="step step1" @click="high = !high"><span>Select portfolios</span></div>
            <div class="step step2" @click="tomail = !tomail"><span>Fill in your email</span></div>
            <div class="step step3" @click="toreq = !toreq"><span>Click "request"</span></div>
            <div class="banner-last"></div>
        </div>
        <port-form :high="high" @removeHigh="high = false" :tomail="tomail" @removeTomail="tomail = false" :toreq="toreq" @removeToreq="toreq = false"/>
    </div>
</template>
<script>
import PortForm from './PortForm'
export default {
    name: 'Portfolio',
    data () {
        return {
            high: false,
            tomail: false,
            toreq: false
        }
    },
    components: {
        PortForm
    }
}
</script>
<style lang="scss" scoped>
    .portfolio-container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 100px 0 150px 0;
        background: linear-gradient(#6f6f6f, darken(#6f6f6f, 30%));
        z-index: 2;
        border-top: 2px solid #EBFF00;
        box-shadow: 0px 0px 20px 10px #00000030;

        @media only screen and (max-width: 786px) {
            padding: 50px 0 100px 0;

        }

        .logo{
            position: absolute;
            top: -30px;
            width: 60px;
            height: 60px;
            left: calc(50% - 30px);
            background: #fdfdfd;
            border-radius: 25px;
            box-shadow: 0px 3px 6px rgba(0,0,0,0.10196);
            img{
                width: 60%;
                margin-top: 15px;
                height: auto;
            
            }
        }
        h3{
            display: block;
            color: darkred;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: bold;
        }
        h2{
            display: block;
            font-size: 36px;
            font-weight: lighter;
            color: #fdfdfd;
            margin-bottom: 50px;
        }
        p{
            color: #fdfdfd;
        }
        .steps{
            padding-top: 50px;
        }
        .step{
            position: relative;
            z-index: 12;
            width: 250px;
            height: 150px;
            background: #fdfdfd;
            padding: 50px 100px 50px 50px;
            float: left;
            vertical-align: middle;
            border-top-left-radius: 50px;
            border-bottom-right-radius: 50px;
            margin-right: -50px;
            box-shadow: -20px 0 20px rgba(0,0,0,.07059);
            cursor: pointer;
            transition: all .3s ease-in-out;
            &.step3{
                width: 200px;
                padding: 50px;
                height: 170px;
                margin-top: -10px;
                span{
                    line-height: 170px;
                    margin-left: 0;
                }

            }
            span{
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                line-height: 150px;
                vertical-align: middle;
                bottom: 0;
                font-size: 26px;
                transition: all .3s ease-in-out;
                margin-left: -50px;
            }
            &:hover{
                height: 170px;
                margin-top: -10px;
                border: 2px solid #B2B200;

                span{
                    line-height: 170px;
                }
            }

            @media only screen and (max-width: 900px) {
                float: none;
                display: block;
                margin-right: 0;
                width: 250px;
                border-top-left-radius: 25px;
                border-bottom-right-radius: 25px;
                margin: 0 auto;
                margin-top: -25px;
                text-align: center;
                padding: 50px;
                height: 150px;
                span{                        
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    line-height: 150px;
                    margin-left: 0;
                    margin-top: -10px;
                }
                &:hover{
                    width: 270px;
                    padding: 50px;
                    height: 150px;
                    margin-top: -25px;
                    span{
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        line-height: 150px;
                        margin-left: 0;
                    }
                }
                &.step3{
                    width: 270px;
                    padding: 50px;
                    height: 150px;
                    margin-top: -35px;
                    span{
                        line-height: 150px;
                        margin-left: 0;
                        margin-top: 0;
                    }

                }
            }
        }
        .banner-first{
            position: relative;
            z-index: 11;
            width: 200px;
            height: 150px;
            margin-right: -50px;
            border-top-left-radius: 75px;
            border-bottom-left-radius: 75px;
            background: #EBFF00;
            float: left;
            @media only screen and (max-width: 900px) {
                float: none;
                display: block;
                margin-right: 0;
                width: 250px;
                margin: 0 auto;
                border-top-left-radius: 75px;
                border-top-right-radius: 75px;
                border-bottom-left-radius: 0px;
            }
        }
        .banner-last{
            position: relative;
            z-index: 11;
            width: 200px;
            height: 150px;
            border-top-right-radius: 75px;
            border-bottom-right-radius: 75px;
            background: #EBFF00;
            float: left;

            @media only screen and (max-width: 900px) {
                float: none;
                display: block;
                margin-right: 0;
                width: 250px;
                margin: 0 auto;
                margin-top: -25px;
                border-top-right-radius: 0;
                border-bottom-left-radius: 75px;
                border-bottom-right-radius: 75px;
            }
        }
    }
    
</style>