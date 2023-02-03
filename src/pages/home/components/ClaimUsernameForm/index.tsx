import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="mfl.com.br/" placeholder="seu-usuario" />
      <Button>
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
