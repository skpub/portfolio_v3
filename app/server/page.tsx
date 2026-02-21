import MaxWidth from '../maxWidth';

export default function ServerPage() {
  return (
    <MaxWidth>
      <h1>自宅サーバ</h1>
      <p className="margin24">
        自宅ネットワーク・自宅サーバの構成は以下の通りである。自宅サーバにホストされているサービスはこのポートフォリオとマイクラサーバとインモラル大学公式サイト。基本的な構成として、Yamaha RTX1210とnginxが頑張っている。RTX1210にWAN(lan2), LAN(vlan1.1), DMZ(vlan1.2) 開発環境(lan3)のセグメントを作らせてルーティングし、DMZにいるメインVM(CentOS Stream 9)内ではnginxが頑張る。また、外からはDMZだけにアクセス出来るようにNAT・フィルタを設定している(仮にDMZに侵入されたとして、SSHポートフォワーディング等によってLANやProxmox VEの管理画面に侵入されることはないようにしている)。なお、名言APIと短歌共有サービスも生やしていたがなんか死んだ。
      </p>

      <div id="gallery">
        <img src="/assets/homeNW.svg" alt="" />
        <img src="/assets/server.webp" alt="" />
        <img src="/assets/router.webp" alt="" />
      </div>
    </MaxWidth>
  );
}
