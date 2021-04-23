<template>
    <div class="contact_form">
        <form @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Prijava" @click="showMessage(true)">
        </form>
        <p v-if="show" class="message">Uspešno ste se prijavili!</p>
       
    </div>
</template>

<script>

import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      show: false
      
    }
  },
  methods: {
    showMessage(e){
      this.show = e
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_ahf42z6', 'template_ihah3ox', e.target, 'user_rRFrLAdrWonMOhok3ff0b', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })
        console.log('it works!!!')

      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
     
}
</script>

<style scoped>
* {box-sizing: border-box;}

label {
  float: left;
  color: #F29B30;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color:#F29B30;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #b8c7b9;
}

.contact_form {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
.message{
  background-color: grey;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  
}

</style>