import React, { Component } from "react";
const images = [
  "https://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2018/05/mars_sample_return/17493376-1-eng-GB/Mars_sample_return_pillars.jpg",
  "https://bellard.org/bpg/2.png",
  "https://software-carpentry.org/files/2014/01/novice-sample.png",
  "https://pngimage.net/wp-content/uploads/2018/06/sample-png-images-5.png",
];
export default class App extends Component {
  state = {
    img: images[0],
  };

  render() {
    return (
      <div
        className="App"
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 700,
            height: 400,
            alignSelf: "center",
          }}
        >
          <img
            style={{
              width: "auto",
              height: 400,
            }}
            src={this.state.img}
            alt=""
          />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: 50,
            display: "flex",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          {images.map((img, i) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                key={i}
                style={{
                  width: "auto",
                  height: 100,
                  marginRight: 20,
                  marginBottom: 20,
                }}
                src={img}
                alt=""
              />
              <button onClick={() => this.setState({ img })}>Show Me!</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
