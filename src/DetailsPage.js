import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/DetailsPage.css';

class DetailsPage extends Component {
	render() {

		return (
			<div className="details-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#000', width: '10px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div className="ceremony-content">
            <div className="centered-header">Ceremony</div>
            <p>The ceremony uniting</p>
            <p>Lily Siachitema &amp; Robert-John Marshall</p>
            <p>Village Church Lonehill</p>
            <p>23 Crestwood Drive, Lonehill</p>
            <p>3:30pm for 4:00pm</p>
            <p>December 1st, 2018</p>
            <p>Dress Code: Smart Casual</p>
          </div>
          <div className="reception-content">
            <div className="centered-header">Reception</div>
            <p>Marshall's Residence</p>
            <p>199 Lachlan Road, Glenferness, Midrand</p>
            <p><i>Please attempt to arrange car pooling by leaving cars at the church.</i></p>
            <p>5:00pm onwards</p>
            <p>December 1st, 2018</p>
          </div>
          <div className="centered-content">
            <div className="centered-header">Directions</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24120.540386990047!2d28.024124543120518!3d-26.015889100033228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x1e95714de3c56bc3%3A0xae2c0a45f85197ba!2sVillage+Church+Lonehill%2C+23+Crestwood+Dr%2C+Lone+Hill%2C+Sandton%2C+2062!3m2!1d-26.0176241!2d28.0240065!4m5!1s0x1e957115ec06ff55%3A0x2e8005a4bf7ca6a4!2sSpoke+and+Spanner%2C+Glenferness+AH%2C+Midrand!3m2!1d-26.0000625!2d28.041972599999998!5e0!3m2!1sen!2sza!4v1536933950930" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            { /* <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48904.7499912706!2d-83.06020385384574!3d39.996230459243584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x883888d35b70d02f%3A0x2c7bf9f201bed5!2sSt.+Patrick+Catholic+Church%2C+280+N+Grant+Ave%2C+Columbus%2C+OH+43215!3m2!1d39.9689884!2d-82.9917274!4m5!1s0x88388df2ab75635d%3A0x1a1c21f03a0c10dd!2sSt.+Andrew+Church%2C+1899+McCoy+Rd%2C+Upper+Arlington%2C+OH+43220!3m2!1d40.0393154!2d-83.0675104!5e0!3m2!1sen!2sus!4v1532004083201" width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen></iframe> */ }
          </div>
        </div>
        </Scrollbars>
      </div>
		);
	}
}

export default DetailsPage;