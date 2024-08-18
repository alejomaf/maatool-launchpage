<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" id="name" required />
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" required />
      </div>

      <div>
        <label for="organization">Organization:</label>
        <input type="text" v-model="form.organization" id="organization" />
      </div>

      <div>
        <label for="phone">Phone:</label>
        <input type="tel" v-model="form.phone" id="phone" />
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea v-model="form.message" id="message" required></textarea>
      </div>

      <div>
        <input type="checkbox" v-model="form.agreeToTerms" id="agreeToTerms" />
        <label for="agreeToTerms">I agree to the terms and conditions</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      },
    };
  },
  methods: {
    submitForm() {
      if (this.form.agreeToTerms) {
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
        console.log('Form data:', this.form);
        alert('Form submitted successfully!');
      } else {
        alert('You must agree to the terms and conditions.');
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 20px;
  text-align: center;
}

.contact-form div {
  margin-bottom: 15px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form input[type="tel"],
.contact-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form input[type="checkbox"] {
  margin-right: 5px;
}

.contact-form button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #45a049;
}
</style>
