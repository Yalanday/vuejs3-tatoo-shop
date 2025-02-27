// stores/counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
      console.log(this.count)
    },
    decrement() {
      this.count--;
      console.log(this.count)
    },
  },
});