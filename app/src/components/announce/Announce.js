import React from "react"

const style = {
    color: "#F00",
    fontSize: "5rem"
  };

const Announce = ({message}) => {

    return  <div>
                <p style={style}>{message}</p>
            </div>;
}

export default Announce
