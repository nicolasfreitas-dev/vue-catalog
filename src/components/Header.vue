<template>
  <header id="header">
    <h3>Vue Catalog</h3>
    <nav>
      <ul id="nav-list">
        <li class="nav-itens"><a href="/">Página Inicial</a></li>
        <li class="nav-itens"><a href="/produtos">Produtos</a></li>
        <li class="nav-itens"><a href="/produtos/novo">Novo produto</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#header {
  background-color: #333;
  color: white;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

#nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

#nav-list .nav-itens {
  font-size: 1.7rem;
}

#nav-list .nav-itens a {
  text-decoration: none;
  color: white;
}

#nav-list .nav-itens a:hover {
  color: #f0f0f0;
}
</style>
