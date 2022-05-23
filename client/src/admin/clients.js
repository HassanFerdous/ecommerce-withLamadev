import React from 'react';
import { Link } from 'react-router-dom';

function Clients() {
	return (
		<div className='content' style={{ minHeight: '100vh', background: '#9fcaff54' }}>
			<div className='container-fluid pt-4 px-4'>
				<div className='bg-light text-center rounded p-4'>
					<div className='d-flex align-items-center justify-content-between mb-4'>
						<h6 className='mb-0'>Clients</h6>
					</div>
					<div className='table-responsive'>
						<table className='table text-start align-middle table-bordered table-hover mb-0'>
							<thead>
								<tr className='text-dark'>
									<th scope='col'>#</th>
									<th scope='col'>Name</th>
									<th scope='col'>Email</th>
									<th scope='col'>Status</th>
									<th scope='col' style={{ width: '80px' }}>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='d-flex align-items-center justify-content-center'>
										<img style={{ width: '40px', height: '40px' }} src='/images/profile.png' alt='' />
									</td>
									<td>Esther Howard</td>
									<td>yourmail@gmail.com</td>
									<td>active</td>
									<td>
										<Link className='btn btn-sm btn-primary btn-danger' to='#'>
											Delete
										</Link>
									</td>
								</tr>
								<tr>
									<td className='d-flex align-items-center justify-content-center'>
										<img style={{ width: '40px', height: '40px' }} src='/images/profile.png' alt='' />
									</td>
									<td>Esther Howard</td>
									<td>yourmail@gmail.com</td>
									<td>active</td>
									<td>
										<Link className='btn btn-sm btn-primary btn-danger' to='#'>
											Delete
										</Link>
									</td>
								</tr>
								<tr>
									<td className='d-flex align-items-center justify-content-center'>
										<img style={{ width: '40px', height: '40px' }} src='/images/profile.png' alt='' />
									</td>
									<td>Esther Howard</td>
									<td>yourmail@gmail.com</td>
									<td>active</td>
									<td>
										<Link className='btn btn-sm btn-primary btn-danger' to='#'>
											Delete
										</Link>
									</td>
								</tr>
								<tr>
									<td className='d-flex align-items-center justify-content-center'>
										<img style={{ width: '40px', height: '40px' }} src='/images/profile.png' alt='' />
									</td>
									<td>Esther Howard</td>
									<td>yourmail@gmail.com</td>
									<td>active</td>
									<td>
										<Link className='btn btn-sm btn-primary btn-danger' to='#'>
											Delete
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Clients;
