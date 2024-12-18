<script>
import { ref, computed } from 'vue';

export default {
  name: 'Search',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const query = ref('');
    const filteredResults = computed(() =>
        query.value.trim()
            ? props.items.filter((item) =>
                item.toLowerCase().includes(query.value.toLowerCase())
            )
            : []
    );

    const onInput = () => {
      console.log('Поиск:', query.value);
    };

    const onClear = () => {
      query.value = '';
    };

    return {
      query,
      filteredResults,
      onInput,
      onClear,
    };
  },
};
</script>

<template>
  <div class="search">
    <input
        v-model="query"
        type="text"
        placeholder="Поиск..."
        class="search__input"
        @input="onInput"
    />
    <button @click="onClear" class="search__clear" v-if="query">
      ✕
    </button>
    <ul v-if="filteredResults.length" class="search__results">
      <li
          v-for="(result, index) in filteredResults"
          :key="index"
          class="search__result-item"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search {
  position: relative;
  max-width: 418px;
  width: 100%;
  height: 44px;
  margin: 0 auto;
}

.search__input {
  width: 100%;
  height: 100%;
  max-width: 418px;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
}

.search__input:focus {
  border-color:#bb8c5f
}

.search__clear {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #888;
}

.search__results {
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
}

.search__result-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.search__result-item:hover {
  background: #f0f0f0;
}
</style>
