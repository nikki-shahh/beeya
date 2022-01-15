import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const COLORS = ['#f8c01c', '#4c1e0c', '#a54d18', '#e0ac8d', '#d18d17', '#fff9e1'];

    useEffect(() => {
        setData(() => getData());
    }, [events]);

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
        const data = genres.map((genre) => {
            const value = events.filter(({ summary }) => summary.includes(genre)).length;
            return { name: genre, value };
        })
            .filter(({ value }) => value > 0);
        return data;
    };

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#4e1d02"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />)}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
export default EventGenre;