<template>
  <header
    id="header"
  >
    <h1>WEAR[E]arth</h1>
    <!--
    <nav id="header-nav">
      <ul>
        <router-link
          id="home-nav"
          tag="li"
          to="/"
          exact
        >
          <a>ホーム</a>
        </router-link>
        <router-link
          id="info-nav"
          tag="li"
          to="/info"
        >
          <a>このサイトについて</a>
        </router-link>
      </ul>
    </nav>
    -->
  </header>
</template>


<style scoped>
header {
  text-align: center;
  background-color: #aaa;
}
h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}
a {
  color: #ffa;
}

#header-nav ul li {
  display: inline;
}
</style>
