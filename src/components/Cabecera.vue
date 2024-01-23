<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Smart Doctor logo" src="../assets/logo.png" width="120">
        {{ msg }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Cabecera',
  props: {
    msg: String
  }
}
</script>  