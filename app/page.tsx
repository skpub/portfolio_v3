import Image from 'next/image';

const getAge = () => {
  const today = new Date();
  return today.getFullYear() - 2002 - (today.getMonth() < 1 || (today.getMonth() === 1 && today.getDate() < 11) ? 1 : 0);
};

export default function HomePage() {
  return (
    <section>
      <div className="profile">
        <Image src="/assets/face.webp" alt="プロフィール画像" width={220} height={220} className="face" priority />
        <div>
          <h1>佐藤 海音 | Sato Kaito</h1>
          <table>
            <tbody>
              <tr><td>生年月日</td><td>西暦2002年2月11日（{getAge()}歳）</td></tr>
              <tr><td>所属</td><td>新潟大学大学院 自然科学研究科 数理物質科学専攻 M2</td></tr>
              <tr><td>資格</td><td>応用情報技術者試験（R1年度秋）</td></tr>
              <tr><td>現住所</td><td>新潟市西区</td></tr>
              <tr><td>趣味</td><td>猫・万年筆・紅茶・作曲</td></tr>
              <tr><td>GitHub</td><td><a href="https://github.com/skpub">skpub</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
