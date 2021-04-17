<template>
  <div @scroll="handleScroll($event)">
    <navigation :hide="hideNav" @sideNav="changeNav" :mail="form"/>
    <side-nav :extended="navigation" @sideNav="changeNav" @closeNav="navigation = false"/>
    <nuxt/>
    <footer-cont/>
    <!-- <overlay v-if="people || form.show || notification.show"/> -->
    <people-details :people="people"/>
    <mail-form :mail="form"/>
    <notification :not="notification" @closeNot="closeNot"/>
  </div>
</template>
<script>
import axios from 'axios'
import Navigation from './../components/Navigation/Navigation'
import SideNav from './../components/Navigation/SideNav'
import FooterCont from './../components/Footer/Footer'
import Overlay from './../components/Modals/Overlay'
import PeopleDetails from './../components/Modals/PeopleDetails'
import MailForm from './../components/MailForm/MailForm'
import Notification from './../components/Notification/Notification'
export default {
  name: 'default',
  data () {
    return {
      position: {scrollTop: 0, scrollLeft: 0},
      hideNav: false,
      posY: 0,
      scrolled: false,
      top: false,
      navigation: false,
      people: null,
      form: {
        show: false,
        portfolio: null,
        subject: '',
        email: ''
      },
      notification: {
        type: '',
        message: '',
        show: false
      }
    }
  },
  components: {
    Navigation,
    SideNav,
    FooterCont,
    Overlay,
    PeopleDetails,
    MailForm,
    Notification
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
    this.$root.$on('people', this.handlePeople)
    this.$root.$on('remove-people', this.removePeople)
    this.$root.$on('trigger-form', this.triggerForm)
    this.$root.$on('hide-form', this.hideForm)
    this.$root.$on('submit-form', this.submitForm)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handlePeople(payload) {
      this.people = payload
    },
    removePeople() {
      this.people = null
    },
    scrollAbout (e) {
      this.$root.$emit('scroll-about')
    },
    scrollWeDo (e) {
      this.$root.$emit('scroll-wedo')
    },
    changeNav () {
      this.navigation = !this.navigation
    },
    handleScroll(e) {
      let prevScrollpos = this.position.scrollTop;
      let currentScrollPos = window.scrollY;
      let wedo = document.getElementById('thome').scrollHeight
      if (currentScrollPos < wedo ) {
        this.top = false
        this.$root.$emit('topEmitFalse')
      } else {
        this.top = true
        this.$root.$emit('topEmitTrue')
      }
      this.posY = window.scrollY
      if (prevScrollpos > 0 && currentScrollPos === 0) {
        this.scrolled = false
      }
      if (prevScrollpos === 0 && currentScrollPos < wedo && this.scrolled === false) {
        this.scrolled = true
      }
      else if (prevScrollpos < currentScrollPos && currentScrollPos > 100 && this.scrolled === true) {
        this.hideNav = true
        this.position.scrollTop = currentScrollPos

      } else if (prevScrollpos > currentScrollPos){
        this.hideNav = false
        this.position.scrollTop = currentScrollPos
      }
    },
    triggerForm (payload) {
      this.form.show = true
      if (payload) {
        if (payload.subject) {
          this.form.subject = payload.subject
        }
      }
    },
    hideForm () {
      this.form = {
        show: false,
        portfolio: null,
        subject: '',
        email: ''
      }
    },
    submitForm(payload) {
        let formdata = new FormData()
        const message = {
            name: payload.name || 'anonymus',
            email: payload.email,
            subject: '[WieQuee - WebForm | ' + payload.subject,
            body: payload.body
        }
        formdata.append('name', message.name)
        formdata.append('email', message.email)
        formdata.append('subject', message.subject)
        formdata.append('body', message.body)
        axios.post('https://emails.wiequee.com', formdata, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        .then((data) => {
            console.log('success', data)
            this.notification = {
              show: true,
              type: 'success',
              message: payload.message
            }
            this.hideForm()
        })
        .catch((error) => {
            console.warn('status',error.response)
            this.notification = {
              show: true,
              type: 'failed',
              message: 'Something went wrong, please try again later!'
            }
            this.hideForm()
        })
      },
      closeNot(){
        this.notification = {
          type: '',
          message: '',
          show: false
        }
      }
  },
}
</script>

<style>

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  scroll-behavior: smooth;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1, h2 {
  font-family: 'Roboto', sans-serif;
}
p, a, span, h3, li, q, label, input, textarea{
  font-family: 'Open Sans Condensed', sans-serif;
  /* font-family: 'Montserat', sans-serif; */
  font-size: 18px;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
