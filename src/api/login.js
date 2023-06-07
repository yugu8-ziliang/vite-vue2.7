import request from "@/utils/request";

// 登录方法
/**
 * 封装请求
 * @param username  用户名
 * @param password  密码
 * @param idValueC  验证码
 * @param idKeyC    验证码key
 */
export function login(data) {
  return request({
    type: "post",
    url: "/login/",
    data: data,
    json: true,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    type: "get",
    url: "/getInfo/",
  });
}

// 退出方法
export function logout() {
  return request({
    type: "post",
    url: "/logout/",
  });
}

// 获取验证码
export function getCodeImg() {
  return request({
    type: "get",
    url: "/captcha/refresh/",
  });
}

// 获取验证码，发送短信
export function getCode(data) {
  return request({
    type: "post",
    url: "/pc/user/getcode/",
    data: data,
  });
}

// 登录
export function loginMain(data) {
  return request({
    type: "post",
    url: "/pc/user/login/",
    data: data,
  });
}
// 副账户登录
export function loginSub(data) {
  return request({
    type: "post",
    url: "/ios/userSub/userSubLogin/",
    data: data,
  });
}

// 获取二维码
export function getCodeScanning(data) {
  return request({
    type: "post",
    url: "/pc/user/codeScanning/",
    data: data,
  });
}

// 手机号验证码验证
export function getphoneVerify(data) {
  return request({
    type: "post",
    url: "/pc/user/phone_verify/",
    data: data,
  });
}
// 修改密码
export function updatePassword(data) {
  return request({
    type: "post",
    url: "/pc/user/updatePassword/",
    data: data,
  });
}
// 校验支付密码
export function checkoutPayPassword(data) {
  return request({
    type: "post",
    url: "/pc/user/checkoutPayPassword/",
    data: data,
  });
}
// 密码设置 获取验证码
export function getCodever(data) {
  return request({
    type: "post",
    url: "/pc/userinfo/updatePassword/getcode/",
    data: data,
  });
}
// 密码设置 修改登录密码
export function changePassword(data) {
  return request({
    type: "post",
    url: "/pc/userinfo/updatePassword/",
    data: data,
  });
}
// 密码设置 修改支付密码
export function changePayPassword(data) {
  return request({
    type: "post",
    url: "/pc/userinfo/PayPassword/",
    data: data,
  });
}
// 我要反馈
export function userFeedBack(data) {
  return request({
    type: "post",
    url: "/pc/user/userFeedBack/",
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // 为键值对格式
    },
  });
}

// 切换账户获取新token
export const accountSwitch = data => {
  return request({
    type: "post",
    url: "/pc/userinfo/accountSwitch/",
    data: data,
  });
};
