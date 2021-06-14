import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import hornedData from './components/Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: hornedData,
      show: false,
      selectedProps: {}
     
    }
  };

  displayAsModal = name => {
    const selectedProps = hornedData.find(beast => beast.title === name);
    this.setState({
      selectedProps,
      show: true
    });
  }
  handleModal = (prevProps) => {
    this.setState({
      show: false,
      // selectedProps: prevProps
    })
  }

  updateAllData = (allData) => {
    this.setState({
      allData
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          allData = {this.state.allData}
          displayAsModal = {this.displayAsModal}
          updateAllData = {this.updateAllData}
          
        />
        <SelectedBeast 
          show = {this.state.show}
          selectedProps = {this.state.selectedProps}
          handleModal = {this.handleModal}
        />
        <Footer />
      </div>
    )
  }
}
export default App;
