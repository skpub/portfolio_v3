<script lang="ts">
  let phrase: { [title: string]: string} = {}
  phrase["インモラル大学校歌"] = "https://youtube.com/embed/OEq7Ttl6DIY?feature=share"
  phrase["東雲テーマパーク"] = "https://youtube.com/embed/u4hQbN3U0Hc?feature=share"
  phrase["迷い"] = "https://youtube.com/embed/k4xrZWkzIMg?feature=share"
  phrase["路地裏"] = "https://youtube.com/embed/0A2QDUX75uU?feature=share"
  phrase["INDIGO"] = "https://youtube.com/embed/ymXU4PpIa8g?feature=share"
  phrase["いけ好かないあなたのために"] = "https://youtube.com/embed/kFOXsmXD_hA?feature=share"
  phrase["好きな和音(エレキ蒙々の一部分)"] = "https://youtube.com/embed/21rykNJ8nz0?feature=share"
  phrase["焦燥"] = "https://youtube.com/embed/ZS3uZBwqqVk?feature=share"

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

<div class="box_container">
  <h2>作曲</h2>
  <h3>ちょっとしたフレーズたち</h3>

  {#if selected !== "NULL"}
    <div id="player" class="clickable" on:click={() => select("NULL", true)}>
      <iframe src={short ? phrase[selected]: music[selected]} title={selected}
        class={short ? "short": "yoko"}
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p style="color: var(--foreground3);font-weight: bold;">プレイヤーの外側をタップすると戻るよ</p>
    </div>
  {/if}
  <div id="phrase">
    {#each Object.entries(phrase) as [title, link]}
      {#if selected === title}
        <p id="selected_phrase">▶ {title}</p>
      {:else}
        <p class="clickable" on:click={() => select(title, true)}>{title}</p>
      {/if}
    {/each}
  </div>

  <h3>割と真面目な曲</h3>
  <div id="phrase">
    {#each Object.entries(music) as [title, link]}
      {#if selected === title}
        <p id="selected_phrase">▶ {title}</p>
      {:else}
        <p class="clickable" on:click={() => select(title, false)}>{title}</p>
      {/if}
    {/each}
  </div>

  <h3>音楽の趣味</h3>
  <div class="margin24">
    <p>{`YMO, Queen, シティポップ大好き人間。
      最近の若者らしく?サブスクのストリーミングサービスで色々聴いてみて好きならリピートするという感じである。
      とりあえず好きなものを雑に列挙していこう。`}</p>
    <p>{`ちょっと古いやつ: 俺ら東京さ行ぐだ, 東風, energy flow, 戦場のメリークリスマス, PERSPECTIVE, THE END OF ASIA, 君に胸キュン。,
      riot in Lagos, 異邦人, メトロポリタン美術館, フライディ・チャイナタウン, アクアマリンのままでいて, Dazzling(CASIOPEA), THE SOUNDGRAPHY,
      君がいるだけで, ラブ・ストーリーは突然に, PLASTIC LOVE, くすりをたくさん, かもめが翔んだ日,
      クリスマスキャロルの頃には, 夏のクラクション, イージュー☆ライダー(土岐麻子) 初恋(村下孝蔵), BOMBER, Good Old-Fashioned Lover Boy, Killer Queen,
      Another One Bites the Dust, Somebody To love, Don't Stop Me Now, Bohemian Rhapsody,
      We Will Rock You, We are the Champions, Radio Ga Ga, 炎のさだめ, 宝島`}</p>

    <p>{`最近?のやつ: はいよろこんで, Dumb Ways to Die, 電脳眠眠猫, Deep Down - Never Dull's In My Mind Edit,
      クーネル・エンゲイザー, 暮らしガスメーター, おくすり飲んで寝よう, 下がるガール, 忘れられないの, 目が明く藍色,
      スローモーション, ロックンロールは鳴り止まない, I'am - 報道ステーション テーマ曲, 可愛くてごめん,
      明日はきっとみんな友達(Falcom Sound Team jdk), 生きてる生きてく, 君はマザーファッカー, バラライカ,
      PUNCH☆MIND☆HAPPINESS, ミッドナイトシアター, アイガッテ☆ランテ, ワタシ*ドリ, ココロのちず, 全力少年,
      セーラ☆ムン太郎, 持たざる者, 8ビットボーイ, TOKYO通信～Urbs Communication～, Gangnam Style,
      時の回廊, 風の憧憬, 夢想歌, Rude Buster(Toby Fox), 僕らの合言葉, SUSHI食べたい, コネクト
    `}</p>
  </div>
</div>

<div class="box_container">
  <h2>猫</h2>
  <div class="margin24">
    <p>{`基本的に全ての猫が好きだ。その中でも特に何が好きかと聞かれれば、
      日本のそのへんにいるよく分からない模様の猫さんが本当に好きだと答える。
    `}</p>
  </div>
</div>

<div class="box_container">
  <h2>紅茶</h2>
  <div class="margin24">
  <p>{`特別どれでないとダメというのはなく、気分や状況(合わせる食事)次第で色々飲む。ただ商品は選ぶ。
    誕生日になると毎年のように友人等がキロ単位で茶葉を送りつけてくる。
    本当にありがたい。`}
  </p>
    <p><span class="foreground3">ダージリン</span>{`ならマカイバリ茶園か、次点でFOUCHON.
      マカイバリ茶園は有機栽培を謳っているが、私としては正直化学肥料だろうが何だろうがどうでも良い。
      ただ単に美味しいので飲んでいる。色々飲んでいるが、正直この茶園の代理店から出ているものより美味しいやつを知らない。
      基本単体で飲む。ダージリンは本当にものによって風味が違いすぎるので、甘いものに合うかというと一概にそうでもない。
      悪く言えば青臭いような香りがかなり強いので(摘み取りの時期によって変わるが)、合わせるものを台無しにすることもあれば、
      合うこともあれば、まぁ色々である。高級ぶっているものでも多くは青臭いだけで美味しくないので、
      是非マカイバリ茶園のものかFOUCHON(できれば前者)を試してみて欲しい。`}</p>
    <p><span class="foreground3">ウバ</span>{`は Sir Thomas LIPTON (Quality Uva)しか知らんが、
      これはちゃんとメンソール香があって結構美味しい。
      ただし軟水(新潟市の水道水)で淹れるとかなり渋い。
      単体で飲むのも良いし、肉料理などと合わせるのも良い(さっぱりしているので)。
      地味にミルクティーにしても美味しい。基本的に毎日骨太で淹れるのだが、
      濃厚な骨太(ホネタと呼んでいる)と合わせても負けないので良い。`}
    </p>
    <p><span class="foreground3">ディンブラ</span>{`はこれだというのに出会っていないが、
      だいたいどこのやつもそこそこ美味しいと思う。
      どれも渋みは弱い印象。というので強い味のものと一緒に口直し的に飲むよりは、
      なんでも良いけど飲み物がほしいなという時に適当に淹れれば良さそうである。`}</p>
    <p><span class="foreground3">アッサム</span>{`の話をする前に茶葉のグレードの話をしないといけない。グレード(等級)というのは良し悪しではなく、
      茶葉のどの部分をどう処理しているかということである。アッサムは殆ど潰して伸ばして丸める製法(頭文字でCTC)
      のグレードのものが流通している。一部OPなりBOPなり(雑に言えば普通の葉っぱのことである)
      も流通しているが、私はCTCの安いやつしか飲んだことがないのでよく知っているとは言えない。それに限って言えば、
      はちみつみたいな焦げ臭いような、特有の香りがある。ミルクティーによく使われる茶葉であり、
      生産地のインドでもスパイスとともにチャイにされてよく飲まれている。
      ストレート(私がストレートと言えば無糖ミルクなしレモンなしのことである。それ以外の解釈は絶対に認めない。)
      でも特有の風味で好きな人は好きそう。プーさんみたいな味である(は？)。
      渋みが弱い印象なので甘いものに合うかというと必ずしもそうでもない。茶葉によるとは思う。`}</p>
    <p><span class="foreground3">アールグレイ</span>{`はあんまり飲まないが、Sir Thomas LIPTON のやつ(Zesty EarlGrey)は美味しいと思う。
      基本的にLIPTONはコスパが悪く風味も良くないと思っているが、
      Zesty EarlGreyだけは例外である。ところで着香が下手なそのへんのアールグレイは噛んだあとのガムみたいな最悪な味がする。
      ほとんどの人は多分それを普通、若しくは美味しいと思って飲んでいるようで、意味が分からん。
      Sir Thomas LIPTONで良いので、試しに飲んでみて欲しい。`}</p>
    <p>他にも色々と飲んでいるが、人に自信を持って紹介できるほど種類を飲んでいるわけでもないので言及しないでおく。</p>
  </div>
</div>

<div class="box_container">
  <h2>万年筆</h2>
  <div class="margin24">
    <p>誤解を恐れずに鉛筆やシャーペンとの明確な違いを(極端に)述べておくと、<span class="foreground3">「筆圧が要らないので疲れない」</span>というのがデカい</p>
    <p>小学6年生の時に書き初めのために<span><a href="https://www.pilot.co.jp/products/pen/fountain/fountain/kakuno/">KAKUNO(Pilot)</a></span>{`を
      購入して以来万年筆大好き人間になった。
      今のメインは`}<span><a href="https://sailor.co.jp/product/11-1224/">Sailorの四季織(SHIKIORI)名月</a></span>{`と
      いうやつ。`}</p>
  </div>
</div>

<style>
  #player {
    backdrop-filter: blur(2px);
    position: fixed;
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
