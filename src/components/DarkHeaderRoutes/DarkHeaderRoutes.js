import React from 'react';
import { Route } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import PropTypes from 'prop-types';
import DarkHeader from './../DarkHeader';

const DarkHeaderRoutes = props => {
    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={matchProps => (
                <div className="main--body">
                    <DarkHeader />
                    <Content className="main--content">
                        <Component {...matchProps} />
                    </Content>
                </div>
            )}
        />
    );
};

DarkHeaderRoutes.propTypes = {
    component: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default DarkHeaderRoutes;
