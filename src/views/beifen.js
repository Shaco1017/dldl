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
  hasMore.value = false;
  // console.log(this.cumulativeVideos);
  loadingMore.value = false;
}

const rootEl = ref(null)

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

  // 当距离底部小于800且有更多数据时触发加载数据的函数
  if (bottomDistance.value < 800 && hasMore && !loadingMore) {
    await getCumulativeVideos();
  }
}

onMounted(async () => {
  {
    // 窗口滚动时根据高度判断是否显示固钉导航栏和固钉频道栏
    rootEl.value = document.documentElement
    // 根据主体顶部的偏移量计算 header 的高度
    headerHight.value = document.querySelector('.main__layout').offsetTop
    window.addEventListener('scroll', handleScroll)
    // 初次挂载时执行一次，防止大屏情况下，视频数量不足以撑出滚动条
    await handleScroll()
    while (bottomDistance.value < 800 && hasMore.value) {
      await handleScroll()
    }
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})