<template>
  <v-app id="app">
    <!-- top----------------------------------- -->
    <v-app-bar id="top"
      :clipped-left="primaryDrawer.clipped"
      :fixed="primaryDrawer.fixed"
      color="transparent"
      dense
      elevation="0"
      app
    >
    <!-- 這裡之後要放 button -->
    </v-app-bar>

    <!-- sidebar-------------------------------- -->
    <v-navigation-drawer id="sidebar"
      class="primary"
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :fixed="primaryDrawer.fixed"
      permanent
      app
      overflow
    >
      <!-- Logo -->
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
      <!-- footer -->
      <v-footer class="d-block">
        <div class="px-4 warning--text text-center overline">交心 Hearto &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    // 側邊欄設定
    primaryDrawer: {
      model: null,
      clipped: false,
      floating: true,
      fixed: true
    }
  })
}
</script>
