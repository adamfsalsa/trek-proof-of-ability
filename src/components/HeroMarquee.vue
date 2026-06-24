<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__art" aria-hidden="true">
      <span class="hero__lake"></span>
      <span class="hero__path"></span>
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
    linear-gradient(rgb(0 0 0 / 0.52), rgb(0 0 0 / 0.38)),
    linear-gradient(180deg, #786442 0%, #394627 36%, #5f7858 47%, #8aa152 64%, #d4bea0 65%);
  color: var(--white);
  display: grid;
  min-height: 520px;
  overflow: hidden;
  place-items: center;
  position: relative;
}

.hero__art,
.hero__lake,
.hero__path {
  inset: 0;
  position: absolute;
}

.hero__lake {
  background: linear-gradient(90deg, rgb(69 87 88 / 0.75), rgb(116 143 144 / 0.85), rgb(47 67 70 / 0.75));
  filter: blur(1px);
  height: 24%;
  top: 34%;
}

.hero__path {
  background: linear-gradient(90deg, #d9c0a5, #c6a98f, #e1c8ac);
  height: 16%;
  top: 66%;
}

.hero__art::before {
  background: rgb(70 46 23 / 0.52);
  content: '';
  filter: blur(14px);
  height: 10rem;
  left: -4%;
  position: absolute;
  right: -4%;
  top: 7%;
}

.hero__bike {
  border-bottom: 0.82rem solid #75b9b8;
  border-radius: 999px;
  bottom: 20%;
  height: 5rem;
  left: 49%;
  position: absolute;
  width: min(35rem, 48vw);
}

.hero__bike::before,
.hero__bike::after {
  border: 0.7rem solid #161616;
  border-radius: 50%;
  bottom: -3.45rem;
  content: '';
  height: 6.8rem;
  position: absolute;
  width: 6.8rem;
}

.hero__bike::before {
  left: 0;
}

.hero__bike::after {
  right: 0;
}

.hero__rider {
  background: #f4f0ec;
  border-radius: 999px 999px 42% 42%;
  bottom: 42%;
  height: 7.2rem;
  left: 64%;
  position: absolute;
  transform: rotate(16deg);
  width: 3.8rem;
}

.hero__rider::before {
  background: #1a1a1a;
  border-radius: 50% 50% 45% 45%;
  content: '';
  height: 1.35rem;
  left: 1.1rem;
  position: absolute;
  top: -1.1rem;
  width: 1.55rem;
}

.hero__content {
  isolation: isolate;
  position: relative;
  text-align: center;
  transform: translateY(-0.5rem);
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
}

@media (max-width: 760px) {
  .hero {
    min-height: 665px;
    place-items: start center;
  }

  .hero__content {
    margin-top: 16.5rem;
  }

  .hero h2 {
    font-size: clamp(2.45rem, 8vw, 3.45rem);
  }

  .hero__lake {
    top: 30%;
  }

  .hero__path {
    top: 66%;
  }

  .hero__bike {
    bottom: 16%;
    left: 40%;
    width: 31rem;
  }

  .hero__rider {
    bottom: 42%;
    left: 63%;
  }

  .hero__button {
    font-size: 1.35rem;
    padding: 1rem 1.15rem;
  }
}

@media (max-width: 560px) {
  .hero__content {
    margin-top: 17rem;
  }

  .hero__actions {
    flex-wrap: nowrap;
  }

  .hero__button {
    font-size: 1rem;
  }
}
</style>
