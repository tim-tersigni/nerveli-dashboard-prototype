/* App.js */
import React, { Component } from 'react';

import CanvasJSReact from '../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class BarChart extends Component {
	
	render() {
		
		const options = {
			height: 250,
			animationEnabled: true,
            theme: "light2",
			title: {
				font: "LATO",
				text: "4/30-5/6"
			},
			data: [
			{
                //pain values would be pulled from the database once the ai algorithm analyzes user data. For now we will just use static values for display.
				type: "column",
				dataPoints: [
					{ label: "Sunday",  y: 10,font: "LATO", color: "#c9ead4"},
					{ label: "Monday", y: 15,font: "LATO", color: "#c9ead4" },
					{ label: "Tuesday", y: 25, font: "LATO", color: "#c9ead4"},
					{ label: "Wednesday",  y: 90, font: "LATO", color: "#c9ead4"},
					{ label: "Thursday",  y: 64, font: "LATO", color: "#c9ead4"},
                    { label: "Friday",  y: 33, font: "LATO", color: "#c9ead4"},
                    { label: "Saturday",  y: 40, font: "LATO", color: "#c9ead4"}
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