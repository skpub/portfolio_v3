<script lang="ts">
  import face from "$lib/assets/face2.jpg"
</script>

<div id="profile">
  <img src={face} alt="" id="face">
  <div id="bio" class="margin24">
    <h1 id="name">佐藤 海音 | Sato Kaito</h1>
    <div class="table">
      <div class="table-row">
        <div class="table-cell">所属</div>
        <div class="table-cell">新潟大学大学院自然科学研究科数理物質科学専攻 M1</div>
      </div>
      <div class="table-row">
        <div class="table-cell">資格</div>
        <div class="table-cell">応用情報技術者試験(R1年度秋試験)</div>
      </div>
      <div class="table-row">
        <div class="table-cell">現住所</div>
        <div class="table-cell">新潟市</div>
      </div>
      <div class="table-row">
        <div class="table-cell">趣味</div>
        <div class="table-cell">猫・万年筆・紅茶・作曲</div>
      </div>
      <div class="table-row">
        <div class="table-cell">GitHub</div>
        <div class="table-cell"><a href='https://github.com/skpub'>skpub</a></div>
      </div>
      <div class="table-row">
        <div class="table-cell">X</div>
        <div class="table-cell"><a href='https://x.com/OMGR_dearinsu'>OMGR_dearinsu</a> (閲覧を推奨しないが歓迎する)</div>
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
    min-height: 100dvh;
    img {
      border-radius: 5%;
      width: 200px;
      height: 200px;
    }
    h1 {
      font-family: var(--letter1);
    }
  }
  .table {
    display: table;
  }

  .table-row {
    display: table-row;
  }
  .table-cell:nth-child(1) {
    padding-right: 24px;
  }

  .table-cell {
    display: table-cell;
  }

  #face {
    margin-left: 24px;
    box-shadow:  10px 10px 20px light-dark(#918f8d,#292724),
             -10px -10px 20px light-dark(#ffffff, #373530);
  }

  #mail {
    font-family: monospace;
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
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
</style>
