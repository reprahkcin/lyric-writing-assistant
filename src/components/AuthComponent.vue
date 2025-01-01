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
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "AuthComponent",
  methods: {
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
