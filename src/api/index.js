/*
请求函数模块
 */
import ajax from './ajax'

//const Abc = 'http://localhost:3000'
const Abc = '/api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(Abc+'/position/'+geohash);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodList = () => ajax(Abc+'/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList = (longitude,latitude) => ajax(Abc+'/shops', {longitude,latitude});

// [4、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(Abc+'/captcha');

// [5、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd = ({name,pwd,captcha}) => ajax(Abc+'/login_pwd',{name,pwd,captcha},'POST');
// [6、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode = (phone) => ajax(Abc+'/sendcode',{phone})
// [7、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms = ({phone,code}) => ajax(Abc+'/login_sms',{phone,code},'POST');
// [8、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(Abc+'/userinfo');

export const reqShopGoods = () => ajax('/goods');
export const reqShopRatings = () => ajax('/ratings');
export const reqShopInfo = () => ajax('/info');
