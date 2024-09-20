import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function PostForm() {
  
    const {register, handleSubmit, watch, setValue, control, getValue} = useForm({
        defaultValues: {
            title: ''
        },
    })
    return (
    <div>PostForm</div>
  )
}

export default PostForm 







