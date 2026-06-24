<script setup lang="ts">
const navItems = ['Electric', 'Mountain', 'Road', 'Gravel', 'City', 'Kids', 'Parts', 'Accessories', 'Apparel', 'Sale'];
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
        <span class="sr-only">Search</span>
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search" />
      </label>

      <button class="icon-button site-header__search" type="button" aria-label="Search">⌕</button>
      <button class="icon-button" type="button" aria-label="Cart">🛒</button>
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
  color: #f4d046;
  display: inline-flex;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 900;
  gap: var(--space-2);
  letter-spacing: 0.08em;
  text-decoration: none;
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
  gap: clamp(0.75rem, 1.4vw, 1.4rem);
  justify-content: center;
}

.site-header__nav a {
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 800;
  text-decoration: none;
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
  color: var(--white);
  font-size: 1.9rem;
  line-height: 1;
  padding: var(--space-2);
}

.site-header__menu {
  display: none;
}

.site-header__menu span {
  background: currentcolor;
  display: block;
  height: 3px;
  margin: 5px 0;
  width: 28px;
}

.site-header__search {
  display: none;
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
    font-size: 1.45rem;
  }
}
</style>
