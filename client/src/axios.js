import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001/"

const Products = {
  get(id) {
    const res = axios
      .get(`/products${id ? `/${id}` : ""}`)
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((err) => {
        console.error(err)
      })
    return res
  },
  post(params) {
    axios
      .post(`/products`, params)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  put({ params, id }) {
    axios
      .put(`/products/${id}`, params)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  delete({ params, id }) {
    axios
      .delete(`/products/${id}`, params)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export default {
  Products,
}
