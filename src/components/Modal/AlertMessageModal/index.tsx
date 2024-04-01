import Icon from '@/components/Icons'
import { useAlertMessageModal } from '@/components/Modal/AlertMessageModal/store'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { icons } from 'lucide-react'

export type IconName = Omit<typeof icons, 'createReactComponent' | 'IconNode'>

export function AlertMessageModal() {
  const { isShow, onClose, message, title, type, callback, btnLabel } =
    useAlertMessageModal()

  function closeModal() {
    onClose()
    callback?.()
  }

  const IconName = {
    error: 'X',
    success: 'Check',
    info: 'Bell',
    warning: 'X',
  }

  return (
    <AlertDialog open={isShow}>
      <AlertDialogContent className='!rounded-[20px] max-w-[90%] sm:max-w-[488px]'>
        <AlertDialogHeader className='space-y-4'>
          <div
            className={cn(
              'm-auto w-[100px] h-[100px] bg-cerulean-blue-100 rounded-full flex items-center justify-center',
              {
                '!bg-cerulean-blue-100': type === 'info',
                '!bg-red-100': type === 'error',
                '!bg-amber-100': type === 'warning',
              }
            )}
          >
            <Icon
              name={IconName[type] as keyof IconName}
              size={40}
              className={cn('text-cerulean-blue-500', {
                '!text-cerulean-blue-500': type === 'info',
                '!text-red-400': type === 'error',
                '!text-amber-400': type === 'warning',
              })}
            />
          </div>
          {title && (
            <AlertDialogTitle className='text-center'>{title}</AlertDialogTitle>
          )}
          {message && (
            <AlertDialogDescription className='text-center'>{message}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className='flex !justify-center'>
          <AlertDialogAction className='min-w-[100px] h-10' onClick={closeModal}>{btnLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
