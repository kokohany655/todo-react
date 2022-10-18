import { Box, InputGroup, InputRightElement, Text } from '@chakra-ui/react'

import {CheckCircleIcon  ,SmallCloseIcon} from '@chakra-ui/icons'


function Todo(props) {
  
  return (props.todos.map((todo,index)=>(
      <div key={index} style={todo.isComplete ? {"opacity" : '.3'} : {"opacity" : '1'}}>
        <InputGroup p={'15px 15px'} mt={'16px'} borderRadius={'10px'} boxShadow={'0 0 5px rgba(0,0,0,.2)'} >
        <Box>
          <Text key={todo.id} onClick={()=>props.completeTodo(todo.id)}>{todo.text}</Text>
        </Box>
      <InputRightElement display={'flex'} alignItems='center'justifyContent={'center'} mr='15px' h={'100%'}>
          <CheckCircleIcon onClick={()=>props.completeTodo(todo.id)}></CheckCircleIcon>
          <SmallCloseIcon ml={'2px'} onClick={()=>props.onRemove(todo.id)}></SmallCloseIcon>
      </InputRightElement>
      </InputGroup>
        
      </div>
  ))
  )
}

export default Todo