'use client'
import ReactEChart from  'echarts-for-react';
import React from 'react';

interface ScatterSimpleEChartOption {
    data: Array<{ [key: string]: string }>;
}

const ScatterSimpleChart: React.FC<ScatterSimpleEChartOption> = (data) => {
    const [option, setOption] = React.useState({})

    React.useEffect(() => {
        const scatterSimpleChartOptions = {
            xAxis: {},
            yAxis: {},
            series: [
                {
                symbolSize: 10,
                data: data['data'],
                type: 'scatter'
                }
            ]
        }

        setOption(scatterSimpleChartOptions)
    })

    return <ReactEChart option={option} />;
}

export default ScatterSimpleChart;
