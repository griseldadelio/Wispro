import { FC } from "react";
import { NavBar, Footer, LineChartLogin, LineRegisterChart } from '../../../components'
import { Container } from 'react-bootstrap';


const LoginCharts: FC = () => {
    return (
        <>
            <NavBar />
            <Container className='p-5 mb-5'>
                <div className='d-flex justify-content-center pb-4'>
                    <h2> Static Chart</h2>
                </div>
                <LineChartLogin />
                <div className='d-flex justify-content-center pb-4 mt-5'>
                    <h2> Dinamic Chart</h2>
                </div>
                <LineRegisterChart />
            </Container >
            <Footer />
        </>
    )
}
export { LoginCharts }