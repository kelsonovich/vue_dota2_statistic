<template>
  <div class="row">
    <div
      class="col-1"
      v-for="pickOrBan in picksBans"
      v-bind:key="pickOrBan.order"
    >
      <PickOrBan :pick-or-ban="pickOrBan" :isRadiant="isRadiant"/>
    </div>
  </div>
</template>

<script>
import PickOrBan from "@/components/Heroes/PickBan/PickOrBan.vue";

export default {
  name: "PickBanRow",
  components: {PickOrBan},
  props: ["picksBans", "isRadiant"],
};
</script>

<style scoped></style>
