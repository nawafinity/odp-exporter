import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  theme?: "dark" | "light";
};
type LayoutStates = {
  dark: boolean;
};

class Layout extends React.Component<LayoutProps, LayoutStates> {
  state: LayoutStates = {
    dark: true,
  };

  componentDidMount(): void {
    if (typeof this.props.theme == undefined) {
      // default theme is dark
      this.setState({
        dark: true,
      });
    } else if (this.props.theme === "light") {
      this.setState({
        dark: false,
      });
    }
  }

  minimize() {
    if (window.odpexp.icp) {
      window.odpexp.icp.send("general-actions", "minimize");
    }
  }

  close() {
    if (window.odpexp.icp) {
      window.odpexp.icp.send("general-actions", "close");
    }
  }

  render() {
    const { dark } = this.state;
    const { children } = this.props;

    return (
      <div className={dark ? "bp4-dark" : ""}>
        <nav className="bp4-navbar .modifier">
          <div className="bp4-navbar-group bp4-align-left">
            <div className="bp4-navbar-heading">ODP Exporter</div>
            <span className="bp4-navbar-divider"></span>
            <button className="bp4-button bp4-minimal bp4-icon-cog"></button>
          </div>
          <div className="bp4-navbar-group bp4-align-right">
            <button className="bp4-button bp4-minimal bp4-icon-style"></button>
            <span className="bp4-navbar-divider"></span>
            <button
              className="bp4-button bp4-minimal bp4-icon-minus"
              onClick={this.minimize}
            ></button>
            <button
              className="bp4-button bp4-minimal bp4-icon-cross"
              onClick={this.close}
            ></button>
          </div>
        </nav>{" "}
        {children}
      </div>
    );
  }
}

export default Layout;
