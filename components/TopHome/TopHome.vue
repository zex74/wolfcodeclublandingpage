<template>
    <div class="home-top" id="thome">
        <!-- <client-only> -->
            <!-- <vue-particles
                color="#2B200"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#B2B200"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles> -->
        <!-- </client-only> -->
        <div class="back"></div>
        <client-only >
            <particles-bg class="mobile" color="#B2B200" num=15 type="cobweb" :bg="true" :canvas="canvasObject"/>
            <particles-bg class="desktop" color="#B2B200" num=30 type="cobweb" :bg="true" :canvas="canvasObject"/>
        </client-only>
        <!-- <img :src="require('@/assets/WieQuee-logo.svg')" alt=""> -->
        <!-- <img :src="require('@/assets/logo.png')" alt=""> -->
        
        <!-- <h1>WolfCodeClub</h1>
        <p>Club width private members</p> -->
        <div class="video_container">
          <section class="video_section">
            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/BgI0oExkl20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <iframe class="video" :src="require('@/assets/video/video1.mp4')" frameborder="0"></iframe>
          </section>
        </div>
        <br>
        <vue-typed-js :strings="['Web Application Development', 'Mobile Application Development', 'Desktop Application Development']" :loop="true">
            <h3>What we do? <br> <span class="typing"></span></h3>
        </vue-typed-js>
        <div class="scroll-button" @click="emitScrolled">
            <article class="cyrcle"><span class="dot"></span></article>
        </div>
    </div>
</template>
<script>

export default {
    name: 'TopHome',
    data () {
        return {
            canvasObject: {  
                height: '100vh',
                width: '100%',
                zIndex: 0,
            }
        }
    },
    props: [],
    methods: {
        emitScrolled () {
            this.$emit('scrolled')
        },
    },
    computed: {
    },
}
</script>
<style lang="scss" scoped>

    .home-top{
        position: relative;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        border-bottom: 2px solid #B2B200;
        background: linear-gradient(to bottom right, #fdfdfd 50%, darken(#fdfdfd, 40%) );
        box-shadow: 0px 0px 30px 20px rgba(0,0,0,0.18824);
        h1, h2{
            user-select: none;
        }
        .video_container{
          //  background-color: red;
         width: 80%;
          height: 50vh;
          z-index: 5;
        }
        .video_section{
         width: 100%;
          height: 50vh;
          margin: 1rem auto;
          // z-index: 6;
        }

        .video{
           z-index: 6;
          height: 100%;
          width: 100%;
          border-radius: 2rem;
        
        }
        .back{
            
            &::before{
            position: absolute;
            background-image: url('./../../assets/sace.svg');
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            content: '';

            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            opacity: .3;
            }
        }
        .mobile{
            display: none;
        }
        .desktop{
            display: block;
        }
       
        @media only screen and (max-width: 768px) {
            .mobile{
                display: block;
            }
            .desktop{
                display: none;
            }
            h2{
                font-size: 18px;
            }
        }
        img{
            height: 30%;
            z-index: 2;
            user-select: none;
        }
    }
    @keyframes topBottom {
        from {padding-top: 0px;}
        to {padding-top: 10px;}
    }
    .scroll-button {
        width: 30px;
        height: 60px;
        position: absolute;
        display: block;
        bottom: 50px;
        margin: -1rem auto;
        left: 0;
        right: 0;
        .cyrcle {
            border: 2px solid #6F6F6F;
            height: 50px;
            border-radius: 20px;
            animation: topBottom 2s;
            animation-iteration-count: infinite;
            cursor: pointer;
            .dot {
                display: inline-block;
                border: 2px solid #6F6F6F;
                width: 4px;
                height: 6px;
            }
        }

    }
    
</style>