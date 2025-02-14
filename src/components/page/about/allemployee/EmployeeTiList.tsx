import Description from '@/components/micro/Description'
import SectionTitle from '@/components/micro/SectionTitle'
import React from 'react'
import EmployeeList from '../micro/EmployeeList'

const EmployeeTiList = () => {
    return (
        <div>
            <SectionTitle
                className='text-center mb-5'
                title='Tim Teknologi Informasi'
            />
            <Description
                className='text-center font-medium max-w-prose mx-auto pb-12'
                text='Mengembangkan solusi digital yang inovatif dengan keahlian di Front-End, Back-End, Mobile Development, dan AI/Machine Learning. Dengan fokus pada performa, skalabilitas, dan pengalaman pengguna, kami memastikan setiap produk siap mendukung kebutuhan bisnis di era digital.'
            />
            <EmployeeList />
        </div>
    )
}

export default EmployeeTiList