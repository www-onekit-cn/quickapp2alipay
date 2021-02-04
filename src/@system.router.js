/* eslint-disable no-console */
/* eslint-disable camelcase */
import URL from '../node_modules/oneutil/URL'

module.exports = {
  /*  network.getType/// */
  push(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_uri = quick_object.uri
    //    const quick_params = quick_object.params
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        wx.reLaunch({
          url: `/quickapp2alipay/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
      } else {
        wx.navigateTo({
          url: quick_uri
        })
      }
      return
    }

    const url = new URL(quick_uri)
    if (url.host === null) {
      wx.navigateTo({
        url: quick_uri
      })
      return
    }
    switch (url.scheme) {
      case 'tel':
        wx.makePhoneCall({
          phoneNumber: url.host,
        })
        break
      case 'sms':
        wx.showModal({
          title: '不支持',
          content: '微信小程序暂不支持发短信',
        })
        break
      case 'http':
      case 'https':
        wx.navigateTo({
          url: `/quickapp2alipay/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
        break
      case 'internal':
        wx.showModal({
          title: '带配置',
          content: '微信小程序暂不支持打开文件',
        })
        break
      case 'hap':
        switch (url.host) {
          case 'app':
            wx.showModal({
              title: '带配置',
              content: '请配置要打开的小程序',
            })
            break
          case 'settings':
            wx.showModal({
              title: '带配置',
              content: '微信小程序暂不支持打开手机设置',
            })
            break
          default:
            throw new Error(url.host)
        }

        break
      default:
        throw new Error(url.scheme)
    }
  },


  /** router.replace */

  replace(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_uri = quick_object.uri
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        wx.reLaunch({
          url: `/quickapp2alipay/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
      } else {
        wx.navigateTo({
          url: quick_uri
        })
      }
    }
  },
  /** router.back */

  back(quick_object) {
    const quick_path = quick_object.path
    if (!quick_path) {
      wx.navigateBack({})
    } else if (quick_path.startsWith('/')) {
      if (quick_path === '/') {
        wx.navigateTo({
          url: `/quickapp2alipay/page/router.push/ie?url=${encodeURI(quick_path)}`
        })
      } else {
        wx.reLaunch({
          url: quick_path
        })
      }
    }
  },
  /** router.clear() */

  clear() {
    //  const my_object = {}
  },
  /** router.getLength */

  getLength() {
    //  const my_object = {}
  },
  /** router.getState */

  getState() {
    //  const my_object = {}
  },
  /** router.getPages */

  getPages() {
    //  const my_object = {}
  }
}
