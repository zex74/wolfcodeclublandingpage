<template>
<div>
    <div class="wedo-content" id="WeDo">
        <!-- <h1>RAZMISLI!</h1> -->
        <!-- <h2>To znaci da brines o svojoj buducnosti</h2> -->
        <!-- <p>Da, postoji kurs na kom ces u kratkom vremenskom periodu nauciti sve sto ti je potrebno za samostalan rad i poceti da zaradjujes dovoljno za sve sto zelis.</p> -->
        <article class="centered">
            <all-in-one/>
        </article>
        <div class="devider">
            <div class="or">
                <span></span>
            </div>
        </div>
        
        <!-- <div class="individual">
            <h3>Sigurno se pitas koliko traje</h3>
                <single-feature v-for="(card, index) in weDo" :key="`card${index}`" :card="card"/>  
        </div> -->
    </div>
  
</div>
</template>
<script>
import AllInOne from './AllInOne'
import SingleFeature from './SingleFeature'
export default {
    name: "WeDo",
    data () {
        return {
            weDo: [
                {
                    title: 'Mobile Development',
                    img: 'mobile.svg',
                    short: 'MD',
                    subject: 'Enquery about Mobile development',
                    text: [
                        'We can create mobile applications for any purpose using most modern tech stack.',
                        'We can help you define everything from start and make it a reality.'
                    ],
                    tech: [
                        'flutter', 'reactnative', 'nativescript'
                    ]
                },

                {
                    title: 'FrontEnd Development',
                    short: 'FE',
                    img: 'desktop.svg',
                    subject: 'Enquery about FrontEnd development',
                    text: [
                        'We can create a front end part for any type of application you want us to build',
                        'If you don\'t know which tech stack to use, we are here to help you with the choice and decide what is the best tech stack for your needs.'
                    ],
                    tech: [
                        'js', 'react', 'vue', 'nuxt', 'angular', 'vuex', 'redux', 'sass', 'less' 
                    ]
                },

                {
                    title: 'BackEnd Development',
                    short: 'BE',
                    img: 'server.svg',
                    subject: 'Enquery aboutBackEnd development',
                    text: [
                        'We can create a back end part for any type of application with REST API structure or GraphQl depending on what you need.',
                        'If you don\'t know which tech stack to use, we are here to help you with the choice and decide what is the best tech stack for your needs.'
                    ],
                    tech: [
                        'php', 'python', 'laravel', 'symphony', 'node', 'express', 'java' 
                    ]
                }
            ]
        }
    },
    components: {
        AllInOne,
        SingleFeature
    }
}
</script>
<style lang="scss" scoped>
    .wedo-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 100px 0;
        // background: linear-gradient(#fdfdfd, #e4e4e4);
        
         &::before {
            background-color: #fdfdfd;
            background-image: url('./../../assets/sace.svg');
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            content: '';
            height: 100%;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            will-change: transform;
            z-index: -1;
         }
        @media only screen and (max-width: 768px) {
            max-width: 100vw;
            width: 100%;
            padding: 50px 0;

        }
        h3{
            color: darkred;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: bold;
        }
        h2{
            font-size: 36px;
            font-weight: lighter;
            color: #6F6F6F;
        }
        .devider{
            width: 80%;
            height: 4px;
            border-radius: 2px;
            position: relative;
            background-color: #6F6F6F;
            margin-bottom: 50px;
            .logo{
                width: 30px;
                height: 30px;
                position: absolute;
                top: -8px;
                left: calc(50% - 15px);
                background: #fdfdfd;
                border-radius: 8px;
                img{
                    margin-top: 5px;
                    height: 20px;
                    width: auto;
                }
            }
            .or{
                width: 60px;
                height: 60px;
                position: absolute;
                top: -28px;
                background: #6F6F6F;
                border-radius: 20px;
                font-size: 24px;
                color: #fdfdfd;
                line-height: 60px;
                vertical-align: middle;
                left: calc(50% - 30px)

            }
        }
    }
</style>