import React, { Component } from 'react';
import Header from 'Components/Header';
import Content from 'Components/Content';
import Panel from 'Components/Panel';
import dataCalls from 'utility/parseMock';
import '../../styles/normalize.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      percentage1: null,
      percentage2: null,
      contentA: [],
      contentB: [],
      showContent: true,
      showPanelB: false,
    };

    this.toggleContentVisibility = this.toggleContentVisibility.bind(this);
    this.togglePanels = this.togglePanels.bind(this);

  }

  componentDidMount() {
    const { makeUserDataCall, makeTitleCall } = dataCalls;
    let contentA;
    let contentB;
	  let title;
	  let percentage1;
    let percentage2;
	  makeUserDataCall()
      .then((response) => {
        const userArray = response;
        contentA = userArray.filter((el, index) => (index % 2 === 0));
        contentB = userArray.filter((el, index) => (index % 2 !== 0));
      })
      .then(makeTitleCall()
        .then((response) => {
      	  const data = response[5];
          title = data.title;
          percentage1 = data.userId;
          percentage2 = data.id;
	        this.setState(() => ({
		        contentA,
		        contentB,
		        title,
		        percentage1,
		        percentage2,
	        }));
        })
      );
  }

  toggleContentVisibility() {
    this.setState(({ showContent }) => ({ showContent: !showContent }));
  }

  togglePanels() {
    this.setState(({ showPanelB }) => ({ showPanelB: !showPanelB }))
  }

  render() {
    const {
      title,
      percentage1,
      percentage2,
      contentA,
      contentB,
      showContent,
      showPanelB,
    } = this.state;

    return (
      <React.Fragment>
        <Header
          title={title}
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
      </React.Fragment>
    );
  }
}

export default App;