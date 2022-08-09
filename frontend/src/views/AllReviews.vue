<template>
  <div class="">
    <b-card-group deck>
      <b-card
        no-body
        border-variant="primary"
        :img-src="review.photo"
        img-alt="Image"
        style="max-width: 20rem"
        img-top
        img-height="350"
        img-width="4px"
        v-for="review in reviews" v-bind:key="review._id"
      >
        <template #header>
          <h4 class="mb-0">{{ review.name }}</h4>
        </template>

        <b-list-group flush>
          <b-list-group-item>By {{ review.brewery }}</b-list-group-item>
          <b-list-group-item>Category: {{ review.category }}</b-list-group-item>
          <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
        </b-list-group>

        <b-card-body>
          <!-- <b-card-title>Card Title</b-card-title>
            <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
          <b-card-text>
            {{ review.reviewtext }}
          </b-card-text>
        </b-card-body>

        <b-card-body>
          <a href="#" class="card-link">Edit Review</a>

          <router-link
            :to="{
              name: 'EditReview',
              params: { reviewid: review._id },
            }"
            ><b-button style="width: 90%" variant="success"
              >Edit Review</b-button
            >
          </router-link>

          <a href="#" class="card-link">Delete Review</a>
        </b-card-body>

        <!-- <b-card-footer>This is a footer</b-card-footer>

          <b-card-img
            src="https://placekitten.com/480/210"
            alt="Image"
            bottom
          ></b-card-img> -->
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { Api } from "@/Api";

export default {
  name: "AllReviews",
  mounted() {
    Api.get("/reviews")
      .then((response) => {
        console.log(response);
        this.reviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    getReviewsArray() {
      console.log(this.reviews);
    },
  },
};
</script>

<style scoped>
.blogView {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
}

.reviewCard {
  margin: 10px;
  size: 100%;
  margin: 10px;
}

.parent-div {
  display: flex;
  flex-wrap: wrap;
  /* for horizontal aligning of child divs */
  justify-content: center;
  /* for vertical aligning */
  /* align-items: center; */
}
</style>






