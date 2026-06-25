<script setup lang="ts">
const navItems = ['Electric', 'Mountain', 'Road', 'Gravel', 'City', 'Kids', 'Parts', 'Accessories', 'Apparel', 'Sale', 'Pre-owned', 'Ride Club', 'Bike Shops'];
</script>

<template>
  <header class="site-header" aria-label="Primary navigation">
    <button class="icon-button site-header__menu" type="button" aria-label="Open menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a class="site-header__logo" href="#main-content" aria-label="Trek home">
      <span class="logo-text">TREK</span>
      <span class="logo-rule" aria-hidden="true"></span>
      <span class="logo-anniversary">50</span>
    </a>

    <nav class="site-header__nav" aria-label="Product categories">
      <a v-for="item in navItems" :key="item" href="#">{{ item }}</a>
    </nav>

    <div class="site-header__actions">
      <label class="search-field">
        <span class="search-icon" aria-hidden="true"></span>
        <span class="sr-only">Search</span>
        <input type="search" placeholder="Search" />
      </label>

      <button class="icon-button site-header__search" type="button" aria-label="Search"><span class="search-icon" aria-hidden="true"></span></button>
      <button class="icon-button cart-button" type="button" aria-label="Cart"><span aria-hidden="true"></span></button>
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

.cart-button span {
  border-bottom: 4px solid currentcolor;
  border-left: 4px solid currentcolor;
  border-radius: 0 0 4px 4px;
  display: inline-block;
  height: 1.15rem;
  position: relative;
  width: 1.45rem;
}

.cart-button span::before,
.cart-button span::after {
  background: currentcolor;
  border-radius: 50%;
  bottom: -0.55rem;
  content: '';
  height: 0.28rem;
  position: absolute;
  width: 0.28rem;
}

.cart-button span::before {
  left: 0.05rem;
}

.cart-button span::after {
  right: 0.05rem;
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

  .site-header__nav,
  .search-field {
    display: none;
  }

  .site-header__logo {
    justify-self: center;
    font-size: 1.55rem;
  }
}
</style>
