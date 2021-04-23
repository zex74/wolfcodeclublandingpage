<template>
    <article class="people" @mouseenter="hovered = true" @mouseleave="hovered = false">
        <div class="img-wrap">
            <img :src="require(`@/assets/team/${people.img}`)" alt="">
        </div>
        
        <div class="details" @click="selPeople">
            <article class="plus">
                <div class="vert"></div>
                <div class="hor"></div>
            </article>
            <div class="data">
                <p>{{people.name}}</p>
                <p>{{people.title}}</p>
            </div>
            <transition name="slide-fade">
                <span v-show="hovered" ><i class="fas fa-plus-circle"></i></span>
            </transition>
            
        </div>
    </article>
</template>
<script>
export default {
    name: 'People',
    data () {
        return {
            hovered: false
        }
    },
    props: ['people'],
    methods: {
        selPeople(e) {
            e.stopPropagation();
            this.$root.$emit('people', this.people)
        }
    }
}
</script>
<style lang="scss" scoped>
    .people{
        position: relative;
        box-sizing: border-box;
        width: 25%;
        height: 25vw;
        cursor: pointer;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .details{
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: #6F6F6F99;
            height: 100px;
            transition: all .3s ease-in-out;
            i{
                font-size: 50px;
                display: inline-block;
                margin-top: 50px;
                color: #F29B30;
                opacity: 0;
                transition: all .3s ease-in-out;

            }
            .plus{
                width: 50px;
                height: 50px;
                display: inline-block;
                position: relative;
                .hor, .vert {
                    position: absolute;
                    width: 30px;
                    height: 4px;
                    background: #F29B30;
                    top: 15px;
                    left: 10px;
                    transition: all .3s ease-in-out;
                    border-radius: 3px;
                }
            }
            .data {
                border-left: 2px solid #fdfdfd;
                height: 70px;
                padding-left: 30px;
                margin-top: 15px;
                display: inline-block;
                width: calc(100% - 60px);
                text-align: left;
                color: #fdfdfd;
                p{
                    font-size: 28px;
                    color: white;
                }
            }
        }
        &:hover {
            .plus .vert {
                transform: rotate(90deg);
            }
            .details{
                height: 100%;
            }
            i{
                opacity: 1;
            }
        }
        @media only screen and (max-width: 1180px){
            width: 50vw;
            height: 50vw;
            
        }
        @media only screen and (max-width: 700px){
            width: 100vw;
            height: 100vw;
            
        }
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>