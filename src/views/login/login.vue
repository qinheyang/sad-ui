<template>
  <div class="login-body">
    <el-form class="login-container demo-ruleForm"
             :model="loginForm"
             status-icon
             :rules="rules"
             ref="ruleForm"
             label-width="100px">
      <h1 class="login-title">登录</h1>
      <el-form-item prop="userName">
        <img src="@/assets/login/username.png"
             class="login-icon username-icon" />
        <el-input type="text"
                  v-model="loginForm.userName"
                  autocomplete="off"
                  placeholder="用户名"
                  class="input-box"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <img src="@/assets/login/password.png"
             class="login-icon username-icon" />
        <el-input type="password"
                  v-model="loginForm.password"
                  placeholder="密码"
                  autocomplete="off"
                  class="input-box">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   round
                   @click="submitForm('ruleForm')">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/login';
import { setToken, removeToken } from '@/utils/auth'
export default {
  name: "login",
  data () {
    return {
      loginForm: {
        userName: "",
        password: "",

      },
      rules: {
        userName: [{ required: true, message: '请输入昵称', trigger: "blur" }],
        password: [{ required: true, message: '请输入密码', trigger: "blur" }],

      },
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '登录中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          removeToken();
          login(this.loginForm).then(resp => {
            console.log(resp);
            setToken(resp.token)
            loading.close()
            this.$router.push({ path: '/' })

          }).catch(() => {
            loading.close()

          })

        } else {
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped lang="scss">
.login-body {
  width: 100%;
  height: 100%;
  background: url(@/assets/login/background.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.login-container {
  height: 40%;
  width: 25%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  align-items: center;
}
/deep/.el-form-item__content {
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  .login-icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
}
/deep/ .el-input__inner {
  background: transparent;
  padding: 0;
  border: 0;
  border-bottom: 2px solid silver;
  border-radius: 0%;
  font-size: 17px;
  color: 000;
}

.login-title {
  color: #fff;
}
.el-button {
  width: 190px;
}
</style>