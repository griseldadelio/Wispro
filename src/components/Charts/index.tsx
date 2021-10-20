import { Line } from 'react-chartjs-2';

const LineChartLogin = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
            '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: 'Login per day, October',
                data: [25, 46, 39, 41, 56, 67, 54, 59, 78, 88, 63, 83, 97, 101, 131, 108, 114, 119, 125, 128, 116, 135, 155, 89, 149, 167, 184, 193, 173, 182, 182],
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
export { LineChartLogin }