import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'


export default function ContactPeople({navigation}) {
  return (
    <View className='pt-[46px] px-[14px]  bg-black flex-1'>
    <HeaderBack text={'Contact people for new project'} handler={() => navigation.goBack()} />

    <ButtonIcon text={'Add new one'} icon={faPlusCircle} handler={()=>navigation.navigate('AddNewProjectForPeople')}/>

    <View className=' bg-[#222]  rounded-lg p-[8px] flex-row justify-between gap-[7px] w-full mx-auto mt-[20px] items-center '>
        <Text className=' w-1/2 text-white/80 text-[16px] font-[600] '>Motion Based Door Opener With Metal Detector</Text>
        <TouchableOpacity onPress={() => ''} >
        <FontAwesomeIcon name={'trash-o'} size={24} color='red' />
        </TouchableOpacity>
    </View>
</View>
  )
}