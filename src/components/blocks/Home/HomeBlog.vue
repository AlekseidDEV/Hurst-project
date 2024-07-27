<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";

const store: StoreVuex = useStore()
const posts = computed(() => store.getters['getPosts'])

onMounted(() => {
  store.dispatch('setPosts', 1)
})
</script>

<template>
  <!-- BLGO-AREA START -->
  <div class="blog-area pt-55">
    <div class="container">
      <!-- Section-title start -->
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title-border">From The Blog</h2>
          </div>
        </div>
      </div>
      <!-- Section-title end -->
      <div class="row">
        <!-- Single-blog start -->
        <div v-for="post of posts" class="col-lg-6">
          <div class="single-blog mt-30">
            <div class="row">
              <div class="col-xl-6 col-md-7">
                <div class="blog-info">
                  <div class="post-meta fix">
                    <div class="post-date floatleft"><span class="text-dark-red">{{new Date(post.createdAt).getDate()}}</span></div>
                    <div class="post-year floatleft">
                      <p class="text-uppercase text-dark-red mb-0">
                        {{new Date(post.createdAt).toLocaleString('en', {month: 'long'})}},
                        {{new Date(post.createdAt).getFullYear()}}
                      </p>
                      <h4 class="post-title">
                        <router-link
                            :to="{name: 'single-blog', params: {id: post.id}}"
                            >{{post.title}}
                        </router-link></h4>

                    </div>
                  </div>
                  <div class="like-share fix">
                    <span><i class="bi bi-heart-fill"></i><span>{{post.likes}} Like</span></span>
                    <span><i class="bi bi-chat-left-fill"></i><span>{{post.commentsCount}} Comments</span></span>
                    <span><i class="bi bi-share-fill"></i><span>{{post.reposts}} Share</span></span>
                  </div>
                  <p>{{post.text}}</p>
                  <router-link
                      :to="{name: 'single-blog', params: {id: post.id}}"
                      class="button-2 text-dark-red"
                  >Read more...
                  </router-link>
                </div>
              </div>
              <div class="col-xl-6 col-md-5">
                <div class="blog-photo">
                  <router-link :to="{name: 'single-blog', params: {id: post.id}}"><img class="img-single-blog" :src="post.imagePath" alt="img"></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Single-blog end -->
      </div>
    </div>
  </div>
  <!-- BLGO-AREA END -->
</template>

<style scoped>
.img-single-blog{
  min-height: 230px;
  object-fit: cover;
}
</style>