import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import PublicNavbar from '../navBar';
import Login from '../../../modules/login/pages/login';
import Footer from '../footer';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { AppState } from '../../store';

type OwnProps = ReturnType<typeof mapStateToProps>;

const PublicLayout = (props: PropsWithChildren<OwnProps>): ReactElement<FunctionComponent<OwnProps>> => {
    if (!props.loggedIn) {
        return (
            <div>
                <PublicNavbar>
                    <Switch>
                        <Route exact path="/app/login" component={Login} />
                    </Switch>
                </PublicNavbar>
                <Footer />
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
};

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.authentication.loggedIn,
});

export default compose(withRouter, connect(mapStateToProps, null))(PublicLayout);
