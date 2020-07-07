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

      <!-- Router -->
      <!-- TODO 前三個要改圖片-->
      <v-list>
        <v-list-item
          v-for="item1 in item1s"
          :key="item1.title"
        >
          <v-list-item-content>
            <router-link :to="item1.router">
              <v-btn text block color="warning text-left">
                {{item1.title}}
              </v-btn>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- 下拉選項清單 -->
      <!-- <v-list nav dark dense>
        <v-list-group
          v-for="item2 in item2s"
          :key="item2.title"
        > -->
          <!-- 主標 -->
          <!-- <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="warning--text"
                v-text="item2.title"
                >
              </v-list-item-title>
            </v-list-item-content>
          </template> -->

          <!-- 內標 -->
          <!-- <v-list-item
            v-for="subItem in item2.items"
            :key="subItem.title"
          >
            <v-list-item-content>
              <v-list-item-title
                class="warning--text"
                v-text="subItem.title"
              >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> -->

      <!-- footer -->
      <v-footer class="d-block">
        <div class="px-4 warning--text text-center overline">交心 Hearto &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-navigation-drawer>

    <router-view/>
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
    },
    item1s: [
      { title: '禱告好棒！', router: '/bless' },
      { title: '我需要鼓勵！', router: '/encourage' },
      { title: '季活動', router: '/#activity' },
      { title: '小社群', router: '/community' },
      { title: '揪運動', router: '/exercise' },
      { title: '心情紀錄', router: '/mood' }
    ]
    // item2s: [
    //   {
    //     title: '社群',
    //     items: [{ title: '小社群' }, { title: '揪運動' }]
    //   },
    //   {
    //     title: '心情紀錄',
    //     items: [{ title: '記下 +' }, { title: '自己' }, { title: '追蹤' }, { title: '小社群' }, { title: '所有人' }]
    //   }
    // ]
  })
}
</script>
