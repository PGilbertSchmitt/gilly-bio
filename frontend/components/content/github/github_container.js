import { connect } from 'react-redux';

import GithubStatistics from './github_statistics';
import { fetchCommit } from '../../../actions/wakatime_actions.js';

const mapStateToProps = state => ({
    commit: state.commit
});

const mapDispatchToProps = dispatch => ({
    fetchCommit: () => dispatch(fetchCommit())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubStatistics);