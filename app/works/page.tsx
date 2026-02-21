import Image from 'next/image';

const works = [
  { title: 'Portfolio v3', img: '/assets/portfolio_v3.webp' },
  { title: 'Portfolio v2', img: '/assets/portfolio_v2.webp' },
  { title: 'Portfolio v1', img: '/assets/portfolio_v1.webp' },
  { title: 'Kurumi Proxy', img: '/assets/kurumi-proxy.webp' },
  { title: 'Cron Parser', img: '/assets/cronparser.webp' },
  { title: 'IMU Visualizer', img: '/assets/imu.webp' },
];

export default function WorksPage() {
  return (
    <section>
      <h1>成果物</h1>
      <div className="gallery">
        {works.map((work) => (
          <figure key={work.title} className="card">
            <Image src={work.img} alt={work.title} width={480} height={270} />
            <figcaption>{work.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
