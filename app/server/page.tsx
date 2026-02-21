import Image from 'next/image';

export default function ServerPage() {
  return (
    <section>
      <h1>自宅サーバ</h1>
      <p>
        Yamaha RTX1210 と nginx を中心に、WAN/LAN/DMZを分離した構成で自宅サーバを運用しています。
      </p>
      <div className="gallery">
        <Image src="/assets/homeNW.svg" alt="home network" width={700} height={420} />
        <Image src="/assets/server.webp" alt="server" width={500} height={350} />
        <Image src="/assets/router.webp" alt="router" width={500} height={350} />
      </div>
    </section>
  );
}
