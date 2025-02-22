import EChartsReact from "echarts-for-react";
import { format } from "date-fns";

const WeightProgressChart = ({ weights = [], dates = [] }) => {
    if (!weights.length || !dates.length) {
        return <div>Loading chart...</div>;
    }

    // Format dates to "dd-MM-yyyy"
    const formattedDates = dates.map(date => format(new Date(date), "dd-MM-yyyy"));

    const option = {
        title: {
            text: "Weight Progress",
            left: "center",
            textStyle: { color: "#e4e4e7" }, // Chakra UI gray.200
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross", // Enables crosshair pointer
                label: { backgroundColor: "#52525b" },
            },
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: true, title: "Save" },
            },
            iconStyle: {
                borderColor: "#ECC94B"
            },
            emphasis: {
                iconStyle: {
                    borderColor: "#F6E05E",
                },
            },
        },
        grid: {
            left: "10%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: formattedDates,
            axisLine: { lineStyle: { color: "#52525b" } },
            axisLabel: { color: "#e4e4e7" },
            splitLine: {
                show: true,
                lineStyle: { color: "#52525b" },
            },
        },
        yAxis: {
            type: "value",
            axisLine: { lineStyle: { color: "#52525b" } },
            axisLabel: { color: "#e4e4e7" },
            splitLine: {
                show: true,
                lineStyle: { color: "#52525b" },
            },
        },
        series: [
            {
                name: "Weight",
                type: "line",
                data: weights,
                smooth: true,
                lineStyle: { color: "#ECC94B" },
                itemStyle: { color: "#ECC94B" },
                emphasis: {
                    focus: "series",
                },
                markPoint: {
                    data: weights.map((value, index) => ({
                        coord: [formattedDates[index], value],
                    })),
                    symbol: "circle",
                    symbolSize: 8,
                    itemStyle: { color: "#ECC94B" },
                },
            },
        ],
        responsive: true,
    };

    return <EChartsReact option={option} style={{ height: "60vh", width: "100%" }} />;
};

export { WeightProgressChart };
