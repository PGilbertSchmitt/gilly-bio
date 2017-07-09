import * as _ from 'lodash';

import * as GithubApi from '../api/github_api';

export const RECEIVE_COMMIT = "RECEIVE_COMMIT";

const NUM_COMMITS = 3;

const receiveCommit = commit => ({
    type: RECEIVE_COMMIT,
    commit
});

export const fetchCommit = () => dispatch => {
    let lastEvent = {};

    GithubApi.fetchEvents()
        .then(events => {
            lastEvent = latestEvent(events.data);
            let repo = lastEvent.repo.name;

            return GithubApi.fetchCommits(repo);
        }).then(commits => {
            let lastCommits = latestCommits(commits, NUM_COMMITS);
            dispatch(receiveCommit(commitInfo(lastCommits)));
        });
};

const latestEvent = events => {
    let pushEvents = _.filter(events, event => (
        event.type === "PushEvent"
    ));

    let sortedEvents = _.sortBy(pushEvents, event => (
        event.created_at
    ));

    // console.log(sortedEvents);
    return _.last(sortedEvents);
}

const latestCommits = (commits, num) => {
    return _.take(commits, num);
}

const commitInfo = commits => (
    commits.map(commit => (
        _.first(_.split(commit.commit.message, /\n+/))
    ))
);

window.fetchCommit = fetchCommit;