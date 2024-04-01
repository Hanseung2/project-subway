import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import subwayData from '../data/test.json';

const Developer = () => {
    const [selectedStation, setSelectedStation] = useState(null); // 선택된 역과 관련된 정보를 저장할 상태
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
        const svg = d3.select(ref.current);
        const subwayData = []; // 지하철 데이터 배열

        // 스케일 설정
        const xScale = d3.scaleLinear()
                         .domain(d3.extent(subwayData, d => parseFloat(d.x)))
                         .range([200, 600]);

        const yScale = d3.scaleLinear()
                         .domain(d3.extent(subwayData, d => parseFloat(d.y)))
                         .range([600, 200]);

        // 노선별 색상 설정
        const lineColor = (line) => {
            if (line === "2호선") return "green"; // 2호선은 초록색으로 설정
            // 다른 노선에 대한 색상 설정이 필요하면 여기에 추가
            return "black"; // 기본 색상
        };

        // 라인 생성 함수
        const line = d3.line()
                       .x(d => xScale(parseFloat(d.x)))
                       .y(d => yScale(parseFloat(d.y)))
                       .curve(d3.curveLinear);

        // 라인 추가 (2호선만 초록색으로 표시)
        svg.append("path")
           .datum(subwayData)
           .attr("fill", "none")
           .attr("stroke", d => lineColor(d[0].line)) // 첫 번째 데이터의 노선을 기준으로 색상 결정
           .attr("stroke-width", 4)
           .attr("d", line);

        // 점 추가 (모두 흰색으로)
        svg.selectAll(".station")
        .data(subwayData)
        .enter()
        .append("circle")
        .attr("class", "station")
        .attr("cx", d => xScale(parseFloat(d.x)))
        .attr("cy", d => yScale(parseFloat(d.y)))
        .attr("r", 5)  // 점의 반지름
        .attr("fill", "white")  // 점의 채우기 색상
        .attr("stroke", "black")  // 점의 테두리 색상
        .attr("stroke-width", 3)  // 점의 테두리 두께
        .on("click", (event, d) => { // Add click event here
            setSelectedStation(d);
        });
    
        // 점 하단에 이름 추가
        svg.selectAll(".station-name")
        .data(subwayData)
        .enter()
        .append("text")
        .attr("class", "station-name")
        .attr("x", d => xScale(parseFloat(d.x)))
        .attr("y", d => yScale(parseFloat(d.y)) + 15) // 점의 바로 아래에 텍스트를 위치시킴
        .attr("text-anchor", "middle") // 텍스트를 중앙 정렬로 만듦
        .attr("font-size", "10px") // 텍스트 크기 설정
        .attr("fill", "black") // 텍스트 색상 설정
        .text(d => d.name); // 데이터에서 이름을 가져와 텍스트로 설정

    
    }, []);
    const closeTooltip = () => setSelectedStation(null); // 말풍선을 닫는 함수

    return (
        <div>
            <svg ref={ref} width="700" height="700"></svg>
            {selectedStation && (
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <div><strong>{selectedStation.name}</strong></div>
                    <button onClick={() => alert(`출발: ${selectedStation.name}`)}>출발</button>
                    <button onClick={() => alert(`도착: ${selectedStation.name}`)}>도착</button>
                    <button onClick={closeTooltip}>닫기</button>
                </div>
            )}
        </div>
    );
};

export default Developer;
