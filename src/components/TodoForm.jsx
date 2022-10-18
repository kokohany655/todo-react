import { Button, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const handleSubmit = e =>{
      e.preventDefault()

      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text : input
      })

    setInput('')
    }
 
  return (
    <FormControl display={'flex'} alignItems='center' justifyContent={'center'}>
        <Input focusBorderColor='none'  type={'text'} placeholder='Add a todo' onChange={(e)=>setInput(e.target.value)} value={input}></Input>
        <Button bgColor={'green.300'} color='white' ml='10px' onClick={handleSubmit}>Add</Button>
    </FormControl>
  )
}

export default TodoForm