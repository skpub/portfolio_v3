<script>
  import homeNW from "$lib/assets/homeNW.svg"
  import server from "$lib/assets/server.webp"
  import router from "$lib/assets/router.webp"
</script>

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
  <img src={homeNW} alt="">
  <img src={server} alt="">
  <img src={router} alt="">
</div>

<style>
  #gallery {
    img {
      max-width: min(400px, 100%);
    }
  }
</style>
