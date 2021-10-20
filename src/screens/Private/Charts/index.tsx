import { NavBar, Footer } from '../../../components'
import { Container } from 'react-bootstrap';
import { LineChartLogin } from '../../../components'


export const Charts = () => {
    return (
        <>
            <NavBar />
            <Container className='p-5'>
                <div className='d-flex justify-content-center pb-4'>
                    <h2> Static Chart</h2>
                </div>
                <LineChartLogin />
            </Container>
            <Footer />
        </>
    )
}
