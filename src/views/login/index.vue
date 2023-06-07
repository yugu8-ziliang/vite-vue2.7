<template>
  <div>
    <div class="lg-header">
      <div class="header-left">
        <img src="@/assets/image/login/icon-logo.png" style="width: 36px; height: 36px" />
        <img src="@/assets/image/login/hd-lf-title.png" style="width: 138px; height: 45px; margin-left: 9px" />
      </div>
      <div style="margin-right: 120px">
        <div style="display: flex; align-items: center">
          <img src="@/assets/image/login/hd-rg-phone.png" style="width: 10px; height: 11px; margin-right: 3px" />
          <p style="font-size: 11px; color: #fff">客服热线</p>
        </div>

        <div style="font-size: 12px; color: #fff; margin-top: 3px">
          400-050-0907
        </div>
      </div>
    </div>

    <div class="bg-banner" />

    <div id="login-box">
      <div class="login-banner" />
      <!-- <div class="code-login" @click="loginMethod">
        {{ isLoginMethod == 1 ? "扫码登录" : "账号密码登录" }}
      </div>-->
      <el-form v-if="!forgotPassWord" ref="form" :model="form" :rules="rules" class="login-form" auto-complete="on"
        label-position="left">
        <!-- 账户登录 -->
        <div>
          <div class="switch-account">
            <div class="pFlex">
              <p @click="switchAccount(1)" :class="isSwitchAccount == 1 && isLoginMethod == 1 ? 'pHover' : ''
                ">
                主账户
              </p>
              <div class="pLine" :class="[
                isSwitchAccount == 1 && isLoginMethod == 1
                  ? 'pLineColor'
                  : '',
                'pLine',
              ]" />
            </div>

            <div class="pFlex">
              <p @click="switchAccount(2)" :class="isSwitchAccount == 2 && isLoginMethod == 1 ? 'pHover' : ''
                ">
                副账户
              </p>
              <div :class="[
                isSwitchAccount == 2 && isLoginMethod == 1
                  ? 'pLineColor'
                  : '',
                'pLine',
              ]" />
            </div>

            <div style="display: flex">
              <div>
                <img src="@/assets/image/login/QrCodeLog.png" style="width: 59px; height: 20px; margin-right: 3px" />
              </div>
              <div style="cursor: pointer" @click="loginMethod">
                <img src="@/assets/image/login/QrCode.png" style="width: 40px; height: 40px" />
              </div>
            </div>
          </div>

          <!-- 主账户 -->
          <div v-if="isSwitchAccount == 1 && isLoginMethod == 1">
            <el-form-item prop="phonenum">
              <el-input ref="name" v-model="form.phonenum" placeholder="请输入登录手机号" type="text" tabindex="1"
                auto-complete="on" clearable>
                <i slot="prefix" class="el-icon-s-custom" />
              </el-input>
            </el-form-item>
            <el-form-item prop="phonecode">
              <div class="code-boxver">
                <el-input v-model="form.phonecode" auto-complete="off" placeholder="请输入验证码" clearable>
                  <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
                </el-input>
                <el-button :disabled="codeDis" class="login-codever" @click="getCodever">{{ codeDis ? codeDisTime + "s" :
                  "获取验证码" }}</el-button>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <el-input ref="password" v-model="form.password" :type="passwordType" placeholder="请输入登录密码" tabindex="2"
                auto-complete="on" clearable @keyup.enter.native="handleLogin">
                <i slot="prefix" class="el-icon-lock" />
                <svg-icon slot="suffix" :iconClass="passwordType === 'password' ? 'eye' : 'eye-open'"
                  @click="showPassword" />
              </el-input>
            </el-form-item>
          </div>
          <!-- 副账户 -->
          <div v-if="isSwitchAccount == 2 && isLoginMethod == 1">
            <el-form-item prop="phonenum">
              <el-input ref="name" v-model="form.phonenum" placeholder="请输入主账户手机号" type="text" tabindex="1"
                auto-complete="on" clearable>
                <i slot="prefix" class="el-icon-s-custom" />
              </el-input>
            </el-form-item>

            <el-form-item prop="subPhoneNum">
              <el-input v-model="form.subPhoneNum" placeholder="请输入副账户手机号" type="text" tabindex="1" auto-complete="on"
                clearable>
                <i slot="prefix" class="el-icon-s-custom" />
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input ref="password" v-model="form.password" :type="passwordType" placeholder="请输入副账户密码" tabindex="2"
                auto-complete="on" clearable @keyup.enter.native="handleLogin">
                <i slot="prefix" class="el-icon-lock" />
                <svg-icon slot="suffix" :iconClass="passwordType === 'password' ? 'eye' : 'eye-open'"
                  @click="showPassword" />
              </el-input>
            </el-form-item>
          </div>

          <el-button v-if="isLoginMethod == 1" type="text" style="float: right; margin: 0px 0px 15px"
            @click="forgotPass(true)">忘记密码</el-button>
          <el-button v-if="isLoginMethod == 1" :loading="loading" type="primary" style="width: 100%" class="login-btn"
            @click.native.prevent="handleLogin">登 录</el-button>

          <!-- 扫码登录 -->
          <div v-if="isLoginMethod == 2" style="
              position: absolute;
              top: 56%;
              left: 50%;
              transform: translate(-50%, -50%);
            ">
            <!-- <el-image
              style="width: 230px; height: 230px"
              :src="methodUrl"
              fit="fill"
            ></el-image>-->
            <div class="qrcode" ref="qrCodeUrl"></div>

            <div style="font-size: 13px; text-align: center">
              <p style="margin-top: 15px">打开 农批管家</p>
              <p style="margin-top: 5px">在 [首页] 页面右上角打开扫一扫</p>
            </div>

            <!-- <div style="display: flex;margin-top:20px;">
            <i class="el-icon-success" style="font-size: 35px"></i>
            <div style="font-size: 13px;margin-left:5px;">
              <p style="font-weight:bold;">扫描成功</p>
              <p>请在堉古APP中点击确认登录即可</p>
            </div>
            </div>-->
          </div>
        </div>
      </el-form>

      <!-- 忘记密码 -->
      <div v-if="forgotPassWord" class="login-form">
        <el-button icon="el-icon-arrow-left" type="text" @click="forgotPass(false)">返回登录</el-button>

        <el-form ref="formForgot" class="formForgot" :model="formForgot" :rules="rulesForgot" auto-complete="on"
          label-position="top">
          <el-form-item prop="phonenum" label="请输入需要找回密码的账号" v-if="forgotValue == 1" required>
            <el-input style="width: 100%" ref="name" v-model="formForgot.phonenum" placeholder="请输入手机号" type="text"
              tabindex="1" auto-complete="on" clearable>
              <i slot="prefix" class="el-icon-s-custom" />
            </el-input>
          </el-form-item>

          <el-form-item prop="phonecode" label="点击获取验证码" v-if="forgotValue == 1" required>
            <div class="code-boxver">
              <el-input v-model="formForgot.phonecode" auto-complete="off" placeholder="请输入验证码" clearable>
                <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
              </el-input>
              <el-button :disabled="forgotCodeDis" class="login-codever" @click="getForgotCodever">
                {{ forgotCodeDis ? forgotCodeDisTime + "s" : "获取验证码" }}
              </el-button>
            </div>
          </el-form-item>

          <div v-if="forgotValue == 3">
            <el-form-item prop="phonepassword" label="请设置新密码，建议使用数字、字母组合密码，提高密码安全等级" required>
              <el-input ref="password" v-model="formForgot.phonepassword" :type="passwordType" placeholder="请输入密码"
                tabindex="2" auto-complete="on" clearable @keyup.enter.native="handleForgot">
                <i slot="prefix" class="el-icon-lock" />
                <svg-icon slot="suffix" :iconClass="passwordType === 'password' ? 'eye' : 'eye-open'"
                  @click="showPassword" />
              </el-input>
            </el-form-item>

            <div style="display: flex" v-if="passwordLevel(formForgot.phonepassword) != 0">
              <div :class="[
                'code-grade',
                passwordLevel(formForgot.phonepassword) == 2 ||
                  passwordLevel(formForgot.phonepassword) == 3 ||
                  passwordLevel(formForgot.phonepassword) == 4
                  ? 'code-grade1'
                  : '',
              ]"></div>
              <div :class="[
                'code-grade',
                passwordLevel(formForgot.phonepassword) == 3 ||
                  passwordLevel(formForgot.phonepassword) == 4
                  ? 'code-grade2'
                  : '',
              ]"></div>
              <div :class="[
                'code-grade',
                passwordLevel(formForgot.phonepassword) == 4
                  ? 'code-grade3'
                  : '',
              ]"></div>
            </div>
            <div style="font-size: 10px; margin: 10px 0px" v-if="passwordLevel(formForgot.phonepassword) != 0">
              密码安全等级
              <span v-if="passwordLevel(formForgot.phonepassword) == 2">弱</span>
              <span v-if="passwordLevel(formForgot.phonepassword) == 3">中</span>
              <span v-if="passwordLevel(formForgot.phonepassword) == 4">强</span>
            </div>
          </div>

          <div v-if="forgotValue == 4">
            <p style="text-align: center; font-size: 18px; margin: 0px 0px 20px">
              密码重置成功
            </p>
          </div>
          <el-button type="primary" style="width: 100%" class="login-btn" @click.native.prevent="handleForgot">
            <span v-if="forgotValue == 1 || forgotValue == 2">下一步</span>
            <span v-if="forgotValue == 3">确定</span>
            <span v-if="forgotValue == 4">返回登录</span>
          </el-button>
        </el-form>
      </div>
    </div>

    <div class="footer">
      <div class="footer-line" />
      <div class="footer-web">
        <div class="footer-title">
          <a href="#">公司官网</a>
          <a href="#">关于我们</a>
          <a href="#">法律声明及隐私政策</a>
          <a href="#">堉古平台服务条款</a>
          <a href="#">堉古平台服务条款</a>
          <a href="#">联系我们</a>
        </div>
        <div class="footer-company">
          <span>© 2009-2021 yugu.com 版权所有 ICP证：浙B2-20080101</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import { validPhone } from "@/utils/validate.js";
import {
  getCode,
  getCodeScanning,
  getphoneVerify,
  updatePassword,
} from "@/api/login";

export default {
  name: "Login",
  data() {
    var valiAccount = (rule, value, callback) => {
      if (!value) {
        if (this.isSwitchAccount == 2) {
          callback(new Error("请输入主账户手机号"));
        } else {
          callback(new Error("请输入登录手机号"));
        }
      } else {
        if (validPhone(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var valiSubPhoneNum = (rule, value, callback) => {
      if (this.isSwitchAccount == 2) {
        if (!value) {
          callback(new Error("请输入副账户手机号"));
        } else {
          if (validPhone(value)) {
            callback();
          } else {
            callback(new Error("请输入正确的手机号"));
          }
        }
      } else {
        callback();
      }
    };
    var valiForgotPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else {
        if (validPhone(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var valiForgotPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        if (this.passwordLevel(value) == 4) {
          callback();
        } else {
          callback(new Error("密码包含数字，区分大小写"));
        }
      }
    };
    return {
      title: process.env.VUE_APP_TITLE,
      form: {
        // phonenum: "13016000000", //账户 13016000000
        // password: "123456", // 密码 123456
        // phonecode: "123456", //验证码 123456
        // subPhoneNum: "", // 副账户 18755041947
        phonenum: "", //账户 13016000000
        password: "", // 密码 123456
        phonecode: "", //验证码 123456
        subPhoneNum: "", // 副账户 18755041947
      },
      formForgot: {
        phonenum: "",
        phonecode: "",
        phonepassword: "",
      },
      rules: {
        phonenum: [
          {
            validator: valiAccount,
            trigger: ["blur", "change"],
          },
        ],
        phonecode: [
          {
            required: true,
            trigger: "blur",
            message: "请输入验证码",
          },
        ],
        subPhoneNum: [
          {
            validator: valiSubPhoneNum,
            trigger: "blur",
          },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
      rulesForgot: {
        phonenum: [
          {
            validator: valiForgotPhone,
            trigger: ["blur", "change"],
          },
        ],
        phonecode: [
          {
            required: true,
            trigger: "blur",
            message: "请输入验证码",
          },
        ],
        phonepassword: [
          {
            validator: valiForgotPassword,
            trigger: ["blur", "change"],
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,

      isSwitchAccount: 1, // 主副账户
      isLoginMethod: 1, // 切换扫码登录
      codeScan: { code: "", status: 0 }, // 二维码
      codeDis: false,
      codeDisTime: 60,
      methodUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      forgotPassWord: false,
      forgotValue: 1,
      forgotCodeDis: false,
      forgotCodeDisTime: 60,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() { },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === "password" ? "" : "password";
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          const loginForm = JSON.parse(JSON.stringify(this.form));

          let pathStore = "";
          if (this.isSwitchAccount == 1) {
            pathStore = "user/login";
          }
          if (this.isSwitchAccount == 2) {
            pathStore = "user/loginSub";
          }
          this.$store
            .dispatch(pathStore, loginForm)
            .then(() => {
              this.$store
                .dispatch("tagsView/delAllViews", null)
                .then(({ visitedViews }) => {
                  this.$router.push({ path: this.redirect || "/" });
                });
            })
            .catch((err) => { })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    },
    // 获取验证码
    getCodever() {
      // 获取验证码前先验证手机号
      this.$refs.form.validateField("phonenum", (Error) => {
        if (!Error) {
          getCode({ phone: this.form.phonenum, type: "login" }).then((res) => {
            if (res.status == 200) {
              this.$message.success(res.msg);
              this.codeDis = true;
              var authTimer = setInterval(() => {
                this.codeDisTime--;
                if (this.codeDisTime <= 0) {
                  this.codeDisTime = this.$options.data().codeDisTime;
                  this.codeDis = false;
                  clearInterval(authTimer);
                }
              }, 1000);
            }
          });
        }
      });
    },
    // 修改密码获取验证码
    getForgotCodever() {
      // 获取验证码前先验证手机号
      this.$refs.formForgot.validateField("phonenum", (Error) => {
        if (!Error) {
          getCode({ phone: this.formForgot.phonenum, type: "reset" }).then(
            (res) => {
              if (res.status == 200) {
                this.$message.success(res.msg);
                this.forgotCodeDis = true;
                var authTimer = setInterval(() => {
                  this.forgotCodeDisTime--;
                  if (this.forgotCodeDisTime <= 0) {
                    this.forgotCodeDisTime = this.$options.data().codeDisTime;
                    this.forgotCodeDis = false;
                    clearInterval(authTimer);
                  }
                }, 1000);
              }
            }
          );
        }
      });
    },
    // 主副账户切换
    switchAccount(val) {
      this.isSwitchAccount = val;
      this.isLoginMethod = 1;
      // this.$refs.form.resetFields();
      Object.assign(this.form, this.$options.data().form);
      this.$refs.form.clearValidate();
    },
    // 二维码登录
    loginMethod() {
      if (this.isLoginMethod == 1) {
        this.isLoginMethod = 2;
        // 获取二维码
        getCodeScanning().then((res) => {
          if (res.status == 200) {
            this.codeScan = res.data[0];
            this.creatQrCode(this.codeScan.code);
          } else {
            this.codeScan.status = -1;
          }
        });
      } else {
        this.isLoginMethod = 1;
      }
    },
    // 忘记密码
    forgotPass(val) {
      this.forgotPassWord = val;
      this.forgotValue = 1;
      this.formForgot = {
        phonenum: "",
        phonecode: "",
        phonepassword: "",
      };
      this.forgotCodeDis = false;
      this.forgotCodeDisTime = 60;
    },
    // 忘记密码下一步
    handleForgot() {
      if (this.forgotValue == 1) {
        let fieldsToValidate = ["phonenum", "phonecode"];
        Promise.all(
          fieldsToValidate.map((item) => {
            return new Promise((resolve, reject) => {
              this.$refs.formForgot.validateField(item, (result) => {
                resolve(result);
              });
            });
          })
        ).then((result) => {
          // result返回各个字段的验证信息，如果为空字符串则认为验证通过
          let msg = result.find((res) => {
            return res != "";
          });
          if (!msg) {
            getphoneVerify({
              phoneNumber: this.formForgot.phonenum,
              phoneCode: this.formForgot.phonecode,
            }).then((res) => {
              if (res.status == 200) {
                this.forgotValue = 3;
                return;
              }
            });
          }
        });
      }
      // if (this.forgotValue == 2) {
      //   this.$refs.formForgot.validateField("phonecode", (Error) => {
      //     if (!Error) {
      //       this.forgotValue = 3;
      //     }
      //   });
      // }

      if (this.forgotValue == 3) {
        this.$refs.formForgot.validateField("phonepassword", (result) => {
          if (!result) {
            updatePassword({
              phoneNumber: this.formForgot.phonenum,
              phoneCode: this.formForgot.phonecode,
              passWord: this.formForgot.phonepassword,
            }).then((res) => {
              if (res.status == 200) {
                this.forgotValue = 4;
                return;
              }
            });
          }
        });
      }
      // 返回登录
      if (this.forgotValue == 4) {
        this.forgotPass(false);
      }
    },
    // 密码等级判定
    passwordLevel(password) {
      if (!password) {
        return 0;
      }
      let datas = 0;
      //密码长度大于5位
      datas += password.length > 5;
      //密码含有小写字母
      datas += /[a-z]/.test(password);
      //密码含有大写字母
      datas += /[A-Z]/.test(password);
      //密码含有数字
      datas += /\d/.test(password);

      return datas;
    },
    creatQrCode(val) {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: val, // 需要转换为二维码的内容
        width: 230,
        height: 230,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
[data-mode="mobile"] {
  #login-box {
    max-width: 80%;

    .login-banner {
      display: none;
    }
  }
}

::v-deep input[type="password"]::-ms-reveal {
  display: none;
}

.lg-header {
  height: 60px;
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    display: flex;
    align-items: center;
    margin-left: 120px;
  }
}

.bg-banner {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: calc(100% - 60px);
  background-image: url("../../assets/image/login/login-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#login-box {
  max-width: 860px;
  width: 75%;
  max-height: 550px;
  height: 65%;

  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px #999;

  display: flex;
  justify-content: center;
  align-items: center;

  .login-banner {
    width: 380px;
    height: 270px;
    margin-left: 34px;
    background-image: url("../../assets/image/login/login-banner.png");
    background-size: cover;
    background-position: center center;
  }

  .code-login {
    position: fixed;
    z-index: 999;
    right: 12px;
    top: 12px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }

  .login-form {
    position: relative;
    width: 450px;
    height: 450px;
    padding: 50px 35px 30px;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 22px;
        color: #666;
        margin: 0 auto 30px;
        text-align: center;
        font-weight: bold;
      }
    }

    .switch-account {
      display: flex;
      justify-content: space-between;
      margin: 0px 0px 5px 23px;

      .pFlex {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        color: rgba(1, 6, 33, 0.5);
        font-weight: bold;
        font-size: 16px;
      }

      p {
        cursor: pointer;
      }

      .pHover {
        color: var(--color-primary);
      }

      .pLine {
        width: 130%;
        height: 2px;
        margin-top: 5px;
        overflow: hidden;
      }

      .pLineColor {
        background-color: var(--color-primary);
      }
    }

    .formForgot {
      margin-top: 30px;
    }

    .code-grade {
      width: 60px;
      height: 6px;
      overflow: hidden;
      background-color: rgba(242, 242, 242, 1);
      margin-right: 5px;
    }

    .code-grade1 {
      background-color: #f56c6c;
    }

    .code-grade2 {
      background-color: #e6a23c;
    }

    .code-grade3 {
      background-color: #67c23a;
    }
  }

  .code-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-input {
      width: 65%;
    }

    .el-image {
      height: 48px;
      width: 30%;
      cursor: pointer;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
  }

  .code-boxver {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-input {
      width: 63%;
    }

    // ::v-deep .el-input input {
    //   border-top-right-radius: 0px;
    //   border-bottom-right-radius: 0px;
    // }
    .login-codever {
      width: auto;
      height: 40px;
      // border-top-left-radius: 0px;
      // border-bottom-left-radius: 0px;
    }
  }

  .login-btn {
    height: 40px;
    font-size: 16px;
  }

  ::v-deep .el-input {
    display: inline-block;
    height: 40px;
    width: 100%;

    input {
      height: 40px;
    }

    .el-input__prefix {
      left: 10px;
    }

    .el-input__prefix,
    .el-input__suffix {
      display: flex;
      align-items: center;
    }

    .el-input__suffix {
      right: 10px;
    }
  }

  .el-checkbox {
    margin: 20px 0;
  }
}

.footer {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translateX(-50%);

  max-width: 860px;
  width: 75%;

  .footer-line {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .footer-web {
    margin-top: 15px;

    .footer-title {
      font-size: 14px;
      color: rgba(1, 6, 33, 0.55);

      a {
        margin-right: 24px;
        color: rgba(1, 6, 33, 0.55);
      }
    }

    .footer-company {
      margin-top: 13px;
      font-size: 14px;
      color: rgba(1, 6, 33, 0.35);
    }
  }
}
</style>
