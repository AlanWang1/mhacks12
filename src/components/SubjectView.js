import React from 'react';
import Analytics from './Analytics';
import Feedback from './Feedback';
import ToDo from './ToDo';
class SubjectView extends React.Component {
     constructor (props){
         super(props);
        this.state={
            activeTab:"ToDo"

        }
     }
    changeState (active){
        this.setState({activeTab:active})
    }
    render() {
        return (
            <>
        <div className="tabs is-centered is-medium">
            <ul>
                <li className={this.state.activeTab==="ToDo"&&"is-active"}>
                <a onClick={() =>this.changeState("ToDo")}>
                    <span>To-Do</span>
                </a>
                </li>
                <li className={this.state.activeTab==="Feedback"&&"is-active"}>
                <a onClick={() =>this.changeState("Feedback")}>
                    <span>Feedback</span>
                </a>
                </li>
                <li className={this.state.activeTab==="Analytics"&&"is-active"}>
                <a onClick={() =>this.changeState("Analytics")}>
                    <span>Analytics</span>
                </a>
                </li>
                
            </ul>
            </div>

{this.state.activeTab==="Analytics" &&

            <Analytics>


            </Analytics>
            
}
{this.state.activeTab==="Feedback" &&
            <Feedback>


            </Feedback>
}

{this.state.activeTab==="ToDo" &&
            <ToDo>
                
            </ToDo>
}
           </>
            );
    }
}

export default SubjectView
;