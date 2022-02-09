<template>
  <div
    id="container"
    class="ggender__container"
    :style="containerStyles"
  >
    <header class="ggender__header">
      <h1 class="ggender__title">Guess gender</h1>
    </header>
    <div class="ggender__options">
      <div class="ggender__option">
        <button
          @click="choose('girl')"
          class="ggender__button"
          :class="{ 'ggender__button--selected': isGirl}"
        >👧</button>
      </div>
      <div class="ggender__option">
        <button
          @click="choose('boy')"
          class="ggender__button"
          :class="{ 'ggender__button--selected': !isGirl }"
        >👦</button>
      </div>
    </div>
    {{ girlPercent }}
    {{ boyPercent }}
  </div>
</template>
<script setup>
import { ref, computed } from "vue"

const poll = ref({
  girlCount: 0,
  boyCount: 0
})

const getPercent = (a, b) => {
  if ( a + b === 0 ) return 0
  return a / (a + b)
}

const girlPercent = computed(() => {
  const value = poll.value.girlCount

  const decimal = getPercent(value, poll.value.boyCount)
  const text = `${(decimal * 100).toFixed(0)}%`
  return {
    value,
    decimal,
    text
  }
})

const boyPercent = computed(() => {
  const value = poll.value.boyCount
  const decimal = 1 - girlPercent.value.decimal
  const text = `${(decimal * 100).toFixed(0)}%`
  return {
    value,
    decimal,
    text
  }
})

const increaseMock = (gender) => {
  poll.value[gender + "Count"]++
}

const selected = ref("")

const choose = (gender) => {
  selected.value = gender
  increaseMock(gender)
}

const isGirl = computed(() => selected.value === "girl")

const containerStyles = computed(() => {
  const percent = girlPercent.value.text
  
  let background = ""
  if (poll.value.girlCount + poll.value.boyCount > 0)
    background = `linear-gradient(
      to right,
      var(--girl-color) 0 ${percent},
      var(--boy-color) ${percent} 100%
    )`
  

  return {
    background
  }
})
</script>
<style>
.ggender__container {
  background: linear-gradient(
    to right,
    var(--girl-color) 0 50%,
    var(--boy-color) 50% 100%
  );
  min-height: 100vh;
}

.ggender__header {
  background-color: var(--background-color);
  box-shadow: 0 0.1rem 1rem 0 var(--text-color);
  padding: 1rem;
}

.ggender__title {
  text-align: center;
}

.ggender__options {
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
}

.ggender__option {
  padding: 1rem;
  width: 50%;
}

.ggender__button {
  border-radius: 50%;
  border: none;
  display: block;
  font-size: 2rem;
  height: 100px;
  margin: 0 auto;
  width: 100px;
}

.ggender__button--selected {
  background: var(--background-color-alternate);
}

.ggender__button:hover,
.ggender__button:focus {
  box-shadow: 0 0.1rem 1rem 0 var(--text-color);
}
</style>
