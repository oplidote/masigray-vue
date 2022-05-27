<template>
  <div>
    <!-- 모바일 메뉴 -->
    <div class="m-menu-bg"></div>

    <div class="m-menu-wrap">
      <button class="m-bt-close">close</button>
      <ul class="m-sns-menu">
        <li><a href="#">Blog</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
      <ul class="m-gnb">
        <li>
          <a href="#" alt="">마시그레이</a>
          <ul class="m-submenu">
            <li><a href="#">회사소개</a></li>
            <li><a href="#">연혁</a></li>
            <li><a href="#">CEO인사말</a></li>
            <li><a href="#">BI / 비전</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#" alt="">메뉴</a>
          <ul class="m-submenu">
            <li><a href="#">신메뉴</a></li>
            <li><a href="#">커피</a></li>
            <li><a href="#">음료</a></li>
            <li><a href="#">디자인</a></li>
            <li><a href="#">MD상품</a></li>
          </ul>
        </li>
        <li>
          <a href="#" alt="">프렌차이즈</a>
          <ul class="m-submenu">
            <li><a href="#">가맹안내</a></li>
            <li><a href="#">가맹절차</a></li>
            <li><a href="#">매장인테리어</a></li>
            <li><a href="#">커피 아카데미</a></li>
            <li><a href="#">가맹상담신청</a></li>
          </ul>
        </li>
        <li>
          <a href="#" alt="">매장안내</a>
          <ul class="m-submenu">
            <li><a href="#">매장안내</a></li>
          </ul>
        </li>
        <li>
          <a href="#" alt="">공지사항</a>
          <ul class="m-submenu">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">이벤트</a></li>
          </ul>
        </li>
        <li>
          <a href="#" alt="">고객의소리</a>
          <ul class="m-submenu">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Q&A</a></li>
            <li><a href="#">케이터링</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 상단이동 -->
    <button class="gotop">top</button>

    <!-- 오른쪽 고정메뉴 -->
    <ul class="quick-menu">
      <li>
        <a href="#"><img :src="require('@/images/quick01.png')" alt="" /></a>
      </li>
      <li>
        <a href="#"><img :src="require('@/images/quick02.png')" alt="" /></a>
      </li>
      <li>
        <a href="#"><img :src="require('@/images/quick03.png')" alt="" /></a>
      </li>
      <li>
        <a href="#"><img :src="require('@/images/quick04.png')" alt="" /></a>
      </li>
    </ul>
    <div class="wrap">
      <!-- 상단 -->
      <header class="header">
        <div class="container">
          <div class="header-top">
            <ul class="help-menu">
              <li><a href="#" alt="Blog" title="Blog">Blog</a></li>
              <li>
                <a href="#" alt="Instagram" title="Instagram">Instagram</a>
              </li>
              <li><a href="#" alt="FaceBook" title="Facebook">FaceBook</a></li>
            </ul>
          </div>
          <div class="header-main clearfix">
            <a href="index.html" alt="마시그래이" class="logo">마시그래이</a>
            <nav class="nav">
              <ul class="gnb">
                <li>
                  <a href="#" alt="">마시그레이</a>
                  <ul class="submenu">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">연혁</a></li>
                    <li><a href="#">CEO인사말</a></li>
                    <li><a href="#">BI / 비전</a></li>
                    <li><a href="#">오시는길</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" alt="">메뉴</a>
                  <ul class="submenu">
                    <li><a href="#">신메뉴</a></li>
                    <li><a href="#">커피</a></li>
                    <li><a href="#">음료</a></li>
                    <li><a href="#">디자인</a></li>
                    <li><a href="#">MD상품</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" alt="">프렌차이즈</a>
                  <ul class="submenu">
                    <li><a href="#">가맹안내</a></li>
                    <li><a href="#">가맹절차</a></li>
                    <li><a href="#">매장인테리어</a></li>
                    <li><a href="#">커피 아카데미</a></li>
                    <li><a href="#">가맹상담신청</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" alt="">매장안내</a>
                  <ul class="submenu">
                    <li><a href="#">매장안내</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" alt="">공지사항</a>
                  <ul class="submenu">
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">이벤트</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" alt="">고객의소리</a>
                  <ul class="submenu">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Q&A</a></li>
                    <li><a href="#">케이터링</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button class="m-bt">menu</button>
      </header>
      <!-- 비주얼 -->
      <section class="visual">
        <swiper
          :modules="modules"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :navigation="{
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev',
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="sw-visual"
        >
          <swiper-slide class="swiper-slide">
            <div class="visual-div visual-bg-1">1</div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="visual-div visual-bg-2">2</div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="visual-div visual-bg-3">3</div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="visual-div visual-bg-4">4</div>
          </swiper-slide>
          <button class="sw-visual-prev"></button>
          <button class="sw-visual-next"></button>
        </swiper>
      </section>

      <!-- 스토리 -->
      <section class="story">
        <div class="container clearfix">
          <div class="story-box story-box-1">
            <img :src="require('@/images/mb01_img.png')" alt="마시그래이" />
            <a href="#">
              <h2>브랜드 스토리</h2>
              <p>
                마시그래이는 표준어로 '마셔라' 라는 <br />
                사투리의 표현을 가져온 것으로 브랜드네임에서부터 <br />
                고객에게 친밀하게 다가가고자 하는 마음을 담았습니다.
              </p>
            </a>
          </div>

          <div class="story-box story-box-2">
            <swiper
              :modules="modules"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              :loop="true"
              :navigation="{
                nextEl: '.sw-story-next',
                prevEl: '.sw-story-prev',
              }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="sw-story"
            >
              <swiper-slide>
                <a href="#" class="story-link-1">메뉴1</a>
              </swiper-slide>
              <swiper-slide>
                <a href="#" class="story-link-2">메뉴2</a>
              </swiper-slide>
              <swiper-slide>
                <a href="#" class="story-link-3">메뉴3</a>
              </swiper-slide>
              <swiper-slide>
                <a href="#" class="story-link-4">메뉴4</a>
              </swiper-slide>
              <button class="sw-story-prev">prev</button>
              <button class="sw-story-next">next</button>
            </swiper>
          </div>

          <div class="story-box story-box-3">
            <a href="#" class="story-link-bus-1">
              <h3>창업절차</h3>
              <p>
                체계적인 마시그래이의 <br />
                창업시스템에 대해 알아보세요.
              </p>
            </a>
            <a href="#" class="story-link-bus-2">
              <h3>창업문의</h3>
              <p>
                차별화된 Take-out 브랜드<br />
                마시그래이에 대해 알아보세요.
              </p>
            </a>
          </div>

          <div class="story-box story-box-4">
            <div class="story-search story-search-img"></div>
            <div class="story-search story-search-cont">
              <h3>
                <strong>STORE</strong>
                <span>매장</span>
              </h3>
              <p>
                가까운 마시그래이 매장을 <br />
                찾아보세요
              </p>
              <form action="" class="search-form">
                <input type="text" class="search" />
                <input
                  type="image"
                  :src="require('@/images/btn_store.gif')"
                  class="search-bt"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- 상품안내 -->
      <section class="good">
        <div class="container">
          <h2>MASIGRAY <strong>MENU</strong></h2>
          <p>마시그래이의 다양한 메뉴를 맛보세요</p>
          <div class="swiper-container sw-good">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="#" class="good-img-1"></a>
              </div>
              <div class="swiper-slide">
                <a href="#" class="good-img-2"></a>
              </div>
              <div class="swiper-slide">
                <a href="#" class="good-img-3"></a>
              </div>
            </div>
            <button class="sw-good-prev">이전</button>
            <button class="sw-good-next">다음</button>

            <div class="swiper-pagination sw-good-pg"></div>
          </div>
        </div>
      </section>
      <!-- 프랜차이즈 -->
      <section class="franchiser">
        <div class="container">
          <h2>MASIGRAY <strong>Franchiser</strong></h2>
          <p>마시그래이 신규 매장</p>
          <div class="fr-wrap">
            <ul>
              <li>
                <a href="#">
                  <img :src="require('@/images/store01.jpg')" alt="합천점" />
                  합천점
                </a>
              </li>
              <li>
                <a href="#">
                  <img :src="require('@/images/store01.jpg')" alt="신천점" />
                  신천점
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    :src="require('@/images/store01.jpg')"
                    alt="복현푸르지오"
                  />
                  복현푸르지오
                </a>
              </li>
              <li>
                <a href="#">
                  <img :src="require('@/images/store01.jpg')" alt="대곡역점" />
                  대곡역점
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- sns -->
      <section class="sns">
        <div class="container">
          <h2>MASIGRAY <strong>SNS</strong></h2>
          <p>#masigray</p>
        </div>
      </section>
      <!-- 하단 -->
      <footer class="footer">
        <div class="container">
          <div class="footer-menu">
            <ul>
              <li><a href="#">점주의 방</a></li>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">개인정보취급방침</a></li>
              <li><a href="#">이메일무단수집거부</a></li>
              <li><a href="#">가맹문의</a></li>
              <li><a href="#">고객의 소리</a></li>
            </ul>
          </div>
          <div class="footer-logo">
            <a href="#"
              ><img :src="require('@/images/foot_logo.png')" alt="마시그래이"
            /></a>
          </div>
          <div class="footer-copy">
            (주) 에스이엠 | 사업자등록번호 : 502 - 86 - 32017 | 대표이사 :
            정영주 <br />
            주소 : 대구광역시 수성구 만촌동 957-2번지 2층 | 전화 : 1899-2087 |
            팩스 : 053-474-9522
          </div>
          <div class="footer-sns">
            <a href="#"
              ><img :src="require('@/images/foot_sns_blog.png')" alt="블로그"
            /></a>
            <a href="#"
              ><img
                :src="require('@/images/foot_sns_insta.png')"
                alt="인스타그램"
            /></a>
            <a href="#"
              ><img
                :src="require('@/images/foot_sns_facebook.png')"
                alt="페이스북"
            /></a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import $ from "jquery";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
  },
  // 기본 자바스크립트 실행
  setup() {
    //  ui 관련 js 코드
    onMounted(() => {
      // 주메뉴 모션 적용
      let nav = $(".nav");
      let headerMain = $(".header-main");
      let logo = $(".logo");
      nav.mouseenter(function () {
        $(this).addClass("nav-active");
      });
      headerMain.mouseleave(function () {
        nav.removeClass("nav-active");
      });
      logo.mouseenter(function () {
        nav.removeClass("nav-active");
      });

      // 스크롤 기능
      let header = $(".header");
      $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
          header.addClass("fix-active");
        } else {
          header.removeClass("fix-active");
        }
      });

      // 모바일 메뉴
      let mBt = $(".m-bt");
      let mMenuBg = $(".m-menu-bg");
      let mMenuWrap = $(".m-menu-wrap");
      let mBtClose = $(".m-bt-close");

      mBt.click(function () {
        mMenuWrap.addClass("m-menu-wrap-active");
        mMenuBg.addClass("m-menu-bg-active");
      });
      mBtClose.click(function () {
        mMenuWrap.removeClass("m-menu-wrap-active");
        mMenuBg.removeClass("m-menu-bg-active");
      });

      mMenuBg.click(function () {
        mMenuWrap.removeClass("m-menu-wrap-active");
        mMenuBg.removeClass("m-menu-bg-active");
      });

      // 화면 리사이징 처리
      $(window).resize(function () {
        let w = $(window).width();
        if (w > 700) {
          mMenuWrap.removeClass("m-menu-wrap-active");
          mMenuBg.removeClass("m-menu-bg-active");
        }
      });
    });
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style>
#app {
}
</style>