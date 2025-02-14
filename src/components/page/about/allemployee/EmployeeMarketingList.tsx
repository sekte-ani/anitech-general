import Description from '@/components/micro/Description'
import SectionTitle from '@/components/micro/SectionTitle'
import React from 'react'
import EmployeeList from '../micro/EmployeeList'

const EmployeeMarketingList = () => {
    return (
        <div>
            <SectionTitle
                className='text-center mb-5'
                title='Tim Marketing'
            />
            <Description
                className='text-center font-medium max-w-prose mx-auto pb-12'
                text='Berfokus pada strategi pemasaran digital yang inovatif untuk membangun brand identity yang kuat dan menjangkau target audiens dengan tepat. Kami menggabungkan analisis data, kreativitas, dan teknologi digital untuk menciptakan marketing yang relevan, efektif, dan berdampak positif bagi pertumbuhan bisnis. 
'
            />
            <EmployeeList />
        </div>
    )
}

export default EmployeeMarketingList