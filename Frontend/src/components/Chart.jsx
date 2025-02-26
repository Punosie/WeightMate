import EChartsReact from "echarts-for-react";
import { format } from "date-fns";
import useUserInfo from "../hooks/userInfo"; // Import the custom hook

const WeightProgressChart = ({ weights = [], dates = [] }) => {
    const userInfo = useUserInfo();
    const targetWeight = userInfo?.targetWeight;
    console.log("Target Weight:", targetWeight);

    if (!weights.length || !dates.length) {
        return <div>Loading chart...</div>;
    }

    // Format dates to "dd-MM-yyyy"
    const formattedDates = dates.map(date => format(new Date(date), "dd-MM-yyyy"));

    const option = {
        backgroundColor: "#171923",
        title: {
            // text: "Weight Progress",
            left: "center",
            textStyle: { color: "#e4e4e7" },
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#fff" },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
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
            {
                name: "Target Weight",
                type: "line",
                data: new Array(dates.length).fill(targetWeight), // Constant line
                lineStyle: { color: "#48BB78", type: "dashed" }, // Green dashed line
                itemStyle: { color: "#48BB78" },
                emphasis: { focus: "series" },
            }
        ],
        responsive: true,
    };

    return <EChartsReact option={option} style={{ height: "60vh", width: "100%" }} />;
};

const GoalProgressPieChart = ({ weights = [] }) => {
    const userInfo = useUserInfo();
    const targetWeight = userInfo?.targetWeight;
    const initialWeight = weights?.[0];
    const currentWeight = weights?.[weights.length - 1];

    if (!initialWeight || !targetWeight || !currentWeight) {
        return <div>Loading chart...</div>;
    }

    // Calculate progress
    const totalChange = Math.abs(targetWeight - initialWeight);
    const currentChange = Math.abs(currentWeight - initialWeight);
    const progressPercent = ((currentChange / totalChange) * 100).toFixed(1); // Rounded to 1 decimal

    const option = {
        backgroundColor: "#171923",
        title: {
            // text: "Goal Progress",
            left: "center",
            top: "5%",
            textStyle: { color: "#e4e4e7" },
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
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#fff" },
          },
        tooltip: {
            trigger: "item",
            // formatter: "{b}: {c}%"
        },
        series: [
            {
                name: "Goal Progress",
                type: "pie",
                radius: ["50%", "70%"], // Donut-style
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'center',
                    formatter: `{c}%`,
                },
                labelLine: { show: false },
                emphasis: {
                label: {
                show: true,
                fontSize: 32,
                fontWeight: 'bold'
                }
            },
                data: [
                    { value: progressPercent, name: "Achieved", itemStyle: { color: "#60d394" } }, // Green
                    { value: 100 - progressPercent, name: "Remaining", itemStyle: { color: "#ee6055" } }, // Gray
                ],
            },
        ],
    };

    return <EChartsReact option={option} style={{ height: "60vh", width: "100%" }} />;
};




export { WeightProgressChart, GoalProgressPieChart };
