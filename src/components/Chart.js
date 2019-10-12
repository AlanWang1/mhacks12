import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
class Chart
 extends React.Component {
     constructor(props){
        super(props);
        this.state={
         
                data:{
                    labels:[1,2,3,4,5,6,7,8,9],
                    datasets:[{
                        data:[0.5,0.7,0.6,0.85,1.2],
                        label:"Ratio",
                        borderColor: "#ff3d3d",
                        fill:false
                    }]
                    
                }
                
        
            
        }
     }
    render() {
        return (
           <div className="chart">
               <Line
                
                    data={this.state.data}
                    options={{
                        title:{
                            display:true,
                            text:"HI",
                            fontSize: 20
                        },
                        legend:{
                            display:true,
                        },
                        responsive:true,
                        maintainAspectRatio: true,
                      
                    }}
                    />
           </div>
            );
    }
}

export default Chart
;