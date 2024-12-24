<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="flex-grow-1 text-center">
      <p
        v-if="timerEnded"
        class="alert alert-danger my-1 fw-bold mx-3 py-0 text-nowrap"
      >
        Time's up!
      </p>
      <div v-else class="fw-bold fs-4 me-3 my-0">{{ formattedTime }}</div>
    </div>
    <div class="btn-group gap-1 w-100" role="group">
      <button
        class="btn btn-outline-custom fw-bold py-0"
        @click="decrementTime"
      >
        -
      </button>
      <button
        class="btn btn-outline-custom fw-bold py-0"
        @click="incrementTime"
      >
        +
      </button>
      <button class="btn btn-outline-custom fw-bold py-0" @click="resetTime">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      minutes: 0, // Minutes part of the timer
      seconds: 0, // Seconds part of the timer
      timer: null, // Reference to the setInterval timer
      timerEnded: false, // Flag to indicate if the timer has ended
      audio: new Audio(require("@/assets/alarm.mp3")), // Audio object for the alarm sound
    };
  },
  computed: {
    formattedTime() {
      // Format the time as MM:SS
      const minutes = this.minutes;
      const seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
      return `${minutes}:${seconds}`;
    },
  },
  methods: {
    startTimer() {
      // Start the countdown timer
      if (this.timer) return; // If the timer is already running, do nothing
      this.timer = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            // If both minutes and seconds are zero, stop the timer
            clearInterval(this.timer);
            this.timer = null;
            this.timerEnded = true; // Set the timerEnded flag to true
            this.audio.play(); // Play the alarm sound
            setTimeout(() => {
              this.timerEnded = false; // Reset the timerEnded flag after 3 seconds
            }, 3000);
          } else {
            // If minutes are not zero, decrement minutes and reset seconds to 59
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          // If seconds are not zero, decrement seconds
          this.seconds--;
        }
      }, 1000); // Run the interval every 1 second
    },
    incrementTime() {
      // Increment the minutes and start the timer
      this.minutes++;
      this.startTimer();
    },
    decrementTime() {
      // Decrement the minutes if greater than zero
      if (this.minutes > 0) {
        this.minutes--;
      }
    },
    resetTime() {
      // Reset the timer to 0 minutes and 0 seconds
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.timer); // Clear the interval timer
      this.timer = null;
      this.timerEnded = false; // Reset the timerEnded flag
    },
  },
};
</script>
