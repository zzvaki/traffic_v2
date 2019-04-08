// 公共库

// 通知通报类型
export function noticeTypeList(id) {
  const list = [
    {noticeTypeId:0,noticeTypeName:"错误的通知类别"},
    {noticeTypeId:1,noticeTypeName:"警情通报"},
    {noticeTypeId:2,noticeTypeName:"紧急通知"},
    {noticeTypeId:3,noticeTypeName:"文件指示"},
    {noticeTypeId:4,noticeTypeName:"会议通知"},
  ]
  return list.filter(e=>e.noticeTypeId==id)[0] || noticeTypeList(0)[0];
}


// 道路隐患 步骤
export function roadhazardStep(id = 0) {
  const list = [
    {id:0,name:"[roadhazardStep]错误的id"},
    {id:1,name:"上报隐患"},
    {id:2,name:"专家会诊"},
    {id:3,name:"开始整治"},
    {id:4,name:"结束整治"},
    {id:5,name:"联合验收"},
    {id:6,name:"完成整治"},
  ]
  return list.filter(e=>e.id == id)[0]
}