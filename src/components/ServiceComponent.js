import React from "react";
const ServiceComponent = ()=>{
    return(
        <div>
             <h1 style={{ padding: 32, fontWeight: "500" }}>Services we provide</h1>

             <div className="service-box" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

                <div classname="boxes" style={{width:120,height:120,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginBottom:50}}>
                   <img
                   src="icon-1.png"
                   style={{ width:60}}/>

                   <p style={{color:'#5F5F67'}}>Customized Works</p>
                </div>

                <div classname="boxes" style={{width:120,height:120,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginBottom:50}}>
                   <img
                   src="icon-2.png"
                   style={{ width:60}}/>

                   <p style={{color:'#5F5F67'}}>Portraits</p>
                </div>
                
                <div classname="boxes" style={{width:120,height:120,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginBottom:50}}>
                   <img
                   src="icon-3.png"
                   style={{ width:60}}/>

                   <p style={{color:'#5F5F67'}}>Wall Decors</p>
                </div>

                <div classname="boxes" style={{width:120,height:120,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginBottom:50}}>
                   <img
                   src="icon-4.png"
                   style={{ width:60}}/>

                   <p style={{color:'#5F5F67'}}>Logo String Art</p>
                </div>

               

            

             </div>
             <div className={"surprise-bg1"} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <div className={"surprise-text1"} style={{paddingLeft:32}}>
                        <text style={{fontSize:42, textAlign:'left',fontWeight:450}}>We make the gifting process<br/>easier for you </text>
                        <p style={{fontSize:18,color:'#5F5F67',textAlign:'left'}}>Ever had the confusion and the excitement while you search<br/>a gift to surprise your loved ones !   </p>
                        <p style={{fontSize:18,color:'#5F5F67',textAlign:'left'}}>Why not try String Art ?</p>
                    </div>
                    <img
                        src="surprise-1.png"
                        style={{ width:"45%"}}/>

                   
                    
                </div>

                <div className={"surprise-bg1"} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <img
                        src="surprise-2.png"
                        style={{ width:"32%",paddingLeft:32}}/>
                    <div className="parent-surprise" style={{display:'flex',flexDirection:'column'}}>
                        <div className={"surprise-text2"} style={{paddingRight:32}}>
                            <text style={{fontSize:42,fontWeight:450}}>we make <br/>Various Categories  of String Arts that<br/>matches different occasions  </text>
                            <p style={{fontSize:18,color:'#5F5F67',textAlign:'left'}}>We have a trustable and unique works which is worth the cost</p>
            
                        </div>

                        <div className="surprise-icons" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',paddingTop:20}}>

                            <div className="irow-1">
                                <div className="iclm-1" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <img src="info-1.png" style={{width:60,height:60}}/>
                                    <p>Experts Services</p>
                                </div>

                                <div className="iclm-2" style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20}}>
                                    <img src="info-3.png" style={{width:60,height:60}}/>
                                    <p>Unique gifts</p>i
                                </div>


                            </div>

                            <div className="irow-2">
                            <div className="iclm-3" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <img src="info-2.png" style={{width:60,height:60}}/>
                                    <p>Experts Services</p>
                                </div>

                                <div className="iclm-4" style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20}}>
                                    <img src="info-4.png" style={{width:60,height:60}}/>
                                    <p>Unique gifts</p>
                                </div>

                            </div>

                            
                            
                           

                        </div>



                    </div>
                    

                   
                    
                </div>

                

        </div>


        
    )
}
export default ServiceComponent;