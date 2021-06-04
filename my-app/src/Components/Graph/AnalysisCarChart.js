import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";
import data from "./api/AnalysisCarApi";

export default function TotalCarChart() {
    return (
        <ComposedChart
            width={600}
            height={480}
            data={data}
            margin={{
                top: 0,
                right: 20,
                bottom: 20,
                left: 0
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="총 운행 시간(h)" fill="#b2bec3" stroke="#8884d8" />
            <Line type="monotone" dataKey="최저 속도(km/h)" fill="##6c5ce7" stroke="#8884d8" />
            <Line type="monotone" dataKey="평균 주행 속도(km/h)" fill="#2d3436" stroke="#8884d8" />
            <Line type="monotone" dataKey="최고 속도(km/h)" fill="#d63031" stroke="#8884d8" />
            <Bar dataKey="급정거 횟수" barSize={20} fill="#e17055" />
            <Bar dataKey="급출발 횟수" barSize={20} fill="#6c5ce7" />
        </ComposedChart>
    );
}
