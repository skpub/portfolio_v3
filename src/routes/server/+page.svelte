<script>
import homeNW from "$lib/assets/homeNW.svg";
import router from "$lib/assets/router.webp";
import server from "$lib/assets/server.webp";
import MaxWidth from "../../components/maxWidth.svelte";
</script>

<MaxWidth>
  <h1>自宅サーバ</h1>
  <p class="margin24">
    {`自宅ネットワーク・自宅サーバの構成は以下の通りである。`
    + `自宅サーバにホストされているサービスはこのポートフォリオとマイクラサーバとインモラル大学公式サイト。`
    + `基本的な構成として、Yamaha RTX1210とnginxが頑張っている。`
    + `RTX1210にWAN(lan2), LAN(vlan1.1), DMZ(vlan1.2) 開発環境(lan3)`
    + `のセグメントを作らせてルーティングし、DMZにいるメインVM(CentOS Stream 9)内ではnginxが頑張る。`
    + `また、外からはDMZだけにアクセス出来るようにNAT・フィルタを設定している`
    + `(仮にDMZに侵入されたとして、SSHポートフォワーディング等によって`
    + `LANやProxmox VEの管理画面に侵入されることはないようにしている)。`
    + `なお、名言APIと短歌共有サービスも生やしていたがなんか死んだ。`}
  </p>

  <div id="gallery">
    <img src={homeNW} alt="自宅ネットワーク構成図" loading="lazy" decoding="async">
    <img src={server} alt="自宅サーバ構成図" loading="lazy" decoding="async">
    <img src={router} alt="ルータ設定の図" loading="lazy" decoding="async">
  </div>
</MaxWidth>

<style>
  #gallery {
    img {
      max-width: min(400px, 100%);
    }
  }
</style>
