import React from 'react'
import { BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import Header from '../components/Header'
import ExpenseDashboard from '../components/ExpenseDashboard'
import CreateExpense from '../components/CreateExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

const AppRouter = (
<Router>
    <div>
    <Header></Header>
    <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}></Route>
        <Route path="/create" component={CreateExpense}></Route>
        <Route path="/help" component={Help}></Route>
        <Route component={NotFound}></Route>
    </Switch>
    </div>
</Router>
)

export default AppRouter