<script>
  import pv1 from "$lib/assets/portfolio_v1.webp"
  import pv2 from "$lib/assets/portfolio_v2.webp"
  import pv3 from "$lib/assets/portfolio_v3.webp"
  import dirbackup from "$lib/assets/dirbackup.webp"
  import cronparser from "$lib/assets/cronparser.webp"
  import gl_kadai from "$lib/assets/TONGKING2.webp"
  import meigens from "$lib/assets/meigens.webp"
  const products = [
    {name: "DIrBackup", img: dirbackup ,description: "差分バックアップしてくれる", link: "DIrBackup", lang: "Java"},
    {name: "CronParser", img: cronparser, description: "Crontabの設定を解釈して次の実行時刻を教えてくれる", link: "CronParser", lang: "Java"},
    {name: "gl_kadai", img: gl_kadai, description: "3DオブジェクトファイルをOpenGLで描画するやつ", link: "gl_kadai", lang: "C"},
    {name: "meigens-api", img: meigens, description: "名言管理API", link: "meigens-api", lang: "Go, SQL"},
    {name: "ポートフォリオv1", img: pv1, description: "初代ポートフォリオ", link: "portfolio_sato_kaito ", lang: "TS(React)"},
    {name: "ポートフォリオv2", img: pv2, description: "二代目ポートフォリオ", link: "portfolio_v2", lang: "TS(React)"},
    {name: "ポートフォリオv3", img: pv3, description: "このページ", link: "portfolio_v3", lang: "TS(Svelte)"},
  ]
</script>

<h1>成果物</h1>

<div id="works">
  {#each products as product}
    <div class="work">
      <img src={product.img} alt="">
      <h2>{product.name}</h2>
      <p class="deskription">{product.description}</p>
      <p>{product.lang}</p>
      <a href={"https://github.com/skpub/" + product.link}>GitHub</a>
    </div>
  {/each}
</div>

<style>
  #works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .work {
      display: flex;
      flex-flow: column;
      margin: 12px;
      border-radius: 18px;
      padding: 24px;
      background-color: var(--background_s);
      /* width: calc(100% / 3 - 24px - 2 * 24px); */
      max-width: 300px;
      img {
        width: 66%;
        margin: 0 auto;
      }
      .deskription {
        flex: 1;
      }
    }
  }
  @media (max-width: 790px) {
    #works {
      .work {
        width: 100%;
        max-width: none;
      }
    }
  }
</style>