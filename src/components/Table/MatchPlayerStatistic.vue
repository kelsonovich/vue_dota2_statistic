<template>
  <table class="table table-hover mt-2">
    <thead>
      <tr>
        <th scope="col" class="col-2">Player</th>
        <th scope="col">LVL</th>
        <th scope="col"><span class="text-success">K</span></th>
        <th scope="col"><span class="text-danger">D</span></th>
        <th scope="col">A</th>
        <th scope="col">LH/LD</th>
        <td scope="col">NW</td>
        <th scope="col">GPM</th>
        <th scope="col">XPM</th>
        <th scope="col">HD</th>
        <th scope="col">TD</th>
        <th scope="col">Healing</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, index) in players" :key="index">
        <td>{{ player.name }}</td>
        <td>{{ player.level }}</td>
        <td>
          <span class="text-success">{{ player.kills }}</span>
        </td>
        <td>
          <span class="text-danger">{{ player.deaths }}</span>
        </td>
        <td>{{ player.assists }}</td>
        <td>{{ player.last_hits }}/ {{ player.denies }}</td>
        <td>{{ player.net_worth }}</td>
        <td>{{ player.gold_per_min }}</td>
        <td>{{ player.xp_per_min }}</td>
        <td>{{ player.hero_damage }}</td>
        <td>{{ player.tower_damage }}</td>
        <td>{{ player.hero_healing }}</td>
      </tr>
      <tr v-if="players">
        <td></td>
        <td></td>
        <td>{{ this.total.kills }}</td>
        <td>{{ this.total.deaths }}</td>
        <td>{{ this.total.assists }}</td>
        <td>{{ this.total.last_hits }} / {{ this.total.denies }}</td>
        <td>{{ this.total.net_worth }}</td>
        <td>{{ this.total.gold_per_min }}</td>
        <td>{{ this.total.xp_per_min }}</td>
        <td>{{ this.total.hero_damage }}</td>
        <td>{{ this.total.tower_damage }}</td>
        <td>{{ this.total.hero_healing }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["players"],
  data() {
    return {
      total: {
        kills: 0,
        deaths: 0,
        assists: 0,
        last_hits: 0,
        denies: 0,
        net_worth: 0,
        gold_per_min: 0,
        xp_per_min: 0,
        hero_damage: 0,
        tower_damage: 0,
        hero_healing: 0,
      },
    };
  },
  methods: {
    setTotal() {
      for (let player of this.players) {
        for (let property of Object.keys(this.total)) {
          this.total[property] += player[property];
        }
      }
    },
  },
  created() {
    this.setTotal();
  },
};
</script>
