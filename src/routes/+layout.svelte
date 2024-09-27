<script lang="ts">
  import { writable } from "svelte/store"
  import { onMount } from "svelte"
  import sun from "$lib/assets/sun.svg"
  import moon from "$lib/assets/moon.svg"
  import face from "$lib/assets/face2.jpg"
  import bag from "$lib/assets/bag.svg"
  import hobby from "$lib/assets/hobby.svg"
  import prof from "$lib/assets/prof.svg"
  import { page } from "$app/stores";
    import { goto } from "$app/navigation";


  let isDarkMode = writable(false)

  function toggleMode() {
    isDarkMode.update(v => !v)
  }

  onMount(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      isDarkMode.update(v => true)
    }
    isDarkMode.subscribe(v => {
      if (v) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
    })
  })

  const tabs = [
    {id: "/", title: "プロフィール", icon: prof},
    {id: "/career", title: "経歴", icon: bag},
    {id: "/hobby", title: "趣味", icon: hobby}
  ]

</script>

<div id="header" on:click={toggleMode}>
  {#if $isDarkMode}
    <div style="mask-image: url({moon});"></div>
  {:else}
    <div style="mask-image: url({sun});"></div>
  {/if}
</div>
<div id="main">
  <div id="tab_container">
    {#each tabs as tab}
      {#if tab.id === $page.url.pathname}
        <div id="selected" class="tab">
          <div style="mask-image: url({tab.icon})"></div>
          <p>{tab.title}</p>
        </div>
      {:else}
        <div class="tab-shadow tab" on:click={goto(tab.id)}>
          <div style="mask-image: url({tab.icon})"></div>
          <p>{tab.title}</p>
        </div>
      {/if}
    {/each}
    <div id="tab_padding" class="tab-shadow"></div>
  </div>
  <div id="slot_container">
    <slot />
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&family=Zen+Kurenaido&display=swap');

  :global(body) {
    background-color: var(--background);
    * {
      font-family: var(--gothic1);
    }
    margin: 0;
  }
  :global(h1) {
    font-family: var(--gothic2);
  }
  :global(p) {
    font-size: 18px;
  }
  :global(.margin24) {
    margin: 24px;
  }
  :global(.padding24) {
    padding: 24px;
  }
  :global(a) {
    text-decoration: none;
    color: var(--foreground2);
  }
  :root {
    color: var(--foreground);
    --gothic1: "Zen Maru Gothic";
    --gothic2: "BIZ UDGothic";
    --letter1: "Zen Kurenaido";
    color-scheme: light dark;
  }
  :root.dark {
    --background:   #302e2a;
    --foreground:   #fff;
    --foreground2:  #ffa3da;
    --shadow:       #2b2926;
  }
  :root.light {
    --background:   #faf6f3;
    --foreground:   #305aaf;
    --foreground2:  #c0107a;
    --shadow:       #dddbd9;
  }

  #header {
    display: flex;
    justify-content: end;
    position: absolute;
    right: 0;
    height: 48px;
    div {
      margin: 8px;
      background-color: var(--foreground);
      height: 32px;
      width: 32px;
    }
    div:hover {
      background: var(--foreground2);
    }
  }

  #tab_padding {
    flex: 1;
  }

  .tab:not(#selected):hover {
    color: var(--foreground2);
    div {
      background: var(--foreground2);
    }
  }
  .tab {
    display: flex;
    align-items: center;
    div {
      background: var(--foreground);
      mask-repeat: no-repeat;
      mask-size: cover;
      margin: 8px;
      width: 32px;
      height: 32px;
    }
  }

  .tab-shadow {
    background: linear-gradient(270deg, var(--shadow), color-mix(in srgb, var(--background) 95%, black 5%) 24px);
  }

  #tab_container {
    height: 100dvh;
    display: flex;
    flex-flow: column;
    margin-right: 24px;
    p {
      margin-top: 0;
      margin-bottom: 0;
      padding: 12px;
    }
    a {
      color: var(--foreground)
    }
    a:hover {
      color: var(--foreground2)
    }
  }

  #selected {
    border-bottom: 2px solid var(--foreground2);
    box-sizing: border-box;
    background: var(--background);
  }

  #main {
    display: flex;
  }

  #slot_container {
    z-index: -1;
    flex-grow: 1;
  }

  @media screen and (max-width: 1000px) {
    .tab:not(#selected) {
      p {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1520px) and (min-width: 1000px) {
    .tab {
      flex: 1;
      max-width: 200px;
    }
  }

  @media screen and (max-width: 1520px) {
    #slot_container {
      margin-left: 24px;
      margin-right: 24px;
    }
    #main {
      flex-flow: column;
    }
    #tab_container {
      height: 48px;
      width: 100dvw;
      flex-flow: row;
    }
    .tab-shadow {
      background: linear-gradient(0deg, var(--shadow), color-mix(in srgb, var(--background) 90%, black 10%) 24px);
    }
    #selected{
      border-right: none;
      box-sizing: border-box;
      background: var(--background);
    }
  }
  @media screen and (min-width: 1520px) {
    .tab {
      p {
        margin-right: 10px;
      }
    }
  }

</style>
