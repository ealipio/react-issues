import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import * as moment from 'moment';

import {
  actionCreators as issuesActions,
  selector as issuesSelector,
} from '../';
import Labels from '../../../shared/Labels';

const SelectIssue = () => {
  const { issues } = useSelector((state) => issuesSelector(state));
  const dispatch = useDispatch();

  const options = issues.list.map((issue) => (
    <Select.Option value={issue.id} key={issue.id}>
      {issue.title}
      <div style={{ opacity: 0.7, fontSize: '0.75rem', marginLeft: 6 }}>
        {moment(issue.created_at).fromNow()} by <b>{issue.user.login}</b>
      </div>
      <Labels labels={issue.labels} />
    </Select.Option>
  ));

  const handleSearchChange = debounce((query) => {
    dispatch(issuesActions.search({ query }));
  }, 700);
  const handleChange = (value) => {
    const [issue] = issues.list.filter((i) => i.id === value);
    dispatch(issuesActions.setCurrentIssue({ issue }));
  };
  return (
    <Select
      showSearch
      style={{
        width: '80%',
        margin: 50,
        fontSize: 20,
        textAlign: 'left',
      }}
      allowClear
      autoFocus
      placeholder="Search issue"
      onSearch={handleSearchChange}
      notFoundContent={
        issues.isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin tip="Loading..." size="large" />
          </div>
        ) : null
      }
      filterOption={(input, option) => {
        return option.children[0].toLowerCase().includes(input.toLowerCase());
      }}
      onChange={handleChange}
    >
      {options}
    </Select>
  );
};

export default SelectIssue;
