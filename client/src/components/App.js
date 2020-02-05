import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

// const PageOne = () => {
//     return (
//         <div>
//             PageOne
//             <Link to="/pagetwo">Navigate to page two</Link>
//         </div>
//     )
// }
// const PageTwo = () => {
//     return <div>
//         PageTwo
//         <button>Click Me!</button>
//         <Link to="/">Navigate to page one</Link>
//     </div>
// }


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
export default App