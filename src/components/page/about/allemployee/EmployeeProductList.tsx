import Description from '@/components/micro/Description'
import SectionTitle from '@/components/micro/SectionTitle'
import React from 'react'
import CardEmployeeList from './CardEmployeeList'

const EmployeeProductList = () => {
    return (
        <div>
            <SectionTitle
                className='text-center mb-5'
                title='Tim Produk'
            />
            <Description
                className='text-center font-medium max-w-5xl mx-auto pb-12'
                text='Melalui riset, inovasi, dan strategi kami berfokus pada pengembangan solusi digital yang kreatif dan inovatif. Dengan memahami kebutuhan pengguna dan tren industri, kami merancang produk yang fungsional, efisien, dan memberikan pengalaman terbaik bagi pengguna.'
            />
            <CardEmployeeList division='produk' />
        </div>
    )
}

export default EmployeeProductList