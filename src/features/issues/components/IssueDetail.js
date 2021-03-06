import React from 'react';

import { useSelector } from 'react-redux';
import _get from 'lodash/get';
import { Comment, Tooltip, Avatar } from 'antd';
import * as moment from 'moment';

import { selector as issuesSelector } from '..';
import Labels from '../../../shared/Labels';

const SelectedIssue = () => {
  const { issues } = useSelector((state) => issuesSelector(state));
  const isIssueSelected = _get(issues, 'currentIssue.user', false);
  return isIssueSelected ? (
    <>
      <Comment
        author={
          <a
            href={issues.currentIssue.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {issues.currentIssue.user.login}
          </a>
        }
        avatar={
          <a
            href={issues.currentIssue.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              src={issues.currentIssue.user.avatar_url}
              alt={issues.currentIssue.user.login}
            />
          </a>
        }
        content={
          <p style={{ textAlign: 'left' }}>{issues.currentIssue.body}</p>
        }
        datetime={
          <Tooltip
            title={moment(issues.currentIssue.created_at).format(
              'YYYY-MM-DD HH:mm:ss'
            )}
          >
            <span>{moment(issues.currentIssue.created_at).fromNow()}</span>
          </Tooltip>
        }
      />
      <Labels labels={issues.currentIssue.labels} />
    </>
  ) : null;
};

export default SelectedIssue;
