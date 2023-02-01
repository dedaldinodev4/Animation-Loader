import React, { useState } from 'react'
import Lottie from 'react-lottie'

import { options } from './animations'
import { Container, Button } from './styles'

type IState = 1 | 2 | 3

export const Loader: React.FC = () => {
  const [state, setState] = useState<IState>(1);
  
  return (
    <>
      <Lottie 
        options={options[state]}
        height= {400}
        width= {400}
      />

      <Container>
        <Button 
          onClick={() => setState(state === 1 ? 2 : state === 2 ? 3 : 1 )}
        >
          Change On Me
        </Button>
      </Container>
    </>
  );
}