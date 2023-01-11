<template>
  <div class="container-fluid bg-hot-pink p-2">
    <div class="message">
      <b-row class="justify-content-center">
        <div class="col-xl-8 col-md-7 col-sm-7 col-12 text-center">
          <slot name="message">
          </slot>
        </div>
        <div class="col-xl-4 col-md-5 col-sm-5 col-12 text-center text-white">
          <b-icon icon="envelope-fill" class="me-2"/>
          <a href="javascript:void(0);" v-b-modal.newsletter class="text-white text-montserrat">Subscribe to newsletter</a>
        </div>
      </b-row>
    </div>
    <b-modal id="newsletter" centered hide-footer>
      <template #modal-header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h4 class="text-center text-bebas-neue text-xxl mb-0 text-hot-pink">
                <b-icon icon="egg-fill" class="me-2"/>
                Receive our newsletter!
              </h4>
              <p class="text-center text-montserrat mb-0">Fill out the form to receive weekly updates on product discounts and more!</p>
            </div>
          </div>
        </div>
      </template>
      <!-- Main content -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <form>
              <div class="mb-3">
                <label for="nameInput" id="Name" class="form-label text-montserrat form-newsletter-label">Name</label>
                <input type="text" class="form-control form-newsletter" id="nameInput" @focusin="darken('Name')" @focusout="darken('Name')" placeholder="John Doe">
              </div>
              <div class="mb-3">
                <label for="emailInput" id="Email" class="form-label text-montserrat form-newsletter-label">Email address</label>
                <input type="email" class="form-control form-newsletter" id="emailInput" @focusin="darken('Email')" @focusout="darken('Email')" placeholder="jd@example.com">
              </div>
              <!-- Submit button -->
              <b-button variant="outline-hot-pink" class="text-montserrat w-100">Subscribe</b-button>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: "TopBar",
  data() {
    return {
      // This is the data object
    };
  },
  methods: {
    // This is the methods object
    darken(Name) {
      if (Name === "Name") {
        let name = $("#Name");
        if (name.hasClass("darken-label")) {
          name.removeClass("darken-label");
        } else {
          name.addClass("darken-label");
        }
      } else if (Name === "Email") {
        let email = $("#Email");
        if (email.hasClass("darken-label")) {
          email.removeClass("darken-label");
        } else {
          email.addClass("darken-label");
        }
      }

    },
  },
}
</script>

<style scoped>

</style>