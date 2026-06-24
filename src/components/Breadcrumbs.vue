<template>
  <nav class="breadcrumbs" aria-label="Breadcrumbs">
    <ol>
      <li><a href="#" aria-label="Return to homepage">⌂</a></li>
      <li><a href="#">Bikes</a></li>
      <li class="breadcrumbs__current"><a href="#" aria-current="page">Electric bikes</a></li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  background: var(--white);
  color: var(--gray-70);
  padding: 1.2rem var(--space-5);
}

.breadcrumbs ol {
  align-items: center;
  display: flex;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumbs li + li::before {
  content: '/';
  margin-right: var(--space-2);
}

.breadcrumbs a {
  color: inherit;
  font-size: 1rem;
  text-decoration: none;
}

@media (max-width: 760px) {
  .breadcrumbs {
    padding: 2rem var(--space-5) 1.25rem;
  }

  .breadcrumbs__current {
    display: none;
  }

  .breadcrumbs a {
    font-size: 1.45rem;
  }
}
</style>
