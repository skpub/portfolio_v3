<script lang="ts">
  let phrase: { [title: string]: string} = {}
  phrase["東雲テーマパーク"] = "https://youtube.com/embed/u4hQbN3U0Hc"
  phrase["迷い"] = "https://youtube.com/embed/k4xrZWkzIMg"
  phrase["路地裏"] = "https://youtube.com/embed/KjnWLtsaxyM"
  phrase["INDIGO"] = "https://youtube.com/embed/ymXU4PpIa8g"
  phrase["いけ好かないあなたのために"] = "https://youtube.com/embed/kFOXsmXD_hA"
  phrase["好きな和音(エレキ蒙々の一部分)"] = "https://youtube.com/embed/21rykNJ8nz0"

  let selected = "NULL"

  let music: { [title: string]: string} = {}
  music["エレキ蒙々"] = "https://www.youtube.com/embed/gDURlNFDclA"

  let short = true

  function select(title: string, isShort: boolean) {
    selected = title
    short = isShort
  }
</script>

<h1>趣味</h1>

<h2>作曲</h2>
<h3>ちょっとしたフレーズたち</h3>

{#if selected !== "NULL"}
  <div id="player" on:click={() => select("NULL", true)}>
    <iframe src={short ? phrase[selected]: music[selected]} title={selected}
      class={short ? "short": "yoko"}
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p style="color: var(--foreground3);">プレイヤーの外側をタップすると戻るよ</p>
  </div>
{/if}
<div id="phrase">
  {#each Object.entries(phrase) as [title, link]}
    {#if selected === title}
      <p id="selected_phrase">▶ {title}</p>
    {:else}
      <p on:click={() => select(title, true)}>{title}</p>
    {/if}
  {/each}
</div>

<h3>割と真面目な曲</h3>
<div id="phrase">
  {#each Object.entries(music) as [title, link]}
    {#if selected === title}
      <p id="selected_phrase">▶ {title}</p>
    {:else}
      <p on:click={() => select(title, false)}>{title}</p>
    {/if}
  {/each}
</div>


<style>
  #player {
    backdrop-filter: blur(2px);
    position: absolute;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-aspect-ratio: 9/16) {
    .short {
      height: 80dvh;
      width: calc(80dvh * 9 / 16);
    }
  }
  @media (max-aspect-ratio: 9/16) {
    .short {
      width: 80dvw;
      height: calc(80dvw * 16 / 9);
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .yoko {
      width: 80dvw;
      height: calc(80dvw * 9 / 16);
    }
  }
  @media (min-aspect-ratio: 16/9) {
    .yoko {
      height: 80dvh;
      width: calc(80dvh * 16 / 9);
    }
  }
  #phrase {
    p {
      width: max-content;
      margin: 8px;
      margin-left: 12px;
    }
    p:not(#selected_phrase) {
      color: var(--foreground2);
      margin-left: 24px;
    }
    #selected_phrase {
      color: var(--foreground);
      font-weight: bold;
    }
  }
</style>

