<template>
  <section class="intro" aria-label="Electric bikes overview">
    <p>
      Electric bikes amplify your pedaling power so you can do and see more than ever before.
      They are quick and smooth, with predictable, easy-to-control power and long-lasting
      batteries that are easy to charge in any household outlet.
    </p>
  </section>
</template>

<style scoped>
.intro {
  background: var(--white);
  padding: var(--space-6) var(--space-5) var(--space-8);
}

.intro p {
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.55;
  margin: 0 auto;
  max-width: 840px;
  text-align: center;
}

@media (max-width: 760px) {
  .intro {
    padding: var(--space-6) var(--space-5) var(--space-8);
  }

  .intro p {
    font-size: clamp(1.65rem, 5.2vw, 2rem);
    line-height: 1.43;
    max-width: 16.5em;
  }
}
</style>
