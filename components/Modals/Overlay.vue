<template>
    <div class="overlay" @click="$event.stopPropagation()">
        
    </div>
</template>
<script>
export default {
    name: 'Overlay',
    beforeMount () {
        document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden')
    },
    beforeDestroy () {
        document.getElementsByTagName('body')[0].removeAttribute('style')
    }
}
</script>
<style lang="scss">
    .overlay{
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        background: #fdfdfd90;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 15;
    }
</style>