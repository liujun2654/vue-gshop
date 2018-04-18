/*
时间过滤
 */
import Vue from 'vue'
import moment from 'moment'

Vue.filter('dataString',function (value,format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})
