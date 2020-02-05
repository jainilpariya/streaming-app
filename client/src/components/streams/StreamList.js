import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'
import '../../css/stlist.css'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <>
                    <Link to={`/streams/edit/${stream.id}`}>
                        <button>Edit</button>
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`}>
                        <button>Delete</button>
                    </Link>
                </>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id} class="slist-row">
                    <div class="slist-content">
                        <div class="slist-title">
                            <Link to={`/streams/${stream.id}`}>
                                {stream.title}
                            </Link>
                        </div>
                        <div class="slist-desc">
                            {stream.description}
                        </div>
                    </div>
                    <div class="slist-admin">
                        {this.renderAdmin(stream)}
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <>
                    <Link to="/streams/new">
                        <button>Create Stream</button>
                    </Link>
                </>
            )
        }
    }

    render() {
        //console.log(this.props.streams)
        return (
            <div class="slist">
                <div class="slist-head"><h2>Streams</h2></div>
                <div class="slist-item">
                    {this.renderList()}
                </div>
                <div class="slist-create">
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
