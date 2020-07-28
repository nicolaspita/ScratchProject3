import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import axios from 'axios'

class HealthData extends Component {
  // used to let react know components won't unmount
  // _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }

    // to use for the quarterly/annual data request
 componentDidMount() {
    this._isMounted = true;
    const zika = [];
    const ebola = [];
    const dataArr = [];
    const editLabelsArr = []
    axios.get('/company/chart-data?interval=monthly&symbol=' + this.state.name)
      .then(response => {
        console.log(response.data);
        // mold the data to make it easier to setState
        
      })
      .catch(err=>console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // fallback chart to look at in case its too difficult to compare statistics
  const healthGraph = 'https://www.investopedia.com/thmb/CWct8L8vv8se9h5ORIc3pE4af70=/801x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/epidemics2-c071df1870534f29846f620590567eeb.png';
    // refer to state for values to target during certain time periods
    // look at quarterly values throughout that year
    // determine a variance over that year

    // 2016 - Zika Virus - pandemic in Feb 2016

    // 2014 - Ebola Virus - oubreak in March 2014

    // 2012 - Fungal Meningitis - outbreak Sept 2012

    // 2009 - H1N1 flu - april 2009

    // 2003 - SARS - Nov 2002 thru May 2004


    

    return (
      <div>
        <center><img src={healthGraph} /></center>
        <p>IMG Source: Investopedia</p>
      </div>
    )
  }
}

export default HealthData
