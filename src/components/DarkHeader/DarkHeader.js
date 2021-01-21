import React, { Component } from 'react';
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
    HeaderSideNavItems
} from 'carbon-components-react';


class DarkHeader extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	}
	scrollToDiv(e) {
		var elem = '', arr = document.getElementsByClassName('bx--header__menu-item'), v = '';
		if(e.target.tagName === 'A') {
			elem = e.target.getAttribute('data');
			v = e.target;
		} else {
			elem = e.target.closest('a').getAttribute('data');
			v = e.target.closest('a');
		}

		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === v) {
				arr[i].classList.add('active');
			} else {
				arr[i].classList.remove('active');
			}
		}

		const element = document.getElementById(elem);
		if(element) {
			window.scrollTo({
			  'behavior': 'smooth',
			  'left': 0,
			  'top': element.offsetTop - 0
			});
		}
	}
	render() {
	  	return (
		    <HeaderContainer
		      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
				<Header aria-label="Carbon Tutorial">
					<div className="custom-container">
						<div className="d-flex justify-content-between align-items-center">
							<SkipToContent />
							<HeaderMenuButton
							aria-label="Open menu"
							onClick={onClickSideNavExpand}
							isActive={isSideNavExpanded}
							/>
							<HeaderName href="/" prefix="" className="logo">
							FTW
							</HeaderName>
								<HeaderNavigation aria-label="Carbon Tutorial">
									<HeaderMenuItem data="approch" onClick={this.scrollToDiv}>Approach</HeaderMenuItem>
									<HeaderMenuItem data="projects" onClick={this.scrollToDiv}>Projects</HeaderMenuItem>
									<HeaderMenuItem className="get-in-touch-btn" href="mailto:hello@ftwlab.com">Get In Touch</HeaderMenuItem>
								</HeaderNavigation>
							<SideNav
							aria-label="Side navigation"
							expanded={isSideNavExpanded}
							isPersistent={false}>
								<SideNavItems>
									<HeaderSideNavItems>
										<HeaderMenuItem data="approch" onClick={ this.scrollToDiv }>Approach</HeaderMenuItem>
										<HeaderMenuItem data="projects" onClick={ this.scrollToDiv }>Projects	</HeaderMenuItem>
										<HeaderMenuItem href="#" className="get-in-touch-btn" href="mailto:hello@ftwlab.com">Get In Touch	</HeaderMenuItem>
									</HeaderSideNavItems>
								</SideNavItems>
							</SideNav>
						</div>
					</div>
				</Header>
		      )}
		    />
		)
    }
}
export default DarkHeader;