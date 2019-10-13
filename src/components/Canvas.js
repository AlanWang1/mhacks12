import React from 'react';
import '../assets/styles/styles.scss'

const tools = {
    marker: {
        color: '#ff3d3d',
        thickness: 5,
        alpha: 1
    },
    highlighter: {
        color: '#f8d123',
        thickness: 15,
        alpha: 0.3
    }
}
class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tool: "marker",
            drawing: false,
            lines: []
        }
    }
    componentWillMount() {
        //this.draw();
    }
    getMousePos(canvas, e) {
        const rect = canvas.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
    }
    mouseDown(e) {
        e.persist();
        const point = this.getMousePos(document.getElementById('marking'), e);
        this.setState(state => {
            state.drawing = true;
            state.lines.push({
                tool: state.tool,
                points: [point, point]
            });
            return state;
        }, () => this.draw());
    }
    mouseMove(e) {
        e.persist();
        if (!this.state.drawing)    return;
        this.setState(state => {
            state.lines[state.lines.length - 1].points.push(this.getMousePos(document.getElementById('marking'), e));
            return state;
        }, () => this.draw());
    }
    stopDrawingLine() {
        this.setState({ drawing: false });
    }
    draw(){
        const canvas = document.getElementById('marking');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 1;
        this.drawImage(ctx);
        
        for (let i = 0; i < this.state.lines.length; i++) {
            ctx.strokeStyle = tools[this.state.lines[i].tool].color;
            ctx.lineWidth = tools[this.state.lines[i].tool].thickness;
            ctx.globalAlpha = tools[this.state.lines[i].tool].alpha;
            ctx.lineJoin = "round";
            ctx.beginPath();
            for (let j = 1; j < this.state.lines[i].points.length; j++) {
                ctx.moveTo(this.state.lines[i].points[j-1].x, this.state.lines[i].points[j-1].y);
                ctx.lineTo(this.state.lines[i].points[j].x, this.state.lines[i].points[j].y);
                ctx.closePath();
            }
            ctx.stroke();
        }
    }
    drawImage(ctx) {
        let img = new Image();
        img.src = this.props.img;
        this.props.img && ctx.drawImage(img, 0, 0, 600, 600);
    }
    switchTool(tool) {
        this.setState({
            tool: tool
        });
    }
    undo() {
        this.setState(state => {
            state.lines.pop();
            return state;
        }, () => this.draw());
    }
    render() {
        return (
            <div>
                <canvas id="marking"
                        width={600}
                        height={600}
                        onMouseDown={e => this.mouseDown(e)}
                        onMouseMove={e => this.mouseMove(e)}
                        onMouseUp={() => this.stopDrawingLine()}
                        onMouseLeave={() => this.stopDrawingLine()}>
                </canvas>
                <div>
                    <span className={`icon like-button is-large ${this.state.tool === 'marker' && ' has-text-info' || ''}`} onClick={() => this.switchTool('marker')}>
                        <i className="fas fa-2x fa-marker"></i>
                    </span>
                    <span className={`icon like-button is-large ${this.state.tool === 'highlighter' && ' has-text-warning' || ''}`} onClick={() => this.switchTool('highlighter')}>
                        <i className="fas fa-2x fa-highlighter"></i>
                    </span>
                    <span className={`icon like-button is-large`} onClick={() => this.undo()}>
                        <i className="fas fa-2x fa-undo"></i>
                    </span>
                </div>
            </div>
            );
    }
}

export default Canvas;