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
import CoachCard from "@/components/CoachCard.vue";
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
}
</style>
