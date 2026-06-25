<script setup lang="ts">
import { heroImage } from '../data/bikes';
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero__image" :src="heroImage.src" :alt="heroImage.alt" />
    <div class="hero__content">
      <h2 id="hero-title">Electric bikes</h2>
      <div class="hero__actions">
        <a class="hero__button" href="#">Use the e-bike finder</a>
        <a class="hero__button" href="#">Learn more</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  align-items: center;
  background: var(--gray-90);
  color: var(--white);
  display: grid;
  min-height: 520px;
  overflow: hidden;
  place-items: center;
  position: relative;
}

.hero::after {
  background:
    linear-gradient(rgb(0 0 0 / 0.44), rgb(0 0 0 / 0.34)),
    linear-gradient(90deg, rgb(0 0 0 / 0.24), transparent 35%, rgb(0 0 0 / 0.24));
  content: '';
  inset: 0;
  position: absolute;
}

.hero__image {
  height: 100%;
  inset: 0;
  object-fit: cover;
  object-position: center;
  position: absolute;
  width: 100%;
}

.hero__content {
  isolation: isolate;
  position: relative;
  text-align: center;
  transform: translateY(0.5rem);
  z-index: 1;
}

.hero h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4.7vw, 4rem);
  line-height: 1;
  margin: 0 0 var(--space-5);
  text-shadow: 0 2px 8px rgb(0 0 0 / 0.35);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.hero__button {
  background: var(--white);
  border: 2px solid transparent;
  border-radius: var(--radius-button);
  color: var(--gray-100);
  display: inline-flex;
  font-weight: 900;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.hero__button:hover {
  background: var(--gray-10);
  border-color: var(--white);
  box-shadow: 0 10px 22px rgb(0 0 0 / 0.22);
  transform: translateY(-2px);
}

.hero__button:active {
  transform: translateY(0);
}

@media (max-width: 760px) {
  .hero {
    min-height: 665px;
  }

  .hero__image {
    object-position: center;
  }

  .hero__content {
    margin-top: 6rem;
  }

  .hero h2 {
    font-size: clamp(2.45rem, 8vw, 3.45rem);
  }

  .hero__button {
    font-size: 1.35rem;
    padding: 1rem 1.15rem;
  }
}

@media (max-width: 560px) {
  .hero__actions {
    flex-wrap: nowrap;
  }

  .hero__button {
    font-size: 1rem;
  }
}
</style>
