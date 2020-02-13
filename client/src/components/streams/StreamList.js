import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  renderDeleteAndEditButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return <div>EDIT/DELETE</div>;
    }
  }

  renderStreams() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.renderDeleteAndEditButtons(stream)}
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchStreams();
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams), currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
