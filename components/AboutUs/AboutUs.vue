<template>
    <div class="about-section" id="about">
        <div class="logo">
            <img :src="require('@/assets/WieQuee-logo.svg')" alt="WieQuee">
        </div>
        <h3>Who are we</h3>
        <h2>Meet the team</h2>
        <div class="team">
            <div class="team-box">
                <people v-for="(people, index) in team" :key="index" :people="people"/>
            </div>
        </div>
    </div>
</template>
<script>
import People from './People'
export default {
    name: 'AboutUs',
    data () {
        return {
            team: [
                {
                    img: 'LL.jpeg',
                    name: 'Lazar Lazarevic',
                    title: 'Software developer',
                    moto: 'Begin each day like it has it\'s own purpose - with a coffee!',
                    birthday: '1986-05-08',
                    about: 'For years now I have been working with JavaScript. I love working with plain JS or using frameworks. I had a chance to work with so many of them like backbone, amber, angular, but during time spent working two of them are my favourites and I really enjoy working with them. They are React and Vue.',
                    skills: ['js', 'vue', 'nuxt', 'node', 'express', 'electron', 'sass', 'react', 'reactnative', 'mongodb', 'mysql']
                },
                {
                    img: 'ZM.jpg',
                    name: 'Zeljko Marenovic',
                    title: 'Software developer',
                    moto: 'Think about bad yesterday to have better now.',
                    birthday: '1990-07-27',
                    about: 'Born to be a programmer. Always solutions to make complex problems in simple yet effective code to perfectly work. Implements always modern API based Development and makes sure other programmers follow the best practices. Technology enthusiast always learning and teaching others.',
                    skills: ['php', 'laravel', 'symphony', 'java', 'python', 'mysql', 'mongodb', 'node', 'express', 'gitlab']
                },
                {
                    img: 'MD.jpg',
                    name: 'Marko Djordjevic',
                    title: 'Software developer',
                    moto: 'Do not ruin today by thinking about bad yesterday',
                    birthday: '1985-03-12',
                    about: 'Front End and Mobile Developer with a professional experience in software industry. Skilled in Dart, Flutter, React Native JavaScript, React.js, and different front end technologies and tools. Passionate about extending  knowledge of Node.js. Worked in small and big teams on several projects',
                    skills: ['js', 'vue', 'nuxt', 'node', 'express', 'electron', 'sass', 'react', 'reactnative']
                },
                {
                    img: 'DG.jpeg',
                    name: 'Djordje Grujovic',
                    title: 'Software developer',
                    moto: 'If you cannot do great things, do small things in a great way!',
                    birthday: '1990-05-13',
                    about: 'I\'m passionate about learning the latest and greatest technologies like Angular, Flutter, Firebase, UI/UX. I enjoy creating sleek and responsive applications in addition to being user friendly. I love working in fast paced environments. With a highly diverse educational background and cultural experiences I excel at collaborating with teams of different knowledge sets.',
                    skills: ['angular', 'flutter', 'node', 'express', 'mongodb', 'sass']
                }
            ]
        }
    },
    components: {
        People
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