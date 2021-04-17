<template>
    <article class="port" v-if="port" @click="selectPort" :class="selected.includes(port.name) ? 'selected' : ''">
        <img :src="require(`@/assets/${port.img}`)" alt="">
        <div class="desc">
            <p>{{port.name}}</p>
        </div>
    </article>
</template>
<script>
export default {
    name: 'SinglePort',
    props: ['port', 'selected'],
    methods: {
        selectPort () {
            this.$emit('selectPort', this.port.name)
        }
    }
}
</script>
<style lang="scss" scoped>
    .port{
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin: 20px;
        width: 250px;
        height: 250px;
        border: 4px solid #fdfdfd;
        border-radius: 20px;
        box-shadow: 0px 0px 20px 10px #00000030;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 16px;
        }
        .desc{
            position: absolute;
            bottom: 0;
            height: 45px;
            width: 100%;
            background: #fdfdfd80;
            transition: all .3s ease-in-out;
            border-radius: 16px;
            p{
                font-size: 36px;
                color: #fdfdfd;
            }
        }
        &.selected{
            border: 4px solid #F29B30;
            .desc{
                background: #EBFF0080;
            }
        }
        &:hover{
            .desc{
                padding-top: 200px;
                height: 242px;
            }
        }
    }
    
</style>