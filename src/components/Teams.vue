<template>
  <div class="container mt-5">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" colspan="2">Name</th>
          <th scope="col">Rating</th>
          <th scope="col">Wins</th>
          <th scope="col">Losses</th>
          <th scope="col">Winrate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in info" v-bind:key="item.name">
          <td>{{ ++index }}</td>
          <td>
            <img
              v-bind:src="item.logo_url"
              v-bind:width="32"
              v-bind:alt="item.name"
            />
          </td>
          <td>
            <RouterLink :to="'/team/' + item.team_id">{{
              item.name
            }}</RouterLink>
          </td>
          <td>{{ item.rating }}</td>
          <td>{{ item.wins }}</td>
          <td>{{ item.losses }}</td>
          <td>{{ item.winrate }} %</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: [],
      count: null,
    };
  },
  methods: {
    init() {
      axios
        .get(this.$apiUrl + "/teams")
        // .then((response) => (this.info = response.data))
        .then((response) => {
          for (let item of response.data) {
            let winrate = (100 * item.wins) / (item.losses + item.wins);

            item.winrate = winrate.toFixed(2);

            this.info.push(item);

            if (this.info.length > 20) {
              break;
            }
          }
        });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped></style>
