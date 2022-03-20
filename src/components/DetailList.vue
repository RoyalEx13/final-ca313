<template>
  <v-container grid-list-xs>
    <h1>Detail page</h1>
    <v-card class="mx-auto" max-width="7000" v-for="(item, i) in dt" :key="i">
      <v-card-text v-if="i + 1 == productid">
        <h1
          class="text-decoration-none text-right text-md-left my-5 text-black"
        >
          {{ item.title }}
        </h1>
        <v-img :src="item.image"></v-img>
        <div class="display-1 my-5">{{ item.description }}</div>
        <v-btn color="black" text> Category: {{ item.category }} </v-btn>
        <v-btn color="green darken-2" text outlined large>
          Price: {{ item.price }}
        </v-btn>
        <v-btn color="orange darken-2" text outlined large>
          rating⭐️:{{ item.rating.rate }} ({{ item.rating.count }})</v-btn
        >
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["dt"],
  data() {
    return {
      productid: this.$route.params.id,
    };
  },
};
</script>

<style></style>
