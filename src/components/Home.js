import React from 'react';
import {SketchPicker} from 'react-color';
import {Link} from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputColor1: this.inputColor1(),
      inputColor2: this.inputColor2(),
      gradientType: this.gradientType(),
      gradientDirection: this.gradientDirection(),
      prefixToat: this.prefixToat(),
      displayColorPicker1: false,
      displayColorPicker2: false,
      fullGradient: `${this.gradientType()}${this.prefixToat()}${this.gradientDirection()}${this.inputColor1()}, ${this.inputColor2()})`,
      copied: false
    }
    this.changeInputColor1 = this.changeInputColor1.bind(this);
    this.changeInputColor2 = this.changeInputColor2.bind(this);
    this.changeToLinear = this.changeToLinear.bind(this);
    this.changeToBottom = this.changeToBottom.bind(this);
    this.changeToBottomLeft = this.changeToBottomLeft.bind(this);
    this.changeToBottomRight = this.changeToBottomRight.bind(this);
    this.changeToTop = this.changeToTop.bind(this);
    this.changeToTopLeft = this.changeToTopLeft.bind(this);
    this.changeToTopRight = this.changeToTopRight.bind(this);
    this.changeToRadial = this.changeToRadial.bind(this);
    this.inputColor1 = this.inputColor1.bind(this);
    this.inputColor2 = this.inputColor2.bind(this);
    this.hideColorPickers = this.hideColorPickers.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }
  prefixToat() {
    if (localStorage.getItem("prefixToat") === null) {
      return "to "
    } else {
      return localStorage.getItem("prefixToat")
    }
  }
  inputColor1() {
    if (localStorage.getItem("inputColor1") === null) {
      return "#667eea"
    } else {
      return localStorage.getItem("inputColor1")
    }
  }
  inputColor2() {
    if (localStorage.getItem("inputColor2") === null) {
      return "#764ba2"
    } else {
      return localStorage.getItem("inputColor2")
    }
  }

  gradientType() {
    if (localStorage.getItem("gradientType") === null) {
      return "linear-gradient("
    } else {
      return localStorage.getItem("gradientType")
    }
  }

  gradientDirection() {
    if (localStorage.getItem("gradientDirection") === null) {
      return "right,"
    } else {
      return localStorage.getItem("gradientDirection")
    }
  }

  changeInputColor1 = (color) => {
    this.setState({inputColor1: color.hex})
    localStorage.setItem("inputColor1", color.hex)
  };

  changeInputColor2 = (color) => {
    this.setState({inputColor2: color.hex})
    localStorage.setItem("inputColor2", color.hex)
  };

  changeToLinear() {
    this.setState({gradientType: "linear-gradient(", prefixToat: "to "})
    localStorage.setItem("gradientType", "linear-gradient(")
    localStorage.setItem("prefixToat", "to ")
  }

  changeToRadial() {
    this.setState({gradientType: "radial-gradient(circle ", prefixToat: "at "})
    localStorage.setItem("gradientType", "radial-gradient(circle ")
    localStorage.setItem("prefixToat", "at ")
  }

  changeToLeft() {
    this.setState({gradientDirection: "left,"})
    localStorage.setItem("gradientDirection", "left,")
  }

  changeToRight() {
    this.setState({gradientDirection: "right,"})
    localStorage.setItem("gradientDirection", "right,")
  }

  changeToTop() {
    this.setState({gradientDirection: "top,"})
    localStorage.setItem("gradientDirection", "top,")
  }

  changeToBottom() {
    this.setState({gradientDirection: "bottom,"})
    localStorage.setItem("gradientDirection", "bottom,")
  }

  changeToTopLeft() {
    this.setState({gradientDirection: "top left,"})
    localStorage.setItem("gradientDirection", "top left,")
  }

  changeToTopRight() {
    this.setState({gradientDirection: "top right,"})
    localStorage.setItem("gradientDirection", "top right,")
  }

  changeToBottomLeft() {
    this.setState({gradientDirection: "bottom left,"})
    localStorage.setItem("gradientDirection", "bottom left,")
  }

  changeToBottomRight() {
    this.setState({gradientDirection: "bottom right,"})
    localStorage.setItem("gradientDirection", "bottom right,")
  }
  changeToCenter() {
    this.setState({gradientType: "radial-gradient(circle ", prefixToat: "at ", gradientDirection: "center,"})
    localStorage.setItem("gradientDirection", "center,")
    localStorage.setItem("gradientType", "radial-gradient(circle ")
    localStorage.setItem("prefixToat", "at ")
  }

  hideColorPickers() {
    this.setState({displayColorPicker1: false})
    this.setState({displayColorPicker2: false})
  }

  copyToClipboard(text) {
    var hiddenTextArea = document.createElement("textarea");
    document.body.appendChild(hiddenTextArea);
    hiddenTextArea.value = text;
    hiddenTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(hiddenTextArea);
    this.setState({copied: true});
    setTimeout(function() {
      this.setState({copied: false});
    }.bind(this), 2000);

  }
  render() {

    return (<div className="home_c">
      <div className="left_panel">
        <div className="left_panel_title">
          css<br></br>gradient<br></br>generator
        </div>
        <div className="left_panel_author">
          by Angelo Giuseppe
        </div>
        <div className="main_control_panel">
          <div className="gradientType_c">
            <button className="left_panel_GradientType GradientType1" onClick={() => this.changeToLinear()}>Linear</button>
            <button className="left_panel_GradientType GradientType2" onClick={() => this.changeToRadial()}>Radial</button>
          </div>
          <div className="choseColor_c">
            <div className="wrapper_inputColor1" onClick={() => this.setState({
                displayColorPicker1: true
              }, () => {
                this.setState({displayColorPicker2: false})
              })} style={{
                backgroundColor: this.state.inputColor1
              }}>
              {
                this.state.displayColorPicker1
                  ? <SketchPicker color={this.state.inputColor1} onChange={this.changeInputColor1}/>
                  : null
              }
            </div>
            <div className="wrapper_inputColor2" onClick={() => this.setState({
                displayColorPicker2: true
              }, () => {
                this.setState({displayColorPicker1: false})
              })} style={{
                backgroundColor: this.state.inputColor2
              }}>
              {
                this.state.displayColorPicker2
                  ? <SketchPicker color={this.state.inputColor2} onChange={this.changeInputColor2}/>
                  : null
              }
            </div>
          </div>
          <div className="choseDirection_c">
            <div className="choseDirectionTop_c">
              <button className="choseDirection_btn topLeftBtnDirection" onClick={() => this.changeToTopLeft()}></button>
              <button className="choseDirection_btn topBtnDirection" onClick={() => this.changeToTop()}></button>
              <button className="choseDirection_btn topRightBtnDirection" onClick={() => this.changeToTopRight()}></button>
            </div>
            <div className="choseDirectionCenter_c">
              <button className="choseDirection_btn leftBtnDirection" onClick={() => this.changeToLeft()}></button>
              <button className="choseDirection_btn centerBtnDirection" onClick={() => this.changeToCenter()}></button>
              <button className="choseDirection_btn rightBtnDirection" onClick={() => this.changeToRight()}></button>
            </div>
            <div className="choseDirectionBottom_c">
              <button className="choseDirection_btn bottomLeftBtnDirection" onClick={() => this.changeToBottomLeft()}></button>
              <button className="choseDirection_btn bottomBtnDirection" onClick={() => this.changeToBottom()}></button>
              <button className="choseDirection_btn bottomRightBtnDirection" onClick={() => this.changeToBottomRight()}></button>
            </div>
          </div>

          <div className="codeOutput_c">
            <button className="icon_btn paste" onClick={() => this.copyToClipboard(`${this.state.gradientType}${this.state.inputColor1}, ${this.state.inputColor2})`)}></button>
            <div className="codeOutput">
              {
                this.state.copied
                  ? "Copied to clipboard!"
                  : `${this.state.gradientType}${this.state.prefixToat}${this.state.gradientDirection}${this.state.inputColor1}, ${this.state.inputColor2})`
              }
            </div>
          </div>
        </div>

        <Link to={"/about"}>
          <button className="aboutBtn">About</button>
        </Link>
        <div className="catuxy_tag">
          © {new Date().getFullYear() + " "}
          Catuxy - Your website as unique as your project
        </div>
      </div>
      <div className="right_panel" onClick={this.hideColorPickers} style={{
          backgroundImage: `${this.state.gradientType}${this.state.prefixToat}${this.state.gradientDirection}${this.state.inputColor1}, ${this.state.inputColor2})`
        }}></div>
    </div>);
  }
}
export default Home;
