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
            <div class="row mt-3">
              <div class="col">
                <button
                  class="btn btn-lg btn-primary fw-bold"
                  @click="signInWithGitHub"
                >
                  Sign In with GitHub <span class="ms-3 bi bi-github"></span>
                </button>
              </div>
            </div>
            <div class="row my-3">
              <div class="col">
                <button
                  class="btn btn-lg btn-danger fw-bold"
                  @click="signInWithGoogle"
                >
                  Sign In with Google <span class="ms-3 bi bi-google"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { mapActions } from "vuex";

export default {
  name: "AuthComponent",
  methods: {
    ...mapActions(["setUseLocalStorage"]),
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
    async signInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        console.log("Signed in with Google successfully");
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    },
  },
};
</script>
