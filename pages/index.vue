<template>
  <div class="section-19 home-banner">
    <div class="banner-desktop-show">
      <img
        src="../way2gocms.hndedu.com/uploads/2024/03/19/bgg.jpg"
        alt="WAY2GO GLOBAL TRAVEL SIM"
      />
    </div>
    <div class="banner-mobile-show">
      <img src="../way2gocms.hndedu.com/uploads/2024/05/27/banner-mobile.jpg" alt="" />
    </div>
  </div>
  <!-- Luôn kết nối dù bạn đi đâu -->
  <div class="section-1 inner-trans">
    <div class="container">
      <div class="inner-main inner-left">
        <h1 class="inner-title">WAY2GO GLOBAL TRAVEL SIM</h1>
        <div class="inner-desc">
          <p><em>Enrich your travel experience while staying connected</em></p>

          <p>
            Offering both eSIM and Physical SIM, coverages in 200+ countries with
            cost-effectiveness<br />
            Trusted by over 2 million people worldwide<br />
            &nbsp;
          </p>
        </div>

        <div class="box-search" box-search>
          <form class="box-form">
            <input
              type="text"
              class="input-search-box"
              placeholder="Search convenient packs for 200+ Countries and Regions"
            />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>

            <div
              id="search-results"
              class="dropdown-menu"
              style="width: 100%; display: none"
            ></div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Luôn kết nối dù bạn đi đâu -->
  <!-- End Background Header -->
  <!-- Tabs Các loại sim -->
  <div class="section-2">
    <div class="inner-tabs inner-trans">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'local' }"
              @click="setActiveTab('local')"
            >
              LOCAL
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'regional' }"
              @click="setActiveTab('regional')"
            >
              REGIONAL
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'global' }"
              @click="setActiveTab('global')"
            >
              GLOBAL
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!--style="background: url(https://way2gocms.hndedu.com//uploads/2024/09/04/hi.jpg) no-repeat center center"-->
    <div
      class="inner-panels"
      style="
        background: url(static-picture/map-01.jpg) no-repeat center center;
        background-size: cover;
      "
    >
      <div class="container">
        <div class="tab-content">
          <!-- Các quốc gia phổ biến -->
          <div
            class="tab-pane fade show active"
            id="tab-local"
            v-if="activeTab === 'local'"
          >
            <div class="inner-section-1">
              <div class="inner-section-local-container">
                <div class="box-head">
                  <h2 class="inner-title">Most Popular</h2>
                </div>
                <div class="row inner-list" show-country="20">
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="4"
                      data-url="vietnam-en-US"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-viet-nam.png"
                        alt="Vietnam"
                      />
                      <span class="inner-label"> Vietnam </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="24"
                      data-url="korea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/korea flag.png"
                        alt="South Korea"
                      />
                      <span class="inner-label"> South Korea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="19"
                      data-url="china"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-trung-quoc.png"
                        alt="China"
                      />
                      <span class="inner-label"> China </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="26"
                      data-url="Taiwan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/taiwan flag.png"
                        alt="Taiwan"
                      />
                      <span class="inner-label"> Taiwan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="25"
                      data-url="Japan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/japan flag.png"
                        alt="Japan"
                      />
                      <span class="inner-label"> Japan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="11"
                      data-url="my-en-us"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-hoa-ky.png"
                        alt="United States"
                      />
                      <span class="inner-label"> United States </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="5"
                      data-url="thailand-en-US"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-thai-lan.png"
                        alt="Thailand"
                      />
                      <span class="inner-label"> Thailand </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="22"
                      data-url="hongkong-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/28/z5293142780315_07b22c08b7de9e17013c11f318367754.jpg"
                        alt="Hong Kong"
                      />
                      <span class="inner-label"> Hong Kong </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="6"
                      data-url="singapore-en-US"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/25/singapore flag-01.png"
                        alt="Singapore"
                      />
                      <span class="inner-label"> Singapore </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="7"
                      data-url="malaysia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-malaysia.png"
                        alt="Malaysia"
                      />
                      <span class="inner-label"> Malaysia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1109"
                      data-url="Indonesia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/id-flag.jpg"
                        alt="Indonesia"
                      />
                      <span class="inner-label"> Indonesia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="9"
                      data-url="philippine-en-us"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-philippines.png"
                        alt="Philippines"
                      />
                      <span class="inner-label"> Philippines </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="10"
                      data-url="autralia-en-us"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-uc.png"
                        alt="Australia"
                      />
                      <span class="inner-label"> Australia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="20"
                      data-url="new-zealand"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/07/05/Flag_of_New_Zealand.png"
                        alt="New Zealand"
                      />
                      <span class="inner-label"> New Zealand </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1093"
                      data-url="France-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/fr-flag.jpg"
                        alt="France"
                      />
                      <span class="inner-label"> France </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1117"
                      data-url="Italy-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/it-flag.jpg"
                        alt="Italy"
                      />
                      <span class="inner-label"> Italy </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1097"
                      data-url="Germany-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/de-flag.jpg"
                        alt="Germany"
                      />
                      <span class="inner-label"> Germany </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1217"
                      data-url="United-Kingdom-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/uk-flag.jpg"
                        alt="United Kingdom"
                      />
                      <span class="inner-label"> United Kingdom </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1194"
                      data-url="Spain-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/es-flag.jpg"
                        alt="Spain"
                      />
                      <span class="inner-label"> Spain </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1201"
                      data-url="Switzerland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ch-flag.png"
                        alt="Switzerland"
                      />
                      <span class="inner-label"> Switzerland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1199"
                      data-url="Sweden-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/se-flag.jpg"
                        alt="Sweden"
                      />
                      <span class="inner-label"> Sweden </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1210"
                      data-url="Turkey-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tr-flag.jpg"
                        alt="Turkey"
                      />
                      <span class="inner-label"> Turkey </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="8"
                      data-url="campuchia-en-us"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/02/07/flag-campuchia.png"
                        alt="Cambodia"
                      />
                      <span class="inner-label"> Cambodia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="23"
                      data-url="macau-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/macau flag.png"
                        alt="Macao"
                      />
                      <span class="inner-label"> Macao </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="27"
                      data-url="India-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/india flag.png"
                        alt="India"
                      />
                      <span class="inner-label"> India </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1125"
                      data-url="Laos-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/la-flag.jpg"
                        alt="Laos"
                      />
                      <span class="inner-label"> Laos </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="29"
                      data-url="Canada-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/canada flag.png"
                        alt="Canada"
                      />
                      <span class="inner-label"> Canada </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1041"
                      data-url="Argentina-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ar-flag.jpg"
                        alt="Argentina"
                      />
                      <span class="inner-label"> Argentina </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1050"
                      data-url="Belgium-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/be-flag.jpg"
                        alt="Belgium"
                      />
                      <span class="inner-label"> Belgium </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1056"
                      data-url="Brazil-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/br-flag.jpg"
                        alt="Brazil"
                      />
                      <span class="inner-label"> Brazil </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1172"
                      data-url="Qatar-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/qa-flag.jpg"
                        alt="Qatar"
                      />
                      <span class="inner-label"> Qatar </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1077"
                      data-url="Czech-Republic-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cz-flag.jpg"
                        alt="Czech Republic"
                      />
                      <span class="inner-label"> Czech Republic </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1078"
                      data-url="Denmark-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/dk-flag.jpg"
                        alt="Denmark"
                      />
                      <span class="inner-label"> Denmark </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1084"
                      data-url="Egypt-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/eg-flag.jpg"
                        alt="Egypt"
                      />
                      <span class="inner-label"> Egypt </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1092"
                      data-url="Finland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/fi-flag.jpg"
                        alt="Finland"
                      />
                      <span class="inner-label"> Finland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1052"
                      data-url="Bhutan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bt-flag.jpg"
                        alt="Bhutan"
                      />
                      <span class="inner-label"> Bhutan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1108"
                      data-url="Iceland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/is-flag.jpg"
                        alt="Iceland"
                      />
                      <span class="inner-label"> Iceland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1134"
                      data-url="Maldives-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mv-flag.jpg"
                        alt="Maldives"
                      />
                      <span class="inner-label"> Maldives </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1181"
                      data-url="Saudi-Arabia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sa-flag.jpg"
                        alt="Saudi Arabia"
                      />
                      <span class="inner-label"> Saudi Arabia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="28"
                      data-url="uae-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/2024/03/22/dubai flag.png"
                        alt="United Arab Emirates"
                      />
                      <span class="inner-label"> United Arab Emirates </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1142"
                      data-url="Mexico-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mx-flag.jpg"
                        alt="Mexico"
                      />
                      <span class="inner-label"> Mexico </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1152"
                      data-url="Netherlands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nl-flag.jpg"
                        alt="Netherlands"
                      />
                      <span class="inner-label"> Netherlands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1153"
                      data-url="Myanmar-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mm-flag.jpg"
                        alt="Myanmar"
                      />
                      <span class="inner-label"> Myanmar </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1033"
                      data-url="Angola-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ao-flag.jpg"
                        alt="Angola"
                      />
                      <span class="inner-label"> Angola </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1034"
                      data-url="Albania-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/al-flag.jpg"
                        alt="Albania"
                      />
                      <span class="inner-label"> Albania </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1035"
                      data-url="Afghanistan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/af-flag.jpg"
                        alt="Afghanistan"
                      />
                      <span class="inner-label"> Afghanistan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1036"
                      data-url="Antigua-and-Barbuda-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ag-flag.jpg"
                        alt="Antigua and Barbuda"
                      />
                      <span class="inner-label"> Antigua and Barbuda </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1037"
                      data-url="Algeria-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/dz-flag.jpg"
                        alt="Algeria"
                      />
                      <span class="inner-label"> Algeria </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1038"
                      data-url="Andorra-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ad-flag.jpg"
                        alt="Andorra"
                      />
                      <span class="inner-label"> Andorra </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1039"
                      data-url="Armenia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/am-flag.jpg"
                        alt="Armenia"
                      />
                      <span class="inner-label"> Armenia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1040"
                      data-url="Austria-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/at-flag.jpg"
                        alt="Austria"
                      />
                      <span class="inner-label"> Austria </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1043"
                      data-url="Azerbaijan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/az-flag.jpg"
                        alt="Azerbaijan"
                      />
                      <span class="inner-label"> Azerbaijan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1044"
                      data-url="Bahamas-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bs-flag.jpg"
                        alt="Bahamas"
                      />
                      <span class="inner-label"> Bahamas </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1045"
                      data-url="Bahrain-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bh-flag.jpg"
                        alt="Bahrain"
                      />
                      <span class="inner-label"> Bahrain </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1046"
                      data-url="Bangladesh-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bd-flag.jpg"
                        alt="Bangladesh"
                      />
                      <span class="inner-label"> Bangladesh </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1047"
                      data-url="Barbados-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bb-flag.jpg"
                        alt="Barbados"
                      />
                      <span class="inner-label"> Barbados </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1048"
                      data-url="Belarus-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/by-flag.jpg"
                        alt="Belarus"
                      />
                      <span class="inner-label"> Belarus </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1049"
                      data-url="Belize-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bz-flag.jpg"
                        alt="Belize"
                      />
                      <span class="inner-label"> Belize </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1051"
                      data-url="Benin-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bj-flag.jpg"
                        alt="Benin"
                      />
                      <span class="inner-label"> Benin </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1053"
                      data-url="Bolivia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bo-flag.jpg"
                        alt="Bolivia"
                      />
                      <span class="inner-label"> Bolivia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1054"
                      data-url="Bosnia-and-Herzegovina-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ba-flag.jpg"
                        alt="Bosnia and Herzegovina"
                      />
                      <span class="inner-label"> Bosnia and Herzegovina </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1055"
                      data-url="Botswana-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bw-flag.jpg"
                        alt="Botswana"
                      />
                      <span class="inner-label"> Botswana </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1057"
                      data-url="Brunei-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bn-flag.jpg"
                        alt="Brunei"
                      />
                      <span class="inner-label"> Brunei </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1058"
                      data-url="Burkina-Faso-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bf-flag.jpg"
                        alt="Burkina Faso"
                      />
                      <span class="inner-label"> Burkina Faso </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1059"
                      data-url="Bulgaria-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bg-flag.jpg"
                        alt="Bulgaria"
                      />
                      <span class="inner-label"> Bulgaria </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1060"
                      data-url="Cameroon-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cm-flag.jpg"
                        alt="Cameroon"
                      />
                      <span class="inner-label"> Cameroon </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1062"
                      data-url="Burundi-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bi-flag.jpg"
                        alt="Burundi"
                      />
                      <span class="inner-label"> Burundi </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1064"
                      data-url="Central-African-Republic-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cf-flag.jpg"
                        alt="Central African Republic"
                      />
                      <span class="inner-label"> Central African Republic </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1065"
                      data-url="Cape-Verde-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cv-flag.jpg"
                        alt="Cape Verde"
                      />
                      <span class="inner-label"> Cape Verde </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1066"
                      data-url="Chile-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cl-flag.jpg"
                        alt="Chile"
                      />
                      <span class="inner-label"> Chile </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1067"
                      data-url="Chad-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/td-flag.jpg"
                        alt="Chad"
                      />
                      <span class="inner-label"> Chad </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1069"
                      data-url="Colombia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/co-flag.jpg"
                        alt="Colombia"
                      />
                      <span class="inner-label"> Colombia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1070"
                      data-url="Comoros-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/km-flag.jpg"
                        alt="Comoros"
                      />
                      <span class="inner-label"> Comoros </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1071"
                      data-url="Costa-Rica-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cr-flag.jpg"
                        alt="Costa Rica"
                      />
                      <span class="inner-label"> Costa Rica </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1072"
                      data-url="Republic-of-the-Congo-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cg-flag.jpg"
                        alt="Republic of the Congo"
                      />
                      <span class="inner-label"> Republic of the Congo </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1073"
                      data-url="Ivory-Coast-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ci-flag.jpg"
                        alt="Ivory Coast"
                      />
                      <span class="inner-label"> Ivory Coast </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1074"
                      data-url="Cuba-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cu-flag.jpg"
                        alt="Cuba"
                      />
                      <span class="inner-label"> Cuba </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1075"
                      data-url="Croatia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/hr-flag.jpg"
                        alt="Croatia"
                      />
                      <span class="inner-label"> Croatia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1076"
                      data-url="Cyprus-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cy-flag.jpg"
                        alt="Cyprus"
                      />
                      <span class="inner-label"> Cyprus </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1079"
                      data-url="Democratic-Republic-of-the-Congo-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/cd-flag.jpg"
                        alt="Democratic Republic of the Congo"
                      />
                      <span class="inner-label"> Democratic Republic of the Congo </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1080"
                      data-url="Djibouti-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/dj-flag.jpg"
                        alt="Djibouti"
                      />
                      <span class="inner-label"> Djibouti </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1081"
                      data-url="Dominica-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/dm-flag.jpg"
                        alt="Dominica"
                      />
                      <span class="inner-label"> Dominica </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1082"
                      data-url="Ecuador-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ec-flag.jpg"
                        alt="Ecuador"
                      />
                      <span class="inner-label"> Ecuador </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1083"
                      data-url="Dominican-Republic-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/do-flag.jpg"
                        alt="Dominican Republic"
                      />
                      <span class="inner-label"> Dominican Republic </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1085"
                      data-url="El-Salvador-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sv-flag.jpg"
                        alt="El Salvador"
                      />
                      <span class="inner-label"> El Salvador </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1086"
                      data-url="Equatorial-Guinea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gq-flag.jpg"
                        alt="Equatorial Guinea"
                      />
                      <span class="inner-label"> Equatorial Guinea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1087"
                      data-url="Eritrea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/er-flag.jpg"
                        alt="Eritrea"
                      />
                      <span class="inner-label"> Eritrea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1088"
                      data-url="Eswatini-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sz-flag.jpg"
                        alt="Eswatini"
                      />
                      <span class="inner-label"> Eswatini </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1089"
                      data-url="Estonia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ee-flag.jpg"
                        alt="Estonia"
                      />
                      <span class="inner-label"> Estonia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1090"
                      data-url="Fiji-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/fj-flag.jpg"
                        alt="Fiji"
                      />
                      <span class="inner-label"> Fiji </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1091"
                      data-url="Ethiopia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/et-flag.jpg"
                        alt="Ethiopia"
                      />
                      <span class="inner-label"> Ethiopia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1094"
                      data-url="Gabon-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ga-flag.jpg"
                        alt="Gabon"
                      />
                      <span class="inner-label"> Gabon </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1095"
                      data-url="Gambia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gm-flag.jpg"
                        alt="Gambia"
                      />
                      <span class="inner-label"> Gambia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1096"
                      data-url="Georgia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ge-flag.jpg"
                        alt="Georgia"
                      />
                      <span class="inner-label"> Georgia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1098"
                      data-url="Greece-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gr-flag.jpg"
                        alt="Greece"
                      />
                      <span class="inner-label"> Greece </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1099"
                      data-url="Ghana-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gh-flag.jpg"
                        alt="Ghana"
                      />
                      <span class="inner-label"> Ghana </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1100"
                      data-url="Grenada-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gd-flag.jpg"
                        alt="Grenada"
                      />
                      <span class="inner-label"> Grenada </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1101"
                      data-url="Guatemala-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gt-flag.jpg"
                        alt="Guatemala"
                      />
                      <span class="inner-label"> Guatemala </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1102"
                      data-url="Guinea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gn-flag.jpg"
                        alt="Guinea"
                      />
                      <span class="inner-label"> Guinea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1103"
                      data-url="Guyana-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gy-flag.jpg"
                        alt="Guyana"
                      />
                      <span class="inner-label"> Guyana </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1104"
                      data-url="Guinea-Bissau-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gw-flag.jpg"
                        alt="Guinea-Bissau"
                      />
                      <span class="inner-label"> Guinea-Bissau </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1105"
                      data-url="Haiti-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ht-flag.jpg"
                        alt="Haiti"
                      />
                      <span class="inner-label"> Haiti </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1106"
                      data-url="Hungary-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/hu-flag.jpg"
                        alt="Hungary"
                      />
                      <span class="inner-label"> Hungary </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1107"
                      data-url="Honduras-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/hn-flag.jpg"
                        alt="Honduras"
                      />
                      <span class="inner-label"> Honduras </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1111"
                      data-url="Iran-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ir-flag.jpg"
                        alt="Iran"
                      />
                      <span class="inner-label"> Iran </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1112"
                      data-url="Ireland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ie-flag.jpg"
                        alt="Ireland"
                      />
                      <span class="inner-label"> Ireland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1113"
                      data-url="Iraq-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/iq-flag.jpg"
                        alt="Iraq"
                      />
                      <span class="inner-label"> Iraq </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1114"
                      data-url="Israel-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/il-flag.jpg"
                        alt="Israel"
                      />
                      <span class="inner-label"> Israel </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1116"
                      data-url="Jamaica-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/jm-flag.jpg"
                        alt="Jamaica"
                      />
                      <span class="inner-label"> Jamaica </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1118"
                      data-url="Kazakhstan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/kz-flag.jpg"
                        alt="Kazakhstan"
                      />
                      <span class="inner-label"> Kazakhstan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1119"
                      data-url="Jordan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/jo-flag.jpg"
                        alt="Jordan"
                      />
                      <span class="inner-label"> Jordan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1120"
                      data-url="Kenya-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ke-flag.jpg"
                        alt="Kenya"
                      />
                      <span class="inner-label"> Kenya </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1121"
                      data-url="Kyrgyzstan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/kg-flag.jpg"
                        alt="Kyrgyzstan"
                      />
                      <span class="inner-label"> Kyrgyzstan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1122"
                      data-url="Kuwait-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/kw-flag.jpg"
                        alt="Kuwait"
                      />
                      <span class="inner-label"> Kuwait </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1123"
                      data-url="Kiribati-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ki-flag.jpg"
                        alt="Kiribati"
                      />
                      <span class="inner-label"> Kiribati </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1124"
                      data-url="Latvia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lv-flag.jpg"
                        alt="Latvia"
                      />
                      <span class="inner-label"> Latvia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1126"
                      data-url="Lebanon-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lb-flag.jpg"
                        alt="Lebanon"
                      />
                      <span class="inner-label"> Lebanon </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1127"
                      data-url="Libya-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ly-flag.jpg"
                        alt="Libya"
                      />
                      <span class="inner-label"> Libya </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1128"
                      data-url="Liberia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lr-flag.jpg"
                        alt="Liberia"
                      />
                      <span class="inner-label"> Liberia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1129"
                      data-url="Lesotho-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ls-flag.jpg"
                        alt="Lesotho"
                      />
                      <span class="inner-label"> Lesotho </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1130"
                      data-url="Lithuania-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lt-flag.jpg"
                        alt="Lithuania"
                      />
                      <span class="inner-label"> Lithuania </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1131"
                      data-url="Liechtenstein-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/li-flag.jpg"
                        alt="Liechtenstein"
                      />
                      <span class="inner-label"> Liechtenstein </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1132"
                      data-url="Luxembourg-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lu-flag.jpg"
                        alt="Luxembourg"
                      />
                      <span class="inner-label"> Luxembourg </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1133"
                      data-url="Macedonia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mk-flag.jpg"
                        alt="Macedonia"
                      />
                      <span class="inner-label"> Macedonia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1135"
                      data-url="Malawi-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mw-flag.jpg"
                        alt="Malawi"
                      />
                      <span class="inner-label"> Malawi </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1137"
                      data-url="Madagascar-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mg-flag.jpg"
                        alt="Madagascar"
                      />
                      <span class="inner-label"> Madagascar </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1138"
                      data-url="Mali-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ml-flag.jpg"
                        alt="Mali"
                      />
                      <span class="inner-label"> Mali </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1139"
                      data-url="Malta-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mt-flag.jpg"
                        alt="Malta"
                      />
                      <span class="inner-label"> Malta </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1140"
                      data-url="Mauritania-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mr-flag.jpg"
                        alt="Mauritania"
                      />
                      <span class="inner-label"> Mauritania </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1141"
                      data-url="Mauritius-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mu-flag.jpg"
                        alt="Mauritius"
                      />
                      <span class="inner-label"> Mauritius </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1143"
                      data-url="Micronesia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/fm-flag.jpg"
                        alt="Micronesia"
                      />
                      <span class="inner-label"> Micronesia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1144"
                      data-url="Marshall-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mh-flag.jpg"
                        alt="Marshall Islands"
                      />
                      <span class="inner-label"> Marshall Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1145"
                      data-url="Moldova-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/md-flag.jpg"
                        alt="Moldova"
                      />
                      <span class="inner-label"> Moldova </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1146"
                      data-url="Montenegro-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/me-flag.jpg"
                        alt="Montenegro"
                      />
                      <span class="inner-label"> Montenegro </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1147"
                      data-url="Morocco-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ma-flag.jpg"
                        alt="Morocco"
                      />
                      <span class="inner-label"> Morocco </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1148"
                      data-url="Mongolia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mn-flag.jpg"
                        alt="Mongolia"
                      />
                      <span class="inner-label"> Mongolia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1149"
                      data-url="Mozambique-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mz-flag.jpg"
                        alt="Mozambique"
                      />
                      <span class="inner-label"> Mozambique </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1150"
                      data-url="Monaco-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mc-flag.jpg"
                        alt="Monaco"
                      />
                      <span class="inner-label"> Monaco </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1151"
                      data-url="Nauru-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nr-flag.jpg"
                        alt="Nauru"
                      />
                      <span class="inner-label"> Nauru </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1154"
                      data-url="New-Zealand-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nz-flag.jpg"
                        alt="New Zealand"
                      />
                      <span class="inner-label"> New Zealand </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1155"
                      data-url="Nepal-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/np-flag.jpg"
                        alt="Nepal"
                      />
                      <span class="inner-label"> Nepal </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1156"
                      data-url="Namibia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/na-flag.jpg"
                        alt="Namibia"
                      />
                      <span class="inner-label"> Namibia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1157"
                      data-url="Nicaragua-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ni-flag.jpg"
                        alt="Nicaragua"
                      />
                      <span class="inner-label"> Nicaragua </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1158"
                      data-url="Niger-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ne-flag.jpg"
                        alt="Niger"
                      />
                      <span class="inner-label"> Niger </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1159"
                      data-url="North-Korea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/kp-flag.jpg"
                        alt="North Korea"
                      />
                      <span class="inner-label"> North Korea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1160"
                      data-url="Norway-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/no-flag.jpg"
                        alt="Norway"
                      />
                      <span class="inner-label"> Norway </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1161"
                      data-url="Nigeria-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ng-flag.jpg"
                        alt="Nigeria"
                      />
                      <span class="inner-label"> Nigeria </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1162"
                      data-url="Oman-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/om-flag.jpg"
                        alt="Oman"
                      />
                      <span class="inner-label"> Oman </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1163"
                      data-url="Palau-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pw-flag.jpg"
                        alt="Palau"
                      />
                      <span class="inner-label"> Palau </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1164"
                      data-url="Pakistan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pk-flag.jpg"
                        alt="Pakistan"
                      />
                      <span class="inner-label"> Pakistan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1165"
                      data-url="Panama-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pa-flag.jpg"
                        alt="Panama"
                      />
                      <span class="inner-label"> Panama </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1166"
                      data-url="Peru-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pe-flag.jpg"
                        alt="Peru"
                      />
                      <span class="inner-label"> Peru </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1167"
                      data-url="Paraguay-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/py-flag.jpg"
                        alt="Paraguay"
                      />
                      <span class="inner-label"> Paraguay </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1168"
                      data-url="Papua-New-Guinea-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pg-flag.jpg"
                        alt="Papua New Guinea"
                      />
                      <span class="inner-label"> Papua New Guinea </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1169"
                      data-url="Poland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pl-flag.jpg"
                        alt="Poland"
                      />
                      <span class="inner-label"> Poland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1171"
                      data-url="Romania-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ro-flag.jpg"
                        alt="Romania"
                      />
                      <span class="inner-label"> Romania </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1173"
                      data-url="Russia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ru-flag.jpg"
                        alt="Russia"
                      />
                      <span class="inner-label"> Russia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1174"
                      data-url="Portugal-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pt-flag.jpg"
                        alt="Portugal"
                      />
                      <span class="inner-label"> Portugal </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1175"
                      data-url="Rwanda-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/rw-flag.jpg"
                        alt="Rwanda"
                      />
                      <span class="inner-label"> Rwanda </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1176"
                      data-url="Saint-Kitts-and-Nevis-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/kn-flag.jpg"
                        alt="Saint Kitts and Nevis"
                      />
                      <span class="inner-label"> Saint Kitts and Nevis </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1177"
                      data-url="Sao-Tome-and-Principe-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/st-flag.jpg"
                        alt="Sao Tome and Principe"
                      />
                      <span class="inner-label"> Sao Tome and Principe </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1178"
                      data-url="Saint-Lucia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lc-flag.jpg"
                        alt="Saint Lucia"
                      />
                      <span class="inner-label"> Saint Lucia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1179"
                      data-url="Samoa-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ws-flag.jpg"
                        alt="Samoa"
                      />
                      <span class="inner-label"> Samoa </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1180"
                      data-url="San-Marino-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sm-flag.jpg"
                        alt="San Marino"
                      />
                      <span class="inner-label"> San Marino </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1182"
                      data-url="Seychelles-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sc-flag.jpg"
                        alt="Seychelles"
                      />
                      <span class="inner-label"> Seychelles </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1183"
                      data-url="Senegal-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sn-flag.jpg"
                        alt="Senegal"
                      />
                      <span class="inner-label"> Senegal </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1184"
                      data-url="Serbia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/rs-flag.jpg"
                        alt="Serbia"
                      />
                      <span class="inner-label"> Serbia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1185"
                      data-url="Sierra-Leone-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sl-flag.jpg"
                        alt="Sierra Leone"
                      />
                      <span class="inner-label"> Sierra Leone </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1187"
                      data-url="Slovenia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/si-flag.jpg"
                        alt="Slovenia"
                      />
                      <span class="inner-label"> Slovenia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1188"
                      data-url="Slovakia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sk-flag.jpg"
                        alt="Slovakia"
                      />
                      <span class="inner-label"> Slovakia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1189"
                      data-url="Somalia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/so-flag.jpg"
                        alt="Somalia"
                      />
                      <span class="inner-label"> Somalia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1191"
                      data-url="Solomon-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sb-flag.jpg"
                        alt="Solomon Islands"
                      />
                      <span class="inner-label"> Solomon Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1193"
                      data-url="South-Sudan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ss-flag.jpg"
                        alt="South Sudan"
                      />
                      <span class="inner-label"> South Sudan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1195"
                      data-url="Sri-Lanka-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/lk-flag.jpg"
                        alt="Sri Lanka"
                      />
                      <span class="inner-label"> Sri Lanka </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1196"
                      data-url="Saint-Vincent-and-the-Grenadines-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/vc-flag.jpg"
                        alt="Saint Vincent and the Grenadines"
                      />
                      <span class="inner-label"> Saint Vincent and the Grenadines </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1197"
                      data-url="Sudan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sd-flag.jpg"
                        alt="Sudan"
                      />
                      <span class="inner-label"> Sudan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1198"
                      data-url="Suriname-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sr-flag.jpg"
                        alt="Suriname"
                      />
                      <span class="inner-label"> Suriname </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1200"
                      data-url="Syria-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/sy-flag.jpg"
                        alt="Syria"
                      />
                      <span class="inner-label"> Syria </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1202"
                      data-url="Tajikistan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tj-flag.jpg"
                        alt="Tajikistan"
                      />
                      <span class="inner-label"> Tajikistan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1204"
                      data-url="Tanzania-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tz-flag.jpg"
                        alt="Tanzania"
                      />
                      <span class="inner-label"> Tanzania </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1205"
                      data-url="East-Timor-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tl-flag.jpg"
                        alt="East Timor"
                      />
                      <span class="inner-label"> East Timor </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1206"
                      data-url="Togo-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tg-flag.jpg"
                        alt="Togo"
                      />
                      <span class="inner-label"> Togo </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1207"
                      data-url="Tonga-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/to-flag.jpg"
                        alt="Tonga"
                      />
                      <span class="inner-label"> Tonga </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1208"
                      data-url="Trinidad-and-Tobago-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tt-flag.jpg"
                        alt="Trinidad and Tobago"
                      />
                      <span class="inner-label"> Trinidad and Tobago </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1209"
                      data-url="Tunisia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tn-flag.jpg"
                        alt="Tunisia"
                      />
                      <span class="inner-label"> Tunisia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1211"
                      data-url="Turkmenistan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tm-flag.jpg"
                        alt="Turkmenistan"
                      />
                      <span class="inner-label"> Turkmenistan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1212"
                      data-url="Uganda-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ug-flag.jpg"
                        alt="Uganda"
                      />
                      <span class="inner-label"> Uganda </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1213"
                      data-url="Tuvalu-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tv-flag.jpg"
                        alt="Tuvalu"
                      />
                      <span class="inner-label"> Tuvalu </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1214"
                      data-url="Ukraine-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ua-flag.jpg"
                        alt="Ukraine"
                      />
                      <span class="inner-label"> Ukraine </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1218"
                      data-url="Uzbekistan-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/uz-flag.jpg"
                        alt="Uzbekistan"
                      />
                      <span class="inner-label"> Uzbekistan </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1219"
                      data-url="Uruguay-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/uy-flag.jpg"
                        alt="Uruguay"
                      />
                      <span class="inner-label"> Uruguay </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1220"
                      data-url="Vanuatu-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/vu-flag.jpg"
                        alt="Vanuatu"
                      />
                      <span class="inner-label"> Vanuatu </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1221"
                      data-url="Venezuela-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ve-flag.jpg"
                        alt="Venezuela"
                      />
                      <span class="inner-label"> Venezuela </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1223"
                      data-url="Yemen-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ye-flag.jpg"
                        alt="Yemen"
                      />
                      <span class="inner-label"> Yemen </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1224"
                      data-url="Zimbabwe-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/zw-flag.jpg"
                        alt="Zimbabwe"
                      />
                      <span class="inner-label"> Zimbabwe </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1225"
                      data-url="Zambia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/zm-flag.jpg"
                        alt="Zambia"
                      />
                      <span class="inner-label"> Zambia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1226"
                      data-url="Palestine-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ps-flag.jpg"
                        alt="Palestine"
                      />
                      <span class="inner-label"> Palestine </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1227"
                      data-url="Vatican-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/va-flag.jpg"
                        alt="Vatican"
                      />
                      <span class="inner-label"> Vatican </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1228"
                      data-url="Anguilla-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ai-flag.jpg"
                        alt="Anguilla"
                      />
                      <span class="inner-label"> Anguilla </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1229"
                      data-url="American-Samoa-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/as-flag.jpg"
                        alt="American Samoa"
                      />
                      <span class="inner-label"> American Samoa </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1230"
                      data-url="Aruba-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/aw-flag.jpg"
                        alt="Aruba"
                      />
                      <span class="inner-label"> Aruba </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1231"
                      data-url="Bermuda-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/bm-flag.jpg"
                        alt="Bermuda"
                      />
                      <span class="inner-label"> Bermuda </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1232"
                      data-url="British-Virgin-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/vg-flag.jpg"
                        alt="British Virgin Islands"
                      />
                      <span class="inner-label"> British Virgin Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1233"
                      data-url="Cayman-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ky-flag.jpg"
                        alt="Cayman Islands"
                      />
                      <span class="inner-label"> Cayman Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1234"
                      data-url="Falkland-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/fk-flag.jpg"
                        alt="Falkland Islands"
                      />
                      <span class="inner-label"> Falkland Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1235"
                      data-url="Cook-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ck-flag.jpg"
                        alt="Cook Islands"
                      />
                      <span class="inner-label"> Cook Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1236"
                      data-url="French-Guiana-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gf-flag.jpg"
                        alt="French Guiana"
                      />
                      <span class="inner-label"> French Guiana </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1237"
                      data-url="French-Polynesia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pf-flag.jpg"
                        alt="French Polynesia"
                      />
                      <span class="inner-label"> French Polynesia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1238"
                      data-url="Gibraltar-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gi-flag.jpg"
                        alt="Gibraltar"
                      />
                      <span class="inner-label"> Gibraltar </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1239"
                      data-url="Greenland-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gl-flag.jpg"
                        alt="Greenland"
                      />
                      <span class="inner-label"> Greenland </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1240"
                      data-url="Guam-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/gu-flag.jpg"
                        alt="Guam"
                      />
                      <span class="inner-label"> Guam </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1242"
                      data-url="Guadeloupe-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/1280px-flag-of-france-svg-1.png"
                        alt="Guadeloupe"
                      />
                      <span class="inner-label"> Guadeloupe </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1244"
                      data-url="Montserrat-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/ms-flag.jpg"
                        alt="Montserrat"
                      />
                      <span class="inner-label"> Montserrat </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1245"
                      data-url="New-Caledonia-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nc-flag.jpg"
                        alt="New Caledonia"
                      />
                      <span class="inner-label"> New Caledonia </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1246"
                      data-url="Northern-Mariana-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/mp-flag.jpg"
                        alt="Northern Mariana Islands"
                      />
                      <span class="inner-label"> Northern Mariana Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1247"
                      data-url="Niue-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nu-flag.jpg"
                        alt="Niue"
                      />
                      <span class="inner-label"> Niue </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1248"
                      data-url="Norfolk-Island-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/nf-flag.jpg"
                        alt="Norfolk Island"
                      />
                      <span class="inner-label"> Norfolk Island </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1249"
                      data-url="Pitcairn-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pn-flag.jpg"
                        alt="Pitcairn"
                      />
                      <span class="inner-label"> Pitcairn </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1250"
                      data-url="Puerto-Rico-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/pr-flag.jpg"
                        alt="Puerto Rico"
                      />
                      <span class="inner-label"> Puerto Rico </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1252"
                      data-url="Tokelau-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tk-flag.jpg"
                        alt="Tokelau"
                      />
                      <span class="inner-label"> Tokelau </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1253"
                      data-url="U.S.-Virgin-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/vi-flag.jpg"
                        alt="U.S. Virgin Islands"
                      />
                      <span class="inner-label"> U.S. Virgin Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1255"
                      data-url="Turks-and-Caicos-Islands-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/tc-flag.jpg"
                        alt="Turks and Caicos Islands"
                      />
                      <span class="inner-label"> Turks and Caicos Islands </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1256"
                      data-url="Wallis-and-Futuna-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/wf-flag.jpg"
                        alt="Wallis and Futuna"
                      />
                      <span class="inner-label"> Wallis and Futuna </span>
                    </a>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 inner-item d-none"
                  >
                    <a
                      href="javascript:void(0)"
                      class="country-item"
                      data-id="1257"
                      data-url="Western-Sahara-en"
                    >
                      <img
                        class="inner-icon lazy"
                        data-src="https://way2gocms.hndedu.com//uploads/icon_countries/eh-flag.jpg"
                        alt="Western Sahara"
                      />
                      <span class="inner-label"> Western Sahara </span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="inner-button-bottom">
                <a
                  href="javascript:;"
                  class="button-show-all"
                  button-show-all=""
                  text-hidden="Show 200+ Countries"
                  text-show="Show 200+ Countries"
                >
                  Show 200+ Countries
                </a>
              </div>
            </div>
          </div>
          <!-- Hết Các quốc gia phổ biến -->
          <!-- eSIM khu vực -->
          <div class="tab-pane fade" id="tab-region" v-if="activeTab === 'regional'">
            <div class="inner-section-1 inner-section-region">
              <div class="box-head inner-center">
                <h2 class="inner-title">Popular Regions</h2>
              </div>
              <div class="row inner-list">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="15"
                    data-url="asia"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/asia-07.jpg"
                      alt="Asia"
                    />
                    <span class="inner-label"> Asia </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="30"
                    data-url="Southeast-Asia-en"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/southeast asia.jpg"
                      alt="Southeast Asia"
                    />
                    <span class="inner-label"> Southeast Asia </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="16"
                    data-url="europe"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/europe-07.jpg"
                      alt="Europe"
                    />
                    <span class="inner-label"> Europe </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="1031"
                    data-url="oceania"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/oceania-07.jpg"
                      alt="Oceania"
                    />
                    <span class="inner-label"> Oceania </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="31"
                    data-url="Middle-East-en"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/middle east-07.jpg"
                      alt="Middle East"
                    />
                    <span class="inner-label"> Middle East </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="33"
                    data-url="Africa-en"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/africa-07.jpg"
                      alt="Africa"
                    />
                    <span class="inner-label"> Africa </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 inner-item">
                  <a
                    href="javascript:;"
                    class="country-item region-item"
                    data-id="1030"
                    data-url="china-hong-kong-macau"
                  >
                    <img
                      class="inner-icon lazy"
                      data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/09/18/cn-hk-macau-07.jpg"
                      alt="China - Hong Kong - Macau"
                    />
                    <span class="inner-label"> China - Hong Kong - Macau </span>
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Hết eSIM khu vực -->
          <!-- eSIM toàn cầu -->
          <div class="tab-pane fade" id="tab-global" v-if="activeTab === 'global'">
            <div class="inner-section-2">
              <div class="box-head inner-center">
                <h2 class="inner-title">GLOBAL SIM</h2>
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <button
                    class="nav-link active"
                    data-toggle="tab"
                    data-target="#tab-esim-3-1"
                  >
                    Physical SIM
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link" data-toggle="tab" data-target="#tab-esim-3-2">
                    eSIM
                  </button>
                </li>
              </ul>

              <div class="tab-content">
                <!-- Tab Dữ liệu -->
                <div class="tab-pane fade show active" id="tab-esim-3-1">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30">
                      <div
                        class="sim-package-item"
                        style="
                          background: linear-gradient(to top, #09203f 0%, #537895 100%); ;
                        "
                        data-sim-pack="Gói cước"
                        data-sim-type="Physical Sim"
                      >
                        <div class="inner-header">
                          <div class="inner-discoun-tag-left">
                            <span>10%</span>
                            <span>off</span>
                          </div>
                          <div class="inner-title">GLOBAL6D15</div>
                          <div class="inner-image">
                            <img
                              data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/04/01/global-02.png"
                              class="lazy"
                            />
                          </div>
                        </div>
                        <div class="sim-package-info">
                          <ul class="inner-list">
                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-globe"></i> COVERAGE
                              </span>
                              <span class="inner-value">
                                <a
                                  href="javascript:;"
                                  class="inner-button open-modal-coverage"
                                  data-coverage="8,29,1034,1035,1039,1040,1041,1043,1045,1046,1048,1050,1052,1053,1054,1056,1057,1059,1066,1067,1069,1071,1072,1075,1076,1077,1078,1079,1081,1082,1083,1084,1085,1089,1090,1092,1093,1094,1097,1098,1099,1101,1102,1103,1106,1107,1108,1112,1114,1117,1118,1119,1120,1121,1122,1124,1125,1130,1131,1132,1133,1135,1137,1139,1140,1142,1145,1146,1147,1148,1150,1151,1152,1154,1155,1157,1160,1161,1162,1164,1165,1166,1167,1168,1169,1171,1172,1174,1179,1180,1181,1182,1183,1184,1187,1188,1191,1194,1195,1199,1201,1202,1204,1207,1209,1210,1212,1214,1217,1218,1219,1220,1227,1238,1239,1250,1253,7,10,19,22,1240,1109,27,9,25,23,6,24,1088,26,1096,28,1226,1173,1237,1134,11,4,1111"
                                  data-toggle="modal"
                                  data-target="#modalSearchLanguage"
                                >
                                  140 Countries
                                </a>
                              </span>
                            </li>

                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-right-left inner-rotate-90"></i>
                                DATA
                              </span>
                              <span class="inner-value"> 6GB </span>
                            </li>
                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-calendar"></i> VALIDITY
                              </span>
                              <span class="inner-value inner-color-item">
                                <span>15 Days</span>
                              </span>
                            </li>
                            <li class="current-price">
                              <span class="inner-label">
                                <i class="fa-solid fa-tag"></i> Price (includes VAT)
                              </span>
                              <span
                                class="inner-value inner-price"
                                data-price="1025100.0"
                              >
                                <small style="text-decoration: line-through">
                                  VND 1,139,000</small
                                >
                                <br />
                                VND 1,025,100
                                <br />
                                <small
                                  >~ USD <span class="convert-usd">40.68 </span></small
                                >
                              </span>
                            </li>
                            <li class="down-price">
                              <span class="inner-label">
                                <i class="fa-solid fa-tag"></i> Discount Price
                              </span>
                              <span
                                class="inner-value inner-price"
                                data-price="1025100.0"
                              >
                                VND 1,010,100
                                <br />
                                <small
                                  >~ USD <span class="convert-usd">40.08 </span></small
                                >
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div class="inner-footer">
                          <a
                            href="javascript:;"
                            class="inner-buy-now"
                            data-id="231"
                            data-url="global6d15-en"
                          >
                            BUY NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Hết Tab Dữ liệu -->
                <!-- Tab Dữ liệu / Cuộc gọi / Tin nhắn -->
                <div class="tab-pane fade" id="tab-esim-3-2">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30">
                      <div
                        class="sim-package-item"
                        style="
                          background: linear-gradient(to top, #09203f 0%, #537895 100%); ;
                        "
                        data-sim-pack="Package"
                        data-sim-type="E-Sim"
                      >
                        <div class="inner-header">
                          <div class="inner-discoun-tag-left">
                            <span>10%</span>
                            <span>off</span>
                          </div>
                          <div class="inner-title">eGLOBAL6T15</div>
                          <div class="inner-image">
                            <img
                              data-src="https://way2gocms.hndedu.com//uploads/thumb/2024/04/11/e-global-03.png"
                              class="lazy"
                            />
                          </div>
                        </div>
                        <div class="sim-package-info">
                          <ul class="inner-list">
                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-globe"></i> COVERAGE
                              </span>
                              <span class="inner-value">
                                <a
                                  href="javascript:;"
                                  class="inner-button open-modal-coverage"
                                  data-coverage="8,29,1034,1035,1039,1040,1041,1043,1045,1046,1048,1050,1052,1053,1054,1056,1057,1059,1066,1067,1069,1071,1072,1075,1076,1077,1078,1079,1081,1082,1083,1084,1085,1089,1090,1092,1093,1094,1097,1098,1099,1101,1102,1103,1106,1107,1108,1112,1114,1117,1118,1119,1120,1121,1122,1124,1125,1130,1131,1132,1133,1135,1137,1139,1140,1142,1145,1146,1147,1148,1150,1151,1152,1154,1155,1157,1160,1161,1162,1164,1165,1166,1167,1168,1169,1171,1172,1174,1179,1180,1181,1182,1183,1184,1187,1188,1191,1194,1195,1199,1201,1202,1204,1207,1209,1210,1212,1214,1217,1218,1219,1220,1227,1238,1239,1250,1253"
                                  data-toggle="modal"
                                  data-target="#modalSearchLanguage"
                                >
                                  117 Countries
                                </a>
                              </span>
                            </li>

                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-right-left inner-rotate-90"></i>
                                DATA
                              </span>
                              <span class="inner-value"> 6GB </span>
                            </li>
                            <li>
                              <span class="inner-label">
                                <i class="fa-solid fa-calendar"></i> VALIDITY
                              </span>
                              <span class="inner-value inner-color-item">
                                <span>15 Days</span>
                              </span>
                            </li>
                            <li class="current-price">
                              <span class="inner-label">
                                <i class="fa-solid fa-tag"></i> Price (includes VAT)
                              </span>
                              <span
                                class="inner-value inner-price"
                                data-price="1031400.0"
                              >
                                <small style="text-decoration: line-through">
                                  VND 1,146,000</small
                                >
                                <br />
                                VND 1,031,400
                                <br />
                                <small
                                  >~ USD <span class="convert-usd">40.93 </span></small
                                >
                              </span>
                            </li>
                            <li class="down-price">
                              <span class="inner-label">
                                <i class="fa-solid fa-tag"></i> Discount Price
                              </span>
                              <span
                                class="inner-value inner-price"
                                data-price="1031400.0"
                              >
                                VND 1,016,400
                                <br />
                                <small
                                  >~ USD <span class="convert-usd">40.33 </span></small
                                >
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div class="inner-footer">
                          <a
                            href="javascript:;"
                            class="inner-buy-now"
                            data-id="369"
                            data-url="eglobal6t15-en"
                          >
                            BUY NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Hết Tab Dữ liệu / Cuộc gọi / Tin nhắn -->
              </div>
            </div>
          </div>
          <!-- Hết eSIM toàn cầu -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Tabs Các loại sim -->
  <!-- Banner Full -->
  <div class="section-20">
    <a href="#">
      <img
        class="lazy"
        data-src="https://way2gocms.hndedu.com//uploads/2024/08/28/en-1.jpg"
        alt=""
      />
    </a>
  </div>

  <!-- End Banner Full -->
  <!-- Why Way2Go -->
  <div class="section-21 mobile-none">
    <div class="container">
      <div class="box-head">
        <h2 class="inner-title">Why choose Way2go?</h2>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/1.png"
                alt="RELIABLE QUALITY"
              />
            </div>
            <h3 class="inner-title">RELIABLE QUALITY</h3>
            <div class="inner-desc">
              <p>
                Easily usable with a fast and stable connection, our product is dedicated
                to safeguarding our customers&#39; personal data
              </p>

              <p>&nbsp;</p>

              <p>
                <br />
                <meta charset="utf-8" />
              </p>

              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/2-01.png"
                alt="SUITABLE FOR ALL NEEDS"
              />
            </div>
            <h3 class="inner-title">SUITABLE FOR ALL NEEDS</h3>
            <div class="inner-desc">
              <p>
                We offer a variety of options regarding product features and delivery
                methods
              </p>

              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/3-01.png"
                alt="24/7 CUSTOMER CARE"
              />
            </div>
            <h3 class="inner-title">24/7 CUSTOMER CARE</h3>
            <div class="inner-desc">
              <p>
                <meta charset="utf-8" />Our dedicated and professional advisory team is
                ready to answer any questions and support customers anytime, anywhere
                throughout your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-21 pc-none">
    <div class="container">
      <div class="box-head">
        <h2 class="inner-title">Why choose Way2go?</h2>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 slide-mobile-item">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/1.png"
                alt="RELIABLE QUALITY"
              />
            </div>
            <h3 class="inner-title">RELIABLE QUALITY</h3>
            <div class="inner-desc">
              <p>
                Easily usable with a fast and stable connection, our product is dedicated
                to safeguarding our customers&#39; personal data
              </p>

              <p>&nbsp;</p>

              <p>
                <br />
                <meta charset="utf-8" />
              </p>

              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 slide-mobile-item">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/2-01.png"
                alt="SUITABLE FOR ALL NEEDS"
              />
            </div>
            <h3 class="inner-title">SUITABLE FOR ALL NEEDS</h3>
            <div class="inner-desc">
              <p>
                We offer a variety of options regarding product features and delivery
                methods
              </p>

              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 slide-mobile-item">
          <div class="inner-item">
            <div class="inner-image">
              <img
                class="lazy"
                data-src="https://way2gocms.hndedu.com//uploads/2024/03/12/3-01.png"
                alt="24/7 CUSTOMER CARE"
              />
            </div>
            <h3 class="inner-title">24/7 CUSTOMER CARE</h3>
            <div class="inner-desc">
              <p>
                <meta charset="utf-8" />Our dedicated and professional advisory team is
                ready to answer any questions and support customers anytime, anywhere
                throughout your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End Why Way2Go -->

  <div class="section-21 feedback-block">
    <div class="container">
      <div class="box-head">
        <h2 class="inner-title">Feedback on Way2go</h2>
      </div>
      <div class="bao-fb">
        <Swiper
          class="bao-fb"
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          :spaceBetween="15"
          :navigation="true"
          :breakpoints="{
            768: {
              slidesPerView: 1, 
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide v-for="(feedback, index) in feedbacks" :key="index">
            <div class="inner-item inner-item-feedback">
              <div class="feedback-title-block">
                <img :data-src="feedback.img" class="feedback-item-flag lazy" />
                <h3 class="inner-title feedback-item-title">{{ feedback.name }}</h3>
              </div>
              <div class="inner-desc" style="text-align: justify">
                <p>{{ feedback.message }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  <div
    class="culture-info"
    data-package-alert-title="NOTE"
    data-package-alert-desc="You are unable to top up this SIM Card"
    data-package-alert-button="OK"
  ></div>

  <!-- End Our Partners -->

  <br />
  <!--Khoi Banner Bottom-->
  <!-- Section 23 -->
  <div class="section-23 lazy-bg">
    <div class="container">
      <div class="inner-section-1">
        <div class="inner-content">
          <h2 class="inner-title">Way2go Global Travel SIM</h2>
          <div class="inner-desc">
            <p style:font-size:21px="">
              <em>Enrich your travel experience while staying connected</em><br />
              &nbsp;
            </p>
          </div>
        </div>
        <div class="inner-image">
          <img
            class="lazy"
            data-src="https://way2gocms.hndedu.com//uploads/2024/03/19/mobile-mock.png"
            alt="Hình ảnh khối chân trang"
          />
        </div>
      </div>
      <div class="inner-section-2">
        <div class="inner-content">
          <div class="inner-title">Register your information and Activate your SIM</div>
          <a
            href="https://registration.way2go.vn/"
            target="_blank"
            class="button button-white button-full"
            >ACTIVATE</a
          >
        </div>
      </div>
    </div>
  </div>

  <!-- End Section 23 -->
  <!-- Footer -->

  <!-- End Footer -->
  <!-- mobile-bottom-menu -->
  <div class="mobile-bottom-menu-margin"></div>
  <div class="mobile-bottom-menu" style="z-index: 2">
    <a href="index.html" class="inner-item">
      <i class="fa-solid fa-home"></i>
      <span>Home</span>
    </a>
    <a
      href="javascript:void(0)"
      id="option_btn_mobile"
      class="inner-item mobile-smart-search active"
      :class="{
        option_btn_hidden_mobile: !isOpen,
      }"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-magnifying-glass"></i>
      <span>Smart Search</span>
    </a>

    <a href="javascript:void(0)" class="inner-item mobile-menu-account">
      <i class="fa-regular fa-circle-user"></i>
      <span>Account</span>
    </a>

    <div class="inner-sub-menu menu-mobile non-login">
      <ul>
        <li>
          <a href="my-cart.html">Cart</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link-sign-up">Create an account</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link-login">Sign in</a>
        </li>
      </ul>
    </div>
    <div class="inner-sub-menu menu-mobile logged-in" style="display: none">
      <ul>
        <li>
          <a href="my-sim.html">My SIMs</a>
        </li>
        <li>
          <a href="my-cart.html">Cart</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="change-password">Change the password</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="link-logout">Log out</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="option_wrapper" :class="{ open: isOpen }" style="z-index: 1">
    <div class="inner">
      <div style="text-align: center; padding-top: 40px">
        <h4>Looking for the most convenient SIM for you? Please input:</h4>
        <div>
          <div class="row bao">
            <div class="form-group col-md-6 col-sm-6">
              <label for="country">Location/Destination</label>
              <select
                id="country-select"
                name="country"
                class="form-control op-filter-country"
              ></select>
            </div>

            <div class="form-group col-md-6 col-sm-6">
              <label for="gb">Type of SIM</label>
              <select
                id="gb"
                name="gb"
                class="form-control op-filter-type filter-data-item"
              >
                <option value=""></option>
                <option value="Physical SIM">Physical SIM</option>
                <option value="E-Sim">E-SIM</option>
              </select>
            </div>

            <div class="form-group col-md-6 col-sm-6">
              <label for="date">Number of Days</label>
              <input
                type="number"
                class="form-control op-filter-validity filter-data-item"
              />
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
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
  <!-- Back to top-->
  <a
    href="#"
    class="btn back-to-top"
    role="button"
    aria-label="Quay lại đầu trang"
    style="
      position: fixed;
      bottom: 100px;
      right: 20px;
      display: none;
      z-index: 1000;
      background: linear-gradient(270deg, #aa5481, #e2444f);
      opacity: 1;
      color: white;
    "
    >↑</a
  >

  <!-- End mobile-bottom-menu -->
  <!-- Modal Buy Sim -->
  <div
    class="modal fade modal-buy-sim"
    id="modalBuySim"
    tabindex="-1"
    aria-hidden="true"
  ></div>
  <!-- End Modal Buy Sim -->
  <!-- Modal Search Language -->
  <div
    class="modal fade modal-language"
    id="modal-coverage"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Supported countries</div>
            <div class="box-search">
              <form action="#">
                <input type="text" placeholder="Country name" />
                <button type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div class="inner-list">
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Search Language -->
  <!-- Modal Search Network -->
  <div
    class="modal fade modal-language modal-search-network"
    id="modalSearchNetwork"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Mạng</div>
            <div class="inner-desc">Tốc độ có thể thay đổi tùy thuộc vào vị trí.</div>
            <div class="box-search">
              <form action="#">
                <input type="text" placeholder="Tên quốc gia" />
                <button type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div class="inner-list">
              <ul>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-viet-nam.png"
                      alt=""
                    />
                    <span class="inner-label">Việt Nam</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                      <span class="inner-item-network">
                        Mobily
                        <img src="/images/icons/icon-4g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-campuchia.png"
                      alt=""
                    />
                    <span class="inner-label">Campuchia</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                      <span class="inner-item-network">
                        Mobily
                        <img src="/images/icons/icon-4g.svg" alt="" />
                      </span>
                      <span class="inner-item-network">
                        Orange
                        <img src="/images/icons/icon-3g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img class="inner-flag" src="/images/icons/flag-hoa-ky.png" alt="" />
                    <span class="inner-label">Hoa Kỳ</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-indonesia.png"
                      alt=""
                    />
                    <span class="inner-label">Indonesia</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-malaysia.png"
                      alt=""
                    />
                    <span class="inner-label">Malaysia</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-new-zealand.png"
                      alt=""
                    />
                    <span class="inner-label">New Zealand</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-nhat-ban.png"
                      alt=""
                    />
                    <span class="inner-label">Nhật Bản</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-philippines.png"
                      alt=""
                    />
                    <span class="inner-label">Philippines</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-singapore.png"
                      alt=""
                    />
                    <span class="inner-label">Singapore</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-thai-lan.png"
                      alt=""
                    />
                    <span class="inner-label">Thái Lan</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img
                      class="inner-flag"
                      src="/images/icons/flag-trung-quoc.png"
                      alt=""
                    />
                    <span class="inner-label">Trung Quốc</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img class="inner-flag" src="/images/icons/flag-uc.png" alt="" />
                    <span class="inner-label">Úc</span>
                    <div class="inner-list-network">
                      <span class="inner-item-network">
                        Zain KSA
                        <img src="/images/icons/icon-5g.svg" alt="" />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Search Network -->
  <!-- Modal Change Language -->
  <div
    class="modal fade modal-language"
    id="modalChangeLanguage"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Select language</div>
            <div class="box-search">
              <form action="#">
                <input type="text" placeholder="Select language" />
                <button type="button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div class="inner-list">
              <ul>
                <li>
                  <a href="#">
                    <span>Tiếng Việt</span>
                    <i class="fa-solid fa-circle-check"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Modal Login-->
  <div class="modal fade modal-language" id="modalLogin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Log in</div>
            <div class="box-search">
              <form action="#">
                <input type="text" class="input-login-email" placeholder="Email" />
              </form>
            </div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-login-password"
                  placeholder="Password"
                />
              </form>
            </div>

            <div class="inner-button" style="text-align: center; margin-bottom: 30px">
              <button type="button" class="btn-login">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Modal Signup-->
  <div
    class="modal fade modal-language"
    id="modalSignup"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Register</div>
            <div class="box-search">
              <form action="#">
                <input type="text" class="input-signup-email" placeholder="Email" />
              </form>
            </div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-signup-password"
                  placeholder="Password"
                />
              </form>
            </div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-signup-confirm-password"
                  placeholder="Confirm Password"
                />
              </form>
            </div>

            <div class="inner-button" style="text-align: center; margin-bottom: 30px">
              <button type="button" class="btn-sign-up">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Change Password-->
  <div
    class="modal fade modal-language"
    id="modalChangePassword"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="inner-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
          <div class="inner-main box-language">
            <div class="inner-title">Change the password</div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-change-old-pass"
                  placeholder="Old password"
                />
              </form>
            </div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-change-new-pass"
                  placeholder="New Password"
                />
              </form>
            </div>
            <div class="box-search">
              <form action="#">
                <input
                  type="password"
                  class="input-change-new-confirm-pass"
                  placeholder="Confirm New Password"
                />
              </form>
            </div>

            <div class="inner-button" style="text-align: center; margin-bottom: 30px">
              <button type="button" class="btn-change-password">CHANGE PASSWORD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="loading-screen">
    <div class="loading-icon"></div>
    <div class="loading-text">
      Loading
      <br />
      Loading eSIM upto 2 mins
      <br />
      Loading... Please don&#39;t turn off browser
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const activeTab = ref("local"); // Đặt tab mặc định là 'local'
const isOpen = ref(false);
const feedbacks = ref([
  {
    img:
      "https://way2gocms.hndedu.com//uploads/2024/07/01/z5591004551981_4997ca6dd376270e730f979d15ad720d.jpg",
    name: "Sofia Rodrigues",
    message:
      "Thank you to the customer support team. You were so kind in advising my family not only about products but also about places to go. My family had a great time and wonderful memories.",
  },
  {
    img:
      "https://way2gocms.hndedu.com//uploads/2024/07/01/z5591004552111_ca4a6cfa6e10b4c0379c96e0b0531801.jpg",
    name: "Jan de Vries",
    message:
      "The quality and price exceeded our expectations, and we are very satisfied.",
  },
  {
    img:
      "https://way2gocms.hndedu.com//uploads/2024/07/01/z5591004575618_687583aa6d28b7af3507af2a18d10c53.jpg",
    name: "Maria Santos",
    message:
      "We encountered a few issues, but they were all resolved, and we felt satisfied because the staff was extremely helpful and enthusiastic.",
  },
]);
const setActiveTab = (tab) => {
  activeTab.value = tab; // Cập nhật tab đang hoạt động
};

// Toggle the sidebar open or closed
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
  padding: 8px 0 20px 0;
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
.bao-fb {
  padding: 10px;
}

</style>
