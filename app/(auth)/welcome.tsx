import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from "react-native-swiper"
import { onboarding } from '@/constants'

const Onboarding = () => {

  const swiperRef = useRef<Swiper>(null)
  const [onboardingIndex, setOnboardingIndex] = useState(0)

  return (
    <SafeAreaView className='h-full flex justify-between items-center bg-white'>

      <TouchableOpacity onPress={() => {
        router.replace('/(auth)/sign-up')
      }}
        className='w-full items-end justify-end flex p-5'
      >
        <Text className='text-black font-JakartaBold text-md'>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='bg-[#E2E8F0] w-[32px] h-[4px] mx-1 rounded-full' />}
        activeDot={<View className='bg-[#0286FF] w-[32px] h-[4px] mx-1 rounded-full' />}
        onIndexChanged={(index) => setOnboardingIndex(index)}
      >


        {onboarding.map((item) => (
          <View key={item.id} className='flex items-center justify-center'>
            <Image
              source={item.image}
              className='w-full h-[300px]'
              resizeMode='contain' />
            <View className='flex flex-row items-center justify-center w-full mt-10'>
              <Text className='text-black text-3xl font-bold mx-10 text-center'>
                {item.title}
              </Text>
            </View>

            <Text className='text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>{item.description}</Text>
          </View>
        ))}


      </Swiper>
    </SafeAreaView>
  )
}

export default Onboarding