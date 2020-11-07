/* eslint-disable @typescript-eslint/camelcase */

// Vue Configuration File
module.exports = {
  pwa: {
    name: 'Página do Hideak',
    themeColor: '#e7eaed',
    msTileColor: '#e7eaed',
    manifestOptions: {
      short_name: 'Hideak',
      background_color: '#e7eaed'
    },
    workboxOptions: {
      exclude: [/_config\.yml$/]
    }
  }
};
