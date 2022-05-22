<template>
  <div class="row">
    <div class="text-center" v-if="!isRadiant">
      <span v-if="pickOrBan.is_pick">Pick</span>
      <span v-else>Ban</span>
      {{ pickOrBan.order }}
    </div>
    <div>
      <img
        :src="
          'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/' +
          pickOrBan.hero.imgName +
          '.png'
        "
        v-bind:class="[
          pickOrBan.is_pick
            ? 'border border-3 border-success'
            : 'border border-3 border-danger',
        ]"
        v-bind:width="90"
      />
    </div>
    <div class="text-center" v-if="isRadiant">
      <span v-if="pickOrBan.is_pick">Pick</span>
      <span v-else>Ban</span>
      {{ pickOrBan.order }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PickOrBan",
  props: ["pickOrBan", "isRadiant"],
};
</script>
