const login='/api/login' //登录
const regist='/api/reguser'  //注册
const usermsg='/my/userinfo'  //获取用户信息
const updatamsg='/my/updata/userinfo' //更改用户信息
const orders='/shop/getShops' //获取商家列表
const colshop='/shop/colshop' //获取收藏商家
const comshop='/shop/comshop' //获取商家评论
const story='/shop/shopstory' //获取商家故事
const getAdd='/location/requireAdd' //获取地址列表
const addList='/location/addDetail' //增加地址
const cadd='/location/changeadd' //修改地址
const del='/location/deladd' //修改地址
const getorder='/order/getorder' //获取订单列表
const delorder='/order/delorder' //删除订单
const comorder='/order/comorder' //添加评论


module.exports={
 login,
 regist,
 usermsg,
 updatamsg,
 orders,
 getAdd,
 addList,
 cadd,
 del,
 colshop,
 comshop,
 story
}