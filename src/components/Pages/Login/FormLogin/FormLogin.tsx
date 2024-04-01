'use client'

import { useFormLogin } from '@/components/Pages/Login/FormLogin/FormLogin.hook'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ROUTE } from '@/constants/routes'
import Link from 'next/link'

interface Props {}

const FormLogin = (props: Props) => {
  const { form, handleSubmit } = useFormLogin()

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
        {form.errors.password && (
          <p className='text-[12px] text-red-500'>
            {form.errors.password.message}
          </p>
        )}
      </fieldset>
      <Button type='submit' size='lg'>
        Login
      </Button>
      <div className='flex justify-end -mt-4'>
        <Link href={ROUTE.REGISTER} className='text-cerulean-blue-500'>Register Now</Link>
      </div>
    </form>
  )
}

export default FormLogin
