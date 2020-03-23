<template>
  <section>
    <p>In the text below, there should not be any gap between the words:</p>
    <p>
      <span>foo</span>
      <span>bar</span>
    </p>
    <p>See <code>nuxt.config.js</code> for build options</p>
  </section>
</template>

<style>
body {
  margin: 10px;
}
p {
  margin-bottom: .5rem;
}
span {
  border: 1px solid red;
}
</style>
