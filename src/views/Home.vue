<template>
  <div>
    <h1>Bienvenue à notre salle de sport</h1>

    <p>Nos coachs sont là pour vous accompagner !</p>
    <section>
      <CoachCard />
    </section>
  </div>
</template>

<script setup>
// script setup  config vue 3 composition API
import CoachCard from "@/components/CoachCard.vue"; // Import de la card coach
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
}
</style>
