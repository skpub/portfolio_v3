import MaxWidth from '../maxWidth';

export default function SkillsPage() {
  return (
    <MaxWidth>
      <h1>できること</h1>

      <div className="box_container">
        <h2>使える言語・フレームワーク</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>Go</span></div><div className="table-cell"><span>Goa v3, gin(API設計と実装), golang-jwt(APIのJWT認証・認可), sqlc</span></div></div>
          <div className="table-row"><div className="table-cell"><span>Python</span></div><div className="table-cell"><span>Flask(API設計と実装)</span></div></div>
          <div className="table-row"><div className="table-cell"><span>Java</span></div><div className="table-cell"><span>マイクラJEのPaperサーバプラグイン開発が多少出来る。Webのバックエンドとして何かフレームワークを使った経験は無いが、crontabの設定ファイルを解釈するライブラリや差分バックアップライブラリなどを作ったことがある。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>JS/TS</span></div><div className="table-cell"><span>React, SvelteKit</span></div></div>
          <div className="table-row"><div className="table-cell"><span>SQL</span></div><div className="table-cell"><span>正規化や外部キー云々など、基本的な事はわかる。</span></div></div>
          <div className="table-row"><div className="table-cell"><span /></div><div className="table-cell"><span /></div></div>
        </div>
      </div>

      <div className="box_container">
        <h2>業務で使えるかどうかは別として、趣味や授業で使ったことがある言語</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>Rust</span></div><div className="table-cell"><span>仕様がリッチでありつつ現実的で良いと思うんだ。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>Haskell</span></div><div className="table-cell"><span>私は良いと思うんだ。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>C/C++</span></div><div className="table-cell"><span>を使うくらいならRustを使いたい。Cはまぁ好き。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>C#</span></div><div className="table-cell"><span>高専でフォームアプリケーションを作らされた。</span></div></div>
        </div>
      </div>

      <div className="box_container">
        <h2>ドキュメント関係</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>Markdown</span></div><div className="table-cell"><span>流石によく書く</span></div></div>
          <div className="table-row"><div className="table-cell"><span>TeX</span></div><div className="table-cell"><span>高専&数学科&大学院でよく書いてい(た|る)</span></div></div>
        </div>
      </div>

      <div className="box_container">
        <h2>使っている開発支援ツール・開発環境</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>Git</span></div><div className="table-cell"><span>流石によく使う。GitHubも流石によく使う。GitHub Webhooks経由でCI/CDなどはよくやる。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>VSCode</span></div><div className="table-cell"><span>メインのエディタ。ただしVim拡張を入れないと使えない。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>IntelliJ IDEA</span></div><div className="table-cell"><span>Javaは基本これで書く。ただしVim拡張を入れないと使えない。</span></div></div>
        </div>
      </div>

      <div className="box_container">
        <h2>使っているインフラ・仮想化・デプロイ関係の技術やソフトウェア</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>Docker</span></div><div className="table-cell"><span>マイグレーションやデプロイに使う。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>Proxmox VE</span></div><div className="table-cell"><span>自宅サーバのハイパバイザとして使っている。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>Jenkins</span></div><div className="table-cell"><span>CI/CDに使っている。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>nginx</span></div><div className="table-cell"><span>静的サイトのホストはもちろん、リバプロとしても結構使っている。</span></div></div>
        </div>
      </div>

      <div className="box_container">
        <h2>システム関係</h2>
        <div className="table"><div className="table-row"><div className="table-cell"><span>OS</span></div><div className="table-cell"><span>Arch Linux, CentOS Stream, Ubuntuなどをよく使う。特にCentOS Streamは現在自宅サーバでこのポートフォリオとマイクラサーバをホストするのに使っている。</span></div></div></div>
      </div>

      <div className="box_container">
        <h2>ネットワーク関係</h2>
        <div className="table">
          <div className="table-row"><div className="table-cell"><span>ルータ</span></div><div className="table-cell"><span>YAMAHA RTXルータを設定できる。具体的には、ポートフォワーディングの設定をしたり公開サービス用にDMZを構築したり、DDNSの設定をしたり出来る。</span></div></div>
          <div className="table-row"><div className="table-cell"><span>SSH</span></div><div className="table-cell"><span>遠隔で自宅サーバにログインするのはもちろん、SSHポートフォワーディングによって外部からルータ管理画面への疎通を確立するなどの基本的な使い方が出来る。</span></div></div>
        </div>
      </div>
    </MaxWidth>
  );
}
