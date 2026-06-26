<script setup lang="ts">
import { ref } from 'vue';
import { navItems } from '../data/navigation';

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <header class="site-header" aria-label="Primary navigation">
    <button
      class="icon-button site-header__menu"
      type="button"
      aria-label="Open menu"
      aria-controls="mobile-nav-menu"
      :aria-expanded="mobileMenuOpen"
      @click="toggleMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a class="site-header__logo" href="#main-content" aria-label="Trek home" @click="closeMobileMenu">
      <span class="logo-text">TREK</span>
      <span class="logo-rule" aria-hidden="true"></span>
      <span class="logo-anniversary">50</span>
    </a>

    <nav class="site-header__nav" aria-label="Product categories">
      <a v-for="item in navItems" :key="item" href="#">{{ item }}</a>
    </nav>

    <nav
      v-if="mobileMenuOpen"
      id="mobile-nav-menu"
      class="site-header__mobile-nav"
      aria-label="Mobile product categories"
    >
      <a v-for="item in navItems" :key="item" href="#" @click="closeMobileMenu">{{ item }}</a>
    </nav>

    <div class="site-header__actions">
      <label class="search-field">
        <span class="search-icon" aria-hidden="true"></span>
        <span class="sr-only">Search</span>
        <input type="search" placeholder="Search" />
      </label>

      <button class="icon-button site-header__search" type="button" aria-label="Search"><span class="search-icon" aria-hidden="true"></span></button>
      <button class="icon-button cart-button" type="button" aria-label="Cart">
        <svg class="cart-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M3 4h2.3l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4l1.7-6.2H7" />
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  align-items: center;
  background: var(--brand-gray);
  color: var(--white);
  display: grid;
  gap: var(--space-4);
  grid-template-columns: auto 1fr auto;
  min-height: var(--header-height-desktop);
  padding: 0 var(--space-4);
  position: sticky;
  top: 0;
  z-index: 20;
}

.site-header__logo {
  align-items: center;
  border-radius: var(--radius-button);
  color: #f4d046;
  display: inline-flex;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 900;
  gap: var(--space-2);
  letter-spacing: 0.08em;
  padding: var(--space-1) var(--space-2);
  text-decoration: none;
}

.site-header__logo:hover {
  background: rgb(255 255 255 / 0.08);
  color: #ffe16a;
}

.logo-rule {
  background: var(--gray-70);
  height: 1.5rem;
  width: 1px;
}

.logo-anniversary {
  color: #f6dc7b;
  font-style: normal;
  letter-spacing: 0;
}

.site-header__nav {
  display: flex;
  gap: clamp(0.65rem, 1.05vw, 1.3rem);
  justify-content: center;
}

.site-header__nav a {
  border-radius: var(--radius-button);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 800;
  padding: var(--space-2) var(--space-1);
  position: relative;
  text-decoration: none;
  white-space: nowrap;
}

.site-header__nav a::after {
  background: var(--brand-red);
  bottom: 0;
  content: '';
  height: 2px;
  left: var(--space-1);
  opacity: 0;
  position: absolute;
  right: var(--space-1);
  transform: scaleX(0.4);
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.site-header__nav a:hover {
  background: rgb(255 255 255 / 0.08);
}

.site-header__nav a:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.site-header__mobile-nav {
  display: none;
}

.site-header__actions {
  align-items: center;
  display: flex;
  gap: var(--space-3);
}

.search-field {
  align-items: center;
  border: 1px solid var(--gray-80);
  display: flex;
  gap: var(--space-2);
  min-width: 16rem;
  padding: 0.65rem 0.8rem;
}

.search-field:hover,
.search-field:focus-within {
  border-color: var(--white);
  box-shadow: 0 0 0 2px rgb(255 255 255 / 0.14);
}

.search-field input {
  background: transparent;
  border: 0;
  color: var(--white);
  outline: 0;
  width: 100%;
}

.search-field input::placeholder {
  color: var(--gray-20);
}

.icon-button {
  background: transparent;
  border: 0;
  border-radius: var(--radius-button);
  color: var(--white);
  font-size: 1.9rem;
  line-height: 1;
  padding: var(--space-2);
}

.icon-button:hover {
  background: rgb(255 255 255 / 0.1);
  color: #ffe16a;
}

.icon-button:active {
  transform: translateY(1px);
}

.search-icon {
  border: 3px solid currentcolor;
  border-radius: 50%;
  display: inline-block;
  height: 1.25rem;
  position: relative;
  width: 1.25rem;
}

.search-icon::after {
  background: currentcolor;
  bottom: -0.45rem;
  content: '';
  height: 0.65rem;
  position: absolute;
  right: -0.25rem;
  transform: rotate(-45deg);
  width: 3px;
}

.cart-icon {
  display: block;
  fill: none;
  height: 1.75rem;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  width: 1.75rem;
}

.cart-icon circle {
  fill: currentcolor;
  stroke: none;
}

.site-header__menu,
.site-header__search {
  display: none;
}

.site-header__menu span {
  background: currentcolor;
  display: block;
  height: 3px;
  margin: 5px 0;
  width: 28px;
}

@media (max-width: 1180px) {
  .site-header__nav a {
    font-size: 0.8rem;
  }

  .search-field {
    min-width: 13rem;
  }
}

@media (max-width: 960px) {
  .site-header {
    grid-template-columns: 3rem 1fr auto;
    min-height: var(--header-height-mobile);
    padding-inline: var(--space-5);
  }

  .site-header__menu,
  .site-header__search {
    display: inline-grid;
    place-items: center;
  }

  .site-header__menu[aria-expanded='true'] {
    background: rgb(255 255 255 / 0.14);
    color: #ffe16a;
  }

  .site-header__nav,
  .search-field {
    display: none;
  }

  .site-header__mobile-nav {
    background: var(--white);
    border: 1px solid var(--gray-20);
    box-shadow: 0 18px 34px rgb(0 0 0 / 0.24);
    color: var(--gray-100);
    display: grid;
    gap: var(--space-1);
    left: var(--space-5);
    padding: var(--space-3);
    position: absolute;
    top: calc(100% + var(--space-1));
    width: min(18rem, calc(100vw - 2rem));
    z-index: 40;
  }

  .site-header__mobile-nav a {
    border-radius: var(--radius-button);
    color: var(--gray-100);
    font-size: 1rem;
    font-weight: 900;
    padding: 0.85rem var(--space-3);
    text-decoration: none;
  }

  .site-header__mobile-nav a:hover,
  .site-header__mobile-nav a:focus-visible {
    background: var(--gray-05);
    color: var(--brand-red);
  }

  .site-header__logo {
    justify-self: center;
    font-size: 1.55rem;
  }
}
</style>
