<script setup>
import Card from './Card.vue'

const cards = [
  {
    id: 1,
    new: false,
    favorite: true,
    data: [
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 1,
      },
      {
        src: "../src/assets/cards/7.png",
        alt: "Card image cap",
        id: 2,
      },
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 3,
      },
      {
        src: "../src/assets/cards/8.png",
        alt: "Card image cap",
        id: 4,
      }
    ],
  }, {
    id: 2,
    new: false,
    favorite: false,
    data: [
      {
        src: "../src/assets/cards/2.png",
        alt: "Card image cap",
        id: 1,
      },
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/6.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 3,
    new: true,
    favorite: false,
    data: [
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/7.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/8.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 4,
    new: false,
    favorite: true,
    data: [
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/6.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 5,
    new: false,
    favorite: false,
    data: [
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/2.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/7.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 6,
    new: false,
    favorite: false,
    data: [
      {
        src: "../src/assets/cards/6.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/8.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/7.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 7,
    new: false,
    favorite: false,
    data: [
      {
        src: "../src/assets/cards/7.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/1.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/2.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 8,
    new: true,
    favorite: true,
    data: [
      {
        src: "../src/assets/cards/8.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "../src/assets/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "../src/assets/cards/5.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "../src/assets/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  },
]


</script>

<template>
  <div class="cards">
    <card v-for="card in cards" :key="card.id" :favorite="card.favorite" :new="card.new" :card="card.data"/>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

</style>