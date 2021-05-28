import React from "react";
import {
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import data from "./api/totalDisplacementApi";

export default function TotalDisplacement() {
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
            <Line type="monotone" dataKey="총합(계)" fill="#55efc4" stroke="#55efc4" />
            <Line type="monotone" dataKey="1000cc 미만" fill="#00cec9" stroke="#00cec9" />
            <Line type="monotone" dataKey="1000cc 이상~1600cc 미만" fill="#00b894" stroke="#00b894" />
            <Line type="monotone" dataKey="1600cc 이상~2000cc 미만" fill="#81ecec" stroke="#81ecec" />
            <Line type="monotone" dataKey="2000cc 이상~2500cc 미만" fill="#b2bec3" stroke="#b2bec3" />
            <Line type="monotone" dataKey="2500cc 이상" fill="#636e72" stroke="#636e72" />
            <Line type="monotone" dataKey="저속전기차" fill="#fdcb6e" stroke="#fdcb6e" />
            <Line type="monotone" dataKey="전기차" fill="#ff7675" stroke="#ff7675" />
        </ComposedChart>
    );
}
