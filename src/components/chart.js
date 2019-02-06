import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function average(data,unit) {
	if(unit==="C") {
		return (_.round(_.sum(data)/data.length) -273);	
	} else if (unit === "Bar") {
		return (_.round(_.sum(data)/data.length)/1000);	
	} else {
		return _.round(_.sum(data)/data.length);	
	}
	
}

export default (props) => {
	return (
		<div>
			<div>
				<p>{props.name}</p>
			</div>
			<Sparklines data={ props.data } height={120} width={180}>
				<SparklinesLine color={ props.color } />
				<SparklinesReferenceLine type="avg" />
				<SparklinesSpots />
			</Sparklines>
			<div>
				<p className="text-center">{average(props.data,props.unit)} {props.unit === 'C' ? <sup>o</sup> : null}{props.unit}</p>
			</div>
		</div>
	);
}