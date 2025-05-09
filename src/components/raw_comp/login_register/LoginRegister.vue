<template>
  <div class="login-register">
    <div class="login-register-container">
      <el-tabs stretch class="login-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" lazy>
          <div class="login-box">
            <el-input type="text" class="input" v-model="usernameLogin" placeholder="请输入账号" />
            <el-input type="password" show-password class="input" v-model="passwordLogin" placeholder="请输入密码" />
            <div class="submit" @click="submitLogin">登&nbsp;录</div>
            <div class="tips">登录即代表你同意我们的<span class="agreement">用户协议</span></div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注册" lazy>
          <div class="register-box">
            <el-input type="text" class="input" v-model="usernameRegister" placeholder="请输入账号" maxlength="50" />
            <el-input type="password" show-password class="input" v-model="passwordRegister" placeholder="请输入密码" />
            <el-input type="password" show-password class="input" v-model="confirmedPassword" placeholder="再次确认密码" />
            <div class="submit" @click="submitRegister">注&nbsp;册</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import store from '@/store'
// import request from '@/network'

let usernameLogin = ref('')
let passwordLogin = ref('')
let usernameRegister = ref('')
let passwordRegister = ref('')
let confirmedPassword = ref('')
let type = ref(1) // 1登录 2注册

function handleClick(tab) {
  if (tab.props.label === '登录') {
    type = 1
  } else {
    type = 2
  }
}
// 监听键盘回车触发登录
function handleKeyboard(event) {
  if (event.keyCode === 13 && type === 1) {
    submitLogin()
  }
}
// 登录的回调
async function submitLogin() {
  // 前端先做判断，减轻服务器负担
  if (usernameLogin.value.trim() == '') {
    ElMessage.error('请输入账号')
    return
  }
  if (passwordLogin == '') {
    ElMessage.error('请输入密码')
    return
  }
  store.state.isLoading = true
  // 这里为了更方便捕捉到错误后给出提示，就不使用封装的函数了
  const result = await axios
    .post('/api/user/account/login', {
      username: usernameLogin.toString(),
      password: passwordLogin.toString(),
    })
    .catch(() => {
      ElMessage.error('DLDL被玩坏了')
      store.state.isLoading = false
    })
  if (!result) {
    store.state.isLoading = false
    return
  }
  if (result.data.code !== 200) {
    ElMessage.error(result.data.message)
    store.state.isLoading = false
  }
  if (result.data.code === 200) {
    localStorage.setItem('teri_token', result.data.data.token) // 浏览器缓存token
    store.commit('updateUser', result.data.data.user) // 更新vuex中当前用户信息
    await store.dispatch('getMsgUnread')
    await initIMServer() // 开启即时通信websocket
    await getFavorites()
    await getLikeAndDisLikeComment()
    ElMessage.success(result.data.message)
    store.commit('updateIsLogin', true) // 修改在线状态
    emit('loginSuccess') // 触发父组件关闭登录框的回调
    store.state.isLoading = false
  }
}

async function submitRegister() {
  // 前端先做判断，减轻服务器负担
  if (usernameRegister.trim() == '') {
    ElMessage.error('账号不能为空')
    return
  }
  if (passwordRegister == '' || confirmedPassword == '') {
    ElMessage.error('密码不能为空')
    return
  }
  if (passwordRegister != confirmedPassword) {
    ElMessage.error('两次输入的密码不一致')
    return
  }

  const result = await $post('/user/account/register', {
    username: usernameRegister.toString(),
    password: passwordRegister.toString(),
    confirmedPassword: confirmedPassword.toString(),
  })
  if (!result) return
  if (result.data.code === 200) {
    ElMessage.success(result.data.message)
    usernameRegister = ''
    passwordRegister = ''
    confirmedPassword = ''
  }
}

// 开启实时通信消息服务
async function initIMServer() {
  await store.dispatch('connectWebSocket')
  const connection = JSON.stringify({
    code: 100,
    content: 'Bearer ' + localStorage.getItem('teri_token'),
  })
  store.state.ws.send(connection)
}

// 获取当前用户的收藏夹列表
async function getFavorites() {
  const res = await get('/favorite/get-all/user', {
    params: { uid: store.state.user.uid },
    headers: { Authorization: 'Bearer ' + localStorage.getItem('teri_token') },
  })
  if (!res.data.data) return
  // 将默认置顶
  const defaultFav = res.data.data.find((item) => item.type === 1)
  const list = res.data.data.filter((item) => item.type !== 1)
  list.unshift(defaultFav)
  $store.commit('updateFavorites', list)
}

// 获取用户赞踩的评论集合
async function getLikeAndDisLikeComment() {
  const res = await get('/comment/get-like-and-dislike', {
    params: { uid: store.state.user.uid },
    headers: { Authorization: 'Bearer ' + localStorage.getItem('teri_token') },
  })
  if (!res.data) return
  store.commit('updateLikeComment', res.data.data.userLike)
  store.commit('updateDislikeComment', res.data.data.userDislike)
}

</script>

<style scoped>
.login-register {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  background: #fff;

  /* 边框弧度 */
  border-radius: 8px;

  padding: 52px 65px 29px 92px;
  background-image:
    url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/22_open.4ea5f239.png),
    url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/33_open.f7d7f655.png);

  background-position: 0 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;

  background-size: 14%;
}

.login-register-container {
  display: block;
  width: 360px;
  height: 360px;
  padding: 30px 40px;
}

.login-tabs {
  width: 80%;
  margin: 0 auto;
}

.login-box,
.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-box .input,
.login-box .submit,
.login-box .tips {
  margin-top: 30px;
  width: 100%;
}

.register-box .input,
.register-box .submit,
.register-box .tips {
  margin-top: 20px;
  width: 100%;
}

.submit {
  color: #fff;
  border-radius: 4px;
  background-color: var(--brand_pink);
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
}

.submit:hover {
  background-color: #f992af;
}

.tips {
  color: var(--text2);
  font-size: 12px;
  text-align: center;
}

.tips .agreement {
  color: var(--brand_blue);
  margin-left: 4px;
  cursor: pointer;
}

/* element 元素 */
.el-input {
  --el-input-focus-border: #ccc;
  --el-input-focus-border-color: #ccc;
  --el-input-border-radius: 10px;
  --el-input-height: 40px;
}

.el-input :deep(.el-input__inner) {
  padding: 8px 15px;
}

.el-input :deep(.el-input__icon) {
  margin-right: 8px;
}

.login-register-container :deep(.el-tabs__active-bar) {
  height: 3px;
}

.login-register-container :deep(.el-tabs__nav-wrap::after) {
  height: 0;
}

.login-register-container :deep(.el-tabs__item) {
  font-size: 17px;
}
</style>