<template>
  <v-app>
    <v-app-bar>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid" id="tempaltemo_footer">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <RouterLink class="" height="20" to="/"
              ><img
                class="rounded mx-auto d-flex"
                height="50"
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/275633183_1135621107238413_1171249526499035546_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHjRqfteklzKRj2sBiNtBBuDu2XYp7yj5wO7ZdinvKPnJG8wIXtOy3cDY8S3Ey7HNbrWphijmS_yKSVLfGmEzAV&_nc_ohc=-JSExGZYdGQAX-mPf86&_nc_ht=scontent.fbkk12-3.fna&oh=03_AVKSdi40JJ3JH8b-_HZDn9x_-49V7AF_QPGiXduEDBfBrA&oe=625B6DA1"
            /></RouterLink>
            <RouterLink class="nav-link mx-3" to="/">Home</RouterLink>
            <RouterLink class="nav-link mx-3" to="/about">About</RouterLink>
          </ul>
          <div class="align-self-center d-flex">
            <div class="services-icon-wap nav-link" @click="openNav()">
              <div class="btn btn-default btn-sm text-light">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
              </div>
            </div>
            <RouterLink
              :to="'/login'"
              class="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="services-icon-wap">
                <div class="btn btn-default btn-sm text-light">
                  <i class="fa fa-user" aria-hidden="true"> Login </i>
                </div>
              </div>
            </RouterLink>

            <RouterLink class="nav-link mx-3" to="/adminadd"
              ><div class="services-icon-wap">
                <div class="btn btn-default btn-sm text-light">
                  <i class="fa fa-universal-access" aria-hidden="true">
                    Admin
                  </i>
                </div>
              </div></RouterLink
            >
          </div>
        </div>
        <!-- Button trigger modal -->
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <LoginWeb></LoginWeb>
            </div>
          </div>
        </div>
      </div>
    </v-app-bar>
    <main>
      <RouterView />
      <div id="mySidebar" class="sidebar sticky-left d-fiex md-auto my-auto">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <ul class="list-unstyled d-flex text justify-content-center mb-1">
          <li>
            <img
              class="rounded mx-auto d-block"
              height="150"
              src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/274722071_970864530457553_6462074109121752508_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF-3Zy2eJTktuarb1YMqMVTF8EkwTAg164XwSTBMCDXrpvv2IbVz8MjsAEdcTrBYFCMe5bdT1eVNYcwMp5-wrS-&_nc_ohc=nb7ZNcDEYQ0AX9_QuPn&tn=tKb_RwPL5KgCC2W1&_nc_ht=scontent.fbkk8-4.fna&oh=03_AVLygMEp5insrL99MeFJeWSF6oIyqTISXODfHWRy9NVzpA&oe=625960C5"
            />
          </li>
        </ul>
        <CartshopVue></CartshopVue>
      </div>
    </main>
  </v-app>
  <!-- Start Brands -->
  <section class="bg-light py-5">
    <div class="container my-4">
      <div class="row text-center py-3">
        <div class="col-lg-115 m-auto">
          <h1 class="h1">🧁🥧ขนมมีจำหน่ายหน่ายหน้าร้านทุกวัน🎂🍩</h1>
          <p>✅ไม่ต้องรอพรีออเดอร์ ✅ไม่ต้องต่อคิว</p>
          <ul class="list-unstyled d-flex text justify-content-center mb-1">
            <li>
              <img
                class="rounded mx-auto d-block"
                height="150"
                src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/154253651_1052587721895884_2690382127645153159_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE-iHEpD3two8nml0CvUedhP9Tte6wXx3A_1O17rBfHcIi4qQJ2FQJhxlT7F6x_l9QRSgZ6zS_D8oRf7566bFda&_nc_ohc=gkEMVLNeoRkAX9YCUMB&tn=tKb_RwPL5KgCC2W1&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT8-CZDxvHzhyPNN3wiFwUVx_hBFQK0NhaFGjgJ8TkBk2g&oe=625AF392"
              />
            </li>
            <li>
              <img
                class="rounded mx-auto d-block"
                height="150"
                src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/274722071_970864530457553_6462074109121752508_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF-3Zy2eJTktuarb1YMqMVTF8EkwTAg164XwSTBMCDXrpvv2IbVz8MjsAEdcTrBYFCMe5bdT1eVNYcwMp5-wrS-&_nc_ohc=nb7ZNcDEYQ0AX9_QuPn&tn=tKb_RwPL5KgCC2W1&_nc_ht=scontent.fbkk8-4.fna&oh=03_AVLygMEp5insrL99MeFJeWSF6oIyqTISXODfHWRy9NVzpA&oe=625960C5"
              />
            </li>
          </ul>
        </div>
        <div class="col-lg-9 m-auto tempaltemo-carousel">
          <div class="row d-flex flex-row">
            <!--Controls-->
            <div class="col-1 align-self-center">
              <a
                class="h1"
                href="#multi-item-example"
                role="button"
                data-bs-slide="prev"
              >
                <i class="text-dark fas fa-chevron-left"></i>
              </a>
            </div>
            <!--End Controls-->

            <!--Carousel Wrapper-->
            <div class="col">
              <div
                class="carousel slide carousel-multi-item pt- pt-md-0"
                id="multi-item-example"
                data-bs-ride="carousel"
              >
                <!--Slides-->
                <div class="carousel-inner product-links-wap" role="listbox">
                  <!--First slide-->
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/36878490_1807170392675961_460094935610163200_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFFvzh_WdmFq3GVUVMmaEJWFIEyCoHgruAUgTIKgeCu4F9UvRweev-2KkHMySPGn-UzPBR0LkLqTzIhAh8OQCcl&_nc_ohc=ByKehgE_rBAAX8lEUzf&_nc_ht=scontent.fbkk12-2.fna&oh=00_AT_4yPLy-SKjj_gTYPgK6JKuC95fsL8E0XGjBvFps96l6g&oe=6259740F"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/106298229_104214971350661_2623156805919295021_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFVELlw3-2sdrtx3G0bh7znJ8YpQjEnLFwnxilCMScsXP0QFt4hqTBS-38mNPTdRoatM0cEV_OO2BzbnnkoVhle&_nc_ohc=XxSJ0ur24UUAX_tyJJf&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT-5V72tJ1WDo6ArqkLR4e4G3rwZZG4vd_gbGNCDBNFCrw&oe=625A9334"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/69631794_1374536956028105_566821333862711296_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEckPxsHdd98aDOPB16_swVNcw3mbKDmmM1zDeZsoOaYywyk-lq7kNs3hle_oVsZlH4-nLrECJU8Ua8FG62sNr4&_nc_ohc=7zshRDzi_gUAX_vRk25&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT8YyxtMeDwIg0Pwswv0UJmL3_n98xfk3F9KpjOVKdyRjw&oe=625A2247"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/26166431_1992547377701057_8441806365222971794_n.png?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElsqh0H8Oz4sOZYO1jJWGsf1lJqUJEKNZ_WUmpQkQo1uQsd2FK-xIW5Bb6ExirM-NPXnvaEsLtmOGthdSgOnAe&_nc_ohc=Vo-NHNoEJSwAX_YJ1wW&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT-km374nw530VdESKbva-FWSyuw6spo6e4XS2BW77eWZw&oe=62596703"
                            alt="Brand Logo"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <!--End First slide-->

                  <!--Second slide-->
                  <div class="carousel-item">
                    <div class="row">
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.18169-9/16711889_1685814778379695_6490183495426957053_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFNHJpiyYY_GQVKwKVjOitUrQkHK8Xww-ytCQcrxfDD7MrKE30zRKs_cHPAZJ78fXbXi6kWmIYukEIj_Di6T08n&_nc_ohc=pJJYBVjg1OQAX8l8kZx&_nc_ht=scontent.fbkk9-2.fna&oh=00_AT8fLalFob-x20NFAWLztUV4HxQQMEbyGghA5O8NmGKkvA&oe=625B01E0"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.6435-9/73227115_1184147555116919_5379551996866985984_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGUE9krPioeHfHEG0ubIUZD3ka-bMxdrGfeRr5szF2sZ3NYOoWaLDHx2QPNxtqA3aDFhpfjJGyp-OCzydZofUK_&_nc_ohc=coG_M5Pwd48AX_2iV42&_nc_ht=scontent.fbkk8-4.fna&oh=00_AT8o4gw-JARhKmAvnwf-_9seFzgqm-_wxkPn5pQw-xQVOw&oe=62587431"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://1000logos.net/wp-content/uploads/2017/12/krispy-kreme-logo.png"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a
                          ><img
                            class="img-fluid brand-img"
                            src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t31.18172-8/1501263_1492278767699654_8728412280158659245_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHPpLrSEltU1UNwEZlW2zTzsogQGYNONgCyiBAZg042AM7f9_np1c13uksUFP2PUxVgn2FyyLSuhmEq51O-vuTD&_nc_ohc=HSO_JCwDsGwAX9ZDxSB&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_tN5VA39MYBgNO1G9KsuPAB4A639UXmQlRbpJ0E_cp1g&oe=625B7E5D"
                            alt="Brnd Logo"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <!--End Second slide-->
                </div>
                <!--End Slides-->
              </div>
            </div>
            <!--End Carousel Wrapper-->

            <!--Controls-->
            <div class="col-1 align-self-center">
              <a
                class="h1"
                href="#multi-item-example"
                role="button"
                data-bs-slide="next"
              >
                <i class="text-dark fas fa-chevron-right"></i>
              </a>
            </div>
            <!--End Controls-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Brands-->

  <!-- Start Footer -->
  <footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-pink border-bottom pb-3 border-light logo">
            แม่หมู เดลิเวอรี่
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <a
                class="text-decoration-none"
                href="https://www.google.com/maps/dir/18.793111,98.9797474/18.7949115,98.9869894/@18.7941696,98.979309,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
              >
                254 ถ. พระปกเกล้า ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50200
                เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่
              </a>
            </li>
            <li>
              <i class="fa fa-phone fa-fw"></i>
              <a class="text-decoration-none" href="tel:0859246514"
                >085 924 6514</a
              >
            </li>
            <li>
              <i class="bi bi-facebook"></i>
              <a
                class="text-decoration-none"
                href="https://www.facebook.com/maemoodelivery88"
              >
                แม่หมู เดลิเวอรี่</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Products
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <a class="text-decoration-none" href="#"
                >ขนมร้านดัง & ขนมไทยหาทานยาก</a
              >
            </li>
            <li>
              <a class="text-decoration-none" href="#"
                >ของหวาน & เครื่องดื่มชื่นใจ</a
              >
            </li>
            <li>
              <a class="text-decoration-none" href="#"
                >กับข้าวกับแกล้มอร่อยทั่วไทย</a
              >
            </li>
            <li>
              <a class="text-decoration-none" href="#"
                >ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Further Info
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">Home</a></li>
            <li><a class="text-decoration-none" href="#">About Us</a></li>
            <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
            <li><a class="text-decoration-none" href="#">FAQs</a></li>
            <li><a class="text-decoration-none" href="#">Contact</a></li>
          </ul>
        </div>
        <img
          src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/272207261_126152013233215_7281500746946443294_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeF7bAUyS4NH5EScrKoirEzypy30g27FzdOnLfSDbsXN08kU-zM7fFtlGnVqOz-MwPh7UphDPF4kq8py6PqrPvKS&_nc_ohc=BsXWoEBFJxcAX8DCoR-&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_0QHyE8FMIfUQeaj-TFFJKNNgYLYWFUYxjIBUkW4_w5Q&oe=623972CE"
          class="rounded mx-auto d-block"
        />
      </div>

      <div class="row text-light mb-4">
        <div class="col-12 mb-3">
          <div class="w-100 my-3 border-top border-light"></div>
        </div>
        <div class="col-auto me-auto">
          <ul class="list-inline text-left footer-icons">
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.facebook.com/maemoodelivery88"
                ><i class="fab fa-facebook-f fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.instagram.com/"
                ><i class="fab fa-instagram fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://twitter.com/"
                ><i class="fab fa-twitter fa-lg fa-fw"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="subscribeEmail"></label>
          <div class="input-group mb-2">
            <input
              type="text-list"
              class="form-control bg-light border-light"
              id="subscribeEmail"
              placeholder="ขนมที่อยากให้นำมาขาย"
            />
            <button class="input-group-text btn-success text-light">ส่ง</button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 bg-black py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="col-12">
            <p class="text-left text-light">
              &copy; 2022 CSMJU | Designed by
              <a rel="sponsored" href="http://csmju.jowave.com/" target="_blank"
                >CSMJU-361</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LoginWeb from "./views/LoginWeb.vue";
import CartshopVue from "./views/CartshopVue.vue";
export default {
  name: "App",
  props: ["cast"],
  data() {
    return {
      dogstu: false,
      summ: null,
      drawer: false,
      group: null,
      dialog: false,
      baskeT: [],
      //
    };
  },
  components: { LoginWeb, CartshopVue },
  methods: {
    methods: {
      add(title, price, unit) {
        for (let i; i == unit; i++) {
          for (let xx of this.baskeT) {
            if (xx.title == title) {
              xx.cont++;
              return;
            }
          }
          this.baskeT.push({ title: title, price: price, cont: 1 });
        }
      },
      deletebas(i) {
        this.baskeT.splice(i, 1);
      },
      sum() {
        this.summ = 0;
        for (let i of this.baskeT) {
          this.summ = this.summ + i.price * i.cont;
        }
      },
    },
    pay() {
      this.baskeT = [];
      this.sum();
    },
    openNav() {
      this.dogstu = !this.dogstu;
      if (this.dogstu == true) {
        document.getElementById("mySidebar").style.width = "375px";
      } else {
        document.getElementById("mySidebar").style.width = "0";
      }
    },
  },
};
</script>
<style>
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(248, 219, 248);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}
</style>
