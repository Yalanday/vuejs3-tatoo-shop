// stores/cartStore.js
import {defineStore} from 'pinia';
import {cards} from "../mocks/mocks.js";

export const useCartStore = defineStore('cards', {
  state: () => ({
    cards: [],
  }),
  actions: {
    setCards(cards) {
      this.cards = cards;
    },
    toggleFavorite(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (card) {
        card.favorite = !card.favorite;
      }
    },
    toggleInCart(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (card) {
        card.incart = !card.incart;
        if (card.incart) {
          card.quantitu = 1; // Устанавливаем значение quantitu, если cart.incart = true
        } else {
          card.quantitu = 0; // Устанавливаем quantitu в 0 при отключении incart
        }
      }
    },
    increaseQuantity(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (card && card.incart) {
        card.quantitu++;
      }
    },
    decreaseQuantity(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (card && card.incart && card.quantitu > 1) {
        card.quantitu--;
      }
    },
    removeFromCart(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (card) {
        card.incart = false;
        card.quantitu = 0;
      }
    },
  },
  getters: {
    favoritesCount: (state) => {
      return state.cards.filter(card => card.favorite).length;
    },
    sumInCart: (state) => {
      return state.cards.reduce((sum, card) => {
        if (card.incart) {
          return sum + (card.price * card.quantitu);
        }
        return sum;
      }, 0);
    },
    cardsInCart: (state) => {
      return Array.isArray(state.cards) ? state.cards.filter(card => card.incart) : [];
    },
    quantituCount: (state) => {
      return state.cards.reduce((sum, card) => {
        if (card.incart) {
          return sum + card.quantitu;
        }
        return sum;
      }, 0);


    },
  }
});
