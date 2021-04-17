import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PublicNavbar from '../navBar';
import Footer from '../footer';
import { AppState } from '../../store';

type OwnProps = ReturnType<typeof mapStateToProps>;

const PrivateLayout = (props: PropsWithChildren<OwnProps>): ReactElement<FunctionComponent<OwnProps>> => {
    return (
        <div>
            <PublicNavbar>
                {props.loggedIn ? (
                    <Switch>
                        <Route exact path="/" component={'routeDefault'} />
                        <Route exact path={'route1'} />
                        <Route exact path={'route2'} />
                    </Switch>
                ) : (
                    <Redirect to="/app/login" />
                )}
            </PublicNavbar>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.authentication.loggedIn,
});

export default compose(withRouter, connect(mapStateToProps, null))(PrivateLayout);
