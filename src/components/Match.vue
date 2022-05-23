<template>
  <div class="container mt-5">
    <div class="row fs-1">
      <div class="card card-body">
        <div class="row">
          <div class="col-5 text-end">
            {{ match.radiant_team_id }}
          </div>
          <div class="col-2 text-center">
            <span class="text-success">{{ match.radiant_score }}</span>
            -
            <span class="text-danger">{{ match.dire_score }}</span>
          </div>
          <div class="col-5 text-start">
            {{ match.dire_team_id }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="car card-body">
        <div class="row">
          <MatchPlayerStatistic :players="this.players.radiant" />
        </div>
        <div class="row">
          <PicsBans :picksBans="this.match.picks_bans" :heroes="this.heroes" />
        </div>
        <div class="row">
          <MatchPlayerStatistic :players="this.players.dire" />
        </div>
      </div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
import axios from "axios";
import MatchPlayerStatistic from "@/components/Table/MatchPlayerStatistic.vue";
import PicsBans from "@/components/PicsBans.vue";

export default {
  name: "Match",
  components: {
    PicsBans,
    MatchPlayerStatistic,
  },
  matchId: null,
  data() {
    return {
      matchId: null,
      match: {},
      heroes: {},
      players: {
        radiant: [],
        dire: [],
      },
    };
  },
  methods: {
    async init() {
      await axios
        .get("https://api.opendota.com/api/matches/" + this.matchId)
        .then((response) => {
          this.match = response.data;

          for (let player of this.match.players) {
            if (this.players.radiant.length < 5) {
              this.players.radiant.push(player);
            } else {
              this.players.dire.push(player);
            }
          }
        });

      await axios
        .get("https://api.opendota.com/api/heroes/")
        .then((response) => (this.heroes = response.data));
    },
  },
  created() {
    this.matchId = this.$route.params.matchId;
    this.init();
  },
};
</script>

<style scoped></style>
