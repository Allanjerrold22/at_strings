import React from "react";
import { useState, useEffect } from 'react';

const ProductComponent = () => {





    const hasWindow = typeof window !== 'undefined';
  
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : 600;
      const height = hasWindow ? window.innerHeight : 600;
      return height
     
    }

  
    const [windowDimensions, setWindowDimensions] = useState(800);
    let data = 600
  
    useEffect(() => {
        console.log(windowDimensions)
      }, []);

  return (
    <div>
      <h1 style={{ padding: 32, fontWeight: "500" }}>Our Products</h1>
      <div className="entire" style={{ display: "flex", flexDirection: "row", justifyContent:'space-evenly', height:windowDimensions*0.9 }}>
        <div
          className="column-one"
          style={{ width: "50%", paddingLeft: 32, paddingRight: 16 }}>
          <div
            className="pinkybox"
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: 20,
              justifyContent: "space-between",
              height:"60%"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ color: "white" }}>
                Exclusively <br />
                made for <br />
                Couples
              </p>

              <h2 style={{ color: "white" }}>Memories</h2>
            </div>
            <div style={{ alignItems:'space-between', justifyContent:'space-between', display:'flex', flexDirection:'column'}}>
              <div
                style={{
                  backgroundColor: "#E26D9E",
                  width: 140,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <p style={{ color: "white" }}>Bestsellers</p>
              </div>
              <img
                src="love.png"
                style={{ height: 200}}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height:'30%',
              marginTop:10,
              marginBottom:20
            }}
          >
            <div
              className="pet"
              style={{
                width: "48%",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src="paws.png"
                style={{ height: 120, alignSelf: "center", marginTop: 32 }}
              />
              <div
                className={"paws-text"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                }}
              >
                <h3>Pet Lovers</h3>
                <p>String Arts</p>
              </div>
            </div>
            <div className="logoart" style={{ width: "48%", borderRadius: 20 }}>
              <div
                className={"logo-text"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Logo</h3>
                <p>String Arts</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="column-two"
          style={{
            width: "50%",
            paddingLeft: 16,
            paddingRight: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
            <div style={{display:'flex',height:"60%", justifyContent:"space-between",flexDirection:'column'}}>

          <div
            className={"rowone"}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height:"48%"
            }}
          >
            <div
              className={"clm-one"}
              style={{
                width: "50%",
                borderRadius: 16,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <div
                className={"owl-text"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                }}
              >
                <h3>Decors</h3>
                <p>String Arts</p>
              </div>

              <img
                src="owl.png"
                style={{ height: 120, alignSelf: "center", alignSelf:'flex-end', resize:'contain'}}
              />
            </div>

            <div
              className={"clm-two"}
              style={{
                width: "50%",
                borderRadius: 16,
                marginLeft: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className={"elephant-text"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                }}
              >
                <h3 style={{ color: "white" }}>Cartoons</h3>
                <p style={{ color: "white" }}>String Arts</p>
              </div>

              <img
                src="elephant.png"
                style={{ height: 120, alignSelf: "center", marginTop: 32 }}
              />
            </div>
          </div>

          <div
            className={"rowtwo"}
            style={{
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: '48%'
            }}
          >
            <div
              className="family-box"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  backgroundColor: "#F3C2CF",
                  width: 120,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <p style={{ color: "white" }}>New</p>
              </div>
              <div className={"family-text"} style={{}}>
                <p style={{ color: "white" }}>String Arts for</p>
                <h3 style={{ color: "white" }}>Family</h3>
              </div>
            </div>
            <img
              src="family.png"
              style={{ height: 120, alignSelf: "center" }}
            />
          </div>
          </div>

          <div
            className={"rowthree"}
            style={{ height: "30%", borderRadius: 16,            
            marginTop:10,
            marginBottom:20 }}
          >
            <div className={"rthreetext"}>
              <h3>Customized works </h3>
            </div>
            <div
              className={"smalltag"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  marginLeft: 50,
                  borderRadius: 8,
                }}
              >
                <p>Names</p>
              </div>
              <div style={{ backgroundColor: "white", borderRadius: 8 }}>
                <p>Name with Art</p>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  marginRight: 50,
                  borderRadius: 8,
                }}
              >
                <p>Name with photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
  style={{ overflowX:"auto", whiteSpace:'nowrap', display:'flex',flexDirection:'row' }}
  onWheel={(e) => {
    // here im handling the horizontal scroll inline, without the use of hooks
    const strength = Math.abs(e.deltaY);
    if (e.deltaY === 0) return;

    const el = e.currentTarget;
    if (
      !(el.scrollLeft === 0 && e.deltaY < 0) &&
      !(
        el.scrollWidth -
          el.clientWidth -
          Math.round(el.scrollLeft) ===
          0 && e.deltaY > 0
      )
    ) {
      e.preventDefault();
    }
    el.scrollTo({
      left: el.scrollLeft + e.deltaY,
      // large scrolls with smooth animation behavior will lag, so switch to auto
      behavior: strength > 70 ? "auto" : "smooth",
    });
  }}
>
<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>

        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>

<div style={{width:220}}>
    <div style={{width:220, height:220, backgroundColor:"#F0D5BA", borderRadius:20, padding:20}}>
        
        <img
        src="penmani.png"
        style={{width:120, resize:'contain'}}
        />

    </div>

    <text style={{fontSize:14,fontWeight:400, color:"#5F5F67"}}>Pet string art </text> 
    <br/>
    <text style={{alignItems:'center',fontSize:16,fontWeight:500, color:'black'}}>Crawling Cat  (8In x 12In)</text> 
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"#5F5F67", marginRight:4, textDecoration:'line-through'}}>hello</text> 
    
    <text style={{alignItems:'center',fontSize:14,fontWeight:400, color:"black", marginLeft:4}}>hello</text> 

    </div>

</div>



</div>
    </div>
  );
};
export default ProductComponent;
