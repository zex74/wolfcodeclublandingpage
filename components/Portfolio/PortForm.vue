<template>
    <div class="portfolio-form">
        <div class="portfolios" :class="high ? 'highlight' : ''">
            <single-port v-for="(port, index) in portfolios" :key="index" :port="port" :selected="selected" @selectPort="selectPort"/>
        </div>
        <div class="mail" :class="tomail ? 'highlight' : ''">
            <input name="mail" type="Mail" v-model="email" placeholder="Type ypur e-mail">
            <span @click="doSubmit" :class="toreq ? 'toreq' : ''">Request</span>
        </div>
    </div>
</template>
<script>
import SinglePort from './SinglePort'
export default {
    name: 'PortForm',
    data () {
        return {
            portfolios: [
                {name: 'Front End', img: 'be.JPG'},
                {name: 'Back End', img: 'fe.jpeg'},
                {name: 'Mobile', img: 'mob.jpeg'}
            ],
            selected: [],
            email: ''
        }
    },
    props: ['high', 'tomail', 'toreq'],
    methods: {
        selectPort(payload) {
            if (!this.selected.includes(payload)) {
                this.selected.push(payload)
            } else {
                const ind = this.selected.indexOf(payload)
                if (ind === 0 && this.selected.length > 1) {
                    this.selected.shift()
                } else if (ind === 0 && this.selected.length === 1) {
                    this.selected = []
                } else if ( ind > 0 && this.selected.length === 2) {
                    this.selected.splice(1, 1)
                } else if (ind === 1 && this.selected.length === 3) {
                    this.selected.splice(1, 1)
                }
            }
        },
        doSubmit(){
            this.$root.$emit('submit-form', {email: this.email, subject: 'Portfolio request', body: 'Requested portfolios:' + this.selected.toString() + '\n \n Requested from: ' + this.email , message: 'Successfuly requested our portfolio!'})
        },
    },
    watch: {
        high(){
            if (this.high) {
                setTimeout(() => {
                    this.$emit('removeHigh')
                }, 2000);
            }
        },
        tomail(){
            if (this.tomail) {
                setTimeout(() => {
                    this.$emit('removeTomail')
                }, 2000);
            }
        },
        toreq(){
            if (this.toreq) {
                setTimeout(() => {
                    this.$emit('removeToreq')
                }, 2000);
            }
        }
    },
    components: {
        SinglePort
    }
}
</script>
<style lang="scss" scoped>
.portfolio-form {
    margin: 50px 0;
    .portfolios{
        border: 1px solid transparent;
        border-radius: 30px;

        &.highlight{
            animation-name: borderHigh;
            animation-duration: 2s;
        }
    }
}
@keyframes borderHigh {
  0% {background: transparent;}
  50% {background: #EBFF00;}
  100% {background: transparent;}
}
@keyframes borderHighW {
  0% {background: #fdfdfd;}
  50% {background: #EBFF00;}
  100% {background: #fdfdfd;}
}
@keyframes borderHighB {
  0% {width: 100px; background: #EBFF00}
  50% {width: 200px; background: #7ec50f}
  100% {width: 100px; background: #EBFF00}
}


.mail{
    display: block;
    width: max-content;
    margin: 20px auto;
    text-align: center;
    label{
        display: block;
        font-size: 36px;
        color: #fdfddf;
    }
    input{
        padding: 20px;
        outline: none;
        font-size: 18px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        min-width: 450px;
        height: 48px;
        border: none;
        margin: 0;
        float: left;
        @media only screen and (max-width: 768px) {
            min-width: calc(90% - 100px);
            font-size: 14px;
        }
    }
    &.highlight{
        input{
            animation-name: borderHighW;
            animation-duration: 2s;
        }
    }
    span{
        cursor: pointer;
        display: block;
        float: left;
        width: 100px;
        padding: 10px;
        outline: none;
        font-size: 18px;
        height: 48px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: #EBFF00;
        text-transform: uppercase;
        &.toreq{
            animation-name: borderHighB;
            animation-duration: 2s;
        }
    }
}
    
</style>