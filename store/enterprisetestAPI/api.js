import axios from "axios"
const enterprisetestAPI = axios.create({
  baseURL: "https://enterprisetest-2.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return enterprisetestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bhfh_list(payload) {
  return enterprisetestAPI.get(`/api/v1/bhfh/`)
}
function api_v1_bhfh_create(payload) {
  return enterprisetestAPI.post(`/api/v1/bhfh/`, payload)
}
function api_v1_bhfh_retrieve(payload) {
  return enterprisetestAPI.get(`/api/v1/bhfh/${payload.id}/`)
}
function api_v1_bhfh_update(payload) {
  return enterprisetestAPI.put(`/api/v1/bhfh/${payload.id}/`, payload)
}
function api_v1_bhfh_partial_update(payload) {
  return enterprisetestAPI.patch(`/api/v1/bhfh/${payload.id}/`, payload)
}
function api_v1_bhfh_destroy(payload) {
  return enterprisetestAPI.delete(`/api/v1/bhfh/${payload.id}/`)
}
function api_v1_dfd34_list(payload) {
  return enterprisetestAPI.get(`/api/v1/dfd34/`)
}
function api_v1_dfd34_create(payload) {
  return enterprisetestAPI.post(`/api/v1/dfd34/`, payload)
}
function api_v1_dfd34_retrieve(payload) {
  return enterprisetestAPI.get(`/api/v1/dfd34/${payload.id}/`)
}
function api_v1_dfd34_update(payload) {
  return enterprisetestAPI.put(`/api/v1/dfd34/${payload.id}/`, payload)
}
function api_v1_dfd34_partial_update(payload) {
  return enterprisetestAPI.patch(`/api/v1/dfd34/${payload.id}/`, payload)
}
function api_v1_dfd34_destroy(payload) {
  return enterprisetestAPI.delete(`/api/v1/dfd34/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return enterprisetestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return enterprisetestAPI.post(`/api/v1/signup/`, payload)
}
function modules_articles_article_list(payload) {
  return enterprisetestAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return enterprisetestAPI.post(`/modules/articles/article/`, payload)
}
function modules_articles_article_retrieve(payload) {
  return enterprisetestAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return enterprisetestAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload
  )
}
function modules_articles_article_partial_update(payload) {
  return enterprisetestAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload
  )
}
function modules_articles_article_destroy(payload) {
  return enterprisetestAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return enterprisetestAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return enterprisetestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return enterprisetestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return enterprisetestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return enterprisetestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return enterprisetestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bhfh_list,
  api_v1_bhfh_create,
  api_v1_bhfh_retrieve,
  api_v1_bhfh_update,
  api_v1_bhfh_partial_update,
  api_v1_bhfh_destroy,
  api_v1_dfd34_list,
  api_v1_dfd34_create,
  api_v1_dfd34_retrieve,
  api_v1_dfd34_update,
  api_v1_dfd34_partial_update,
  api_v1_dfd34_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
