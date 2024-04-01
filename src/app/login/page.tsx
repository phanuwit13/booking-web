import LogoHotelIcon from '@/components/Icons/Logo'
import FormLogin from '@/components/Pages/Login/FormLogin/FormLogin'
import { ROUTE } from '@/constants/routes'
import Link from 'next/link'

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <div className='w-full m-auto min-h-[calc(100dvh-92px)] overflow-hidden relative flex justify-center items-center'>
      <div className='h-full w-full absolute opacity-50 blur-md'>
        <div className='h-full w-full bg-[url("/images/explore/room.png")] bg-cover bg-center' />
      </div>
      <div className='-mt-[92px] z-20 pt-[20px] pb-[40px] flex justify-center flex-col items-center gap-[48px] bg-white max-w-[460px] w-full rounded-sm'>
        <Link href={ROUTE.HOME} className='col-span-3 w-fit flex items-center'>
          <LogoHotelIcon className='text-cerulean-blue-500 w-[60px] h-[60px]' />
          <h1 className='font-[cursive] text-cerulean-blue-500 text-[24px]'>
            Paradise view
          </h1>
        </Link>
        <FormLogin />
      </div>
    </div>
  )
}

export default LoginPage
