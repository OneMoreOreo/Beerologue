<template>
  <b-container>
    <b-row no-gutters>
      <b-col sm="10" class="mx-auto">
        <b-card class="pa-5">
          <b-card-title>Edit Review</b-card-title>
          <b-divider></b-divider>
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Title:" label-for="input-1">
              <b-form-input id="input-1" v-model="form.name"></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-5" label="Brewery:" label-for="input-5">
              <b-form-input id="input-5" v-model="form.brewery"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Text:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.reviewtext"></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Category"
              label-for="input-3"
            >
              <b-form-input id="input-3" v-model="form.category"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Photo" label-for="input-4">
              <b-form-input id="input-4" v-model="form.photo"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="success">Update</b-button>
            <b-button type="reset" class="btn btn-light">Cancel</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'EditReview',
  mounted() {
    Api.get(
      `/reviews/${this.$route.params.reviewid}`
    )
      .then(response => {
        this.form = response.data
        console.log(this.$route.params.reviewid)
      })
      .catch(error => console.log(error))
  },
  data() {
    return {
      form: {
        name: '',
        brewery: '',
        category: '',
        reviewtext: '',
        photo: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()

      Api.patch(
        `/reviews/${this.$route.params.reviewid}`,
        {
          name: this.form.name,
          brewery: this.form.brewery,
          category: this.form.category,
          reviewtext: this.form.reviewtext,
          photo: this.form.photo
        }
      )
        .then(response => {
          console.log(response)
        })
        .catch(err => console.log(err))
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.name = ''
      this.form.brewery = ''
      this.form.reviewtext = ''
      this.form.category = ''
      this.form.photo((this.show = false))
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
