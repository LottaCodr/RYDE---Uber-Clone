import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' 

  })
  return (
   <ScrollView className='flex-1 bg-white'>
    <View className='flex-1 bg-white'>
      <View className='relative w-full h-[250px]'>
        <Image
        
        source={images.signUpCar}
        className='z-0 h-[250px] w-full'
        resizeMode='cover'
        />
        <Text className='text-2xl font-JakartaSemiBold bottom-5 left-5 absolute'>Create Your Account</Text>

      </View>
      <View className="p-5">
        <InputField
        label='Name'
        placeholder="Enter your name"
        icon ={icons.person}
        value={form.name}
        onChangeText={(value)=> (
          setForm({
            ...form,
            name: value
          })
        )}
        />
      </View>

    </View>
   </ScrollView>
  )
}

export default SignUp