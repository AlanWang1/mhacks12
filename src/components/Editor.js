import React from 'react';
import '../assets/styles/styles.scss'
class Editor
 extends React.Component {
    componentWillMount(){
        this.setState({
            canvasSize: {canvasWidth: 1000, canvasHeight:1000}
        })
    }
    componentDidMount(){
        const {canvasWidth, canvasHeight}=this.state.canvasSize;
        this.canvasDraw.width=canvasWidth;
        this.canvasDraw.height=canvasHeight;

    }
    draw(){
        window.addEventListener("load",() => {
            const ctx=this.canvasDraw.getContext("2d");
            ctx.strokeStyle="blue";
            ctx.strokeRect(100,100,200,500);
        });
    }
    render() {
        return (
            <div className="container">
                <canvas ref={canvasDraw=> this.canvasDraw=canvasDraw}>
                
                </canvas>

               
            </div>
           

            
            );
    }
}

export default Editor
;