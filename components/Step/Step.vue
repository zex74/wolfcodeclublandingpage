<template>
    <div class="about-section" id="about">
        <div class="logo">
            <img :src="require('@/assets/desktop.svg')" alt="WieQuee">
        </div>
        <h3>Kako izgledaju tri bitna stepa sa nama u tvojoj karijeri</h3>
        <h2>Pogledaj pazljivo!</h2>
        <div class="team">
            <div class="team-box">
                <people v-for="(people, index) in team" :key="index" :people="people"/>
                <step-number v-for="(people, index) in step" :key="index" :people="people"/>
            </div>
        </div>
    </div>
</template>
<script>
import People from '../AboutUs/People'
import StepNumber from './StepNumber'
export default {
    name: 'AboutUs',
    data () {
        return {
            team: [
                {
                    img: 'DG.jpeg',
                    name: 'Uvodna rec co-faundera',
                    title: 'Enterprenour & Software developer',
                    moto: 'Life without dreams is not life... Dream without goals is just a dream',
                    birthday: '1974-07-09',
                    about: 'Svaki covek treba da ima jedan veliki cilj. Put ka njemu ce biti izazovan i maglovit. Put mozemo menjati, ali pravac ne smemo nikada. Kada krenes ka uspehu, okolina ce dati sve od sebe da ostanes u rupi zajedno sa njima i u dusi ce te mrzeti jer si se odvazio da budes bolji od drugih. Moras ici svojim putem, a kada uspes vrati se da im pomognes i tada, zapamti TADA ce te voleti...',
                    skills: ['js', 'vue', 'nuxt', 'node', 'express', 'electron', 'sass', 'react', 'reactnative', 'mongodb', 'mysql']
                }
            
            ],
            step: [
              {
                img: 'desktop.svg',
                name: 'Uvodna rec co-faundera',
                title: 'Enterprenour & Software developer',
                moto: 'Life without dreams is not life... Dream without goals is just a dream',
                trajanje: '1 mesec',
                about: 'Svaki covek treba da ima jedan veliki cilj. Put ka njemu ce biti i',

              }
            ]
        }
    },
    components: {
        People,
        StepNumber
    }
}
</script>
<style lang="scss" scoped>
    .about-section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 100px 0 100px 0;
        border-top: 2px solid #6f6f6f;
        background: linear-gradient(#fdfdfd, darken(#fdfdfd, 10%));
        box-shadow: 0px 0px 20px 10px #00000030;
        z-index: 2;
        @media only screen and (max-width: 786px) {
            padding: 50px 0 50px 0;

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
        .team{
            display: flex;
            flex-direction: row;
            justify-content: center;

            .team-box {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
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
            color: #6F6F6F;
            margin-bottom: 50px;
        }
    }
</style>