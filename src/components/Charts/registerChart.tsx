import { FC, useState, useEffect } from "react";
import { UserRegType } from "../../types";
import { user } from "../../services/api/users";
import { Line } from 'react-chartjs-2';

const LineRegisterChart: FC = () => {
    const [users, setUser] = useState<UserRegType[]>();

    const getUser = () => {
        user.get().then((response) => {
            setUser(response);
        });
    };
    useEffect(() => {
        getUser();
    }, []);


    let date: any = [];
    const getDateOfArray = () => {
        let dataReg = users?.filter(user => user.date)
        dataReg?.map((a) => date.push(a.date))
    }
    getDateOfArray()


    const data = {
        labels: date,
        datasets: [
            {
                label: 'Login per day, October',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
                    '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                fill: false,
                backgroundColor: 'rgba(2, 197, 247)',
                borderColor: 'rgba(81, 18, 227)',
                borderWidth: 1,

            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };


    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}
export { LineRegisterChart }