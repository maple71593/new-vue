<template>
  <!-- 版權底部 -->
    <div class="footer">
      <div class="wrapper">
        <div class="service">
          <ul>
            <li>
              <span></span>
              <p>價格親民</p>
            </li>
            <li>
              <span></span>
              <p>物流快捷</p>
            </li>
            <li>
              <span></span>
              <p>品質新鮮</p>
            </li>
            <li>
              <span></span>
              <p>售後無憂</p>
            </li>
          </ul>
        </div>
        <div class="help">
          <div class="left">
            <dl>
              <dt>購物指南</dt>
              <dd><a href="#">購物流程</a></dd>
              <dd><a href="#">支付方式</a></dd>
              <dd><a href="#">售後規則</a></dd>
            </dl>
            <dl>
              <dt>配送方式</dt>
              <dd><a href="#">配送運費</a></dd>
              <dd><a href="#">配送範圍</a></dd>
              <dd><a href="#">配送時間</a></dd>
            </dl>
            <dl>
              <dt>關於我們</dt>
              <dd><a href="#">平臺規則</a></dd>
              <dd><a href="#">聯繫我們</a></dd>
              <dd><a href="#">問題回饋</a></dd>
            </dl>
            <dl>
              <dt>售後服務</dt>
              <dd><a href="#">售後政策</a></dd>
              <dd><a href="#">退款說明</a></dd>
              <dd><a href="#">取消訂單</a></dd>
            </dl>
            <dl>
              <dt>服務熱線</dt>
              <dd>
                <a href="#"
                  >線上客服<span class="iconfont icon-customer-service"></span
                ></a>
              </dd>
              <dd><a href="#">客服電話 400-0000-000</a></dd>
              <dd><a href="#">工作時間 週一至周日 8:00-18:00</a></dd>
            </dl>
          </div>
          <div class="right">
            <ul>
              <li>
                <div><img src="@/assets/images/wechat.png" alt="" /></div>
                <p>微信公眾號</p>
              </li>
              <li>
                <div><img src="@/assets/images/app.png" alt="" /></div>
                <p>APP下載二維碼</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>
            <a href="#">關於我們</a>|<a href="#">幫助中心</a>|<a href="#"
              >售後服務</a
            >|<a href="#">配送與驗收</a>|<a href="#">商務合作</a>|<a href="#"
              >搜索推薦</a
            >|<a href="#">友情連結</a>
          </p>
          <p>CopyRight © 小兔鮮</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    /* 版权底部 */
.footer {
  height: 580px;
  background-color: #F5F5F5;
}
.footer .service {
  padding: 60px 0;
  height: 180px;
  border-bottom: 1px solid #E8E8E8;
}
.footer .service ul {
  display: flex;
  justify-content: space-around;
}
.footer .service li {
  display: flex;
  line-height: 58px;
}
.footer .service span {
  display: block;
  margin-right: 20px;
  width: 58px;
  height: 58px;
  background-image: url(~@/assets/images/sprite.png);
}
.footer .service li:nth-child(2) span {
  background-position: 0 -58px;
}
.footer .service li:nth-child(3) span {
  background-position: 0 -116px;
}
.footer .service li:nth-child(4) span {
  background-position: 0 -174px;
}
.footer .service p {
  font-size: 28px;
}
.footer .help {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.footer .help .left {
  display: flex;
}
.footer .help .left dl {
  margin-right: 84px;
}
.footer .help .left dt {
  margin-bottom: 30px;
  font-size: 18px;
}
.footer .help .left dd {
  margin-bottom: 10px;
}
.footer .help .left dd a {
  color: #969696;
}
.footer .help .right ul {
  display: flex;
  align-items: flex-start;
}
.footer .help .right li:nth-child(1) {
  margin-right: 55px;
  text-align: center;
}
.footer .help .right div {
  margin-bottom: 10px;
  width: 120px;
  height: 120px;
  color: #969696;
}
.icon-customer-service {
  margin-left: 3px;
  color: #00BE9A;
}
.copyright {
  margin-top: 100px;
  text-align: center;
  color: #A1A1A1;
}
.copyright p {
  margin-bottom: 15px;
}
.copyright a {
  margin: 0 10px;
  color: #A1A1A1;
}


</style>