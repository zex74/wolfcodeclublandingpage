<template>
    <div class="menu-nav" :class="extended ? 'extended' : ''" v-click-outside="emitClose">
        <div class="logo">
            <img :src="require('@/assets/logo.svg')" alt="WolfCodeClub">
        </div>
        <div class="items-nav">
            <article v-for="(item, index) in nav" :key="index" @click="scrollToEl(item.short)">
                <span>{{item.name}}</span>
            </article>
        </div>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'SideNav',
    data () {
        return {
            nav: [
                {name: 'Home', short: 'thome'},
                {name: 'Šta nudimo', short: 'WeDo'},
                {name: 'Ko smo mi', short: 'about'},
                {name: 'Prijava', short: 'portfolio'},
            ]
        }
    },
    props: ['extended'],
    methods: {
        scrollToEl (id) {
            let el
            if (process.client) {
                el = document.getElementById(id)

            }
            this.$emit('sideNav')
            el.scrollIntoView({ behavior: 'smooth' })
        },
        emitClose() {
            if (this.extended) {
                this.$emit('closeNav')
            }
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss" scoped>
    .menu-nav{
        position: fixed;
        top: 0;
        right: -250px;
        width: 250px;
        transition: all .3s ease-in-out;
        height: 100vh;
        background: #fdfdfd;
        padding-top: 120px;
        z-index: 10;
        box-shadow: 0px 30px 20px rgba(0,0,0,0.10196);
        border-left: 2px solid #F29B30;
        .logo{
            // border-top: 2px solid #EBFF00;
            width: 250px;
            margin: 0 auto;
            padding-bottom: 50px;
            padding-top: 50px;
            text-align: center;
            img{
                width: 200px;
                margin: 0 auto;
            }
        }
        &.extended {
            right: 0;
        }
        .items-nav{
            // border-top: 2px solid #EBFF00;
            article{
                cursor: pointer;
                height: 50px;
                padding-left: 30px;
                transition: all .3s ease-in-out;
                span{
                    line-height: 50px;
                    font-size: 24px;
                    vertical-align: middle;

                }
                &:hover {
                    background: #F29B30;
                    padding-left: 35px;
                    span{
                        font-weight: bold;
                    }
                }
            }
        }
    }
    
</style>