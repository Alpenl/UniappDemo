<template>
  <view>
     <view class="flex items-center h-[100rpx] bg-gray-200  pos-fixed left-0 w-[100%]">
      <view class=" flex flex-col justify-center items-center w-[50rpx] text-xl h-[50rpx] ">
        <text class="text-30rpx">09</text>
        <text class="text-30rpx">月</text>
      </view>
     <view v-for="index in 7" class="w-[calc((100%-50rpx)/7)] h-30% flex flex-col justify-center items-center">
      <text class="text-35rpx text-black">周{{ index }}</text>
      <text class="text-24rpx text-coolGray">{{ index }}日</text>
     </view>
    </view>
  </view>
  <view class="flex flex-col justify-center w-[100%] pt-[50px]">
    <view class="w-[50rpx] flex flex-col justify-center items-center">
      <view class=" h-150rpx flex flex-col justify-center items-center w-[100%] " v-for="index in 20" key="index">
        {{ index>9?index:'0'+(index) }}
      </view>
    </view>
  </view>
</template>
 