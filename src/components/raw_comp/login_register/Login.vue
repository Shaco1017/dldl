<template>
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
                        <el-input size="large" style="padding:0 20px;" v-model="form.password" type="password"
                            placeholder="请输入密码" show-password></el-input>
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

<script setup>
let login_mask_display

function regist() {
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
        }
        function login_form() {
            this.login_mask_display = "flex"
        }
        function login_quit() {
            this.login_mask_display = "none"
        }


</script>
<style>
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