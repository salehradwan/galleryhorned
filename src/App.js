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
      show: false,
      selectedProps: {}
    }
  };

  handleModal = (prevProps) => {
    this.setState({
      show: !this.state.show,
      selectedProps: prevProps
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          hornedData = {hornedData}
          handleModal = {this.handleModal}
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
