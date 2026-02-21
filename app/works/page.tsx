'use client';

import MaxWidth from '../maxWidth';

type Product = { name: string; img: string; summary: string; description: string; link: string; lang: string; tech: string };

const products: Product[] = [
  {
    name: 'インモラル大学Webサービス',
    img: '/assets/imu.webp',
    summary: 'インモラル大学のWebサービス',
    description: 'インモラル大学の情報管理に必要になった(マイクラサーバなど)。職場で使うGoaに慣れておきたかった。友人に業務では通じないと指摘されたコードの保守性の低さをこの際Layered Architectureを取り入れる(モノにする)ことで改めておきたかった。',
    link: 'IMUweb',
    lang: 'TS, Go, SQL',
    tech: 'SvelteKit, Goa, sqlc, JWT Auth, PostgreSQL, MinIO, Docker, nginx(リバプロ)',
  },
  { name: 'meigens-api / Tankas', img: '/assets/meigens.webp', summary: '名言管理API / 短歌共有アプリ', description: '高専教員が発する名言を管理するために考案されたのが名言API。高専1年次に私によってC++で開発されFlaskでAPI化されたものが初代。以降私や友人によってバカみたいに色々な亜種が開発されている。このmeigen"s"-APIは名言管理をグループごとに出来るように拡張されている。「これ、短歌共有アプリに応用できるんじゃね？」と思い、Svelteでフロントも作った。認証は5分でexpireするJWTの発行でステートレスにやっている。トークンリフレッシュ時にトークン検証のみを行うことでDBアクセスを減らす工夫をしている。インフラもフロントもバックエンドも何もかも全部自分一人で作ったプロジェクトとしてはこれが初めてで、だいぶコードが汚く不安定である。ちなみに友人が開発したDiscord API対応の亜種もある。自宅サーバでホストしていたが、死んだ。放置している。作る気力はないが、もっとちゃんとしたアーキテクチャのものを作り直したいなぁとは思っている。', link: 'tankas', lang: 'Go, SQL, TS', tech: 'SvelteKit, Gin, JWT Auth, PostgreSQL, WebSocket, Docker, nginx(リバプロ)' },
  { name: 'SeriesSynth', img: '/assets/seriessynth.webp', summary: '倍音成分の量を指定するオシレータを備えたシンセサイザ', description: '普通のシンセサイザは、サイン波・三角波・矩形波・ノコギリ波などの基本的な波形を指定するだけのオシレータを備えているものが殆どである。それに対してこのシンセサイザは、それぞれの倍音成分の強さをUIで指定して、それによって波形を生成するオシレータを備えている。元々オシレータだけを作っていたが、友人にADSRを実装しろと脅されたので、実装した。どうせなのでついでにAHDSRにしておいた。GitHub Actions を用いて、タグが付いた時に自動でリリースされる。VST3とClapで公開している。', link: 'SeriesSynth', lang: 'Rust', tech: 'nih-plug(VST3, Clap, MIDI), GitHub Actions (CI/CD)' },
  { name: 'ポートフォリオv3', img: '/assets/portfolio_v3.webp', summary: 'このページ', description: 'なんか書き直したくなって書き直した。Svelteを初めて使ったのがこのポートフォリオ。糖衣構文としてReactよりSvelteの方が合理的に思えたのでSvelteに移行した。ちょっとパワーアップして、私が作った曲を聴けるようになっている。それから、静的コンテンツなのでSSGを使うようになった(今更？)。あと、毎回手動でデプロイしているのが意味不明なので、Jenkinsを使ってCI/CDするようにした。Jenkinsの鯖も自宅Proxmox VEのVMで立て、Yamaha RTXで作ったDMZ上に置いてそいつにnatしている', link: 'portfolio_v3', lang: 'TS', tech: 'Svelte, Jenkins(CI/CD, GitHub webhook)' },
  { name: 'kurumi-proxy', img: '/assets/kurumi-proxy.webp', summary: 'SSHをHTTPで偽装してくれる', description: '高専寮の回線はプロキシ・FWを通ることになっていて、SSHが通らない。困ったので偽装することにして、作った。使ってはいない。日本の昨今の情勢で声高に言えることではないが、ハッカー精神的なノリでこれくらいのことは許して欲しいものである。TCP/IP プログラミングの基本中の基本みたいなことをちょっとだけ学んだ。', link: 'kurumi-proxy', lang: 'Rust', tech: 'tokio' },
  { name: 'DIrBackup', img: '/assets/dirbackup.webp', summary: '差分バックアップしてくれる', description: 'マイクラサーバのバックアップをフルバックアップでやるのはちょっと無駄が多いかなと思い、練習がてら実装した。ただチャンクのデータファイルを解析しないと本当の意味での差分バックアップは出来ないと知り、無用の長物となっている。', link: 'DIrBackup', lang: 'Java', tech: '特になし' },
  { name: 'CronParser', img: '/assets/cronparser.webp', summary: 'Crontabの設定を解釈して次の実行時刻を教えてくれる', description: 'APIという言葉の意味をよく知らない時代に作った。マイクラサーバのバックアップのために作ったが、使っていない。無用の長物。', link: 'CronParser', lang: 'Java', tech: '特になし' },
  { name: 'gl_kadai', img: '/assets/TONGKING2.webp', summary: '3DオブジェクトファイルをOpenGLで描画するやつ', description: '高専の課題で作った。↑の説明の通りである。OpenGLでオブジェクトを描画して回してくれる。', link: 'gl_kadai', lang: 'C', tech: 'OpenGL' },
  { name: 'ポートフォリオv2', img: '/assets/portfolio_v2.webp', summary: '二代目ポートフォリオ', description: '初代のデザインが終わっているので作り直した。', link: 'portfolio2', lang: 'TS', tech: 'React' },
  { name: 'ポートフォリオv1', img: '/assets/portfolio_v1.webp', summary: '初代ポートフォリオ', description: '就活用にテキトウに作った。', link: 'portfolio_sato_kaito ', lang: 'TS', tech: 'React' },
];

export default function WorksPage() {
  return (
    <MaxWidth>
      <h1>成果物</h1>
      <div id="works">
        {products.map((product) => (
          <div className="work clickable box_container" key={product.name} onClick={() => window.open(`https://github.com/skpub/${product.link}`, '_blank')}>
            <div className="work-img"><img src={product.img} alt="" /></div>
            <div className="work-info">
              <h2>{product.name}</h2>
              <p className="summary">{product.summary}</p>
              <p>背景・内容: {product.description}</p>
              <p>言語: {product.lang}</p>
              <p>使用技術: {product.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidth>
  );
}
