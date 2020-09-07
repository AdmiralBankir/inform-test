import React from 'react';
import Input from '../UI/Input/Input';
import classes from './Table.module.scss';

let storage = null;

class Table extends React.Component {
    state = {
    };

    constructor(props) {
        super(props);

        if(window.localStorage) {
            storage = window.localStorage;
        }

        this.state = {
            resetDisabled: true,
            head: [],
            columnState: {}, 
            data: []
        };
    };
    
    async componentDidMount() {
        const response = await fetch(this.props.url);
        const state = this.state;

        if(response.ok) {
            let json = await response.json();
            state.data = json.data.slice();

            for (let key in state.data[0]) {
                key = key.replace('_', ' ');
                state.head.push(key);
                state.columnState[key] = true;
            }
            
            this.setState({
                state
            });
        }
        
        this.loadFromStorage();
    }

    loadFromStorage() {
        if(storage) {
            const columnState = JSON.parse(storage.getItem('columnState'));
            if(columnState) {
                const state = this.state;
                state.columnState = columnState;
                state.resetDisabled = false;
                this.setState({
                    state
                })
            }
        }
    };

    onInputChange(key) {
        const state = this.state;
        state.columnState[key] = false;
        state.resetDisabled = false;
        this.setState({
            state
        });

        if(storage) {
            storage.setItem('columnState', JSON.stringify(state.columnState));
        }
    };

    renderHead() {
        return this.state.head.map((item, index) => {
            if(this.state.columnState[item]) {
                return (
                    <th key={index}>
                           <Input onChange={() => this.onInputChange(item)} label={item} type="checkbox"/>
                    </th>
                )
            }
        });
    };

    renderBody() {
        return this.state.data.map((item, index) => {
            return (
                <tr key={index}>
                   { this.state.head.map((key, idx) => {
                       if(this.state.columnState[key]) {
                        const prop = item[key.replace(' ', '_')];
                        return (<td className={ classes[key] } key={idx}>
                                    { key === 'color'
                                        ?
                                        (<>
                                            <div style={{ backgroundColor: prop }}></div>
                                            <span>{prop}</span>
                                        </>)
                                        :
                                        prop
                                    }
                                </td>);
                       }
                   })} 
                </tr>
            )
        })
    };

    onResetClick(evt) {
        evt.preventDefault();

        const icon = evt.target.querySelector('svg');

        if(icon) icon.classList.toggle('rotate');

        if(storage) {
            storage.removeItem('columnState');
        }
        const state = this.state;

        state.head.forEach(key => {
            state.columnState[key] = true;
        });

        state.resetDisabled = true;

        this.setState({
            state
        })
    };

    render() {
        return(
        <div className={classes.Table}>
          <table>
              <caption>
                {this.props.caption}
                <button onClick={(evt) => this.onResetClick(evt)} disabled={this.state.resetDisabled} type="button">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"/>
                    </svg>
                    Reset
                </button>
              </caption>
              <thead>
                  <tr>
                    { this.renderHead() }
                  </tr>
              </thead>
              <tbody>
                { this.renderBody() }
              </tbody>
          </table>
          </div>
        );
    };
};

export default Table;