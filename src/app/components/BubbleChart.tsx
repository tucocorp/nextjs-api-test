'use client'
import ReactEChart from  'echarts-for-react';
import React from 'react';

const BubbleChart = () => {
    const [option, setOption] = React.useState({})

    React.useEffect(() => {
        const bubbleChartOptions = {
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    data: [{
                        id: 'test'
                    }]
                }
            ]

        }

        setOption(bubbleChartOptions)
    })

    return <ReactEChart option={option} />;
}

export default BubbleChart;