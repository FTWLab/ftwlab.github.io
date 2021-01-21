import React from 'react';
import logo from './../../assets/images/leagal-logo.png';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from 'carbon-components-react';

const LightHeader = () => (
    <HeaderContainer 
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
		<Header aria-label="Carbon Tutorial" className="light-header">
			<div className="custom-container">
				<div className="d-flex justify-content-between align-items-center">
					<SkipToContent />
					<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
					/>
						<HeaderName href="/" prefix="" className="logo">
						<img src={logo} alt="logo" />
						</HeaderName>
							<HeaderNavigation aria-label="Carbon Tutorial">
								<HeaderMenuItem className="get-in-touch-btn" href="mailto:hello@ftwlab.com">Get In Touch	</HeaderMenuItem>
							</HeaderNavigation>
						<SideNav
						aria-label="Side navigation"
						expanded={isSideNavExpanded}
						isPersistent={false}>
							<SideNavItems>
								<HeaderSideNavItems>
									<HeaderMenuItem href="mailto:hello@ftwlab.com" className="get-in-touch-btn">Get In Touch	</HeaderMenuItem>
								</HeaderSideNavItems>
							</SideNavItems>
						</SideNav>
				</div>
			</div>
		</Header>
      )}
    />
);
export default LightHeader;