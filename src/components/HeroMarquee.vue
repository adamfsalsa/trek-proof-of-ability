<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__art" aria-hidden="true">
      <span class="hero__rider"></span>
      <span class="hero__bike"></span>
    </div>

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
  background:
    linear-gradient(rgb(0 0 0 / 0.48), rgb(0 0 0 / 0.38)),
    radial-gradient(circle at 62% 48%, rgb(255 255 255 / 0.22), transparent 16rem),
    linear-gradient(180deg, #6a765e 0%, #3f492e 48%, #b9a98d 49%, #7b8c3c 73%, #d8c0a1 74%);
  color: var(--white);
  display: grid;
  min-height: 520px;
  overflow: hidden;
  place-items: center;
  position: relative;
}

.hero__art {
  inset: 0;
  position: absolute;
}

.hero__art::before {
  background: rgb(60 45 22 / 0.55);
  content: '';
  filter: blur(10px);
  height: 9rem;
  left: -4%;
  position: absolute;
  right: -4%;
  top: 7%;
}

.hero__bike {
  border-bottom: 0.8rem solid #74b7b5;
  border-radius: 999px;
  bottom: 17%;
  height: 5rem;
  left: 46%;
  position: absolute;
  width: min(34rem, 50vw);
}

.hero__bike::before,
.hero__bike::after {
  border: 0.65rem solid #181818;
  border-radius: 50%;
  bottom: -3.4rem;
  content: '';
  height: 6.4rem;
  position: absolute;
  width: 6.4rem;
}

.hero__bike::before {
  left: 0;
}

.hero__bike::after {
  right: 0;
}

.hero__rider {
  background: #f4f0ec;
  border-radius: 999px 999px 40% 40%;
  bottom: 38%;
  height: 7rem;
  left: 61%;
  position: absolute;
  transform: rotate(18deg);
  width: 3.8rem;
}

.hero__content {
  isolation: isolate;
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.6vw, 3.8rem);
  line-height: 1;
  margin: 0 0 var(--space-5);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.hero__button {
  background: var(--white);
  border-radius: var(--radius-button);
  color: var(--gray-100);
  display: inline-flex;
  font-weight: 900;
  min-height: 3rem;
  padding: 0.8rem 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .hero {
    min-height: 665px;
  }

  .hero h2 {
    font-size: clamp(2.4rem, 8vw, 3.4rem);
  }

  .hero__bike {
    bottom: 18%;
    left: 40%;
    width: 30rem;
  }

  .hero__rider {
    bottom: 42%;
    left: 61%;
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
