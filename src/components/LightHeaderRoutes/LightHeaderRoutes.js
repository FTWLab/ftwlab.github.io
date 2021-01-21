import React from 'react';
import { Route } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import PropTypes from 'prop-types';
import LightHeader from './../LightHeader';

const LightHeaderRoutes = props => {
    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={matchProps => (
                <div className="main--body">
                    <LightHeader />
                    <Content className="main--content">
                        <Component {...matchProps} />
                    </Content>
                </div>
            )}
        />
    );
};

LightHeaderRoutes.propTypes = {
    component: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default LightHeaderRoutes;
