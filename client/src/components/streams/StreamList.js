import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  renderDeleteAndEditButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`streams/edit/${stream.id}`}>
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderStreams() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderDeleteAndEditButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchStreams();
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
