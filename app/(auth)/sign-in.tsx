import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <SafeAreaView className='h-full flex justify-between items-center bg-white'>

      <TouchableOpacity onPress={() => {
        router.push('/(auth)/sign-up')
      }}
        className='w-full items-end justify-end flex p-5'
      >
        <Text className='text-black font-JakartaBold text-md'>Skip</Text>
      </TouchableOpacity>
      <Swiper></Swiper>
    </SafeAreaView>
  )
}

export default SignIn