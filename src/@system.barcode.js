/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    //  const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.scanCode({
        success: my_res => {
          const quick_res = {
            result: my_res.result,
            scanType: my_res.scanType,
            charSet: my_res.charSet,
            path: my_res.path,
            rawData: my_res.rawData,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
