/* eslint-disable camelcase */
/* eslint-disable consistent-return */


module.exports = {
  vibrate(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_mode = quick_object.mode || 'long'
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    const my_object = {
      type: 'medium',
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    if (quick_mode === 'short') {
      return my.vibrateShort(my_object)
    } else {
      return my.vibrateLong(my_object)
    }
  }
}
