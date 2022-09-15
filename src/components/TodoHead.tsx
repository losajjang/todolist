import React from 'react';
import styled from 'styled-components';

const TodosHeadBase = styled.div`
  padding: 40px 30px 20px 30px;
  border-bottom: 1px solid #e9ecef;

  .토요일 {
    color: #9d9afb;
  }
  .일요일 {
    color: #fb7e3b;
  }
`;

const TodayBox = styled.h1`
  color: #343a40;
  margin: 0;
  font-size: 36px;
`;

const DayNameBox = styled.div`
  margin-top: 4px;
  font-size: 21px;
  color: #868e96;
`;

const UnDoneTaskBox = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #20c997;

  span {
    font-weight: bolder;
    color: #20c997;
  }
`;

type TodosHeadProps = {
  dateString: string;
  dayName: string;
};

function TodosHead({dateString, dayName}: TodosHeadProps) {
  return (
    <TodosHeadBase>
      <TodayBox>{dateString}</TodayBox>
      <DayNameBox className={dayName}>{dayName}</DayNameBox>
      <UnDoneTaskBox>
        할 일 <span>0개</span> 남음
      </UnDoneTaskBox>
    </TodosHeadBase>
  );
}

export default TodosHead;
