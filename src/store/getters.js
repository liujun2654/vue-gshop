/*
状态管理对象
 */
export default {
  //购物车总数量
  totalCount(state){
    return state.shopCart.reduce((pre,food)=>pre+food.count ,0)
  },
  //购物车总价格
  totalPrice(state){
    return state.shopCart.reduce((pre,food)=>pre+food.count*food.price ,0)
  }
}
