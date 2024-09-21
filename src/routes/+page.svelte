<script lang="ts">
  import Career from "$lib/components/career.svelte";
  import Hobby from "$lib/components/hobby.svelte";
  import bag from "$lib/assets/bag.svg";
  import hobby from "$lib/assets/hobby.svg"
  
  enum ContentType {
    Career,
    Hobby
  }
  const contents = [
    {id: ContentType.Career, icon: bag,   title: "履歴",  page: Career},
    {id: ContentType.Hobby,  icon: hobby, title: "趣味",  page: Hobby}
  ]
  let activeTabId = 0
  function selectPage(id: ContentType) {
    activeTabId = id
  }
</script>

<div id="main">
  <div id="contents_list">
    {#each contents as tab}
      {#if activeTabId === tab.id}
      <div id="tab" class="selected">
        <div id="tab_icon" style="mask-image: url({tab.icon});"></div>
        <p>{tab.title}</p>
      </div>
      {:else}
      <div id="tab" on:click={() => selectPage(tab.id)}>
        <!-- <img src={tab.icon} alt=""> -->
        <div id="tab_icon" style="mask-image: url({tab.icon});"></div>
        <p>{tab.title}</p>
      </div>
      {/if}
    {/each}
  </div>
  <div id="main_content">
    {#each contents as tab}
      {#if activeTabId === tab.id}
        <svelte:component this={tab.page} />
      {/if}
    {/each}
  </div>
</div>

<style>
  #tab_icon {
    width: 40px;
    height: 40px;
    background-color: var(--foreground);
  }
  #tab {
    width: 150px;
    height: 40px;
    padding: 6px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
  }
  #tab:hover {
    transform: translate(2px, 2px);
    backdrop-filter: brightness(90%);
  }
  .selected {
    backdrop-filter: sepia();
  }
  #contents_list {
    display: flex;
    color: var(--foreground2);
    flex-direction: column;
  }
  #main {
    display: flex;
    min-height: 100dvh;
  }
  #main_content {
    margin-left: 24px;
  }
  @media screen and (min-width: 1520px) {
    #contents_list {
      display: flex;
      border-right: 1px solid var(--foreground);
    }
  }

  @media screen and (max-width: 1520px) {
    #contents_list {
      flex-direction: row;
      border-bottom: 1px solid var(--foreground);
    }
    #main {
      flex-direction: column;
    }
    #tab {
      width: 48px;
      flex-direction: column;
    }
  }
</style>
