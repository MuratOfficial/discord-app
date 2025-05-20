"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Вы должны ввести значение больше 2 символов",
  }),
})

export function ServerForm() {

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-zinc-200">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название сервера</FormLabel>
              <FormControl>
                <Input placeholder="Новый сервер" {...field} />
              </FormControl>
              <FormDescription>
                Напишите название вашего сервера
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-400"> {loading && <FaSpinner className=" animate-spin" size={14}/>}   Добавить</Button>
      </form>
    </Form>
  )
}
