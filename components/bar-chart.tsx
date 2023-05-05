/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarChart extends Component {
	render() {
		const options = {
			title: {
				text: ""
			},
			data: [
			{
                //pain values would be pulled from the database once the ai algorithm analyzes user data. For now we will just use static values for display.
				type: "column",
				dataPoints: [
					{ label: "Sunday",  y: 10, color: "#2BB673"},
					{ label: "Monday", y: 15, color: "#2BB673" },
					{ label: "Tuesday", y: 25, color: "#2BB673"},
					{ label: "Wednesday",  y: 90, color: "#2BB673"},
					{ label: "Thursday",  y: 64, color: "#2BB673"},
                    { label: "Friday",  y: 33, color: "#2BB673"},
                    { label: "Saturday",  y: 40, color: "#2BB673"}
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
module.exports = BarChart;    

export default BarChart;