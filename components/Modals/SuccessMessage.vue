<template>
    <modal name="my-first-modal" class="modal">
      <h1>kjkjhg</h1>
        This is my first modal
    </modal>
</template>

<script>
export default {
    name: 'MyComponent',
    props: ['show'],
    methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
    mount () {
        this.show()
    }
}
</script>

<style lang="scss" scoped>
.modal{
  background-color: rgb(253, 251, 253);
  z-index: 150;
  color: red;
}
</style>