import request from "@/utils/request";

//我的信息
export const personal = data => {
  return request({
    type: "post",
    url: "/pc/userinfo/personal/",
    data: data,
  });
};
//套餐信息
export const updateManagementLoad = data => {
  return request({
    type: "post",
    url: "/pc/userinfo/updateManagementLoad/",
    data: data,
  });
};
//副账户信息
export const information = data => {
  return request({
    type: "post",
    url: "/pc/userinfo/information/",
    data: data,
  });
};
//副账户信息
export const accountManagement = data => {
  return request({
    type: "post",
    url: "/pc/userinfo/accountManagement/",
    data: data,
  });
};
//副账户添加
export const newUserSub = data => {
  return request({
    type: "post",
    url: "/pc/userSub/newUserSub/",
    data: data,
  });
};
//副账户停用
export const stopUseUserSub = data => {
  return request({
    type: "post",
    url: "/pc/userSub/stopUseUserSub/",
    data: data,
  });
};
//副账户启用
export const startUseUserSub = data => {
  return request({
    type: "post",
    url: "/pc/userSub/startUseUserSub/",
    data: data,
  });
};
//副账户删除
export const deleteUserSub = data => {
  return request({
    type: "post",
    url: "/pc/userSub/deleteUserSub/",
    data: data,
  });
};
//副账户编辑
export const updateUserSub = data => {
  return request({
    type: "post",
    url: "/pc/userSub/updateUserSub/",
    data: data,
  });
};
//副账户重置密码
export const resetUserSubPassword = data => {
  return request({
    type: "post",
    url: "/pc/userSub/resetUserSubPassword/",
    data: data,
  });
};
