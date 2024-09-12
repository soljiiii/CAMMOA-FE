// DateRangePicker.jsx
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // 날짜 선택기 스타일
import 'react-date-range/dist/theme/default.css'; // 날짜 선택기 테마
import { useState} from 'react';

const DateRangePickerComponent = () => {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  });

  const handleSelect = (ranges) => {
    setState({ ...state, ...ranges });
  };

  return (
    <div>
      <DateRangePicker
        ranges={[state.selection]}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        staticRanges={[]}
        inputRanges={[]}
      />
      <p>시작일: {format(state.selection.startDate, 'yyyy-MM-dd')}</p>
      <p>종료일: {format(state.selection.endDate, 'yyyy-MM-dd')}</p>
    </div>
  );
};

export default DateRangePickerComponent;
