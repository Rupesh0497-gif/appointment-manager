// AppointmentForm.js

import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, date });
		setName("");
		setDate("");
	};

	return (
		<div class="form-container">
			<form onSubmit={handleSubmit}>
				<div class="" style={{display:'flex', margin: '20px 0'}}>
					<div class="" style={{width: '50%'}}>
						<label for="fname">Full Name</label>
					</div>
					<div class="" style={{width: '50%'}}>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div class="" style={{display:'flex', margin: '20px 0'}}>
					<div class="" style={{width: '50%'}}>
						<label for="fname" >Appointment Date: </label>
					</div>
					<div class="" style={{width: '50%'}}>
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div class="">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;