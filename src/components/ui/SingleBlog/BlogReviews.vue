<script setup lang="ts">
import {Posts} from "@/models/interface/posts";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import {computed} from "vue";

defineProps<{
  info: Posts
}>()

const emits = defineEmits<{
  (e: 'replyAdd', id: string, name: string): void
  (e: 'reviewDelete', id: string, replyId?: string): void
}>()

const store: StoreVuex = useStore()
const user = computed(() => store.getters['getUser'])

const formatedDate = (data: string) => {
  return new Date(data).toLocaleString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
  )
}

const replyReviews = (id: string, name: string) => {
  emits('replyAdd', id, name)
}

const deleteReview = (id: string, replyId?: string) => {
  emits('reviewDelete', id, replyId)
}
</script>

<template>
  <div class="customer-review mb-60">
    <h3 class="tab-title title-border mb-30">Customer comments</h3>
    <ul class="product-comments clearfix">
      <li class="mb-30 position-relative" v-for="review of info.comments" :key="review.id">
        <div class="d-flex align-items-center">
          <div class="pro-reviewer">
            <img src="/img/reviewer/1.jpg" alt="img">
          </div>
          <div class="pro-reviewer-comment">
            <div class="fix">
              <div class="floatleft mbl-center">
                <h5 class="text-uppercase mb-0"><strong>{{ review.commenterName }}</strong></h5>
                <p class="reply-date">{{ formatedDate(review.commentDate) }}</p>
              </div>
              <div class="comment-reply position-absolute">
                <span
                    v-if="user.email === review.commenterEmail"
                    @click="deleteReview(review.id)"
                    class="cursor-pointer"
                >
                  <i class="bi bi-x"></i>
                </span>
                <span
                    class="cursor-pointer"
                    @click="replyReviews(review.id, review.commenterName)"
                >
                  <i class="bi bi-reply-all-fill"></i>
                </span>
              </div>
            </div>
            <p class="mb-0">{{ review.commentText }}</p>
          </div>
        </div>

        <div class="threaded-comments position-relative mt-25" v-for="reply of review.reply">
          <div class="d-flex align-items-center" v-if="review.reply.length">
            <div class="pro-reviewer">
              <img src="/img/reviewer/1.jpg" alt="img">
            </div>
            <div class="pro-reviewer-comment">
              <div class="fix">
                <div class="floatleft mbl-center">
                  <h5 class="text-uppercase mb-0"><strong>{{ reply.commenterName }}</strong></h5>
                  <p class="reply-date">{{ formatedDate(reply.commentDate) }}</p>
                </div>
                <div class="comment-reply position-absolute">
                  <span
                      @click="deleteReview(review.id, reply.id)"
                      v-if="reply.commenterEmail === user.email"
                      class="cursor-pointer"
                  >
                  <i class="bi bi-x"></i>
                </span>
                  <span
                      class="cursor-pointer"
                      @click="replyReviews(review.id, reply.commenterName)"
                  >
                  <i class="bi bi-reply-all-fill"></i>
                </span>
                </div>
              </div>
              <p class="mb-0">{{ reply.commentText }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.product-comments {
  display: flex;
  flex-direction: column;
}

.comment-reply {
  top: 0;
  right: 0;
}
</style>