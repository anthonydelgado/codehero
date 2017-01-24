import React from 'react';
import './Login.css';
import { Input, Button, Row, Col } from 'react-materialize';
import { browserHistory } from 'react-router';
// react-router Link

const Login = () => {
	return (
		<div className="content-wrap">
			<div className="login">
				<Col>
					<Row>
						<div className="login-form">
						    <Input s={6} label="First Name" />
						    <Input s={6} label="Last Name" />
						    <Input type="email" label="Email" s={12} />
						</div>
					</Row>

					<Row>
						<div className="week-select">
							<Button onClick={ () => { onWeekClick('00') } } className='week-button #43a047 green darken-1' waves='light'>Week 00</Button>
							<Button onClick={ () => { onWeekClick('01') } } className='week-button #43a047 green darken-1' waves='light'>Week 01</Button>
							<Button onClick={ () => { onWeekClick('02') } } className='week-button #43a047 green darken-1' waves='light'>Week 02</Button>
							<Button onClick={ () => { onWeekClick('03') } } className='week-button #43a047 green darken-1' waves='light'>Week 03</Button>
							<Button onClick={ () => { onWeekClick('04') } } className='week-button #43a047 green darken-1' waves='light'>Week 04</Button>
							<Button onClick={ () => { onWeekClick('05') } } className='week-button #ffca28 amber lighten-1' waves='light'>Week 05</Button>
							<Button onClick={ () => { onWeekClick('06') } } className='week-button #ffca28 amber lighten-1' waves='light'>Week 06</Button>
							<Button onClick={ () => { onWeekClick('07') } } className='week-button #ffca28 amber lighten-1' waves='light'>Week 07</Button>
							<Button onClick={ () => { onWeekClick('08') } } className='week-button #ffca28 amber lighten-1' waves='light'>Week 08</Button>
							<Button onClick={ () => { onWeekClick('09') } } className='week-button #ffca28 amber lighten-1' waves='light'>Week 09</Button>
							<Button onClick={ () => { onWeekClick('10') } } className='week-button #fbc02d yellow darken-2' waves='light'>Week 10</Button>
							<Button onClick={ () => { onWeekClick('11') } } className='week-button #fbc02d yellow darken-2' waves='light'>Week 11</Button>
							<Button onClick={ () => { onWeekClick('12') } } className='week-button #fbc02d yellow darken-2' waves='light'>Week 12</Button>
							<Button onClick={ () => { onWeekClick('13') } } className='week-button #fbc02d yellow darken-2' waves='light'>Week 13</Button>
							<Button onClick={ () => { onWeekClick('14') } } className='week-button #fbc02d yellow darken-2' waves='light'>Week 14</Button>
							<Button onClick={ () => { onWeekClick('15') } } className='week-button #ef5350 red lighten-1' waves='light'>Week 15</Button>
							<Button onClick={ () => { onWeekClick('16') } } className='week-button #ef5350 red lighten-1' waves='light'>Week 16</Button>
							<Button onClick={ () => { onWeekClick('17') } } className='week-button #ef5350 red lighten-1' waves='light'>Week 17</Button>
							<Button onClick={ () => { onWeekClick('18') } } className='week-button #ef5350 red lighten-1' waves='light'>Week 18</Button>
							<Button onClick={ () => { onWeekClick('19') } } className='week-button #ef5350 red lighten-1' waves='light'>Week 19</Button>
						</div>

					</Row>
				</Col>
			</div> 
		</div>
	);

	function onWeekClick(weekId) {
		console.log('week clicked: ' + weekId);
		browserHistory.push(`week/${ weekId }`);
	}
};

export { Login as default };