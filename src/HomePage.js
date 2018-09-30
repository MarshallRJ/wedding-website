import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/HomePage.css';

class HomePage extends Component {
	render() {

		return (
			<div className="homepage">
        <div className="photo-wrap fixed-aspect left">
          <div className="bridge image" />
        </div>
        <table className="countdown" align="center">
          <tr>
            <td>{this.props.timeRemainingObject.days}</td>
            <td>{this.props.timeRemainingObject.hours}</td>
            <td>{this.props.timeRemainingObject.minutes}</td>
            <td>{this.props.timeRemainingObject.seconds}</td>
          </tr>
          <tr>
            <td>days</td>
            <td>hours</td>
            <td>minutes</td>
            <td>seconds</td>
          </tr>
        </table>
        <div className="photo-wrap fixed-aspect right">
          <div className="baptism image" />
        </div>
        <div className="footer-wrap">
          <div className="footer ceremony">
            <p>Ceremony</p>
            <p>1st December 2018, 3:30pm for 4:00pm</p>
            <p>Village Church Lonehill</p>
            <p>Johannesburg, South Africa</p>
          </div>
          <div className="footer reception">
            <p>Reception</p>
            <p>1st December 2018, 5:00pm</p>
            <p>97 Lachlan Road, Glenferness, Midrand</p>
            <p>Johannesburg, South Africa</p>
          </div>
        </div>
      </div>
		);
	}
}

HomePage.PropTypes = {
	timeRemainingObject: PropTypes.object
};

export default HomePage;