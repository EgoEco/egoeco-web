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
import data from "./api/totalCarApi";

export default function TotalCarChart() {
    return (
        <ComposedChart
            width={450}
            height={360}
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
            <Area type="monotone" dataKey="자동차 등록대수(만대)" fill="#8884d8" stroke="#8884d8" />
            <Line type="monotone" dataKey="자가용 등록대수(만대)" fill="#3B1877" stroke="#8884d8" />
            <Bar dataKey="전년대비 증가대수(천대)" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="전년대비 증감비(‱)" stroke="#ff7300" />
            <Scatter dataKey="전년대비 증감비(%)" fill="#ca4e4e" />
        </ComposedChart>
    );
}
