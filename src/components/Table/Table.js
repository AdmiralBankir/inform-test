import React from 'react';
import Input from '../UI/Input/Input';
import classes from './Table.module.scss';
import {connect} from 'react-redux';
import {fetchTable, loadFromStorage, onChange} from '../../redux/actions/table'


class Table extends React.Component {
    
    componentDidMount() {
        this.props.fetchTable();
        this.props.loadFromStorage();
    }

    renderHead() {
        return this.props.head.map((item, index) => {
            if(this.props.columnState[item]) {
                return (
                    <th key={index}>
                           <Input onChange={() => this.props.onChange(item)} label={item} type="checkbox"/>
                    </th>
                )
            }
        });
    };

    renderBody() {
        return this.props.data.map((item, index) => {
            return (
                <tr key={index}>
                   { this.props.head.map((key, idx) => {
                       if(this.props.columnState[key]) {
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
        // evt.preventDefault();

        // const icon = evt.target.querySelector('svg');

        // if(icon) icon.classList.toggle('rotate');

        // if(storage) {
        //     storage.removeItem('columnState');
        // }
        // const state = this.props;

        // state.head.forEach(key => {
        //     state.columnState[key] = true;
        // });

        // state.resetDisabled = true;

        // this.setState({
        //     state
        // })
    };

    render() {
        return(
        <div className={classes.Table}>
          <table>
              <caption>
                {this.props.caption}
                <button onClick={(evt) => this.onResetClick(evt)} disabled={this.props.resetDisabled} type="button">
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

function mapStateToProps(state) {
    return {
        resetDisabled: state.table.resetDisabled,
        head: state.table.head,
        columnState: state.table.columnState, 
        data: state.table.data
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTable: () => dispatch(fetchTable()),
        loadFromStorage: () => dispatch(loadFromStorage()),
        onChange: key => dispatch(onChange(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);