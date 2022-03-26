import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.css";
import { fetchData } from "./api";
import bg from "./images/bg.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div style={ {backgroundImage:"url("+bg+")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'norepeat'}} >
      <div style={{display: 'flex',alignItems:'center',justifyContent: 'center',flexDirection:'column'}}>   
        {/* <img style={ {backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} src={coronaImage} alt="COVID-19" /> */}
        <br />
          <b style={{fontSize:'30px'}}>Global and Country Wise Cases of Corona Virus</b>
        <br />
          <i>(For a particular select a Country from below)</i>
        <br />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
       
        <Chart data={data} country={country} />
      </div>
      </div>
    );
  }
}

export default App;
// width: '500',marginTop: '50',src={coronaImage} backgroundImage:"url("+bg+")"