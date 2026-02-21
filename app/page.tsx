import Image from 'next/image';

const today = new Date();
const age = today.getFullYear() - 2002 - (today.getMonth() <= 2 && today.getDate() < 11 ? 1 : 0);

export default function HomePage() {
  return (
    <div id="profile">
      <div id="face_container">
        <div id="face">
          <Image src="/assets/face.webp" alt="" width={200} height={200} />
        </div>
      </div>
      <div id="bio" className="margin24">
        <h1 id="name">佐藤 海音 | Sato Kaito</h1>
        <div className="table">
          <div className="table-row">
            <div className="table-cell">生年月日</div>
            <div className="table-cell">西暦2002年2月11日 ({age}歳)</div>
          </div>
          <div className="table-row">
            <div className="table-cell">所属</div>
            <div className="table-cell">新潟大学大学院自然科学研究科数理物質科学専攻 M2 (いわゆる数学科)</div>
          </div>
          <div className="table-row">
            <div className="table-cell">資格</div>
            <div className="table-cell">応用情報技術者試験(R1年度秋試験)</div>
          </div>
          <div className="table-row">
            <div className="table-cell">現住所</div>
            <div className="table-cell">新潟市西区</div>
          </div>
          <div className="table-row">
            <div className="table-cell">趣味</div>
            <div className="table-cell">猫・万年筆・紅茶・作曲</div>
          </div>
          <div className="table-row">
            <div className="table-cell">GitHub</div>
            <div className="table-cell"><a href="https://github.com/skpub">skpub</a></div>
          </div>
          <div className="table-row">
            <div className="table-cell">X</div>
            <div className="table-cell"><a href="https://x.com/OMGR_dearinsu">OMGR_dearinsu</a></div>
          </div>
          <div className="table-row">
            <div className="table-cell">Email</div>
            <div className="table-cell"><span id="mail">f24a059h☆mail.cc.niigata-u.ac.jp</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
