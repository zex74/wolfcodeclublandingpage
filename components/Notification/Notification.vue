<template>
    <div class="notification" v-if="not" :class="not.show ? 'show' : ''">
        <div class="logo">
            <img :src="require('@/assets/WieQuee-logo.svg')" alt="WieQuee">
        </div>
        <div class="close" @click="closeNotification"><i class="fas fa-times"></i></div>
        <div class="icon" :class="not.type === 'success' ? 'success' : 'failed'">
            <i class="fas fa-check-circle" v-if="not.type === 'success'"></i>
            <i class="fas fa-check-circle" v-if="not.type === 'failed'"></i>
        </div>
        <p>{{not.message}}</p>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'Notification',
    props: ['not'],
    methods: {
        closeNotification(){
            this.$emit('closeNot')
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss">
.notification{
    height: 250px;
    width: 300px;
    position: fixed;
    top: -300px;
    left: calc(50vw - 150px);
    z-index: 20;
    background: #fdfdfd;
    border-radius: 30px;
    box-shadow: 0px 30px 20px rgba(0,0,0,0.10196);
    transition: all 0.5s ease-in-out;
    &.show{
        top: calc(50vh - 125px);
        left: calc(50vw - 150px);
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
            margin-left: 11px;
        }
    }
    .icon{
        padding-top: 50px;
        text-align: center;
        i{
            font-size: 48px;
        }
        &.success{
            color: #7ec50f;
        }
        &.failed{
            color: darkred;
        }
    }
    p{
        font-size: 36px;
        text-align: center;
        padding: 20px 10px 0 10px;
    }
    .close{
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 10px;
        color: #6f6f6f;
        i{
            font-size: 24px;
        }
    }
}
    
</style>