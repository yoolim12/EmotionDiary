import React from 'react';
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChart.scss'
import axios from 'axios';
import { Dropdown } from 'react-bootstrap'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
    const d = new Date()
    const now_year = d.getFullYear()
    const now_month = d.getMonth() + 1
    const [year, setYear] = useState(now_year)
    const [month, setMonth] = useState(now_month)
    const [datalist, setDatalist] = useState('')
    const options = {
        // responsive: false,
        animation: {
            duration: 2500
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 5,
                    display: false,
                    usePointStyle: true,
                    padding: 10,
                }
            },
        },
    }

    const onSelectYear = (eventKey) => {
        setYear(eventKey);
    }

    const onSelectMonth = (eventKey) => {
        setMonth(eventKey);
        getDataList();
    }

    const getDataList = async () => {
        try {
            const response = await axios.get(`/chart?year=${year}&month=${month}`);
            setDatalist(response.data);

        } catch (error) {
        }
    }

    const list2 = [datalist['공포'], datalist['놀람'], datalist['분노'], datalist['슬픔'], datalist['중립'], datalist['행복'], datalist['혐오']]
    const data = {

        labels: ['공포', '놀람', '분노', '슬픔', '중립', '행복', '혐오'],
        datasets: [
            {
                data: list2,
                // data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: [
                    '#55567d',
                    '#f0bb62',
                    '#ae5333',
                    '#668b85',
                    '#99d41e',
                    '#dfe100',
                    '#5d6856'
                ],

                borderWidth: 0,
            },
        ],
    };

    useEffect(() => {
        getDataList();
    }, [month]);

    return (
        <div>
            {/* <div id='dropYear'> */}
            <Dropdown onSelect={(eventKey) => onSelectYear(eventKey)}>
                <Dropdown.Toggle variant="success" id="dropdown-year">{year}년</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey='2021'>2021</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* </div> */}

            {/* <div id='dropMonth'> */}
            <Dropdown onSelect={(eventKey) => onSelectMonth(eventKey)}>
                <Dropdown.Toggle variant="success" id="dropdown-month">{month}월</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey='12'>12</Dropdown.Item>
                    <Dropdown.Item eventKey='11'>11</Dropdown.Item>
                    <Dropdown.Item eventKey='10'>10</Dropdown.Item>
                    <Dropdown.Item eventKey='9'>9</Dropdown.Item>
                    <Dropdown.Item eventKey='8'>8</Dropdown.Item>
                    <Dropdown.Item eventKey='7'>7</Dropdown.Item>
                    <Dropdown.Item eventKey='6'>6</Dropdown.Item>
                    <Dropdown.Item eventKey='5'>5</Dropdown.Item>
                    <Dropdown.Item eventKey='4'>4</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>3</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>2</Dropdown.Item>
                    <Dropdown.Item eventKey='1'>1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* </div> */}

            <div id='dough'>
                <Doughnut data={data} options={options} height={400} width={400} />
            </div>

        </div>
    )
}
