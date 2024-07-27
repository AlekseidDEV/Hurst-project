<script setup lang="ts">
import {Posts} from "@/models/interface/posts";

defineProps<{
  info: Posts
}>()
</script>

<template>
  <div class="blog-photo">
    <p><img :src="info?.imagePath" alt=""></p>
    <div class="like-share fix">
      <span><i class="bi bi-person-fill"></i><span>{{info?.authorName}}</span></span>
      <span><i class="bi bi-heart-fill"></i><span>{{info?.likes}} Like</span></span>
      <span><i class="bi bi-chat-left-fill"></i><span>{{info?.commentsCount}} Comments</span></span>
      <span class="d-none d-md-block"><i class="bi bi-share-fill"></i><span>{{info?.reposts}} Share</span></span>
    </div>
    <div class="post-date post-date-2">
      <span class="text-dark-red">{{new Date(info?.createdAt as string).getDate()}}</span>
      <span class="text-dark-red text-uppercase">
        {{new Date(info?.createdAt as string).toLocaleString('en', {month: 'long'})}}
      </span>
    </div>
  </div>
  <div class="blog-info blog-details-info">
    <h4 class="post-title post-title-2"><a href="#">{{info?.title}}</a></h4>
    <p>{{info.text}}</p>
    <div class="post-share-tag clearfix mt-40">
      <div class="post-share floatleft">
        <span class="text-uppercase"><strong>Share</strong></span>
        <span ><i class="bi bi-facebook"></i></span>
        <span ><i class="bi bi-twitter"></i></span>
        <span ><i class="bi bi-linkedin"></i></span>
        <span ><i class="bi bi-vimeo"></i></span>
        <span ><i class="bi bi-dribbble"></i></span>
        <span ><i class="bi bi-instagram"></i></span>
      </div>
    </div>
    <div class="author-comments clearfix mt-40">
      <div class="author-photo floatleft">
        <img src="/img/reviewer/author.jpg" alt="img">
      </div>
      <div class="author-brief">
        <h3 class="font-16px"><strong>{{info?.authorName}}</strong></h3>
        <p>{{info?.authorComment}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>