'use client'

import { useFormRegister } from '@/components/Pages/Login/FormRegister/FormRegister.hook'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props {}

const FormRegister = (props: Props) => {
  const { form, handleSubmit } = useFormRegister()

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full px-10'>
      <fieldset>
        <Input
          type='text'
          placeholder='Username'
          className='border px-2 py-1 w-full'
          {...form.fieldUsername}
        />
        {form.errors.username && (
          <p className='text-[12px] text-red-500'>
            {form.errors.username.message}
          </p>
        )}
      </fieldset>
      <fieldset>
        <Input
          type='password'
          placeholder='Password'
          className='border px-2 py-1 w-full'
          {...form.fieldPassword}
        />
        {form.errors.passwordHash && (
          <p className='text-[12px] text-red-500'>
            {form.errors.passwordHash.message}
          </p>
        )}
      </fieldset>
      <fieldset>
        <Input
          type='text'
          placeholder='Name'
          className='border px-2 py-1 w-full'
          {...form.fieldName}
        />
        {form.errors.name && (
          <p className='text-[12px] text-red-500'>
            {form.errors.name.message}
          </p>
        )}
      </fieldset>
      <fieldset>
        <Input
          type='email'
          placeholder='Email'
          className='border px-2 py-1 w-full'
          {...form.fieldEmail}
        />
        {form.errors.email && (
          <p className='text-[12px] text-red-500'>
            {form.errors.email.message}
          </p>
        )}
      </fieldset>
      <fieldset>
        <Input
          type='tel'
          placeholder='Phone Number'
          className='border px-2 py-1 w-full'
          {...form.fieldPhoneNumber}
        />
        {form.errors.phoneNumber && (
          <p className='text-[12px] text-red-500'>
            {form.errors.phoneNumber.message}
          </p>
        )}
      </fieldset>
      <Button type='submit' size='lg'>
        Register
      </Button>
    </form>
  )
}

export default FormRegister
