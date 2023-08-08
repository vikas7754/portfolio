import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Skills({ second = false }) {
  const chartRef = useRef(null);
  const data = [
    {
      name: "HTML",
      value: 95,
      color: "red",
    },
    {
      name: "CSS, SASS",
      value: 90,
      color: "blue",
    },
    {
      name: "JavaScript",
      value: 90,
      color: "green",
    },
    {
      name: "ReactJs",
      value: 90,
      color: "yellow",
    },
    {
      name: "NextJS",
      value: 85,
      color: "yellowGreen",
    },
    {
      name: "NodeJs",
      value: 80,
      color: "orange",
    },
    {
      name: "ExpressJs",
      value: 85,
      color: "#5effda",
    },
    {
      name: "MongoDB",
      value: 90,
      color: "purple",
    },
    {
      name: "MySQL",
      value: 75,
      color: "pink",
    },
  ];
  const data1 = [
    {
      name: "C/C++",
      value: 70,
      color: "pink",
    },

    {
      name: "Java",
      value: 80,
      color: "brown",
    },
    {
      name: "Python",
      value: 70,
      color: "green",
    },
    {
      name: "Data Structures",
      value: 75,
      color: "#9c5eff",
    },
    {
      name: "Spring Boot",
      value: 70,
      color: "#ff5e74",
    },
    {
      name: "PHP",
      value: 75,
      color: "blue",
    },
    {
      name: "Linux",
      value: 75,
      color: "#27ff9e",
    },
    {
      name: "Git",
      value: 95,
      color: "#ff5e27",
    },
    {
      name: "Docker",
      value: 70,
      color: "#ff5e47",
    },
  ];

  const config = {
    type: "bar",
    data: {
      labels: second
        ? data1.map((item) => item.name)
        : data.map((item) => item.name),
      datasets: [
        {
          axis: "y",
          label: "Skills ",
          data: second
            ? data1.map((item) => item.value)
            : data.map((item) => item.value),
          fill: false,
          backgroundColor: second
            ? data1.map((item) => item.color)
            : data.map((item) => item.color),
          borderColor: second
            ? data1.map((item) => item.color)
            : data.map((item) => item.color),
        },
      ],
    },
    options: {
      indexAxis: "y",
    },
  };
  useEffect(() => {
    const myChart = new Chart(chartRef?.current, config);
  }, []);
  return (
    <div>
      <canvas ref={chartRef} height={350}></canvas>
    </div>
  );
}

export default Skills;
