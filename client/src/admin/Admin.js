import { Link } from 'react-router-dom';
import './bootstrap.min.css';
import './style.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

export default function Admin() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.currentUser);

	function handleClick(e) {
		let target = e.target;
		Array.from(e.currentTarget.children).forEach(
			(children) => children.classList.contains('active') && children.classList.remove('active')
		);
		target.classList.add('active');
	}

	const userLogout = () => {
		dispatch(logout());
	};

	return (
		<div className='container-xxl position-relative  p-0'>
			{/* Sidebar Start */}
			<div className={`sidebar pe-4 pb-3 ${showSidebar && 'open'}`}>
				<nav className='navbar bg-light navbar-light'>
					<Link to='#' className='navbar-brand mx-4 mb-3'>
						<h3 className='text-primary'>DASHMIN</h3>
					</Link>
					<div className='d-flex align-items-center ms-4 mb-4'>
						<div className='position-relative'>
							<img
								className='rounded-circle'
								src={`/images/profile.png`}
								alt=''
								style={{ width: '40px', height: '40px' }}
							/>
							<div className='bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1' />
						</div>
						<div className='ms-3'>
							<h6 className='mb-0'>{user.username}</h6>
							<span>Admin</span>
						</div>
					</div>
					<div className='navbar-nav w-100' onClick={handleClick}>
						<Link to='/admin' className='nav-item nav-link active'>
							Dashboard
						</Link>
						<Link to='/admin/client' className='nav-item nav-link'>
							Clients
						</Link>
						<Link to='/admin/products' className='nav-item nav-link'>
							Products
						</Link>
						<Link to='#' className='nav-item nav-link'>
							Widgets
						</Link>
						<Link to='#' className='nav-item nav-link'>
							Charts
						</Link>
						<div className='nav-item dropdown'>
							<Link to='#' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
								Pages
							</Link>
							<div className='dropdown-menu bg-transparent border-0'>
								<Link to='#' className='dropdown-item'>
									Sign In
								</Link>
								<Link to='#' className='dropdown-item'>
									Sign Up
								</Link>
								<Link to='#' className='dropdown-item'>
									404 Error
								</Link>
								<Link to='#' className='dropdown-item'>
									Blank Page
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{/* Sidebar End */}

			{/* Content Start */}
			<div className='content'>
				{/* Navbar Start */}
				<nav className='navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0'>
					<Link to='#' className='navbar-brand d-flex d-lg-none me-4'>
						{/* <h2 className='text-primary mb-0'></h2> */}
					</Link>
					<Link
						to='#'
						className='sidebar-toggler flex-shrink-0'
						onClick={() => setShowSidebar(!showSidebar)}
						style={{ backgroundColor: 'transparent' }}>
						<img src='/images/menu.png' alt='' style={{ width: '100%' }} />
					</Link>
					<form className='d-none d-md-flex ms-4'>
						<input className='form-control border-0' type='search' placeholder='Search' />
					</form>
					<div className='navbar-nav align-items-center ms-auto'>
						<div className='nav-item dropdown'>
							<Link to='#' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
								<span className='d-none d-lg-inline-flex align-items-center'>
									Message
									<img src='/images/down-arrow.png' alt='' style={{ height: '12px', marginLeft: '5px' }} />
								</span>
							</Link>
							<div className='dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0'>
								<Link to='#' className='dropdown-item'>
									<div className='d-flex align-items-center'>
										<img
											className='rounded-circle'
											src={`/images/profile.png`}
											alt=''
											style={{ width: '40px', height: '40px' }}
										/>
										<div className='ms-2'>
											<h6 className='fw-normal mb-0'>Jhon send you a message</h6>
											<small>15 minutes ago</small>
										</div>
									</div>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item'>
									<div className='d-flex align-items-center'>
										<img
											className='rounded-circle'
											src={`/images/profile.png`}
											alt=''
											style={{ width: '40px', height: '40px' }}
										/>
										<div className='ms-2'>
											<h6 className='fw-normal mb-0'>Jhon send you a message</h6>
											<small>15 minutes ago</small>
										</div>
									</div>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item'>
									<div className='d-flex align-items-center'>
										<img
											className='rounded-circle'
											src={`/images/profile.png`}
											alt=''
											style={{ width: '40px', height: '40px' }}
										/>
										<div className='ms-2'>
											<h6 className='fw-normal mb-0'>Jhon send you a message</h6>
											<small>15 minutes ago</small>
										</div>
									</div>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item text-center'>
									See all message
								</Link>
							</div>
						</div>
						<div className='nav-item dropdown'>
							<Link to='#' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
								<span className='d-none d-lg-inline-flex align-items-center'>
									Notifications
									<img src='/images/down-arrow.png' alt='' style={{ height: '12px', marginLeft: '5px' }} />
								</span>
							</Link>
							<div className='dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0'>
								<Link to='#' className='dropdown-item'>
									<h6 className='fw-normal mb-0'>Profile updated</h6>
									<small>15 minutes ago</small>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item'>
									<h6 className='fw-normal mb-0'>New user added</h6>
									<small>15 minutes ago</small>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item'>
									<h6 className='fw-normal mb-0'>Password changed</h6>
									<small>15 minutes ago</small>
								</Link>
								<hr className='dropdown-divider' />
								<Link to='#' className='dropdown-item text-center'>
									See all notifications
								</Link>
							</div>
						</div>
						<div className='nav-item dropdown'>
							<Link
								to='#'
								className='nav-link dropdown-toggle'
								data-bs-toggle='dropdown'
								onClick={() => setOpenProfileDropdown(!openProfileDropdown)}>
								<span className='d-none d-lg-inline-flex'>{user.username}</span>
								<img
									className='rounded-circle me-lg-2'
									src={`/images/profile.png`}
									alt=''
									style={{ width: '40px', height: '40px', marginLeft: '5px' }}
								/>
								<img src='/images/down-arrow.png' alt='' style={{ height: '12px' }} />
							</Link>
							<div
								className={`dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0 ${
									openProfileDropdown && 'd-block'
								}`}>
								<Link to='#' className='dropdown-item'>
									My Profile
								</Link>
								<Link to='#' className='dropdown-item'>
									Settings
								</Link>
								<Link to='#' className='dropdown-item' onClick={userLogout}>
									Log Out
								</Link>
							</div>
						</div>
					</div>
				</nav>
				{/* Navbar End */}
				{/* <Dashboard /> */}
			</div>
			{/* Content End */}
			{/* Back to Top */}
			<Link to='#' className='btn btn-lg btn-primary btn-lg-square back-to-top'></Link>
			<Outlet />
		</div>
	);
}
