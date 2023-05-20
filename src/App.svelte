<script lang="ts">
  import { getColorList, randInt } from "./helper"

  let firstGuess = true
  let correctCount = 0

  let idx = randInt(2)
  let randomColors = getColorList(correctCount)

  const guessColor = (guessIdx) => {
    firstGuess = false
    if (idx === guessIdx) {
      correctCount++
    } else {
      correctCount = 0
    }

    idx = randInt(2)
    randomColors = getColorList(correctCount)
  }
</script>

<main>
  <h1>CSS Game</h1>

  <div class="color-container" style="background-color: {randomColors[idx]};" />
  <div class="button-container">
    {#each randomColors as color, i}
      <button on:click={() => guessColor(i)}>{color}</button>
    {/each}
  </div>
  {#if firstGuess}
    <p class="message">See how many you can get right!</p>
  {:else if correctCount > 0}
    <p class="message">{correctCount} in a row!</p>
  {:else}
    <p class="message">Unlucky, try again</p>
  {/if}
</main>

<style>
  .color-container {
    height: 200px;
    width: 200px;
    margin-inline: auto;
    margin-bottom: 25px;
  }

  .message {
    color: #888;
  }

  .button-container {
    display: flex;
    gap: 0.5rem;
  }
</style>
