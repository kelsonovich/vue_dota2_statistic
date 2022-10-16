<template>
  <div class="container mt-5">
    <div class="row">
      <div class="row">
        <div class="card card-body">
          <div class="row">
            <div class="row">
              <div class="col">
                <h3>{{ team.name }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-2">Rating:</div>
              <div class="col-2">{{ team.rating }}</div>
              <div class="col-2">Wins:</div>
              <div class="col-2">{{ team.wins }}</div>
              <div class="col-2">Losses:</div>
              <div class="col-2">{{ team.losses }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Match</th>
              <th scope="col">Result</th>
              <th scope="col">Opponent</th>
              <th scope="col">Start date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in info" v-bind:key="item.name">
              <td>{{ ++index }}</td>
              <td>
                <RouterLink :to="'/match/' + item.match_id">{{
                  item.match_id
                }}</RouterLink>
              </td>
              <td>
                <div v-if="item.radiant === item.radiant_win">
                  <span class="badge bg-success">Win</span>
                </div>
                <div v-else>
                  <span class="badge bg-danger">Lose</span>
                </div>
              </td>
              <td>
                <RouterLink :to="'/team/' + item.opposing_team_id">{{
                  item.opposing_team_name
                }}</RouterLink>
              </td>
              <td>{{ item.start_date_time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import axios from "axios";
import {teamApiService} from "@/services/TeamApiService";
import "@/assets/team.css";

export default {
  name: "Team.vue",
  teamId: null,
  data() {
    return {
      info: [],
      team: {},
    };
  },
  beforeCreate() {
    this.teamId = this.$route.params.teamId;
  },
  methods: {
    async init() {

      this.team = await teamApiService.getTeam(this.teamId);

      this.info = [];

      let tampVar = await teamApiService.getTeamMatches(this.teamId);

      for (let item of tampVar) {
        item.start_date_time =
            (new Date(item.start_time * 1000).toLocaleTimeString("ru-RU")) + ' ' +
            (new Date(item.start_time * 1000).toLocaleDateString("ru-RU"));

        this.info.push(item);
      }
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    $route(to, from) {
      if (this.$route.params.teamId !== undefined) {
        this.teamId = this.$route.params.teamId;
        this.init();
      }
    },
  },
};
</script>

