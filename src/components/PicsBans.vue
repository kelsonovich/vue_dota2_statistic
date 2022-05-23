<template>
  <div class="mt-2">
    <PickBanRow :picks-bans="this.picks_bans.radiant" :isRadiant="true" />
    <hr />
    <PickBanRow :picks-bans="this.picks_bans.dire" :isRadiant="false" />
  </div>
</template>

<script>
import axios from "axios";
import PickBanRow from "@/components/Heroes/PickBan/PickBanRow.vue";

export default {
  name: "PicsBans",
  components: {
    PickBanRow,
  },
  props: ["picksBans", "heroes"],
  data() {
    return {
      picks_bans: {
        radiant: [],
        dire: [],
      },
    };
  },

  methods: {
    preparePicksBans(picksBans, heroes) {
      for (let pickOrBan of picksBans) {
        for (let hero of heroes) {
          if (pickOrBan.hero_id === hero.id) {
            hero.imgName = hero.name
              .replaceAll("npc_dota_hero_", "")
              .toLowerCase();
            pickOrBan.hero = hero;
            break;
          }
        }

        pickOrBan.order = Number(pickOrBan.order);
        pickOrBan.order++;
        if (pickOrBan.team === 0) {
          this.picks_bans.radiant.push(pickOrBan);
        } else {
          this.picks_bans.dire.push(pickOrBan);
        }
      }
    },
  },
  created() {
    // this.preparePicksBans(this.picksBans, this.heroes);
  },
};
</script>
