const AboutusComponent = ()=>{
    return(
        <div>
            <p style={{alignItems:'center',fontSize:20}}>About us</p>
            <text style={{alignItems:'center',fontSize:42,fontWeight:400}}> Provide Shipping all over the world</text> 
            <p style={{alignItems:'center',fontSize:18,fontWeight:300}}>We Use third party services to enhance our Business and satisfy customers through out the World </p>
             <img src="world.png" style={{ width:"80%",alignItems:'center',paddingTop:60}}/>

           <div className="about-text" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',paddingTop:60,marginBottom:80}}>
                <div className="abtxt-1">
                    <text style={{alignItems:'center',fontSize:28,fontWeight:400}}> Support </text>
                    <p style={{alignItems:'center',fontSize:18,fontWeight:300}}> Our friendly Team is here to help </p>
                    <a href={"support@atstrings.com"} style={{color:'#E26D9E'}} >support@atstrings.com</a>
                </div>

                <div className="abtxt-2">
                    <text style={{alignItems:'center',fontSize:28,fontWeight:400}}> Sales </text>
                    <p style={{alignItems:'center',fontSize:18,fontWeight:300}}> Questions or queries? get in touch! </p>
                    <a href={"support@atstrings.com"} style={{color:'#E26D9E'}} >support@atstrings.com</a>
                </div>

                <div className="abtxt-3">
                    <text style={{alignItems:'center',fontSize:28,fontWeight:400}}> Phone </text>
                    <p style={{alignItems:'center',fontSize:18, fontWeight:300}}> Mon-Fri (8am to 5pm) </p>
                    <a href={"support@atstrings.com"} style={{color:'#E26D9E'}} >support@atstrings.com</a>
                </div>

             </div>
             <div className="image-box">
             <text style={{alignItems:'center',fontSize:42,fontWeight:400}}> Meet Our Fascinating <br/>Team members of ATstrings </text> 
             </div>
         

        </div>
    )
}
export default AboutusComponent;