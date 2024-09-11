// uno.config.ts，支持 HBuilderX
import { defineConfig } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { presetRemRpx } from '@unocss-applet/preset-rem-rpx'

export default defineConfig({
  presets: [
    presetUni(),
     //将单位转为rpx
     presetRemRpx({ baseFontSize: 16, screenWidth: 375, mode: 'rem2rpx' }),
  ]
})