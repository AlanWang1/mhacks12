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
                        pointRadius:5,
                        backgroundColor: ['red','yellow','green'],
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
                            text:"Your Progresss",
                            fontSize: 20
                        },
                        legend:{
                            display:false,
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