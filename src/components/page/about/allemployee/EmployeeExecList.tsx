import Description from '@/components/micro/Description'
import SectionTitle from '@/components/micro/SectionTitle'
import React from 'react'
import EmployeeList from '../micro/EmployeeList'

const EmployeeExecList = () => {
  return (
    <div>
        <SectionTitle
            className='text-center mb-5'
            title='Manajemen Eksekutif'
          />
          <Description
            className='text-center font-medium max-w-prose mx-auto pb-12'
            text='Bertanggung jawab dalam merancang strategi, memimpin dengan visi, dan mendorong inovasi untuk pertumbuhan perusahaan. Kami menggabungkan pengalaman, keahlian, dan pemahaman mendalam terhadap industri teknologi, serta berkomitmen menghadirkan solusi teknologi yang relevan dan berdampak.'
          />
          <EmployeeList />
    </div>
  )
}

export default EmployeeExecList