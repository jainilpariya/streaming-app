import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'


class GoogleAuth extends React.Component {

    // state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '216138246377-h4eu2l59pcb08m7k676ef5ao2ki9ukn8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth=window.gapi.auth2.getAuthInstance()
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

        onAuthChange = isSignedIn => {
            if(isSignedIn) {
                this.props.signIn(this.auth.currentUser.get().getId())
            }
            else {
                this.props.signOut()
            }
        }

        onSignInClick = () => {
            this.auth.signIn()
        }

        onSignOutClick = () => {
            this.auth.signOut()
        }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick}>Sign Out</button>
            ) 
        }
        else {
            return (
                <button onClick={this.onSignInClick}>Sign In with Google</button>
            )
        }
    }
    
    render() {
        return <>{this.renderAuthButton()}</>
    }
}

const mapStateToProps = state => {
    return { isSignedIn : state.auth.isSignedIn }
}

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth)