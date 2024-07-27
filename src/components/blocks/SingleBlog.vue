<script setup lang="ts">

import SingleBlogInfo from "@/components/ui/SingleBlog/BlogInfo.vue";
import SingleBlogReviews from "@/components/ui/SingleBlog/BlogReviews.vue";
import SingleBlogLeaveReview from "@/components/ui/SingleBlog/BlogLeaveReview.vue";
import {onMounted, Ref, ref} from "vue";
import {axiosClient} from "@/axiosClient";
import {useRoute} from "vue-router";
import {Posts} from "@/models/interface/posts";
import {Commentators} from "@/models/interface/commentators";
import {Elem} from "@/models/types";
import {ReplyComment} from "@/models/interface/replyComment";
import TheHeadingBanner from "@/components/common/TheHeadingBanner.vue";

const route = useRoute()
const singleBlog: Ref<Partial<Posts>> = ref({})
const isReplyReview = ref(false)
const idComment = ref('')
const nameReply = ref('')

const sendNewComments = (obj: Commentators) => {
  if (!isReplyReview.value) {
    singleBlog.value.comments?.push(obj)

    axiosClient.put(`/posts/${singleBlog.value.id}`, singleBlog.value)
  } else {
    const commentReply = singleBlog.value.comments?.find((elem) => elem.id === idComment.value)
    commentReply!.reply.push(obj)

    axiosClient.put(`/posts/${singleBlog.value.id}`, singleBlog.value).then(() => {
      isReplyReview.value = false
    })
  }
}

const reviewDel = (id: string, replyId?: string) => {
  if (replyId) {
    const comment = singleBlog.value.comments?.find((elem) => elem.id === id)
    comment!.reply = comment?.reply.filter((elem) => elem.id !== replyId) as ReplyComment[]
  } else {
    singleBlog.value.comments = singleBlog.value.comments?.filter((elem) => elem.id !== id)
  }

  axiosClient.put(`/posts/${singleBlog.value.id}`, singleBlog.value)
}

const newReplyComment = (id: string, name: string) => {
  const reviewLeave: Elem | null = document.getElementById('leave-review')

  reviewLeave?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })

  isReplyReview.value = true
  nameReply.value = name
  idComment.value = id
}

onMounted(() => {
  axiosClient.get(`/posts/${route.params.id}`).then((res) => {
    singleBlog.value = res.data
  })
})
</script>

<template>
  <TheHeadingBanner
  :params="route.name as string"
  />
  <!-- BLGO-AREA START -->
  <div class="blog-area blog-2 blog-details-area  pt-80 pb-80">
    <div class="container">
      <div class="blog">
        <div class="row">
          <!-- Single-blog start -->
          <div class="col-lg-12">
            <div class="single-blog mb-30">
              <SingleBlogInfo
                  :info="singleBlog as Posts"
              />
              <div class="pro-reviews mt-60">
                <SingleBlogReviews
                    :info="singleBlog as Posts"
                    @replyAdd="newReplyComment"
                    @reviewDelete="reviewDel"
                />
                <SingleBlogLeaveReview
                    @sendReview="sendNewComments"
                    :isReply="isReplyReview"
                    :isReplyName="nameReply"
                />
              </div>
            </div>
          </div>
          <!-- Single-blog end -->
        </div>
      </div>
    </div>
  </div>
  <!-- BLGO-AREA END -->
</template>

<style scoped>

</style>