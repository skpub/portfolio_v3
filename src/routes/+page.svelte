<script lang="ts">
import face from "$lib/assets/face.webp";

const today = new Date();
const age =
	today.getFullYear() -
	2002 -
	(today.getMonth() <= 2 && today.getDate() < 11 ? 1 : 0);
</script>

<div id="profile">
  <div id="face_container">
    <div id="face">
      <img src={face} alt="佐藤海音のプロフィール写真" width="200" height="200" decoding="async" fetchpriority="high">
    </div>
  </div>
  <div id="bio" class="margin24">
    <h1 id="name">佐藤 海音 | Sato Kaito</h1>
    <div class="table">
      <div class="table-row">
        <div class="table-cell">生年月日</div>
        <div class="table-cell">西暦2002年2月11日 ({age}歳)</div>
      </div>
      <div class="table-row">
        <div class="table-cell">所属</div>
        <div class="table-cell">新潟大学大学院自然科学研究科数理物質科学専攻 M2 (いわゆる数学科)</div>
      </div>
      <div class="table-row">
        <div class="table-cell">資格</div>
        <div class="table-cell">応用情報技術者試験(R1年度秋試験)</div>
      </div>
      <div class="table-row">
        <div class="table-cell">現住所</div>
        <div class="table-cell">新潟市西区</div>
      </div>
      <div class="table-row">
        <div class="table-cell">趣味</div>
        <div class="table-cell">猫・万年筆・紅茶・作曲</div>
      </div>
      <div class="table-row">
        <div class="table-cell">GitHub</div>
        <div class="table-cell"><a href='https://github.com/skpub' target='_blank' rel='noopener noreferrer' aria-label='GitHubプロフィールを開く'>skpub</a></div>
      </div>
      <div class="table-row">
        <div class="table-cell">X</div>
        <div class="table-cell"><a href='https://x.com/OMGR_dearinsu' target='_blank' rel='noopener noreferrer' aria-label='Xプロフィールを開く'>OMGR_dearinsu</a></div>
      </div>
      <div class="table-row">
        <div class="table-cell">Email</div>
        <div class="table-cell"><span id="mail">f24a059h☆mail.cc.niigata-u.ac.jp</span></div>
      </div>
    </div>
  </div>
</div>

<style>
  #profile {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100dvh - 48px);
    h1 {
      font-family: var(--letter1);
    }
  }

  #face_container {
    position: relative;
    z-index: 0;
  }

  #face {
    width: 200px;
    height: 200px;
    border-radius: 5%;
    margin-left: 24px;
    box-shadow: 
      inset 4px 4px 4px var(--light),
      inset -4px 4px 4px var(--shadow);
    img {
      border-radius: 5%;
      position: relative;
      z-index: -1;
      width: 100%;
    }
  }

  #mail {
    font-family: monospace;
    font-size: 16px;
  }
  @media (max-aspect-ratio: 1/1) {
    #face {
      margin-left: 0px;
    }
    #name {
      text-align: center;
    }
    #profile {
      flex-flow: column;
    }
  }
  @media (max-width: 1520px) {
    #profile {
      top: 0;
      right: 0;
      left: 0;
    }
  }
  /* SE対策 */
  @media (max-height: 700px) {
    #face {
      width: 180px;
      height: 180px;
    }
    #profile {
      h1 {
        font-size: 28px;
        margin: 0;
      }
    }
    .table-cell {
      font-size: 14px;
    }
  }
</style>
