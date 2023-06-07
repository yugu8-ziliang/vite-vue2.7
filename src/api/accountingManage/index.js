import request from "@/utils/request";

export const getList = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/transferNoteList/',
    data:data
  })
}
//新建
export const Add = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/addTransferNote/',
    data:data
  })
}
//获取详情
export const getInfo = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/transferNoteInfo/',
    data:data
  })
}
//归还、抵扣
export const getTableData = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/transferHistoricalReturn/',
    data:data
  })
}
//撤回
export const revocation = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/reviseTransferNoteInfo/',
    data:data
  })
}
//确认记账
export const receipt = (data) =>{
  return request({
    type:'post',
    url:'/pc/financial/confirmTransferNote/',
    data:data
  })
}