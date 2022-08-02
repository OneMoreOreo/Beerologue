<template>
  <div>
    <font-awesome-icon icon="fas fa-home" size="6x" />
    <font-awesome-icon class="colour" icon="fa-solid fa-coffee" size="3x" />
    <font-awesome-icon class="colour" icon=" fab fa-Twitter" size="3x" />
    <!-- top container -->
    <b-container fluid class="text-light bg-info">
      <b-row>
        <b-col>
          <h1>Standard Head</h1>

          <p class="text-danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            animi distinctio voluptates excepturi reprehenderit quia
            voluptatibus beatae iusto libero corrupti.
          </p>

          <b-button variant="danger" class="p-3 m-2">Click</b-button>
          <b-button variant="primary" class="p-3 m-2">Click</b-button>
        </b-col>
      </b-row>
    </b-container>
    <!-- /top container -->

    <!-- Display -->
    <b-container fluid class="bg-warning">
      <b-row>
        <b-col>
          <h1 class="display-1">Display 1</h1>

          <p class="text-success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            similique, et ut atque quia id sed perspiciatis suscipit ex
            excepturi?
          </p>

          <b-button class="btn-success p-4">GREEN</b-button>
          <b-button class="btn-success p-4 text-warning">GREEN</b-button>
          <b-button class="btn-success p-4">GREEN</b-button>
        </b-col>
      </b-row>
    </b-container>
    <!-- Display -->

    <section class="bg-info height">
      <b-container class="p-3">
        <b-row align-v="center">
          <b-col align-self="center">
            <h1 class="text-primary">Welcome To Beerologue</h1>
            <p class="text-warning px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae quasi eos cumque placeat autem similique voluptatibus ut
              delectus? Ipsum?
            </p>
            <b-button class="btn-light text-warning">Button 1</b-button>
            <b-button class="btn-light text-danger m-2">Button 1</b-button>
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col><b-button>Click</b-button></b-col>
          <b-col><b-button>Click</b-button></b-col>
          <b-col><b-button>Click</b-button></b-col>
        </b-row>
      </b-container>
    </section>

    <!-- about -->

    <section class="bg-warning py-4 adjusted my-auto">
      <b-container fluid>
        <b-row align-v="center">
          <b-col cols="4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel laboriosam, dolores non aliquam explicabo aperiam
              officiis neque eaque? Atque?
            </p>
            <font-awesome-icon
              class="colour"
              icon="fab fa-html5"
              size="3x"
            />
          </b-col>
          <b-col cols="4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel laboriosam, dolores non aliquam explicabo aperiam
              officiis neque eaque? Atque?
            </p>
            <font-awesome-icon
              class="colour"
              icon="fab fa-html5"
              size="3x"
            />
          </b-col>
          <b-col cols="4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel laboriosam, dolores non aliquam explicabo aperiam
              officiis neque eaque? Atque?
            </p>
            <font-awesome-icon
              class="colour"
              icon="fab fa-html5"
              size="3x"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- about -->
  </div>
</template>


<style scoped>
.height {
  height: 80vh;
  text-align: center;
}

.adjusted{
  height: 40vh;
  text-align: center;

}
</style>