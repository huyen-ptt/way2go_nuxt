<template>
  <header class="header header-white">
    <div id="option_btn" class="option_btn_hidden_mobile">
      <a> Smart Search </a>
    </div>
    <div id="option_wrapper">
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
                >
                  <option value=""></option>
                  <option
                    value="4"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-viet-nam.png"
                  >
                    Vietnam
                  </option>
                  <option
                    value="5"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-thai-lan.png"
                  >
                    Thailand
                  </option>
                  <option
                    value="6"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/25/singapore flag-01.png"
                  >
                    Singapore
                  </option>
                  <option
                    value="7"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-malaysia.png"
                  >
                    Malaysia
                  </option>
                  <option
                    value="8"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-campuchia.png"
                  >
                    Cambodia
                  </option>
                  <option
                    value="9"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-philippines.png"
                  >
                    Philippines
                  </option>
                  <option
                    value="10"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-uc.png"
                  >
                    Australia
                  </option>
                  <option
                    value="11"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-hoa-ky.png"
                  >
                    United States
                  </option>
                  <option
                    value="19"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/02/07/flag-trung-quoc.png"
                  >
                    China
                  </option>
                  <option value="20" data-flag="">New Zealand</option>
                  <option
                    value="22"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/2024/03/28/z5293142780315_07b22c08b7de9e17013c11f318367754.jpg"
                  >
                    Hong Kong
                  </option>
                  <option
                    value="23"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/macau flag.png"
                  >
                    Macao
                  </option>
                  <option
                    value="24"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/korea flag.png"
                  >
                    South Korea
                  </option>
                  <option
                    value="25"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/japan flag.png"
                  >
                    Japan
                  </option>
                  <option
                    value="26"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/taiwan flag.png"
                  >
                    Taiwan
                  </option>
                  <option
                    value="27"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/india flag.png"
                  >
                    India
                  </option>
                  <option
                    value="28"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/dubai flag.png"
                  >
                    United Arab Emirates
                  </option>
                  <option
                    value="29"
                    data-flag="https://way2gocms.hndedu.com//uploads/thumb/2024/03/22/canada flag.png"
                  >
                    Canada
                  </option>
                  <option
                    value="1033"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ao-flag.jpg"
                  >
                    Angola
                  </option>
                  <option
                    value="1034"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/al-flag.jpg"
                  >
                    Albania
                  </option>
                  <option
                    value="1035"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/af-flag.jpg"
                  >
                    Afghanistan
                  </option>
                  <option
                    value="1036"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ag-flag.jpg"
                  >
                    Antigua and Barbuda
                  </option>
                  <option
                    value="1037"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/dz-flag.jpg"
                  >
                    Algeria
                  </option>
                  <option
                    value="1038"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ad-flag.jpg"
                  >
                    Andorra
                  </option>
                  <option
                    value="1039"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/am-flag.jpg"
                  >
                    Armenia
                  </option>
                  <option
                    value="1040"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/at-flag.jpg"
                  >
                    Austria
                  </option>
                  <option
                    value="1041"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ar-flag.jpg"
                  >
                    Argentina
                  </option>
                  <option
                    value="1043"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/az-flag.jpg"
                  >
                    Azerbaijan
                  </option>
                  <option
                    value="1044"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bs-flag.jpg"
                  >
                    Bahamas
                  </option>
                  <option
                    value="1045"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bh-flag.jpg"
                  >
                    Bahrain
                  </option>
                  <option
                    value="1046"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bd-flag.jpg"
                  >
                    Bangladesh
                  </option>
                  <option
                    value="1047"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bb-flag.jpg"
                  >
                    Barbados
                  </option>
                  <option
                    value="1048"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/by-flag.jpg"
                  >
                    Belarus
                  </option>
                  <option
                    value="1049"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bz-flag.jpg"
                  >
                    Belize
                  </option>
                  <option
                    value="1050"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/be-flag.jpg"
                  >
                    Belgium
                  </option>
                  <option
                    value="1051"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bj-flag.jpg"
                  >
                    Benin
                  </option>
                  <option
                    value="1052"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bt-flag.jpg"
                  >
                    Bhutan
                  </option>
                  <option
                    value="1053"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bo-flag.jpg"
                  >
                    Bolivia
                  </option>
                  <option
                    value="1054"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ba-flag.jpg"
                  >
                    Bosnia and Herzegovina
                  </option>
                  <option
                    value="1055"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bw-flag.jpg"
                  >
                    Botswana
                  </option>
                  <option
                    value="1056"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/br-flag.jpg"
                  >
                    Brazil
                  </option>
                  <option
                    value="1057"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bn-flag.jpg"
                  >
                    Brunei
                  </option>
                  <option
                    value="1058"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bf-flag.jpg"
                  >
                    Burkina Faso
                  </option>
                  <option
                    value="1059"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bg-flag.jpg"
                  >
                    Bulgaria
                  </option>
                  <option
                    value="1060"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cm-flag.jpg"
                  >
                    Cameroon
                  </option>
                  <option
                    value="1062"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bi-flag.jpg"
                  >
                    Burundi
                  </option>
                  <option
                    value="1064"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cf-flag.jpg"
                  >
                    Central African Republic
                  </option>
                  <option
                    value="1065"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cv-flag.jpg"
                  >
                    Cape Verde
                  </option>
                  <option
                    value="1066"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cl-flag.jpg"
                  >
                    Chile
                  </option>
                  <option
                    value="1067"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/td-flag.jpg"
                  >
                    Chad
                  </option>
                  <option
                    value="1069"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/co-flag.jpg"
                  >
                    Colombia
                  </option>
                  <option
                    value="1070"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/km-flag.jpg"
                  >
                    Comoros
                  </option>
                  <option
                    value="1071"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cr-flag.jpg"
                  >
                    Costa Rica
                  </option>
                  <option
                    value="1072"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cg-flag.jpg"
                  >
                    Republic of the Congo
                  </option>
                  <option
                    value="1073"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ci-flag.jpg"
                  >
                    Ivory Coast
                  </option>
                  <option
                    value="1074"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cu-flag.jpg"
                  >
                    Cuba
                  </option>
                  <option
                    value="1075"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/hr-flag.jpg"
                  >
                    Croatia
                  </option>
                  <option
                    value="1076"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cy-flag.jpg"
                  >
                    Cyprus
                  </option>
                  <option
                    value="1077"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cz-flag.jpg"
                  >
                    Czech Republic
                  </option>
                  <option
                    value="1078"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/dk-flag.jpg"
                  >
                    Denmark
                  </option>
                  <option
                    value="1079"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/cd-flag.jpg"
                  >
                    Democratic Republic of the Congo
                  </option>
                  <option
                    value="1080"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/dj-flag.jpg"
                  >
                    Djibouti
                  </option>
                  <option
                    value="1081"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/dm-flag.jpg"
                  >
                    Dominica
                  </option>
                  <option
                    value="1082"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ec-flag.jpg"
                  >
                    Ecuador
                  </option>
                  <option
                    value="1083"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/do-flag.jpg"
                  >
                    Dominican Republic
                  </option>
                  <option
                    value="1084"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/eg-flag.jpg"
                  >
                    Egypt
                  </option>
                  <option
                    value="1085"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sv-flag.jpg"
                  >
                    El Salvador
                  </option>
                  <option
                    value="1086"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gq-flag.jpg"
                  >
                    Equatorial Guinea
                  </option>
                  <option
                    value="1087"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/er-flag.jpg"
                  >
                    Eritrea
                  </option>
                  <option
                    value="1088"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sz-flag.jpg"
                  >
                    Eswatini
                  </option>
                  <option
                    value="1089"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ee-flag.jpg"
                  >
                    Estonia
                  </option>
                  <option
                    value="1090"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/fj-flag.jpg"
                  >
                    Fiji
                  </option>
                  <option
                    value="1091"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/et-flag.jpg"
                  >
                    Ethiopia
                  </option>
                  <option
                    value="1092"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/fi-flag.jpg"
                  >
                    Finland
                  </option>
                  <option
                    value="1093"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/fr-flag.jpg"
                  >
                    France
                  </option>
                  <option
                    value="1094"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ga-flag.jpg"
                  >
                    Gabon
                  </option>
                  <option
                    value="1095"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gm-flag.jpg"
                  >
                    Gambia
                  </option>
                  <option
                    value="1096"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ge-flag.jpg"
                  >
                    Georgia
                  </option>
                  <option
                    value="1097"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/de-flag.jpg"
                  >
                    Germany
                  </option>
                  <option
                    value="1098"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gr-flag.jpg"
                  >
                    Greece
                  </option>
                  <option
                    value="1099"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gh-flag.jpg"
                  >
                    Ghana
                  </option>
                  <option
                    value="1100"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gd-flag.jpg"
                  >
                    Grenada
                  </option>
                  <option
                    value="1101"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gt-flag.jpg"
                  >
                    Guatemala
                  </option>
                  <option
                    value="1102"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gn-flag.jpg"
                  >
                    Guinea
                  </option>
                  <option
                    value="1103"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gy-flag.jpg"
                  >
                    Guyana
                  </option>
                  <option
                    value="1104"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gw-flag.jpg"
                  >
                    Guinea-Bissau
                  </option>
                  <option
                    value="1105"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ht-flag.jpg"
                  >
                    Haiti
                  </option>
                  <option
                    value="1106"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/hu-flag.jpg"
                  >
                    Hungary
                  </option>
                  <option
                    value="1107"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/hn-flag.jpg"
                  >
                    Honduras
                  </option>
                  <option
                    value="1108"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/is-flag.jpg"
                  >
                    Iceland
                  </option>
                  <option
                    value="1109"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/id-flag.jpg"
                  >
                    Indonesia
                  </option>
                  <option
                    value="1111"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ir-flag.jpg"
                  >
                    Iran
                  </option>
                  <option
                    value="1112"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ie-flag.jpg"
                  >
                    Ireland
                  </option>
                  <option
                    value="1113"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/iq-flag.jpg"
                  >
                    Iraq
                  </option>
                  <option
                    value="1114"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/il-flag.jpg"
                  >
                    Israel
                  </option>
                  <option
                    value="1116"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/jm-flag.jpg"
                  >
                    Jamaica
                  </option>
                  <option
                    value="1117"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/it-flag.jpg"
                  >
                    Italy
                  </option>
                  <option
                    value="1118"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/kz-flag.jpg"
                  >
                    Kazakhstan
                  </option>
                  <option
                    value="1119"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/jo-flag.jpg"
                  >
                    Jordan
                  </option>
                  <option
                    value="1120"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ke-flag.jpg"
                  >
                    Kenya
                  </option>
                  <option
                    value="1121"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/kg-flag.jpg"
                  >
                    Kyrgyzstan
                  </option>
                  <option
                    value="1122"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/kw-flag.jpg"
                  >
                    Kuwait
                  </option>
                  <option
                    value="1123"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ki-flag.jpg"
                  >
                    Kiribati
                  </option>
                  <option
                    value="1124"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lv-flag.jpg"
                  >
                    Latvia
                  </option>
                  <option
                    value="1125"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/la-flag.jpg"
                  >
                    Laos
                  </option>
                  <option
                    value="1126"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lb-flag.jpg"
                  >
                    Lebanon
                  </option>
                  <option
                    value="1127"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ly-flag.jpg"
                  >
                    Libya
                  </option>
                  <option
                    value="1128"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lr-flag.jpg"
                  >
                    Liberia
                  </option>
                  <option
                    value="1129"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ls-flag.jpg"
                  >
                    Lesotho
                  </option>
                  <option
                    value="1130"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lt-flag.jpg"
                  >
                    Lithuania
                  </option>
                  <option
                    value="1131"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/li-flag.jpg"
                  >
                    Liechtenstein
                  </option>
                  <option
                    value="1132"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lu-flag.jpg"
                  >
                    Luxembourg
                  </option>
                  <option
                    value="1133"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mk-flag.jpg"
                  >
                    Macedonia
                  </option>
                  <option
                    value="1134"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mv-flag.jpg"
                  >
                    Maldives
                  </option>
                  <option
                    value="1135"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mw-flag.jpg"
                  >
                    Malawi
                  </option>
                  <option
                    value="1137"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mg-flag.jpg"
                  >
                    Madagascar
                  </option>
                  <option
                    value="1138"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ml-flag.jpg"
                  >
                    Mali
                  </option>
                  <option
                    value="1139"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mt-flag.jpg"
                  >
                    Malta
                  </option>
                  <option
                    value="1140"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mr-flag.jpg"
                  >
                    Mauritania
                  </option>
                  <option
                    value="1141"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mu-flag.jpg"
                  >
                    Mauritius
                  </option>
                  <option
                    value="1142"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mx-flag.jpg"
                  >
                    Mexico
                  </option>
                  <option
                    value="1143"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/fm-flag.jpg"
                  >
                    Micronesia
                  </option>
                  <option
                    value="1144"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mh-flag.jpg"
                  >
                    Marshall Islands
                  </option>
                  <option
                    value="1145"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/md-flag.jpg"
                  >
                    Moldova
                  </option>
                  <option
                    value="1146"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/me-flag.jpg"
                  >
                    Montenegro
                  </option>
                  <option
                    value="1147"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ma-flag.jpg"
                  >
                    Morocco
                  </option>
                  <option
                    value="1148"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mn-flag.jpg"
                  >
                    Mongolia
                  </option>
                  <option
                    value="1149"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mz-flag.jpg"
                  >
                    Mozambique
                  </option>
                  <option
                    value="1150"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mc-flag.jpg"
                  >
                    Monaco
                  </option>
                  <option
                    value="1151"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nr-flag.jpg"
                  >
                    Nauru
                  </option>
                  <option
                    value="1152"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nl-flag.jpg"
                  >
                    Netherlands
                  </option>
                  <option
                    value="1153"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mm-flag.jpg"
                  >
                    Myanmar
                  </option>
                  <option
                    value="1154"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nz-flag.jpg"
                  >
                    New Zealand
                  </option>
                  <option
                    value="1155"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/np-flag.jpg"
                  >
                    Nepal
                  </option>
                  <option
                    value="1156"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/na-flag.jpg"
                  >
                    Namibia
                  </option>
                  <option
                    value="1157"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ni-flag.jpg"
                  >
                    Nicaragua
                  </option>
                  <option
                    value="1158"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ne-flag.jpg"
                  >
                    Niger
                  </option>
                  <option
                    value="1159"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/kp-flag.jpg"
                  >
                    North Korea
                  </option>
                  <option
                    value="1160"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/no-flag.jpg"
                  >
                    Norway
                  </option>
                  <option
                    value="1161"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ng-flag.jpg"
                  >
                    Nigeria
                  </option>
                  <option
                    value="1162"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/om-flag.jpg"
                  >
                    Oman
                  </option>
                  <option
                    value="1163"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pw-flag.jpg"
                  >
                    Palau
                  </option>
                  <option
                    value="1164"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pk-flag.jpg"
                  >
                    Pakistan
                  </option>
                  <option
                    value="1165"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pa-flag.jpg"
                  >
                    Panama
                  </option>
                  <option
                    value="1166"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pe-flag.jpg"
                  >
                    Peru
                  </option>
                  <option
                    value="1167"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/py-flag.jpg"
                  >
                    Paraguay
                  </option>
                  <option
                    value="1168"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pg-flag.jpg"
                  >
                    Papua New Guinea
                  </option>
                  <option
                    value="1169"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pl-flag.jpg"
                  >
                    Poland
                  </option>
                  <option
                    value="1171"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ro-flag.jpg"
                  >
                    Romania
                  </option>
                  <option
                    value="1172"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/qa-flag.jpg"
                  >
                    Qatar
                  </option>
                  <option
                    value="1173"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ru-flag.jpg"
                  >
                    Russia
                  </option>
                  <option
                    value="1174"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pt-flag.jpg"
                  >
                    Portugal
                  </option>
                  <option
                    value="1175"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/rw-flag.jpg"
                  >
                    Rwanda
                  </option>
                  <option
                    value="1176"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/kn-flag.jpg"
                  >
                    Saint Kitts and Nevis
                  </option>
                  <option
                    value="1177"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/st-flag.jpg"
                  >
                    Sao Tome and Principe
                  </option>
                  <option
                    value="1178"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lc-flag.jpg"
                  >
                    Saint Lucia
                  </option>
                  <option
                    value="1179"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ws-flag.jpg"
                  >
                    Samoa
                  </option>
                  <option
                    value="1180"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sm-flag.jpg"
                  >
                    San Marino
                  </option>
                  <option
                    value="1181"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sa-flag.jpg"
                  >
                    Saudi Arabia
                  </option>
                  <option
                    value="1182"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sc-flag.jpg"
                  >
                    Seychelles
                  </option>
                  <option
                    value="1183"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sn-flag.jpg"
                  >
                    Senegal
                  </option>
                  <option
                    value="1184"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/rs-flag.jpg"
                  >
                    Serbia
                  </option>
                  <option
                    value="1185"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sl-flag.jpg"
                  >
                    Sierra Leone
                  </option>
                  <option
                    value="1187"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/si-flag.jpg"
                  >
                    Slovenia
                  </option>
                  <option
                    value="1188"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sk-flag.jpg"
                  >
                    Slovakia
                  </option>
                  <option
                    value="1189"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/so-flag.jpg"
                  >
                    Somalia
                  </option>
                  <option
                    value="1191"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sb-flag.jpg"
                  >
                    Solomon Islands
                  </option>
                  <option
                    value="1193"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ss-flag.jpg"
                  >
                    South Sudan
                  </option>
                  <option
                    value="1194"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/es-flag.jpg"
                  >
                    Spain
                  </option>
                  <option
                    value="1195"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/lk-flag.jpg"
                  >
                    Sri Lanka
                  </option>
                  <option
                    value="1196"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/vc-flag.jpg"
                  >
                    Saint Vincent and the Grenadines
                  </option>
                  <option
                    value="1197"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sd-flag.jpg"
                  >
                    Sudan
                  </option>
                  <option
                    value="1198"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sr-flag.jpg"
                  >
                    Suriname
                  </option>
                  <option
                    value="1199"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/se-flag.jpg"
                  >
                    Sweden
                  </option>
                  <option
                    value="1200"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/sy-flag.jpg"
                  >
                    Syria
                  </option>
                  <option
                    value="1201"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ch-flag.png"
                  >
                    Switzerland
                  </option>
                  <option
                    value="1202"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tj-flag.jpg"
                  >
                    Tajikistan
                  </option>
                  <option
                    value="1204"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tz-flag.jpg"
                  >
                    Tanzania
                  </option>
                  <option
                    value="1205"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tl-flag.jpg"
                  >
                    East Timor
                  </option>
                  <option
                    value="1206"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tg-flag.jpg"
                  >
                    Togo
                  </option>
                  <option
                    value="1207"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/to-flag.jpg"
                  >
                    Tonga
                  </option>
                  <option
                    value="1208"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tt-flag.jpg"
                  >
                    Trinidad and Tobago
                  </option>
                  <option
                    value="1209"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tn-flag.jpg"
                  >
                    Tunisia
                  </option>
                  <option
                    value="1210"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tr-flag.jpg"
                  >
                    Turkey
                  </option>
                  <option
                    value="1211"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tm-flag.jpg"
                  >
                    Turkmenistan
                  </option>
                  <option
                    value="1212"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ug-flag.jpg"
                  >
                    Uganda
                  </option>
                  <option
                    value="1213"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tv-flag.jpg"
                  >
                    Tuvalu
                  </option>
                  <option
                    value="1214"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ua-flag.jpg"
                  >
                    Ukraine
                  </option>
                  <option
                    value="1217"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/uk-flag.jpg"
                  >
                    United Kingdom
                  </option>
                  <option
                    value="1218"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/uz-flag.jpg"
                  >
                    Uzbekistan
                  </option>
                  <option
                    value="1219"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/uy-flag.jpg"
                  >
                    Uruguay
                  </option>
                  <option
                    value="1220"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/vu-flag.jpg"
                  >
                    Vanuatu
                  </option>
                  <option
                    value="1221"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ve-flag.jpg"
                  >
                    Venezuela
                  </option>
                  <option
                    value="1223"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ye-flag.jpg"
                  >
                    Yemen
                  </option>
                  <option
                    value="1224"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/zw-flag.jpg"
                  >
                    Zimbabwe
                  </option>
                  <option
                    value="1225"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/zm-flag.jpg"
                  >
                    Zambia
                  </option>
                  <option
                    value="1226"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ps-flag.jpg"
                  >
                    Palestine
                  </option>
                  <option
                    value="1227"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/va-flag.jpg"
                  >
                    Vatican
                  </option>
                  <option
                    value="1228"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ai-flag.jpg"
                  >
                    Anguilla
                  </option>
                  <option
                    value="1229"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/as-flag.jpg"
                  >
                    American Samoa
                  </option>
                  <option
                    value="1230"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/aw-flag.jpg"
                  >
                    Aruba
                  </option>
                  <option
                    value="1231"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/bm-flag.jpg"
                  >
                    Bermuda
                  </option>
                  <option
                    value="1232"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/vg-flag.jpg"
                  >
                    British Virgin Islands
                  </option>
                  <option
                    value="1233"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ky-flag.jpg"
                  >
                    Cayman Islands
                  </option>
                  <option
                    value="1234"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/fk-flag.jpg"
                  >
                    Falkland Islands
                  </option>
                  <option
                    value="1235"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ck-flag.jpg"
                  >
                    Cook Islands
                  </option>
                  <option
                    value="1236"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gf-flag.jpg"
                  >
                    French Guiana
                  </option>
                  <option
                    value="1237"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pf-flag.jpg"
                  >
                    French Polynesia
                  </option>
                  <option
                    value="1238"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gi-flag.jpg"
                  >
                    Gibraltar
                  </option>
                  <option
                    value="1239"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gl-flag.jpg"
                  >
                    Greenland
                  </option>
                  <option
                    value="1240"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/gu-flag.jpg"
                  >
                    Guam
                  </option>
                  <option
                    value="1242"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/1280px-flag-of-france-svg-1.png"
                  >
                    Guadeloupe
                  </option>
                  <option
                    value="1244"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/ms-flag.jpg"
                  >
                    Montserrat
                  </option>
                  <option
                    value="1245"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nc-flag.jpg"
                  >
                    New Caledonia
                  </option>
                  <option
                    value="1246"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/mp-flag.jpg"
                  >
                    Northern Mariana Islands
                  </option>
                  <option
                    value="1247"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nu-flag.jpg"
                  >
                    Niue
                  </option>
                  <option
                    value="1248"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/nf-flag.jpg"
                  >
                    Norfolk Island
                  </option>
                  <option
                    value="1249"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pn-flag.jpg"
                  >
                    Pitcairn
                  </option>
                  <option
                    value="1250"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/pr-flag.jpg"
                  >
                    Puerto Rico
                  </option>
                  <option
                    value="1252"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tk-flag.jpg"
                  >
                    Tokelau
                  </option>
                  <option
                    value="1253"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/vi-flag.jpg"
                  >
                    U.S. Virgin Islands
                  </option>
                  <option
                    value="1255"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/tc-flag.jpg"
                  >
                    Turks and Caicos Islands
                  </option>
                  <option
                    value="1256"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/wf-flag.jpg"
                  >
                    Wallis and Futuna
                  </option>
                  <option
                    value="1257"
                    data-flag="../way2gocms.hndedu.com/uploads/thumb/icon_countries/eh-flag.jpg"
                  >
                    Western Sahara
                  </option>

                  <!-- Thêm các quốc gia khác nếu cần -->
                </select>
              </div>
              <!-- Phần chọn ngày -->
              <!-- Phần chọn GB -->
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
                  <!-- Thêm các tùy chọn khác nếu cần -->
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
                    <!-- Thêm các tùy chọn khác -->
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
                and we will locate SIM packages customized for you
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
<script></script>
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
