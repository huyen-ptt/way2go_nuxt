<template>
  <header class="header header-white">
    <div
      id="option_btn"
      :class="{
        'option_btn_hidden_mobile': !isOpen,
        'open1': isOpen
      }"
      @click="toggleSidebar"
    >
      <a>Smart Search</a>
    </div>
    <div id="option_wrapper" :class="{ open: isOpen }">
      <div class="inner">
        <div style="text-align: center; padding-top: 40px">
          <h4>Looking for the most convenient SIM for you? Please input:</h4>
          <div>
            <div class="row bao">
              <div class="form-group col-md-6 col-sm-6">
                <label for="country">Location/Destinationq</label>
                <select id="country-select" name="country" class="form-control op-filter-country">
                <option>123</option>
                <option>143</option>

                </select>
              </div>
              
              <div class="form-group col-md-6 col-sm-6">
                <label for="gb">Type of SIM</label>
                <select id="gb" name="gb" class="form-control op-filter-type filter-data-item">
                  <option value=""></option>
                  <option value="Physical SIM">Physical SIM</option>
                  <option value="E-Sim">E-SIM</option>
                </select>
              </div>

              <div class="form-group col-md-6 col-sm-6">
                <label for="date">Number of Days</label>
                <input type="number" class="form-control op-filter-validity filter-data-item" />
              </div>

              <div class="form-group col-md-6 col-sm-6 d-flex align-items-center">
                <div class="flex-grow-1">
                  <label for="gb" class="mr-2">Data type</label>
                  <select class="form-control op-filter-data-plan filter-data-item">
                    <option value="daily">Daily</option>
                    <option value="total">Total</option>
                  </select>
                </div>
                <div class="flex-grow-1">
                  <label for="gb" class="mr-2">Data amount</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="customize-filter-response">
            <div class="welcome-filter">
              <div class="welcome-filter-icon">
                <i class="fa-solid fa-filter"></i>
              </div>
              <div class="welcome-filter-description">
                Share your preferences,
                <br />
                and we will locate SIM packages customized for you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-wrap">
        <div class="inner-left">
          <div class="inner-logo">
            <a href="index.html">
              <img src="/images/core/logo-way2go.png" alt="Way 2 Go" />
            </a>
          </div>
          <a
            href="javascript:;"
            data-toggle="modal"
            data-target="#modalChangeLanguage"
            class="select-languge-button select-languge-button-mobile"
          >
          </a>
        </div>
        <div class="inner-right">
          <ul class="inner-menu">
            <li class="inner-item">
              <a href="about-us.html"> About Us </a>
            </li>
            <li class="inner-item">
              <a href="pickup-points.html"> Pick-up Points </a>
            </li>

            <li class="inner-item menu-my-account">
              <i class="fa-regular fa-circle-user inner-icon-before"></i>
              <a href="#" class="account-customer-name"> Account </a>
              <div class="inner-sub-menu non-login">
                <ul>
                  <li>
                    <a href="my-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-sign-up"
                      >Create an account</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-login">Sign in</a>
                  </li>
                </ul>
              </div>
              <div class="inner-sub-menu logged-in" style="display: none">
                <ul>
                  <li>
                    <a href="my-sim.html">My SIMs</a>
                  </li>
                  <li>
                    <a href="my-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="change-password"
                      >Change the password</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="link-logout">Log out</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="inner-item">
              <a
                href="javascript:;"
                data-toggle="modal"
                data-target="#modalChangeLanguage"
                class="select-languge-button"
              >
                <i class="fa-solid fa-earth-asia inner-icon-before"></i>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

// Hàm để chuyển đổi trạng thái isOpen
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>
<style scoped>

.select2-container .select2-selection--single {
  height: 38px !important;
}
.section-19 {
  height: 512px !important;
}
#option_btn {
  width: 50px !important;
  height: unset !important;
  padding: 10px !important;
  -webkit-transform: translate(0, 0);
  -webkit-transition: transform 600ms ease;
  right: 0px !important;
  will-change: transform;
}
.inner-discoun-tag-left span:first-child {
  font-size: 15px;
  font-weight: bold;
}
.inner-discoun-tag-left {
  border: unset !important;
  position: absolute;
  top: -9px !important;
  left: -16px !important;
  background: linear-gradient(270deg, #aa5481, #e2444f);
  color: #fff;
}

.illusion .img-fluid {
  max-width: 100%;
  height: auto;
  display: flex;
  margin: auto;
}

.btn-save-coupon-code {
  width: 350px;
  max-width: 100%;
  background-color: #4a4a4a;
  color: #fff;
  border: 0;
  font-weight: 600;
  transition: all 0.2s;
  line-height: 1;
  padding: 16px 20px;
  letter-spacing: 1px;
  font-size: 11px;
  border-radius: 7px;
}
.inner-menu .inner-list a {
  color: #8a8a8a !important;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: unset !important;
  border-color: unset !important;
}
.term-content {
  text-align: unset !important;
}
.box-head.inner-center {
  display: none;
}
.section-2 .inner-panels {
  border-top: 1px solid #ddd;
  padding: 24px 0 !important;
  background-color: #fafafa;
}
.tab-content {
  padding-bottom: 63px;
}
.nav-tabs {
  padding-top: 20px;
}
.feedback-title-block img {
  height: 20px;

  margin: unset;
  margin-bottom: unset;
}
.navigation-list a:hover {
  color: blue;
}
.feedback-title-block {
  display: flex;
  width: unset;
  padding: 58px 0 20px 0;
  margin: unset;
  gap: 7px;
}
.feedback-block .inner-item .inner-title {
  font-size: 17px;
  color: var(--color-main);
  font-weight: 600;
  margin-bottom: 0px;
  height: unset;
  text-align: center;
  padding-top: unset;
}
.back-to-top {
  background: #143a54 !important;
}
.box-head .inner-title {
  font-size: 27px;
  font-weight: 600;
  color: var(--color-main);
  margin-bottom: 0;
}
.inner-section-1 .inner-desc p:first-child {
  text-align: unset !important;
}
.button-max-350 {
  max-width: 250px !important;
  background-color: var(--color-main);
}
.page_cotact h3 {
  padding-top: 75px;
}
.feedback-block .slick-track .inner-item {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 35px 30px !important;
  text-align: center;
  height: 100%;
}
.footer.footer-black .inner-top .inner-menu .inner-title span {
  color: #fff;
  text-align: left;
  font-size: 13px;
}
.card-body img {
  width: 100%;
}
.contact {
  padding-left: 0 !important;
}
@media (max-width: 768px) {
  .section-2 .inner-tabs {
    padding-bottom: unset !important;
  }
  .inner-discoun-tag-left {
    top: -10px !important;
    left: -10px !important;
  }

  .section-13 {
    padding: 40px 0 0px 0 !important;
  }
  .mobile-flag-icon {
    width: 23px !important;
    height: auto !important;
  }
  .section-1 .inner-desc {
    font-size: 12px !important;
    font-weight: 400;
  }
  .feedback-title-block img {
    height: 20px;
    margin-top: 13px !important;
    margin: unset;
    margin-bottom: unset;
  }
  .feedback-title-block {
    display: flex;
    width: unset;
    padding: 8px 0 20px 0 !important;
    margin: unset;
    gap: 7px;
  }
  feedback-item-flag {
    margin-top: 14px !important;
  }
  .box-search form input {
    flex: 1;
    background-color: transparent;
    border: none;
    border-radius: 0;
    color: #4a4a4a;
    font-size: 11px !important;
    font-weight: 400;
    line-height: 1;
    min-height: 22px;
    padding: 0 12px;
    order: 2;
  }
  .inner-section-1 .inner-desc p:first-child {
    text-align: center !important;
  }
  .section-15 .inner-content .inner-desc {
    font-size: 15px;
    color: var(--color-text-2);
    font-weight: 400;
    margin-bottom: 20px;
    text-align: unset !important;
  }
  .section .inner-desc p {
    font-size: 1rem !important;
    text-align: unset !important;
  }
  .inner-section-1 .inner-desc p:last-child {
    font-size: 14px !important;
    text-align: center;
  }
  .section-17 .inner-content {
    margin-top: 19px;
    margin-bottom: 0 !important;
  }
  .section-17 {
    margin-bottom: 15px;
  }
  .section-1 .inner-main.inner-left .inner-desc {
    text-align: left;
  }
  .section-1 .inner-title {
    font-size: 20px;
  }
  .section-1 .inner-main.inner-left .inner-title {
    text-align: left;
  }
  .section-21 .inner-item .inner-title {
    font-size: 17px;
    color: var(--color-main);
    font-weight: 600;
    margin-top: 11px;
    margin-bottom: 10px;
    height: 60px;
    padding: 20px;
    text-align: center;
  }
  .section-23 .inner-section-1 .inner-content .inner-title {
    font-size: 21px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
  }
  .section-15 {
    padding: 30px 0 !important;
  }
}
.slick-track {
  height: 233px;
}
.navigation-list a {
  color: black;
  font-size: 13px;
}
.footer .inner-top .inner-menu .inner-title {
  padding: 0.5rem 0rem !important;
}
.inner-socials .inner-list {
  display: flex;
}
.inner-section-1 .inner-desc p:last-child {
  font-size: 15px !important;
}
.inner-socials .inner-list {
  display: flex;
}
.card-header {
  padding: 0.75rem 2px !important;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.section-15 .inner-content .inner-desc {
  font-size: 15px;
  color: var(--color-text-2);
  font-weight: 400;
  margin-bottom: 20px;
  text-align: justify;
}
.section-15 .inner-list-box .inner-box .inner-title-2 {
  font-size: 22px !important;
  color: #143a54;
  margin-bottom: 3px;
  font-weight: 600;
  height: 45px;
}
.bg-light {
  background-color: #f4f8fb !important;
}
.section-15 .inner-list-box .inner-box {
  width: 90%;
  height: 220px;
  border-radius: 7px;
  overflow: hidden;
  background-image: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 38px 20px !important;
}
.section-18 .inner-main .inner-content .inner-desc a {
  font-size: 15px;
  color: white;
}
.feedback-block .slick-track .inner-item {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
  padding: 0px 30px !important;
  text-align: center;
  height: 100%;
}
</style>
