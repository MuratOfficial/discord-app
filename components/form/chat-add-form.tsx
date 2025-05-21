"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FaSpinner } from 'react-icons/fa'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Combobox } from '../ui/combobox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"

interface ChatAddFormProps{
  users:{
        value:string;
        label:string;
    }[]
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Вы должны ввести значение больше 2 символов",
  }),
})

function ChatAddForm({users}:ChatAddFormProps) {

    const [loading, setLoading] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })
 
  async function onSubmit(form: z.infer<typeof formSchema>) {

    setLoading(true);
    
    const response = await fetch("http://localhost:3000/api/server/create", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    })
    
    if(!response.ok){
        toast.error("Произошла ошибка")

    }else{
        toast.success("Сервер создан успешно")
    }

    setLoading(false);
    
  }


  return (
     <Popover>
          <PopoverTrigger className='text-zinc-400/95 font-medium text-xl cursor-pointer '>+</PopoverTrigger>
          <PopoverContent className='text-zinc-100 flex flex-col gap-4'>
            <Combobox values={users}/>
            <Button className='bg-blue-500 cursor-pointer'>
              
              <FaSpinner size={14} className='text-white'/> 
              Добавить чат
              </Button>

          </PopoverContent>
        </Popover>
  )
}

export default ChatAddForm