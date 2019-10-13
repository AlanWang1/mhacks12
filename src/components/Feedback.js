import React from 'react';
import QSet from './QSet';
class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {/* 
            viewIndex: 0 */
        }
    }
    selectSet(index) {
        this.setState({/* 
            viewIndex: index, */
            selectedSet: this.props.sets[index]
        });
    }
    render() {
        return (
            <>
                {/* <h1 className="title"> Overall</h1>
                <p className="subtitle"> Cool and Good</p> */}


                <div className="columns">
                    <div className="column is-one-third">
                        <h1 className="title">
                            Reviewed Question Sets
                        </h1>
                        <div className="columns is-multiline is-gapless">
                            {this.props.sets.map((set, index) => 
                            <div key={set.name} className="column is-12">
                                <QSet title={set.name} numQuestions={set.length} goto={() => this.selectSet(index)}/>
                            </div>)}                        
                        </div>
                    </div>

                    <div className="column">
                        {this.state.selectedSet && (
                        <div className="box">
                            <h1 className="title">{this.state.selectedSet.name}</h1>
                        </div>)}
                    </div>
                </div>
               
               


             </> 
                
            );
    }
}

export default Feedback
;