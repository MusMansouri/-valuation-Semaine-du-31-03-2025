<template>
  <div>
    <h1>Nos abonnements</h1>
    <ul>
      <li>
        Mensuel : 30€ Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores eos id vero obcaecati non nihil animi repudiandae tempore
        consequatur. Doloremque enim, libero neque odio aut accusantium
        asperiores rem necessitatibus distinctio.
        <button @click="modal = true">Abonne toi</button>
      </li>
      <li>
        Trimestriel : 80€ Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolores eos id vero obcaecati non nihil animi repudiandae tempore
        consequatur. Doloremque enim, libero neque odio aut accusantium
        asperiores rem necessitatibus distinctio.
        <button @click="modal = true">Abonne toi</button>
      </li>
      <li>
        Annuel : 300€ Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores eos id vero obcaecati non nihil animi repudiandae tempore
        consequatur. Doloremque enim, libero neque odio aut accusantium
        asperiores rem necessitatibus distinctio.
        <button @click="modal = true">Abonne toi</button>
      </li>
    </ul>
  </div>
  <div class="modal" v-show="modal">
    <button @click="modal = false">X</button>
    <p>Conditions : Engagement minimum de 1 mois.</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti,
      fugit quas nemo reprehenderit quam mollitia delectus exercitationem,
      aliquid fugiat cupiditate iusto nobis. Qui earum maxime aspernatur sunt,
      velit placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sapiente laudantium, debitis, perspiciatis sit beatae vel quia nam maxime
      quam quidem aliquid corporis omnis a ipsam dolore numquam fuga laborum
      recusandae!
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modal = ref(false);
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 5%;
  background-color: rgba(128, 128, 128, 0.339);
  height: 300px;
  width: 150px;
}
.modal {
  background-color: white;
  color: red;
}
</style>
