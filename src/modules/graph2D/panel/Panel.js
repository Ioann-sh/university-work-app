import React from "react";

import FuncInputs from '../funcInputs/FuncInputs';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        const { funcs, addFunction, delFunction} = props;
        this.funcs = funcs; //массив функций
        this.addFunction = addFunction; //чтобы добавить новую функцию
        this.delFunction = delFunction; //чтобы удалить функцию
         //закрыть окно с функциями
        
        this.state = { funcsLength: this.funcs.length }; //меняет состояние по количеству функций для отрисовки
    }

    //удаляет функцию и сразу отрисовывает
    delFunctionClick(index) {
        this.delFunction(index);
        this.setState({ funcsLength: this.funcs.length });
    }

    render() {
        return (
            <div key={this.state.funcsLength}>
                <div className="graph2D_panel">
                    <div><button
                        className="add"
                        onClick={() => this.addFunction()}
                    >Добавить</button></div>
                    <div>
                        {this.funcs.map((func, index) => 
                            <FuncInputs 
                                index={index}
                                key={index}
                                func={func} 
                                delFunction={(index) => this.delFunctionClick(index)}
                            ></FuncInputs>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;