<script lang="ts">
  import { writable } from "svelte/store"
  import { onMount } from "svelte"
  import sun from "$lib/assets/sun.svg"
  import moon from "$lib/assets/moon.svg"
    import { page } from "$app/stores";

  const isDarkMode = writable(false)

  function initMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.set(true)
    } else {
      isDarkMode.set(false)
    }

    onMount(() => {
      initMode()
      setInterval(() => {
        initMode()
      }, 1);
    })
  }

  function toggleMode() {
    isDarkMode.update(v => !v)
  }

  const tabs = [
    {id: "/", title: "プロフィール"},
    {id: "/career", title: "経歴"},
    {id: "/hobby", title: "趣味"}
  ]

</script>

<div id="header">
  {#if isDarkMode}
    <div style="mask-image: url({sun});"></div>
  {:else}
    <div style="mask-image: url({moon});"></div>
  {/if}
</div>
<div id="main">
  <div id="tab_container">
    <div id="tabs">
      {#each tabs as tab}
        {#if tab.id === $page.url.pathname}
          <p id="selected">{tab.title}</p>
        {:else}
          <a href={tab.id}><p>{tab.title}</p></a>
        {/if}
      {/each}
    </div>
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
    color: light-dark(#305aaf, #fff);
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
    --gothic1: "Zen Maru Gothic";
    --gothic2: "BIZ UDGothic";
    --letter1: "Zen Kurenaido";
    --background: light-dark(#faf6f3, #302e2a);
    --foreground: light-dark(#305aaf, #fff);
    --foreground2: light-dark(#c0107a,#ffa3da);
    color-scheme: light dark;
  }

  #header {
    display: flex;
    justify-content: end;
    position: absolute;
    right: 0;
    height: 48px;
    div {
      margin: 12px;
      background-color: var(--foreground);
      height: 40px;
      width: 40px;
    }
  }

  #tabs {
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
    /* background-color: var(--foreground); */
    /* color: var(--background) */
    border-radius: 10px;
    background: #302e2a;
    box-shadow: inset 3px 3px 5px #1b1a18,
            inset -3px -3px 5px #45423c;
  }

  #main {
    display: flex;
  }

  #slot_container {
    z-index: -1;
    flex-grow: 1;
  }
</style>
