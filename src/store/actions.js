/*
vuex 的actions模块
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
import {
  reqAddress,
  reqFoodList,
  reqShopList,
  reqUserInfo,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'
export default {
  // 异步获取address
  async getAddress({commit,state}){
    const {longitude,latitude} = state;
    const result = await reqAddress(latitude+','+longitude);
    if(result.code===0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取categorys
  async getCategorys({commit}){
    const result = await reqFoodList();
    if(result.code===0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 异步获取shops
  async getShops({commit,state}){
    const {longitude,latitude} = state;
    const result = await reqShopList({longitude,latitude});
    if(result.code===0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 存储指定的用户
  saveUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code===0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  //异步获取商家商品列表
  async getShopGoods({commit},cb){
    const result = await reqShopGoods()
    if(result.code===0){
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS,{shopGoods})
      cb && cb();
    }
  },
  //异步获取商家评论列表
  async getShopRatings({commit}, cb){
    const result = await reqShopRatings()
    if(result.code===0){
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS,{shopRatings})
      cb && cb();
    }
  },
  //异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO,{shopInfo})
    }
  },
  //更新购物车food的数量
  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  //清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
