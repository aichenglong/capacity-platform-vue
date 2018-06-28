<template>
    <div class="login-page-container">
      <el-form :model="ruleModel" :rules="rules" ref="ruleForm" label-position="left"  label-width="0px" class="decorated-root login-container">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="account">
          <el-input  v-model="ruleModel.account"  auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleModel.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox  v-model="checked" checked  class="remember" >记住我</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      logining: false,
      ruleModel: {
        account: 'admin',
        password: 'admin'
      },
      rules: {
        account: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      },
      checked: true
    }
  },
  methods: {
    handleSubmit (ev) {
      var _this = this
      console.info(_this)
      _this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          _this.logging = true
          var loginParam = {
            userName: this.ruleModel.account,
            password: this.ruleModel.password
          }
          if (loginParam.userName === 'admin' && loginParam.password === 'admin') {
            _this.logging = false
            sessionStorage.setItem('user', JSON.stringify(loginParam))
            _this.$router.push({path: '/menuTab'})
          } else {
            _this.logging = false
            _this.$alert("用户名或者密码错误!", '提示信息', {
              confirmButtonText: '确定'
            })
          }

        } else {
          console.log("error submit!")
          return false
        }
      })

    }
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
  }
</style>
