'use client'
import ReactEChart from  'echarts-for-react';
import React from 'react';

interface ScatterSimpleEChartOption {
    data: Array<{ [key: string]: string }>,
    min_value: number
}

const ScatterSimpleChart: React.FC<ScatterSimpleEChartOption> = (data, min_value) => {
    const scatterSimpleChartOptions = {
        xAxis: {
            type: 'category'
        },
        yAxis: {},
        series: [
            {
                symbolSize: 10,
                data: data['data'],
                type: 'scatter'
            }
        ]
    }

    return (
        <section>
            <ReactEChart option={scatterSimpleChartOptions} />;
        </section>
    )
}

export default ScatterSimpleChart;
