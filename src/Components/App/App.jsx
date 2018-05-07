import React, { Component } from 'react';
import Header from 'Components/Header';
import Content from 'Components/Content';
import Panel from 'Components/Panel';
import simulateDataCall from 'utility/parseMock';
import mockData from 'assets/mockData.js';
import '../../styles/normalize.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revenue: null,
      percentage1: null,
      percentage2: null,
      contentA: 'Loading Panel A Data...',
      contentB: null,
      showContent: true,
      showPanelB: false,
    };

    this.toggleContentVisibility = this.toggleContentVisibility.bind(this);
    this.togglePanels = this.togglePanels.bind(this);
  }

  componentDidMount() {
    simulateDataCall(mockData)
      .then((response) => {
        const parsedMock = JSON.parse(response);
        const { headerData, contentA, contentB } = parsedMock;
        this.setState({
          revenue: headerData[1],
          percentage1: headerData[0],
          percentage2: headerData[2],
          contentA,
          contentB,
        })
      });
  }

  toggleContentVisibility() {
    this.setState(({ showContent }) => ({ showContent: !showContent }));
  }

  togglePanels() {
    this.setState(({ showPanelB }) => ({ showPanelB: !showPanelB }))
  }

  render() {
    const {
      revenue,
      percentage1,
      percentage2,
      contentA,
      contentB,
      showContent,
      showPanelB,
    } = this.state;

    return (
      <div>
        <Header
          revenue={revenue}
          percentage1={percentage1}
          percentage2={percentage2}
          toggleContentVisibility={this.toggleContentVisibility}
          showContent={showContent}
        />
        <Content showContent={showContent}>
          <Panel
            content={contentA}
            showPanelInfo={!showPanelB}
            togglePanels={this.togglePanels}
          />
          <Panel
            content={contentB}
            showPanelInfo={showPanelB}
            togglePanels={this.togglePanels}
          />
        </Content>
      </div>
    );
  }
}

export default App;