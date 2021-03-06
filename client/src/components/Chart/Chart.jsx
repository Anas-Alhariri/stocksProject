import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { format, parseISO, subDays } from 'date-fns'
import CustomTooltip from './CustomTooltip'
import './Chart.scss'

const Chart = (props) => {
    const stock = props.data
    return (

        <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={stock}>
                    <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#2451b7" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <Area dataKey="close" stroke="#2451B7" fill="url(#color)" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={
                            str => {
                                const date = parseISO(str)
                                return format(date, 'MMM, d')
                            }
                        }
                        interval={10}
                    />
                    <YAxis dataKey="close"
                        axisLine={false}
                        tickLine={false}
                        tickCount={10}
                        tickFormatter={number => `$${number.toFixed()}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
