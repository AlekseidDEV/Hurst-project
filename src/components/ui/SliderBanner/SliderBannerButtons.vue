<script setup lang="ts">

</script>

<template>
  <!-- Sidebar-social-media start -->
  <div class="sidebar-account d-none d-md-block">
    <div class="table">
      <div class="table-cell">
        <ul>
          <li><a class="search-open" href="#" title="Search"><i class="bi bi-search"></i></a></li>
          <li><a href="#" title="Login"><i class="bi bi-lock-fill"></i></a>
            <div class="customer-login text-left">
              <form action="#">
                <h4 class="title-1 title-border text-uppercase mb-30">Registered customers</h4>
                <p class="text-gray">If you have an account with us, Please login!</p>
                <input type="text" name="email" placeholder="Email here..." autocomplete="off">
                <input type="password" placeholder="Password">
                <p><a class="text-gray" href="#">Forget your password?</a></p>
                <button class="button-one submit-button mt-15" data-text="login" type="submit">login</button>
              </form>
            </div>
          </li>
          <li><a href="my-account.html" title="My-Account"><i class="bi bi-person-fill"></i></a></li>
          <li><a href="wishlist.html" title="Wishlist"><i class="bi bi-heart-fill"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Sidebar-social-media start -->
</template>

<style scoped>

</style>