<template>
  <div class="container mt-5">
    <div class="row fs-1">
      <div class="card card-body">
        <div class="row">
          <div class="col-5 text-end">
            {{ radiantTeamId }}
          </div>
          <div class="col-2 text-center">
            <span class="text-success">{{ radiantScore }}</span>
            -
            <span class="text-danger">{{ direScore }}</span>
          </div>
          <div class="col-5 text-start">
            {{ direTeamId }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="car card-body">
        <div class="row">
          <MatchPlayerStatistic v-if="players" :players="players.radiant" />
        </div>
        <div class="row">
          <PicsBans
            v-if="match && heroes"
            :picksBans="match.picks_bans"
            :heroes="heroes"
          />
        </div>
        <div class="row">
          <MatchPlayerStatistic v-if="players" :players="players.dire" />
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
      match: null,
      heroes: null,
      players: null,
    };
  },
  methods: {
    getMatch() {
      axios
        .get("https://api.opendota.com/api/matches/" + this.matchId)
        .then((response) => {
          this.match = response.data;

          this.setPlayers(this.match);
        });
    },
    getHeroes() {
      axios.get("https://api.opendota.com/api/heroes/").then((response) => {
        this.heroes = response.data;
      });
    },
    setPlayers(match) {
      let players = {
        radiant: [],
        dire: [],
      };

      for (let player of match.players) {
        if (players.radiant.length < 5) {
          players.radiant.push(player);
        } else {
          players.dire.push(player);
        }
      }

      this.players = players;
    },
  },
  computed: {
    // match() {
    //   return this.match ? this.match : undefined;
    // },
    // heroes() {
    //   return this.heroes ? this.heroes : undefined;
    // },
    radiantTeamId() {
      return this.match ? this.match.radiant_team_id : "";
    },
    direTeamId() {
      return this.match ? this.match.dire_team_id : "";
    },
    radiantScore() {
      return this.match ? this.match.radiant_score : "";
    },
    direScore() {
      return this.match ? this.match.dire_score : "";
    },
  },
  created() {
    this.matchId = this.$route.params.matchId;
    this.getMatch();
    this.getHeroes();
  },
};
</script>

<style scoped></style>
