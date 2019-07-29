import React, { Component } from "react";

class AdBanner extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const style = {
      display: "block"
    };

    return (
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-7292810486004926"
        data-ad-slot="7806394673"
        data-ad-format="auto"
        data-adtest="on"
      ></ins>
    );
  }
}

export default AdBanner;
