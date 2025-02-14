import Description from '@/components/micro/Description'
import SectionTitle from '@/components/micro/SectionTitle'
import React from 'react'
import CardEmployeeList from './CardEmployeeList'

const EmployeeOpsList = () => {
    return (
        <div>
            <SectionTitle
                className='text-center mb-5'
                title='Tim Operasional'
            />
            <Description
                className='text-center font-medium max-w-5xl mx-auto pb-12'
                text='Memastikan kelancaran bisnis dengan mengelola proses internal secara efisien, mulai dari manajemen operasional hingga pengelolaan keuangan. Kami bekerja untuk mendukung pertumbuhan dan keberlanjutan bisnis perusahaan serta memberikan layanan IT yang andal dan profesional.'
            />
            <CardEmployeeList division='operasional' />
        </div>
    )
}

export default EmployeeOpsList