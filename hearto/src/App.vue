<template>
  <v-app id="app">
    <!-- sidebar -->
    <v-navigation-drawer id="sidebar"
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :fixed="primaryDrawer.fixed"
      permanent
      color="purple"
      app
      overflow
    >
    <!-- Logo -->
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>

    <!-- footer -->
      <v-footer>
        <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-navigation-drawer>

    <!-- elevationc海拔(深度)、dense稠密(高度變小) -->
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

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    primaryDrawer: {
      model: null,
      clipped: false,
      floating: true,
      fixed: true
    }
  })
}
</script>
