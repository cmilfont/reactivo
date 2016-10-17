import React, { PropTypes } from 'react';
import moment from 'moment';
import TopToolbar from './TopToolbar.jsx';
import BottomToolbar from './BottomToolbar.jsx';
import MonthTable from './MonthTable.jsx';

class Calendar extends React.Component {

  state = {
    date: moment(),
    selected: moment(),
  }

  onLeft = () => {
    const { date, selected } = this.state;
    this.setState({
      selected,
      date: date.subtract(1, 'months'),
    });
  }

  onRight = () => {
    const { date, selected } = this.state;
    this.setState({
      selected,
      date: date.add(1, 'months'),
    });
  }

  onSelect = date => {
    this.setState({
      date,
      selected: moment(date._d),
    });
  }

  prepareDate = () => {
    this.props.onChange(this.state.selected);
  }

  render() {
    const { onClose } = this.props;
    const { date, selected } = this.state;
    const year = selected.format('YYYY');
    const dayOfWeek = selected.format('ddd, MMM DD');
    return (
      <div className="Calendar">
        <div className="SelectedDate">
          <div className="year">
            {year}
          </div>
          <div className="dayOfWeek">
            {dayOfWeek}
          </div>
        </div>
        <div>
          <TopToolbar
            date={date}
            onLeft={this.onLeft}
            onRight={this.onRight}
          />
          <MonthTable
            onSelect={this.onSelect}
            date={date}
          />
          <BottomToolbar onClose={onClose} onChange={this.prepareDate} />
        </div>
      </div>
    );
  }
}

export default Calendar;