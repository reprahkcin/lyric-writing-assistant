<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col">
        <div class="card border border-dark shadow">
          <div class="card-header bg-dark text-light">
            <p class="text-center my-auto fw-bold">Hello, Songwriter</p>
          </div>
          <div>
            <button
              class="btn btn-lg btn-primary fw-bold my-5"
              @click="signInWithGitHub"
            >
              Sign In with GitHub <span class="ms-3 bi bi-github"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "AuthComponent",
  methods: {
    async signInWithGitHub() {
      const auth = getAuth();
      const provider = new GithubAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        console.log("Signed in with GitHub successfully");
      } catch (error) {
        console.error("Error signing in with GitHub:", error);
      }
    },
  },
};
</script>
