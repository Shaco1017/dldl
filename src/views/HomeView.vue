<template>
  <div class="large_header">

    <el-affix>
      <div class="header_bar">
        <ul class="banner_left">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="zhuzhan-icon">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
              fill="white"></path>
          </svg>
          <li v-for='item in banner_left_items'>
            <a href="">
              <span> {{ item.name }} </span>
            </a>
          </li>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="download-client-trigger__icon">
            <path
              d="M7.23181 8.65895V1.75796C7.23181 1.33935 7.57582 1 8.00018 1C8.42453 1 8.76854 1.33935 8.76854 1.75796V8.67097L9.98589 7.47009C10.286 7.17409 10.7725 7.17409 11.0725 7.47009C11.3726 7.7661 11.3726 8.24601 11.0725 8.54201L8.54958 11.0308C8.24952 11.3268 7.76302 11.3268 7.46295 11.0308L4.94002 8.54201C4.63995 8.24601 4.63995 7.7661 4.94002 7.47009C5.24008 7.17409 5.72658 7.17409 6.02665 7.47009L7.23181 8.65895Z"
              fill="white"></path>
            <path
              d="M3.48023 4.29936C2.40686 4.29936 1.53672 5.15772 1.53672 6.21656V11.5669C1.53672 12.6257 2.40686 13.4841 3.48023 13.4841H12.5198C13.5931 13.4841 14.4633 12.6257 14.4633 11.5669V6.21656C14.4633 5.15772 13.5931 4.29936 12.5198 4.29936H11.6158C11.1915 4.29936 10.8475 3.96001 10.8475 3.5414C10.8475 3.12279 11.1915 2.78344 11.6158 2.78344H12.5198C14.4418 2.78344 16 4.3205 16 6.21656V11.5669C16 13.4629 14.4418 15 12.5198 15H3.48023C1.55815 15 0 13.4629 0 11.5669V6.21656C0 4.3205 1.55815 2.78344 3.48023 2.78344H4.38418C4.80853 2.78344 5.15254 3.12279 5.15254 3.5414C5.15254 3.96001 4.80853 4.29936 4.38418 4.29936H3.48023Z"
              fill="white"></path>
          </svg>
        </ul>


        <div class="center-search__bar" :class="isSearchPopShow ? 'is-focus' : ''">
          <!-- 输入框 -->
          <div id="nav-searchform" :class="isSearchPopShow ? 'nav-searchform-active' : ''" ref="searchForm">
            <div class="nav-search-content">
              <el-input class="nav-search-input" :class="isSearchPopShow ? 'nav-search-input-active' : ''"
                v-model="searchInput" placeholder="请输入搜索内容" @focus="searchPopShow()" @keyup.enter="goSearch"
                @input="handleInput" @compositionstart="isComposite = true" @compositionend="compositionend"></el-input>
            </div>
            <div class="nav-search-clean" :style="searchInput == '' ? 'display: none;' : ''"
              @click.stop="searchInput = ''">
              <!-- <i class="iconfont icon-close"></i> -->
              <el-icon size="16">
                <CircleCloseFilled />
              </el-icon>
            </div>
            <div class="nav-search-btn" @click="goSearch">
              <i class="iconfont icon-sousuo"></i>
            </div>
          </div>
        </div>

        <ul class="banner_right">
          <li style="padding: 0; padding-right: 10px; color: white;font-weight: bold; cursor: pointer;">
            <a @click="login_form">
              <!-- <img class="avatar" width="50px" height="50px" src="@/assets/image/avatar.png" /> -->
              登录
            </a>
          </li>
          <li v-for="item in banner_right_items">
            <a href="">
              <span> {{ item.name }} </span>
            </a>
          </li>
        </ul>
      </div>
    </el-affix>



    <div class="header_banner">
      <div class="banner_image">
        <img src="@/assets/image/public_img/banner.jpg">
      </div>
      <div class="banner_inner">
        <a href="" class="inner_logo">
          <img class="logo_image" src="@/assets/image/public_img/logo.png">
        </a>
      </div>

    </div>

    <div class="header_channel">
      <div class="channel_icons">
        <a v-for="item in channel_icons_items" class="channel_icons_item" href="">
          <div>
            <img :src="item.icon" :key="icon" style="border-radius: 100%;">
          </div>
          <span class="icon-title">{{ item.name }}</span>

        </a>
      </div>
      <div class="channel_container">
        <div class="channel_left">
          <a v-for="item in channel_left_items" class="channel-link" href="">
            {{ item.name }}
          </a>
          <a class="channel-link" href="">

            <el-dropdown>

              更多

              <template #dropdown class="channel-link-dropdown">
                <div class="channel-link-dropdown">
                  <a v-for="item in channel_left_items" class="channel-link" href="">
                    {{ item.name }}
                  </a>
                </div>
              </template>
            </el-dropdown>
          </a>
        </div>
        <div class="channel_right">
          <a v-for="item in channel_right_items" :href="item.href">
            <svg :xmlns="item.svg.xmlns" :xmlns:xlink="item.svg.xlink" :viewBox="item.svg.viewBox"
              :width="item.svg.width" :height="item.svg.height" class="side-icon">
              <path v-for="path in item.svg.paths" :d="path.d" :fill="path.fill"> </path>
            </svg>
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="header_channel_slide">
    <!-- todo  -->
  </div>

  <main>
    <div class="recommended_container">
      <div class="recommended_carousel" style="grid-column: 1 / 3;grid-row: 1 / 3;">
        <el-carousel height="auto" style="border-radius: 6px;">
          <el-carousel-item v-for="item in 4" :key="item" style="height: 400px">
            <img style="height: 400px;" class="recommended_carousel_card_image" src="@/assets/image/card_img.jpg">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div v-for="item in video_data" class="recommended_card">
        <div class="card_img">
          <!-- {{ item }} -->
          <img class="video_card_image" :src="item.video_coverimg_path">
        </div>
        <div class="card_info">
          <a href="/video">{{ item.video_name }}</a>
        </div>
      </div>

      <div class="video-card__wrap" v-if="!loadingRandom">
        <a target="_blank">
          <div class="video-card__image">
            <div class="video-card__image--wrap">
              <picture class="video-card__cover">
                <img>
              </picture>
            </div>
            <div class="video-card__mask">
              <div class="video-card__stats">
                <div class="video-card__stats--left">
                  <span class="video-card__stats--item">
                    <i class="iconfont icon-bofangshu"></i>
                    <span class="video-card__stats--text">
                      <!-- {{ handleNum(randomVideos[index - 1].stats.play) }} -->
                    </span>
                  </span>
                  <span class="video-card__stats--item">
                    <i class="iconfont icon-danmushu"></i>
                    <span class="video-card__stats--text">
                      <!-- {{ handleNum(randomVideos[index - 1].stats.danmu) }} -->
                    </span>
                  </span>
                </div>
                <div class="video-card__stats__duration">
                  <!-- {{ handleDuration(randomVideos[index - 1].video.duration) }} -->
                </div>
              </div>
            </div>
          </div>
        </a>
        <div class="video-card__info">
          <div class="video-card__info--right">
            <h3 class="video-card__info--tit">
              <a target="_blank">
                <!-- {{ randomVideos[index - 1].video.title }} -->
              </a>
            </h3>
            <div class="video-card__info--bottom">
              <div class="video-card__info--icon-text" :style="'display: none;'">已关注</div>
              <a class="video-card__info--owner" target="_blank">
                <i class="iconfont icon-uper" :style="''"></i>
                <span class="video-card__info--author">
                  <!-- {{ randomVideos[index - 1].user.nickname }} -->
                </span>
                <span class="video-card__info--date">
                  <!-- · {{ handleDate(randomVideos[index - 1].video.uploadDate) }} -->
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="login_mask">
    <button @click="login_quit()">
      退出
    </button>
    <el-form class="login_form" :model="form" label-width="auto">
      <el-row>
        <el-col :span="8">
          //todo 二维码
        </el-col>
        <el-col :span="16">
          <span
            style="display: flex; align-items: center; justify-content: center; margin-bottom: 24px;color: #4fa5d9;font-weight: 500;font-size: 18px;line-height: 20px;">
            密 码 登 录</span>
          <el-form-item>
            <el-input size="large" style="padding: 0 20px;" v-model="form.username" minlength="3"
              placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input size="large" style="padding:0 20px;" v-model="form.password" type="password" placeholder="请输入密码"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="display:block;margin:0 auto;  box-sizing: border-box;width: 194px;height: 40px;border-radius: 8px;"
              @click="regist">注册</el-button>
            <el-button
              style="display:block;margin:0 auto; box-sizing: border-box;width: 194px;height: 40px;border-radius: 8px;"
              type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>

</template>

<!-- <script>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'

import axios from "axios";


const axios = require('axios').default;

const data = ref(null)

onMounted(() => {
  axios.get('http://localhost:8080/user/getInfo/1')
      .then(res => {
          data.value = res.data // 更新响应式数据
      })
      .catch(err => console.error(err))
}
)




</script> -->
<script>
import axios from 'axios'

export default {
  data() {
    return {
      login_mask_display: "none",
      form: {
        account: null,
        password: null
      },
      video_data: null,
      data: null, // 用于存储 API 返回的数据
      is_login: null,
      banner_left_items: [
        { name: '首页', href: '', icon: '' },
        { name: '番剧', href: '', icon: '' },
        { name: '直播', href: '', icon: '' },
        { name: '游戏中心', href: '', icon: '' },
        { name: '会员购', href: '', icon: '' },
        { name: '漫画', href: '', icon: '' },
        { name: '赛事', href: '', icon: '' },
        { name: '下载客户端', href: '', icon: '' },
      ],
      banner_right_items: [
        { name: '大会员', href: '', icon: '' },
        { name: '消息', href: '', icon: '' },
        { name: '收藏', href: '', icon: '' },
        { name: '历史', href: '', icon: '' },
        { name: '创作中心', href: '', icon: '' },
        { name: '投稿', href: '', icon: '' },
      ],
      channel_icons_items: [
        { name: '动态', icon: 'src/assets/image/avatar.png' },
        { name: '动态', icon: 'src/assets/image/avatar.png' }
      ],
      channel_left_items: [
        { id: 1, name: '番剧', href: '' },
        { id: 2, name: '电影', href: '' },
        { name: '国创', href: '' },
        { name: '电视剧', href: '' },
        { name: '综艺', href: '' },
        { name: '纪录片', href: '' },
        { name: '动画', href: '' },
        { name: '游戏', href: '' },
        { name: '鬼畜', href: '' },
        { name: '音乐', href: '' },
        { name: '舞蹈', href: '' },
        { name: '影视', href: '' },
        { name: '娱乐', href: '' },
        { name: '知识', href: '' },
        { name: '资讯', href: '' },
        { name: '美食', href: '' },
        { name: '小剧场', href: '' },
        { name: '汽车', href: '' },
        { name: '汽车', href: '' },
        { name: '汽车', href: '' },
        { name: '体育运动', href: '' },
      ],
      channel_right_items: [
        {
          name: '专栏', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        },
        {
          name: '直播', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        }, {
          name: '活动', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        }, {
          name: '课堂', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        }, {
          name: '社区中心', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        }, {
          name: '新歌热榜', href: '', svg: {
            xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 24 24', width: '24', height: '24',
            paths: {
              path1: {
                d: 'M0 0L24 0L24 24L0 24L0 0z',
                fill: '#F7F7F703'
              },
              path2: {
                d: 'M18 4.8L6 4.8C5.33726 4.8 4.8 5.33726 4.8 6L4.8 18C4.8 18.66276 5.33726 19.2 6 19.2L18 19.2C18.66276 19.2 19.2 18.66276 19.2 18L19.2 6C19.2 5.33726 18.66276 4.8 18 4.8z',
                fill: '#61666Dff'
              },
              path3: {
                d: 'M4 5.99998C4 4.89541 4.89544 3.99997 6 3.99997L18 3.99997C19.1046 3.99997 20.00004 4.89541 20.00004 5.99998L20.00004 18C20.00004 19.1046 19.1046 19.99992 18 19.99992L6 19.99992C4.89544 19.99992 4 19.1046 4 18L4 5.99998zM6 5.59998C5.77909 5.59998 5.6 5.77907 5.6 5.99998L5.6 18C5.6 18.22092 5.77908 18.39996 6 18.39996L18 18.39996C18.22092 18.39996 18.39996 18.22092 18.39996 18L18.39996 5.99998C18.39996 5.77906 18.22092 5.59998 18 5.59998L6 5.59998z',
                fill: '61666Dff'
              },
              path4: {
                d: 'M15.99996 11.19931L8 11.19931C7.55818 11.19931 7.2 11.55749 7.2 11.99932C7.2 12.44112 7.55818 12.79932 8 12.79932L15.99996 12.79932C16.4418 12.79932 16.8 12.44112 16.8 11.99932C16.8 11.55749 16.4418 11.19931 15.99996 11.19931z',
                fill: '#ffffffff'
              },
              path5: {

                d: 'M15.99996 8.00062L8 8.00062C7.55818 8.00062 7.2 8.35878 7.2 8.80061C7.2 9.24244 7.55818 9.60061 8 9.60061L15.99996 9.60061C16.4418 9.60061 16.8 9.24244 16.8 8.80061C16.8 8.35878 16.4418 8.00062 15.99996 8.00062z',
                fill: '#ffffffff'
              },
              path6: {

                d: 'M11.2 14.4L8 14.4C7.55818 14.4 7.2 14.7582 7.2 15.20004C7.2 15.64188 7.55818 15.99996 8 15.99996L11.2 15.99996C11.64182 15.99996 12 15.64188 12 15.20004C12 14.7582 11.64182 14.4 11.2 14.4z',
                fill: '#ffffffff'
              }
            }
          }
        },

      ]
    }
  },
  mounted() {
    // 在组件挂载后发起请求
    axios.get('http://localhost:8080/video/getall')
      .then(res => {
        this.video_data = res.data // 将数据赋值给 data 属性
      })
      .catch(err => console.error(err))
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    regist() {
      axios.post("http://localhost:8080/user/save", this.form)
        .then((res) => {
          if (res.data.code === 200) {
            // 表示登录成功
            // 1.存储相关的token信息  token信息在响应的header中
            sessionStorage.setItem("token", res.headers.authorization)
            sessionStorage.setItem("username", this.form.username)
            // 2.路由到主页面
            // this.$router.push("/");
          }
        });
    },
    login_form() {
      this.login_mask_display = "flex"
    },
    login_quit() {
      this.login_mask_display = "none"
    }
  }
}
</script>

<style scoped>
body {
  ul {
    list-style-type: none;
  }
}

.large_header {
  min-height: 64px;
  position: relative;
  margin: 0 auto;
  max-width: 2560px;
  width: 100%;
}

.header_bar {

  background-color: rgba(24, 23, 23, 0.2);
  position: absolute;
  top: 0;
  z-index: 1002;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  max-width: 2560px;
  width: 100%;
  height: 64px;

}

.header_bar ul {
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
  display: flex;
}

.banner_left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 30px;

  li {
    display: flex;

    align-items: center;
    flex-direction: column;
    flex-shrink: 0;

    min-width: 50px;
    text-align: center;
    font-size: 13px;

    span {
      color: white;
      font-weight: bold;
    }
  }
}

.banner_right {
  display: flex;
  align-items: center;

  margin-left: 10px;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    margin-right: 0;
    min-width: 50px;
    text-align: center;
    font-size: 13px;

    a {
      color: white;
    }

  }

  .avatar {

    display: inline-block;
    box-sizing: content-box;

    border: 1px solid;
    border-radius: 6px;
    text-align: center;
  }
}

.banner_search {
  flex: 1 auto;
  height: 38px;

  .input-with-select {
    justify-content: center;

    position: relative;
  }
}



.avatar_dropdown {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px;
  border-radius: 8px;
  border: 1px;
}



.avatar_dropdown_card {
  width: 300px;
  padding: 0px 24px 18px;
  border-radius: 8px;

  .counts-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0px 20px;

    .single-count-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      transition: color 0.2s;

      .count-text {
        font-weight: 400;
        font-size: 12px;
        transition: color 0.2s;
      }


    }

  }
}

.header_banner {
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 1000px;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  /* background-color: #e3e5e7; */
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;

  .banner_image {
    position: absolute;
    object-fit: cover;

    img {
      position: relative;
      display: inline-block;
      line-height: 1;
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }

    /* z-index: 0; */
  }

  .banner_inner {
    position: relative;
    width: 100%;
    max-width: 2078px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    padding: 0 64px;

    .inner_logo {
      margin-bottom: 10px;
      z-index: 1;
      display: inline-block;
      min-height: 60px;
      width: 180px;
      height: 50%;
    }

    img {
      display: block;
      object-fit: contain;

      width: 162px;
      aspect-ratio: auto 162 / 78;
      height: 78px;
      aspect-ratio: auto 162 / 78;
    }
  }

}

.header_channel {
  margin: 0 auto;
  padding: 0 140px;

  height: 110px;

  position: relative;
  width: 100%;

  display: flex;
  align-items: center;

  .channel_icons {
    margin-right: 8px;

    z-index: 0;
    display: flex;
    align-items: center;

    a {
      position: relative;
      display: flex;
      flex-direction: column;

      margin-right: 24px;

      img {
        width: 50px;
        height: 50px;
      }

      span {
        font-size: 14px;
        line-height: 20px;
        text-align: center;

        color: black;
      }
    }

  }

  .channel_container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .channel_left {

      grid-template-columns: repeat(11, 1fr);

      display: grid;

      width: 100%;

      grid-auto-flow: column;
      grid-column: span 4;
      grid-gap: 10px;

      grid-template-rows: repeat(2, 1fr);

      border-right: 1px solid;
      border-right-style: solid;

      position: relative;

      padding-right: 30px;

      row-gap: 10px;
      column-gap: 10px;


      a {
        letter-spacing: 2px;
        text-align: center;
        background-color: rgb(246, 247, 248);
        color: rgb(119, 119, 121);
      }
    }

    .channel_right {
      /* width: 240px; */
      width: 300px;

      grid-row-gap: 10px;
      grid-auto-flow: column;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      flex-shrink: 0;

      /* justify-content: space-around; */

      a {
        letter-spacing: 2px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        text-align: center;
        font-weight: 400;
        color: black;
      }
    }
  }
}

.channel-link-dropdown {
  grid-template-columns: repeat(5, 1fr);

  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-column: span 4;
  grid-gap: 10px;
  grid-template-rows: repeat(2, 1fr);

  border-right: 1px solid;


  border-right-style: solid;

  position: relative;

  /* padding-right: 30px; */

  row-gap: 10px;
  column-gap: 10px;


  a {



    letter-spacing: 2px;

    display: inline-block;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;

    background-color: gainsboro;

    color: gray;
  }
}

main {

  margin: 0 auto;
  padding: 0 140px;

}

.recommended_container {

  grid-template-columns: repeat(5, 1fr);

  display: grid;

  position: relative;

  width: 100%;

  grid-gap: 20px;

}

.recommended_card {

  .card_info {
    /* display: flex; */
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
  }

}

.video_card_image {
  border-radius: 6px;

  display: block;
  width: 100%;
  height: 100%;
}

.login_mask {
  display: v-bind(login_mask_display);
  /* display: login_mask_display; */

  justify-content: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  background: rgba(0, 0, 0, .5);
  z-index: 10010;

  align-items: center;
}

.login_form {
  box-sizing: border-box;
  width: 820px;
  min-height: 430px;
  background: #fff;

  /* 边框弧度 */
  border-radius: 8px;

  padding: 52px 65px 29px 92px;
  background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/22_open.4ea5f239.png), url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/33_open.f7d7f655.png);

  background-position: 0 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;

  background-size: 14%;

  position: relative;

}
</style>