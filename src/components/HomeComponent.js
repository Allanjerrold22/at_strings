import React from "react";

const HomeComponent = ()=>{
    return(
        <div style={myStyle.bg}>
            <div
          className="Flexbanner"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <div
            className="banner-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              alignContent: "center",
              height: "90%",
            }}
          >
            <h5> Hand Made</h5>
            <h3> String Arts</h3>
            <p>
              A perfect memorable gifts and surprise <br /> for your loved one
              to showcase your love{" "}
            </p>
            <button
              style={{
                width: 220,
                height: 58,
                borderRadius: 12,
                backgroundColor: "#E26D9E",
                boxShadow: 0,
              }}
            >
              <p style={{ alignItems: "center", margin: 0 }}>Order now</p>
            </button>
          </div>

          <img
            src="penmani.png"
            style={{ height: 400, alignSelf: "flex-end" }}
          />
        </div>

        </div>
    )
}


const myStyle = {
    bg:{
    backgroundImage: "url('banner.png')",
    display: "flex",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  card:{
    
  }
};

export default HomeComponent;