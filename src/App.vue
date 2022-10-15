<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import LinkComponent from "@/components/LinkComponent.vue";
</script>

<template>
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul
            class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
        >
          <RouterLink to="/teams" class="nav-link px-2 link-dark" active-class="link-secondary">Teams</RouterLink>
        </ul>
      </header>
    </div>
  <div class="container">
    <RouterView />
  </div>
</template>
