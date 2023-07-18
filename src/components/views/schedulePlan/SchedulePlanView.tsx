import React, { useContext } from 'react'

import { usePlan } from '@/app/schedule/plan/_hooks/usePlane'

import Calendar from '@/components/views/schedulePlan/components/Calendar'

import { CalendarContext } from './contexts/CalendarContext'

const SchedulePlanView = () => {
  const { calendarSettings } = useContext(CalendarContext)

  const { numMonths } = calendarSettings

  const { plan } = usePlan()

  console.log('plan', plan)

  const handleSubmit = async () => {
    console.log('handleSubmit')
    // try {
    //   await createPlan({})
    // } catch {}
  }

  return (
    <>
      <div className='p-4'>
        <div className='mb-4 mt-3 space-y-2 p-2'>
          <div className='text-xl font-semibold'>여행일정 등록</div>
          <div className='text-base text-gray-500'>일정에 따른 날씨예보, 여행 정보를 알려드립니다.</div>
        </div>

        <section className='h-96 overflow-scroll bg-gray-50'>
          {[...Array(numMonths)].map((_, index) => (
            <Calendar key={`month-view-${index}`} index={index} />
          ))}
        </section>
        <button onClick={handleSubmit} className='mt-5 w-full bg-blue-50 p-2 font-semibold text-blue-400'>
          일정 등록하기
        </button>
      </div>
    </>
  )
}

export default SchedulePlanView
