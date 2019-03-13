import axios from 'axios'
import { Dialog } from 'cube-ui'

// const tips = {
//   1: '抱谦，出现了一个错误',
//   1005: 'appkey无效，请前往www.7yue.pro申请',
//   3000: '期刊不存在'
// }
export default class HTTP {
  request ({url, method = 'GET', params = {}, data = {}}) {
    return axios.request({
      url,
      method,
      headers: {
        'content-type': 'application/json'
      },
      auth: {

      },
      params,
      data
    }).then(this.handleSuccess).catch(this.handleError)
  }

  handleSuccess (res) {
    return res.data
  }

  handleError (err) {
    const content = err.response.data.msg
    Dialog.$create({
      type: 'alert',
      title: '错误',
      content
    }).show()
  }
}
