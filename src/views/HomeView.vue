<template>
  <div class="index">
    <div class="large-header">
      <HeaderBar :isFixHeaderBar="isFixHeaderBar"></HeaderBar>
      <header>
        <div class="view">
          <img src="@/assets/image/public_img/banner.jpg" />
        </div>
        <div class="header-banner__inner">
          <div class="logo-box">
            <img src="@/assets/image/public_img/logo.png" alt="">
          </div>
        </div>
        <div class="taper-line"></div>
      </header>
      <HeaderChannel></HeaderChannel>
    </div>
  </div>
  <!-- 固钉频道栏 -->
  <div class="header-channel-fixed" :style="isFixChannel ? '' : 'display: none;'">
    <div class="header-channel-fixed-container" :class="isChannelDown ? 'header-channel-fixed-down' : ''"
      @mouseenter="isChannelDown = true;" @mouseleave="isChannelDown = false;">
      <div class="header-channel-fixed-left">
        <div class="left-fixed-channel">
          <i class="iconfont icon-fengche"></i>
          <span>动态</span>
        </div>
        <div class="left-fixed-channel">
          <i class="iconfont icon-huo"></i>
          <span>热门</span>
        </div>
      </div>
      <div class="header-channel-fixed-center"></div>
      <div class="header-channel-fixed-right">
        <div class="header-channel-fixed-right-left">
          <div class="left-top">
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">番剧</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">电影</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">国创</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">电视剧</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">综艺</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">纪录片</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">VLOG</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">搞笑</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">单机游戏</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">公益</a>
            <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">公开课</a>
          </div>
        </div>
        <div class="header-channel-fixed-right-right">
          <a :href="``" target="_blank" class="header-channel-fixed-right-item">专栏</a>
          <a :href="``" target="_blank" class="header-channel-fixed-right-item">直播</a>
          <a :href="``" target="_blank" class="header-channel-fixed-right-item">活动</a>
          <a :href="``" target="_blank" class="header-channel-fixed-right-item">课堂</a>
          <a :href="``" target="_blank" class="header-channel-fixed-right-item" style="letter-spacing: 0px;">社区中心</a>
          <a :href="``" target="_blank" class="header-channel-fixed-right-item" style="letter-spacing: 0px;">新歌热榜</a>
        </div>
        <div class="left-bottom">
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">番剧</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">电影</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">国创</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">电视剧</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">综艺</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">纪录片</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">VLOG</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">搞笑</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">单机游戏</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">公益</a>
          <a :href="`/`" target="_blank" class="header-channel-fixed-right-item">公开课</a>
        </div>
      </div>
      <div class="header-channel-fixed-arrow">
        <div class="iconfont icon-xiajiantou" :style="isChannelDown ? 'transform: rotate(180deg);' : ''"></div>
      </div>
    </div>
  </div>
  <!-- 主体布局 -->
  <div class="main__layout">
    <div class="recommended-container">
      <div class="container">
        <!-- 轮播图 -->
        <div class="recommended-swipe">
          <div class="recommended-swipe-core">
            <!-- 骨架屏 -->
            <div class="recommended-swipe-shim">
              <div class="video-card" v-for="index in 2" :key="index">
                <div class="video-card__skeleton">
                  <div class="video-card__skeleton--cover"></div>
                  <div class="video-card__skeleton--info">
                    <div class="video-card__skeleton--right">
                      <p class="video-card__skeleton--text"></p>
                      <p class="video-card__skeleton--text short"></p>
                      <p class="video-card__skeleton--light"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shim-card"></div>
              <div class="shim-card"></div>
            </div>
            <!-- 轮播图主体 -->
            <div class="recommended-swipe-body">
              <div class="carousel-area">
                <CarouselIndex></CarouselIndex>
              </div>
            </div>
          </div>
        </div>
        <!-- 随机推荐 -->
        <div class="feed-card" v-for="index in loadingRandom ? 11 : randomVideos.length" :key="index">
          <div class="video-card">
            <!-- 骨架屏 -->
            <div class="video-card__skeleton" :class="loadingRandom ? 'loading_animation' : 'hide'">
              <div class="video-card__skeleton--cover"></div>
              <div class="video-card__skeleton--info">
                <div class="video-card__skeleton--right">
                  <p class="video-card__skeleton--text"></p>
                  <p class="video-card__skeleton--text short"></p>
                  <p class="video-card__skeleton--light"></p>
                </div>
              </div>
            </div>
            <!-- 实体内容 -->
            <div class="video-card__wrap" v-if="!loadingRandom">
              <!-- 请求获取视频id  /video/${randomVideos[index - 1].video.vid} -->
              <a :href="`/`" target="_blank">
                <div class="video-card__image">
                  <div class="video-card__image--wrap">
                    <picture class="video-card__cover">
                      <!-- 封面信息 randomVideos[index - 1].video.coverUrl -->
                      <img :src="''" :alt="''">
                    </picture>
                  </div>
                  <div class="video-card__mask">
                    <div class="video-card__stats">
                      <div class="video-card__stats--left">
                        <span class="video-card__stats--item">
                          <i class="iconfont icon-bofangshu"></i>
                          <span class="video-card__stats--text">
                            {{ handleNum() }}
                          </span>
                        </span>
                        <span class="video-card__stats--item">
                          <i class="iconfont icon-danmushu"></i>
                          <span class="video-card__stats--text">
                            {{ handleNum() }}
                          </span>
                        </span>
                      </div>
                      <div class="video-card__stats__duration">
                        {{ handleTime() }}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="video-card__info">
                <div class="video-card__info--right">
                  <h3 class="video-card__info--tit">
                    <a :href="`/video/${randomVideos[index - 1].video.vid}`" target="_blank">
                      {{ randomVideos[index - 1].video.title }}
                    </a>
                  </h3>
                  <div class="video-card__info--bottom">
                    <div class="video-card__info--icon-text" :style="'display: none;'">已关注</div>
                    <a class="video-card__info--owner" :href="`/space/${randomVideos[index - 1].user.uid}`"
                      target="_blank">
                      <i class="iconfont icon-uper" :style="''"></i>
                      <span class="video-card__info--author">{{ randomVideos[index -
                        1].user.nickname }}</span>
                      <span class="video-card__info--date">
                        · {{ handleDate(randomVideos[index - 1].video.uploadDate) }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 累加推荐 -->
        <div class="video-card" v-for="(item, index) in cumulativeVideos" :key="index">
          <!-- 骨架屏 -->
          <div class="video-card__skeleton hide">
            <div class="video-card__skeleton--cover"></div>
            <div class="video-card__skeleton--info">
              <div class="video-card__skeleton--right">
                <p class="video-card__skeleton--text"></p>
                <p class="video-card__skeleton--text short"></p>
                <p class="video-card__skeleton--light"></p>
              </div>
            </div>
          </div>
          <!-- 实体内容 -->
          <div class="video-card__wrap">
            <a :href="``" target="_blank">
              <div class="video-card__image">
                <div class="video-card__image--wrap">
                  <picture class="video-card__cover">
                    <img :src="''" :alt="''">
                  </picture>
                </div>
                <div class="video-card__mask">
                  <div class="video-card__stats">
                    <div class="video-card__stats--left">
                      <span class="video-card__stats--item">
                        <i class="iconfont icon-bofangshu"></i>
                        <span class="video-card__stats--text">
                          {{ handleNum() }}
                        </span>
                      </span>
                      <span class="video-card__stats--item">
                        <i class="iconfont icon-danmushu"></i>
                        <span class="video-card__stats--text">
                          {{ handleNum() }}
                        </span>
                      </span>
                    </div>
                    <div class="video-card__stats__duration">
                      {{ handleTime() }}
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="video-card__info">
              <div class="video-card__info--right">
                <h3 class="video-card__info--tit">
                  <a :href="``" target="_blank" :title="''">
                    {{ }}
                  </a>
                </h3>
                <div class="video-card__info--bottom">
                  <div class="video-card__info--icon-text" :style="'display: none;'">已关注</div>
                  <a class="video-card__info--owner" :href="``" target="_blank">
                    <i class="iconfont icon-uper" :style="''"></i>
                    <span class="video-card__info--author">{{ }}</span>
                    <span class="video-card__info--date">
                      {{ handleDate() }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 骨架屏 -->
        <div class="video-card" v-for="index in 10" :key="index" :style="hasMore ? '' : 'display: none;'">
          <div class="video-card__skeleton loading_animation">
            <div class="video-card__skeleton--cover"></div>
            <div class="video-card__skeleton--info">
              <div class="video-card__skeleton--right">
                <p class="video-card__skeleton--text"></p>
                <p class="video-card__skeleton--text short"></p>
                <p class="video-card__skeleton--light"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feed-roll-btn">
        <div class="roll-btn" @click="getRandomVideos(); refreshTime++;">
          <i class="iconfont icon-shuaxin" :style="`transform: rotate(${refreshTime * 360}deg);`"></i>
          <span>换一换</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import HeaderChannel from '@/components/HeaderChannel.vue';
import CarouselIndex from '@/components/CarouselIndex.vue';
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { get } from '@/network/request';
import { handleTime, handleNum, handleDate } from '@/utils/utils.js';

let headerHight = ref()
let bottomDistance = ref()

//刷新次数
let refreshTime = ref(0)

//是否为固钉导航栏
let isFixHeaderBar = ref(false)
//是否为固钉频道栏
let isFixChannel = ref(false)
//是否显示更多频道
let isChannelDown = ref(false)

// 是否正在加载更多视频中
let loadingMore = ref(false)
//是否正在加载随机推荐
let loadingRandom = ref(true)

//随机视频列表
let randomVideos = ref([])

// 获取游客随机推荐
// async function getRandomVideos() {
//   loadingRandom.value = true;
//   //获取随机视频请求
//   const res = await get("/videos");
//   if (res.data.data) {
//     randomVideos.value = res.data.data;
//     loadingRandom.value = false;
//   }
//   // console.log(this.randomVideos);
// }
async function getRandomVideos() {
  loadingRandom.value = true;
  randomVideos.value = [];
  loadingRandom.value = false;
  // console.log(this.randomVideos);
}

getRandomVideos()

// 累加视频列表
let cumulativeVideos = ref([])
// 累加视频id列表
let vids = ref([])
// 是否还有更多累加视频
let hasMore = ref(true)

// 获取游客累加推荐
// async function getCumulativeVideos() {
//   loadingMore.value = true;
//   let ids = vids.value.join(",");  // 用逗号连接成一个字符串

//   const res = await get("/video/cumulative/visitor", {
//     params: { vids: ids }
//   });
//   if (res.data.data) {
//     cumulativeVideos.value.push(...res.data.data.videos);
//     vids.value.push(...res.data.data.vids);
//     hasMore.value = res.data.data.more;
//   }
//   // console.log(this.cumulativeVideos);
//   loadingMore.value = false;
// }
async function getCumulativeVideos() {
  loadingMore.value = true;
  let ids = vids.value.join(",");  // 用逗号连接成一个字符串
  cumulativeVideos.value.push([]);
  vids.value.push([]);
  hasMore.value = true;
  // console.log(this.cumulativeVideos);
  loadingMore.value = false;
}

const rootEl = ref(document.documentElement)

async function handleScroll() {
  // 计算页面底部距离
  const windowHeight = ref(window.innerHeight)
  const documentHeight = ref(document.documentElement.scrollHeight)
  bottomDistance.value = documentHeight.value - (window.scrollY + windowHeight.value);
  // 导航栏
  if (rootEl.value.scrollTop >= 64 && !isFixHeaderBar.value) {
    isFixHeaderBar.value = true;
  } else if (rootEl.value.scrollTop < 64 && isFixHeaderBar.value) {
    isFixHeaderBar.value = false;
  }

  // 频道栏
  if (rootEl.value.scrollTop >= headerHight && !isFixChannel.value) {
    isFixChannel.value = true;
  } else if (rootEl.value.scrollTop < headerHight && isFixChannel.value) {
    isFixChannel.value = false;
  }
  console.log(bottomDistance.value)
  // 当距离底部小于800且有更多数据时触发加载数据的函数
  if (bottomDistance.value < 800 && hasMore.value && !loadingMore.value) {
    await getCumulativeVideos();
    console.log('jiazaishipin')
    
  }
}

onMounted(async () => {
  {
    // 根据主体顶部的偏移量计算 header 的高度
    headerHight.value = document.querySelector('.main__layout').offsetTop
    window.addEventListener('scroll', handleScroll)
    // 初次挂载时执行一次，防止大屏情况下，视频数量不足以撑出滚动条
    // await handleScroll()
    // while (bottomDistance.value < 800 && hasMore.value) {
    //   await handleScroll()
    // }
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<style scoped>
@media (min-width: 1367px) and (max-width: 1700.9px) {
  .header-banner__inner {
    padding: 0 64px;
  }
}

.index {
  position: relative;
  margin: 0 auto;
  max-width: 2560px;
  background-color: var(--bg1);
}

.large-header {
  background-color: #fff;
  min-height: 64px;
  position: relative;
  margin: 0 auto;
  max-width: 2560px;
  width: 100%;
  color: #000;
}

.header__banner {
  position: relative;
  z-index: 0;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 1000px;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  background-color: #e3e5e7;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
}

.v-img {
  display: inline-block;
  line-height: 1;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  background-color: var(--graph_bg_regular);
}

.v-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;
}

.banner-img {
  position: absolute;
  object-fit: cover;
}

.banner-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;
}

.header-banner__inner {
  position: relative;
  width: 100%;
  max-width: 2078px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
}

@media (max-width: 1366.9px) {
  .header-banner__inner {
    padding: 0 56px;
  }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
  .header-banner__inner {
    padding: 0 64px;
  }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
  .header-banner__inner {
    padding: 0 96px;
    max-width: 2270px;
  }
}

@media (min-width: 2200px) {
  .header-banner__inner {
    max-width: 2078px;
  }
}

.logo-box {
  z-index: 1;
  display: inline-block;
  width: 150px;
  height: 50%;
}

.header-banner__inner img {
  cursor: pointer;
  position: relative;
  top: 5;
  right: 0;
  margin-bottom: 20px;
  margin-left: 15px;
  width: 162px;
  height: 78px;
  filter: drop-shadow(3px 5px 3px rgba(0, 0, 0, 0.5));
}

header {
  position: relative;
  z-index: 0;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 1000px;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  background-color: #e3e5e7;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  --percentage: 0.5;
}

header .view,
header .tree {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

header .view img,
header .view video,
header .tree img {
  position: absolute;
  display: block;
  width: 120%;
  height: 100%;
  object-fit: cover;
}

header .morning {
  z-index: 20;
  opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
}

header .afternoon {
  z-index: 10;
  opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
}

header .view {
  transform: translatex(calc(var(--percentage) * 100px));
}

header .tree {
  transform: translatex(calc(var(--percentage) * 50px));
  filter: blur(3px);
}

header .view,
header .tree,
header .morning,
header .afternoon {
  transition: 0.2s all ease-in;
}

header.moving .view,
header.moving .tree,
header.moving .morning,
header.moving .afternoon {
  transition: none;
}

header .window-cover {
  opacity: calc((var(--percentage) - 0.9) / 0.1);
}

.taper-line {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
  pointer-events: none;
}

.header-channel-fixed {
  width: 100%;
  min-width: 1100px;
  max-width: 2560px;
  display: flex;
  justify-content: center;
  background: var(--bg1_float);
  z-index: 1001;
  position: fixed;
  top: 63px;
  letter-spacing: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  animation: headerSlideDown 0.2s linear forwards;
}

@keyframes headerSlideDown {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.header-channel-fixed {
  --left_width: 140px;
  --left_width_item: 70px;
  --item_height: 28px;
}

.header-channel-fixed-container {
  max-height: 56px;
  overflow: hidden;
  transition: max-height 0.2s;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 14px var(--layout-padding, 60px) 14px var(--layout-padding, 30px);
}

.header-channel-fixed-down {
  max-height: 150px;
}

.header-channel-fixed-left {
  display: flex;
  min-width: var(--left_width);
  width: var(--left_width);
  flex-wrap: wrap;
  color: var(--text2);
  font-size: 14px;
  align-self: start;
}

.left-fixed-channel {
  cursor: pointer;
  display: flex;
  width: var(--left_width_item);
  height: 28px;
  margin-bottom: 14px;
  align-items: center;
}

.left-fixed-channel .iconfont {
  color: var(--text1);
  font-size: 21px;
  display: inline-block;
  position: relative;
  margin-right: 5px;
}

.left-fixed-channel:hover,
.left-fixed-channel:hover .iconfont {
  color: var(--brand_pink);
}

.header-channel-fixed-center {
  height: 14px;
  width: 1px;
  margin-right: 10px;
  background: var(--line_regular);
}

.header-channel-fixed-right {
  display: inline-grid;
  flex: 1;
  height: 100%;
  position: relative;
}

.header-channel-fixed-right-item {
  height: var(--item_height);
  line-height: var(--item_height);
  border: 1px solid var(--line_light);
  background: var(--graph_bg_thin);
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  color: var(--text2);
}

.header-channel-fixed-right-item:hover {
  background: var(--graph_bg_thick);
  transition: background 0.2s;
}

.left-top .header-channel-fixed-right-item:nth-of-type(23),
.left-top .header-channel-fixed-right-item:nth-of-type(24),
.left-top .header-channel-fixed-right-item:nth-of-type(26),
.left-bottom .header-channel-fixed-right-item:nth-of-type(23),
.left-bottom .header-channel-fixed-right-item:nth-of-type(24),
.left-bottom .header-channel-fixed-right-item:nth-of-type(26) {
  letter-spacing: 0px;
}

.header-channel-fixed-right-left {
  display: inline-grid;
  position: relative;
}

.header-channel-fixed-right-left .left-top {
  display: inline-grid;
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  grid-auto-flow: column;
}

.header-channel-fixed-right-right {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-template-rows: var(--item_height) var(--item_height);
  grid-column: span 3;
}

.header-channel-fixed-right .left-bottom {
  display: inline-grid;
  grid-template-rows: repeat(1, 1fr);
  position: relative;
}

.header-channel-fixed-right .left-bottom,
.header-channel-fixed-right-right,
.header-channel-fixed-right-left .left-top,
.header-channel-fixed-right {
  grid-gap: 14px 10px;
}

@media (max-width: 1366.9px) {
  .header-channel-fix {
    --left_width: 128px;
    --left_width_item: 64px;
  }

  .header-channel-fixed-right {
    grid-column: span 12;
    grid-template-columns: repeat(12, 1fr);
  }

  .header-channel-fixed-right-left {
    grid-column: span 9;
    grid-template-columns: repeat(9, 1fr);
  }

  .header-channel-fixed-right .left-bottom {
    grid-column: span 12;
    grid-template-columns: repeat(12, 1fr);
  }

  .header-channel-fixed-right-left .left-top {
    grid-column: span 9;
    grid-template-columns: repeat(9, 1fr);
  }

  .header-channel-fixed-right .left-bottom,
  .header-channel-fixed-right-right,
  .header-channel-fixed-right-left .left-top,
  .header-channel-fixed-right {
    font-size: 13px;
    grid-gap: 14px 8px;
  }

  .left-top .header-channel-fixed-right-item:nth-of-type(1n + 19) {
    display: none !important;
  }

  .left-bottom .header-channel-fixed-right-item:nth-of-type(-1n + 18) {
    display: none !important;
  }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
  .header-channel-fixed-right {
    grid-column: span 14;
    grid-template-columns: repeat(14, 1fr);
  }

  .header-channel-fixed-right-left {
    grid-column: span 11;
    grid-template-columns: repeat(11, 1fr);
  }

  .header-channel-fixed-right .left-bottom {
    grid-column: span 14;
    grid-template-columns: repeat(14, 1fr);
  }

  .header-channel-fixed-right-left .left-top {
    grid-column: span 11;
    grid-template-columns: repeat(11, 1fr);
  }

  .left-top .header-channel-fixed-right-item:nth-of-type(1n + 23) {
    display: none !important;
  }

  .left-bottom .header-channel-fixed-right-item:nth-of-type(-1n + 22) {
    display: none !important;
  }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
  .header-channel-fix {
    --left_width: 160px;
    --left_width_item: 80px;
  }

  .header-channel-fixed-right {
    grid-column: span 15;
    grid-template-columns: repeat(15, 1fr);
  }

  .header-channel-fixed-right-left {
    grid-column: span 12;
    grid-template-columns: repeat(12, 1fr);
  }

  .header-channel-fixed-right .left-bottom {
    grid-column: span 15;
    grid-template-columns: repeat(15, 1fr);
  }

  .header-channel-fixed-right-left .left-top {
    grid-column: span 12;
    grid-template-columns: repeat(12, 1fr);
  }

  .left-top .header-channel-fixed-right-item:nth-of-type(1n + 25) {
    display: none !important;
  }

  .left-bottom .header-channel-fixed-right-item:nth-of-type(-1n + 24) {
    display: none !important;
  }
}

@media (min-width: 2200px) {
  .header-channel-fix {
    --left_width: 160px;
    --left_width_item: 80px;
  }

  .header-channel-fixed-right {
    grid-column: span 17;
    grid-template-columns: repeat(17, 1fr);
  }

  .header-channel-fixed-right-left {
    grid-column: span 14;
    grid-template-columns: repeat(14, 1fr);
  }

  .header-channel-fixed-right .left-bottom {
    display: none;
  }

  .header-channel-fixed-right-left .left-top {
    grid-column: span 14;
    grid-template-columns: repeat(14, 1fr);
  }
}

.header-channel-fixed-arrow {
  position: absolute;
  right: calc(var(--layout-padding, 60px) - 40px);
  width: 28px;
  height: 28px;
  padding: 6px;
  margin-left: 10px;
  align-self: start;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: 0.2s;
}

.header-channel-fixed-arrow:hover {
  background-color: var(--graph_bg_thick);
}

.icon-xiajiantou {
  font-weight: 600;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}

.main__layout {
  background-color: #fff;
  margin: 0 auto;
  padding: 0 var(--layout-padding);
  max-width: calc(1980px + 2 * var(--layout-padding));
  width: 100%;
}

@media (max-width: 1139.9px) {
  .main__layout {
    width: 1020px;
  }

  .feed-roll-btn {
    left: initial !important;
    right: 10px;
    top: 255px !important;
    transform: initial !important;
  }
}

@media (min-width: 1140px) {
  .main__layout {
    position: relative;
  }

  .recommended-container {
    position: relative;
  }
}

.recommended-container {
  padding-bottom: 60px;
}

.container {
  grid-gap: 20px;
  display: grid;
  position: relative;
  width: 100%;
}

@media (max-width: 1399.9px) {
  .container {
    grid-column: span 4;
    grid-template-columns: repeat(4, 1fr);
  }

  .container>*:nth-of-type(n + 6) {
    margin-top: 40px;
  }

  .container .feed-card:nth-of-type(n + 10) {
    display: none;
  }
}

@media (min-width: 1400px) {
  .container {
    grid-column: span 5;
    grid-template-columns: repeat(5, 1fr);
  }

  .container>*:nth-of-type(n + 8) {
    margin-top: 40px;
  }
}

.recommended-swipe {
  position: relative;
  grid-column: 1/3;
  /* 跨越从第1列到第3列，占据两个网格列的宽度，等价于 grid-column: span 2; */
  grid-row: 1/3;
  /* 跨越从第1行到第3行，占据两个网格行的高度 */
}

.recommended-swipe-core {
  position: relative;
  width: 100%;
}

.recommended-swipe-shim {
  opacity: 0;
  visibility: hidden;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  grid-column: span 2;
  grid-row: span 2;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  display: grid;
}

.shim-card {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

.recommended-swipe-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  /* 没有视觉效果的平移，它可以触发 GPU 加速，以提高性能和动画平滑度 */
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--graph_bg_regular);
}

.carousel-area {
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  z-index: 0;
}

.feed-roll-btn {
  position: absolute;
  left: 100%;
  top: 0;
  z-index: 2;
  transform: translate(10px);
}

.feed-roll-btn .roll-btn {
  flex-direction: column;
  margin-left: 0;
  height: auto;
  width: 40px;
  padding: 9px;
  background-color: #fff;
  color: var(--text1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  font-size: 12px;
  border: 1px solid var(--line_regular);
  transform-origin: center;
  transition: 0.2s;
  cursor: pointer;
  line-height: 1.15;
}

.feed-roll-btn .roll-btn:hover {
  background-color: var(--graph_bg_thick);
}

.feed-roll-btn .roll-btn .iconfont {
  line-height: 16px;
  margin-bottom: 6px;
  transition: transform 0.5s ease;
}

@media (max-width: 1120px) {
  .feed-roll-btn {
    opacity: 0.8;
  }
}
</style>
