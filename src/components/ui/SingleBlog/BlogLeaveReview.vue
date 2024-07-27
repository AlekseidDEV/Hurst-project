<script setup lang="ts">
import {computed, reactive, ref, Ref, watch} from "vue";
import {reviewFormValidator} from "@/validators/reviewFormValidator";
import {FormValidateReview} from "@/models/interface/formValidateReview";
import {Commentators} from "@/models/interface/commentators";
import {Elem} from "@/models/types";
import {useUuidGenerator} from "@/shared/useUuidGenerator";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";

const props = defineProps<{
  isReply: boolean,
  isReplyName: string
}>()

const emits = defineEmits<{
  (e: 'sendReview', obj: Commentators): void
}>()

const store: StoreVuex = useStore()
const user = computed(() => store.getters['getUser'])

const inputName: Ref<Elem | null> = ref(null)
const inputEmail: Ref<Elem | null> = ref(null)
const textArea: Ref<Elem | null> = ref(null)

const form: FormValidateReview = reactive({
  name: '',
  email: '',
  textArea: '',
  errors: {}
})

const isTitleBlock = computed(() => props.isReply ? `reply to comment ${props.isReplyName}` : 'Leave your reviw')

const cleareError = (input: Ref<Elem | null>, fieldError: keyof typeof form.errors) => {
  return (newValue: string) => {
    if (form.errors[fieldError] && newValue !== '') {
      input.value?.classList.remove('input-error')
      form.errors[fieldError] = ''
    }
  }
}

const sendReview = async () => {
  const {succes, errors} = await reviewFormValidator(form)

  form.errors = errors

  if(!succes) return

  const newComment: Partial<Commentators> = {
    id: useUuidGenerator(),
    avatar: '/path/to/commenter3.jpg',
    commentDate: new Date().toISOString(),
    commenterEmail: form.email,
    commenterName: form.name,
    commentText: form.textArea,
  }

  if (user.value.userRole !== 'guest') newComment.commenterEmail = user.value.email
  if (!props.isReply) newComment.reply = []
  if (user.value.userRole === 'guest') store.dispatch('setGuestEmail', form.email)
  emits('sendReview', newComment as Commentators)

  for (let i in form) {
    if (i !== 'errors') form[i] = ''
  }
}

watch(() => form.email, cleareError(inputEmail, 'email'))
watch(() => form.name, cleareError(inputName, 'name'))
watch(() => form.textArea, cleareError(textArea, 'textArea'))

</script>

<template>
  <div id="leave-review" class="leave-review">
    <h3 class="tab-title title-border mb-30">{{ isTitleBlock }}</h3>
    <div class="reply-box">
      <form>
        <div class="row">
          <div class="col-md-6 position-relative">
            <span class="warn-span">{{ form.errors.name }}</span>
            <input
                type="text"
                placeholder="Your name here..."
                name="name"
                :class="form.errors.name ? 'input-error' : ''"
                v-model="form.name"
                ref="inputName"
            >
          </div>
          <div class="col-md-6 position-relative">
            <span class="warn-span">{{ form.errors.email }}</span>
            <input
                type="text"
                ref="inputEmail"
                placeholder="Your email here..."
                :class="form.errors.email ? 'input-error' : ''"
                name="email"
                v-model="form.email"
            >
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 position-relative">
            <span class="warn-span">{{ form.errors.textArea }}</span>
            <textarea
                class="custom-textarea"
                name="message"
                ref="textArea"
                :class="form.errors.textArea ? 'input-error' : ''"
                placeholder="Your review here..."
                v-model="form.textArea"
            ></textarea>
            <button
                class="button-one submit-button mt-20"
                @click.prevent="sendReview"
            >submit review
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}

textarea {
  margin-top: 10px;
}

.col-md-6 > span {
  top: -18px;
}

.col-md-12 > span {
  top: -10px;
}

.warn-span {
  position: absolute;
  color: #c87065;
}

.input-error {
  border: 1px solid #c87065;
}
</style>