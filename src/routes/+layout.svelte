<script lang="ts">
import { onMount } from "svelte";
import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import bag from "$lib/assets/bag.svg";
import build from "$lib/assets/build.svg";
import hobby from "$lib/assets/hobby.svg";
import moon from "$lib/assets/moon.svg";
import prof from "$lib/assets/prof.svg";
import server from "$lib/assets/server.svg";
import sun from "$lib/assets/sun.svg";
import works from "$lib/assets/works.svg";

const isDarkMode = writable(false);

function toggleMode() {
	isDarkMode.update((v) => !v);
}

onMount(() => {
  const mediaDark = window.matchMedia("(prefers-color-scheme: dark");
  isDarkMode.set(mediaDark.matches)
	isDarkMode.subscribe((v) => {
		if (v) {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
		}
	});

  const listener = (_: MediaQueryListEvent) => {
    isDarkMode.set(mediaDark.matches)
  }

  mediaDark.addEventListener("change", listener)

  return () => {
    mediaDark.removeEventListener("change", listener)
  }
});

const tabs = [
	{ id: "/", title: "プロフィール", icon: prof },
	{ id: "/career", title: "経歴", icon: bag },
	{ id: "/hobby", title: "趣味", icon: hobby },
	{ id: "/works", title: "成果物", icon: works },
	{ id: "/skills", title: "できること", icon: build },
	{ id: "/server", title: "自宅サーバ", icon: server },
];
</script>

<div id="main">
  <div id="tab_container">
    {#each tabs as tab}
      {#if tab.id === $page.url.pathname}
        <button id="selected" class="tab">
          <div style='mask-image: url("{tab.icon}")'></div>
          <p>{tab.title}</p>
        </button>
      {:else}
        <button class="tab-shadow tab clickable" on:click={() => goto(tab.id)}>
          <div style='mask-image: url("{tab.icon}")'></div>
          <p>{tab.title}</p>
        </button>
      {/if}
    {/each}
    <div id="tab_padding" class="tab-shadow"></div>
  </div>
  <div id="slot_container">
    <slot />
  </div>
</div>

<style>
  :global(body) {
    background-color: var(--background);
    * {
      font-family: var(--gothic_noto);
    }
    margin: 0;
  }
  :global(.clickable) {
    cursor: pointer;
  }
  :global(h1, h2, h3) {
    font-family: var(--letter1);
  }
  :global(p, span) {
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
  :global(button) {
    border: none;
    background: none;
  }
  :global(.foreground3) {
    color: var(--foreground3);
    font-weight: bold;
  }
  :global(.table) {
    display: table;
  }

  :global(.table-row) {
    display: table-row;
    width: max-content;
  }
  :global(.table-cell:nth-child(1)) {
    padding-right: 24px;
  }

  :global(.table-cell) {
    display: table-cell;
  }
  :global(.box_container) {
    margin: 24px;
    padding: 24px;
    border-radius: 18px;
    box-shadow: 4px 4px 4px var(--shadow),
        -4px -4px 4px var(--light);
  }
  :global(.box_container > h2) {
    margin-top: 0;
  }

  :root {
    color: var(--foreground);
    --gothic1: "Zen Maru Gothic";
    --gothic2: "BIZ UDGothic";
    --gothic_noto: "Noto Sans JP";
    --letter1: "Zen Kurenaido";
    color-scheme: light dark;
    --light_light: hsl(0, 0%, 100%, 70%);
    --light_shadow: hsl(0, 0%, 0%, 4%);
    --dark_light: hsl(0, 0%, 100%, 10%);
    --dark_shadow: hsl(0, 0%, 0%, 20%);
  }
  :root.dark {
    --background:   hsl(256, 39%, 15%);
    --foreground:   hsl(0, 0%, 100%);
    --foreground2:  hsl(324, 65%, 59%);
    --foreground3:  hsl(240, 67%, 69%);
    --shadow: var(--dark_shadow);
    --light: var(--dark_light);
  }
  :root.light {
    --background:   hsl(26, 41%, 95%);
    --foreground:   hsl(23, 16%, 22%);
    --foreground2:  hsl(324, 85%, 41%);
    --foreground3:  hsl(208, 63%, 37%);
    --shadow: var(--light_shadow);
    --light: var(--light_light);
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
      background: gray;
      mask-repeat: no-repeat;
      mask-size: cover;
      margin: 8px;
      width: 20px;
      height: 20px;
    }
  }

  .tab-shadow {
    background: linear-gradient(270deg, var(--shadow), var(--background) 24px);
  }

  #tab_container {
    position: sticky;
    top: 0;
    left: 0;
    height: 100dvh;
    min-width: max-content;
    display: flex;
    flex-flow: column;
    margin-right: 24px;
    p {
      margin-top: 0;
      margin-bottom: 0;
      padding: 12px;
    }
  }

  #selected {
    box-sizing: border-box;
    background: var(--background);
    filter: drop-shadow(0px 24px 24px var(--shadow))
            drop-shadow(0px -24px 24px var(--shadow));
    clip-path: inset(-24px 0 -24px 0);
    border: none;
    border-left: solid 6px var(--foreground2);
  }

  #main {
    display: flex;
  }

  #slot_container {
    flex-grow: 1;
  }

  @media screen and (max-width: 1200px) {
    .tab:not(#selected) {
      p {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1520px) and (min-width: 1200px) {
    .tab {
      flex: 1;
      width: 160px;
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
      p {
        font-size: 16px;
      }
    }
    .tab-shadow {
      background: linear-gradient(0deg, var(--shadow), var(--background) 24px);
    }
    #selected {
      border-right: none;
      box-sizing: border-box;
      background: var(--background);
      filter: drop-shadow(24px 0 24px var(--shadow))
              drop-shadow(-24px 0 24px var(--shadow));
      clip-path: inset(0 -24px 0 -20px);
      border: none;
      border-top: solid 2px var(--foreground2);
    }
  }
  @media screen and (max-width: 700px) {
    #tab_container {
      height: 32px;
    }
    .tab {
      div {
        margin: 5px;
      }
    }
    :global(.margin24) {
      margin: 14px;
    }
    :global(.box_container) {
      margin-left: 0;
      margin-right: 0;
      padding: 12px;
      border-radius: 8px;
    }
  }
  @media screen and (min-width: 1520px) {
    #slot_container {
      margin-right: 24px;
    }
    .tab {
      p {
        margin-right: 10px;
      }
    }
  }

</style>
