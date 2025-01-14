import { useState } from 'react'

import { Dialog } from '@headlessui/react'

import { useTimelineQuery } from '@/components/views/planDetail/hooks/useTimelineQuery'

import MemoDialog from './MemoDialog'

interface TimeLineMenuProps {
  id: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TimeLineMenu = ({ id, isOpen, setIsOpen }: TimeLineMenuProps) => {
  const timelineQuery = useTimelineQuery(id)
  const [isOpenMemoDialog, setIsOpenMemoDialog] = useState(false)

  if (!timelineQuery.isSuccess) return null

  const { data, memo } = timelineQuery.data

  return (
    <>
      <MemoDialog id={id} isOpen={isOpenMemoDialog} setIsOpen={setIsOpenMemoDialog} />
      <Dialog className='relative z-40' open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed bottom-0 left-0 w-full animate-slide-up rounded-t-xl bg-white'>
          <Dialog.Panel className='w-full p-8'>
            <Dialog.Title className='mb-2 text-lg font-bold'>{data}</Dialog.Title>
            <Dialog.Description className='mb-10 flex flex-col gap-2'>
              <span className='text-sm text-gray-500'>{memo}</span>
              <span className='font-semibold text-blue-500'>영업시간 09:00 ~ 21:00</span>
            </Dialog.Description>
            <div className='flex justify-between gap-2'>
              <button
                className='w-1/2 rounded-lg border border-zinc-300 py-4 text-sm font-semibold'
                onClick={() => alert('작업중!')}
              >
                시간 추가
              </button>
              <button
                className='w-1/2 rounded-lg border border-zinc-300 py-4 text-sm font-semibold'
                onClick={() => {
                  setIsOpen(false)
                  setIsOpenMemoDialog(true)
                }}
              >
                메모 추가
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default TimeLineMenu
