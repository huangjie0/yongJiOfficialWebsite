import Vue from "vue"
//获取最新的新闻列表
export function getHotNewsData(){
    return Vue.prototype.$http.get(`/page/news/selectNewest`)
}
//获取所有新闻列表
export function getAllHotNewsData(pageNum,pageSize,name){
    return Vue.prototype.$http.get(`/page/news/selectAll?pageNum=${pageNum}&pageSize=${pageSize}&name=${name}`)
}
//获取所有分公司介绍列表数据
export function getAllSubsidiaryData(pageNum,pageSize,name){
    return Vue.prototype.$http.get(`/page/sonCompany/selectAll?name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
}
// //获取和搜索功能
export function getNewsInformationInfo(data){
    return Vue.prototype.$http.post(`/page/newsInfo/selectList`,data)
}
//获取单个新闻数据
export function getOneNewsInformationInfo(data){
    return Vue.prototype.$http.post(`/page/newsInfo/selectOne`,data)
}
//资质认证
export function getCertificateInfo(pageNum,pageSize,name){
    return Vue.prototype.$http.get(`/page/qualification/selectAll?pageNum=${pageNum}&pageSize=${pageSize}&name=${name}`)
}
//产品介绍
export function getProductIntroduction(pageNum,pageSize,name){
    return Vue.prototype.$http.get(`/page/products/selectAll?pageNum=${pageNum}&pageSize=${pageSize}&name=${name}`)
}
//工程介绍
export function getProjectIntroductionInfo(pageNum,pageSize,name){
    return Vue.prototype.$http.get(`/page/projects/selectAll?pageNum=${pageNum}&pageSize=${pageSize}&name=${name}`)
}
//人才招聘
export function getRecruitmentInfo(pageNum,jobName,pageSize){
    return Vue.prototype.$http.post(`/page/recruit/selectAllRecruit?jobName=${jobName}&pageNum=${pageNum}&pageSize=${pageSize}`)
}