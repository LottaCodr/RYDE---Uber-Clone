import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'

const InputField = ({labelStyle, label, icon, secureTextEntry = false, containerStyle, inoutStyle, iconStyle, className, ...props}) => {
  return (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className='my-2 w-full'>
                <Text className={`text-g font-JakartaSemiBOld mb-3 ${labelStyle}`}>{label}</Text>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 ${containerStyle}`}>
                    {icon && (
                        <Image
                        source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`}
                        />
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default InputField