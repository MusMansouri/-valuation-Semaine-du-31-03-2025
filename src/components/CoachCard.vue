<template>
  <div class="conteneur">
    <section>
      <img src="../assets/wolf.svg" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam,
        reiciendis nobis id ipsam labore magnam expedita minima nisi inventore
        fugiat corrupti voluptatum hic nesciunt placeat perferendis pariatur
        cumque nemo!
      </p>
    </section>
    <section>
      <img src="../assets/image.svg" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam,
        reiciendisdasdasdanobis id ipsam labore magnam expedita minima nisi
        inventore fugiat corrupti voluptatum hic nesciunt placeat perferendis
        pariatur cumque nemo!
      </p>
    </section>
  </div>
</template>
<script></script>
<style scoped>
.conteneur {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 150px;
}
img {
  height: 280px;
  border-radius: 10%;
  border: solid 2px black;
}
p {
  background-color: rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5%;
  width: 500px;
}
</style>
