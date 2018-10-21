export const state = () => ({
  params: {
    width: 320,
    height: 320,
    layer: 'VIIRS_SNPP_Brightness_Temp_BandI5_Day',
    lat: 35.3622222,
    lon: 138.731388
  },
  url: 'sample.jpg'
})

export const mutations = {
  updateParams(state, kv) {
    console.log('call updateparams', kv)
    state.params[kv.key] = kv.value
  },
  updateUrl(state, url) {
    state.url = url
  }
}
