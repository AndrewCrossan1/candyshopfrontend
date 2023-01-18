<template>
  <div class="home">
    <!-- Features -->
    <b-container fluid class="w-75 pt-5">
      <b-row class="justify-content-center">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xl-4 mt-3 mt-sm-3 mt-lg-2 mt-md-2">
          <b-card no-body class="feature-card">
            <b-row>
              <div class="col-md-5 col-sm-4 col-lg-4 d-flex justify-content-center align-items-center text-center pt-3 pt-lg-0 pt-md-0">
                <b-icon
                    icon="alarm-fill"
                    class="text-hot-pink"
                    font-scale="4"
                />
              </div>
              <div class="col-md-7 col-sm-8 col-lg-8">
                <b-card-body title="Fast Delivery">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                  <b-card-footer class="text-center">
                    <b-link to="#" class="btn btn-hot-pink w-100">
                      Order now
                    </b-link>
                  </b-card-footer>
                </b-card-body>
              </div>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xl-4 mt-3 mt-sm-3 mt-lg-2 mt-md-2">
          <b-card no-body class="feature-card">
            <b-row>
              <div class="col-md-5 col-sm-4 col-lg-4 d-flex justify-content-center align-items-center text-center pt-3 pt-lg-0 pt-md-0">
                <b-icon
                    icon="stars"
                    class="text-hot-pink"
                    font-scale="4"
                />
              </div>
              <div class="col-md-7 col-sm-8 col-lg-8">
                <b-card-body title="Trusted by Thousands">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                  <b-card-footer class="text-center">
                    <b-link to="#" class="btn btn-hot-pink w-100">
                      See our reviews
                    </b-link>
                  </b-card-footer>
                </b-card-body>
              </div>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xl-4 mt-3 mt-sm-3 mt-lg-2 mt-md-2">
          <b-card no-body class="feature-card">
            <b-row>
              <div class="col-md-5 col-sm-4 col-lg-4 d-flex justify-content-center align-items-center text-center pt-3 pt-lg-0 pt-md-0">
                <b-icon
                    icon="currency-exchange"
                    class="text-hot-pink"
                    font-scale="4"
                />
              </div>
              <div class="col-md-7 col-sm-8 col-lg-8">
                <b-card-body title="Rewards for members!">
                  <b-card-text>
                    Each purchase you make as part of The Gang earns you points that can be redeemed for discounts on future purchases.
                  </b-card-text>
                  <b-card-footer class="text-center">
                    <b-link to="#" class="btn btn-hot-pink w-100">
                      Join The Gang
                    </b-link>
                  </b-card-footer>
                </b-card-body>
              </div>
            </b-row>
          </b-card>
        </div>
      </b-row>
      <hr/>
    </b-container>
    <!-- New arrivals section -->
    <b-container fluid class="w-75 py-5 p-0">
      <b-row class="justify-content-center">
        <div class="col-md-12 col-lg-3 bg-hot-pink rounded-1 text-white text-bebas-neue text-center d-flex align-items-center justify-content-center">
          <span class="col-md-12 text-xxl">
            New
            <br/>
            Arrivals
          </span>
        </div>
        <div class="col-md-12 col-lg-8 my-2 ms-lg-5 ms-md-2">
          <b-row>
            <ProductCard v-for="product in newProducts" :product="product" v-bind:key="product.ProductID"/>
          </b-row>
        </div>
      </b-row>
    </b-container>
    <!-- Popular Categories -->
    <b-container fluid class="w-75 py-5 p-0">
      <h1 class="text-center text-bebas-neue text-white bg-hot-pink text-massive border-hot-pink rounded-1 mb-0 py-3 mb-3">
        Popular Categories
      </h1>
      <b-row class="justify-content-center">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
      </b-row>
      <b-row class="justify-content-center">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-2 mb-sm-2 mb-md-2 md-lg-2 md-xl-0">
          <CategoryCard/>
        </div>
      </b-row>
    </b-container>
    <!-- Testimonials from customers -->
    <div class="container-fluid w-75 py-5 p-0">
      <h1 class="py-3 text-center text-white bg-hot-pink text-massive text-bebas-neue rounded-1">Testimonials</h1>
      <div class="row gy-4 mt-4 row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3">
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex">
              <img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">The Sun</p>
                <p class="text-muted mb-0">Newspaper</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Sweetiez is the newest and brightest trend in confectionary, if you haven't heard of it, unlucky!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">Jamie Oliver</p>
                <p class="text-muted mb-0">Renowned Chef</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Brilliantly eloquent. Brilliant choices, amazing delivery and inclusive for all diets, would eat again!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">The Guardian</p>
                <p class="text-muted mb-0">Newspaper</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Fantastically fun, the whole process of picking your sweets is fantastic, the whole office is stuffed!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row gy-4 row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3">
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex">
              <img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">The Sun</p>
                <p class="text-muted mb-0">Newspaper</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Sweetiez is the newest and brightest trend in confectionary, if you haven't heard of it, unlucky!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">Jamie Oliver</p>
                <p class="text-muted mb-0">Renowned Chef</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Brilliantly eloquent. Brilliant choices, amazing delivery and inclusive for all diets, would eat again!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col p-3">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 mb-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
              <div>
                <p class="fw-bold text-hot-pink mb-0">The Guardian</p>
                <p class="text-muted mb-0">Newspaper</p>
                <hr/>
              </div>
            </div>
            <b-rating variant="warning" value="4" size="md" class="mb-2" readonly/>
            <p class="text-center text-montserrat">Fantastically fun, the whole process of picking your sweets is fantastic, the whole office is stuffed!</p>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Get in contact -->
    <section class="position-relative pb-5">
      <div class="container-fluid w-75 position-relative bg-hot-pink">
        <div class="row mb-1 bg-hot-pink p-3 text-white">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2 class="text-bebas-neue text-massive">Get in contact</h2>
            <p class="w-lg-50 text-montserrat">For any general queries or information about our company and website feel free to fill out the form below!</p>
            <hr class="bg-white thickness-2"/>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="d-flex flex-column justify-content-center align-items-start h-100">
              <div class="d-flex align-items-center justify-content-lg-start justify-content-center justify-content-md-start p-3 border-hot-pink rounded-1 mb-2 w-100">
                <b-icon icon="telephone" class="text-white"/>
                <div class="px-2">
                  <h6 class="mb-0 text-white text-montserrat">Phone</h6>
                  <p class="mb-0 text-white">+123456789</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-lg-start justify-content-center justify-content-md-start p-3 border-hot-pink rounded-1 mb-2 w-100">
                <b-icon icon="envelope" class="text-white"/>
                <div class="px-2">
                  <h6 class="mb-0 text-white text-montserrat">Email</h6>
                  <p class="mb-0 text-white">info@example.com</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-lg-start justify-content-center justify-content-md-start p-3 border-hot-pink rounded-1 mb-2 w-100">
                <b-icon icon="pin" class="text-white"/>
                <div class="px-2">
                  <h6 class="mb-0 text-white text-montserrat">Location</h6>
                  <p class="mb-0 text-white">12 Example Street</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 col-xl-4">
            <div>
              <form class="p-3 p-xl-4" method="post">
                <div class="mb-3">
                  <input id="name-1" class="form-control" type="text" name="name" placeholder="Name" />
                </div>
                <div class="mb-3">
                  <input id="email-1" class="form-control" type="email" name="email" placeholder="Email" />
                </div>
                <div class="mb-3">
                  <textarea id="message-1" class="form-control" name="message" rows="6" placeholder="Message">

                  </textarea>
                </div>
                <div>
                  <button class="btn btn-outline-white d-block w-100" type="submit">Send </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


import ProductCard from "@/components/products/ProductCard";
import CategoryCard from "@/components/products/CategoryCard";

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    CategoryCard
  },
  methods: {
    getNewProducts() {
      this.$store.dispatch('getNewProducts')
          .then(() => {
            this.newProducts = this.$store.getters.newProducts;
          })
          .catch((error) => {
                if (error.response.status === 404) {
                  this.$router.push({name: "404"});
                } else {
                  this.$router.push({name: "500"});
                }
              }
          );
    }
  },
computed: {
  newProducts: {
    get() {
      return this.$store.getters['newProducts'];
    },
    set(value) {
      this.$store.commit('SET_NEW_PRODUCTS', value);
    }
  }
},
created() {
  this.$watch(
      () => this.$route.name,
      () => {
        this.getNewProducts()
      },
      { immediate: true }
  );
}
}
</script>
