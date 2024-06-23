import React from 'react';
import Input from '../theme/Input';
import Radio from '../theme/Radio';
import Combo from '../theme/Combo';
import { cities } from '../utils/city';

const Profile = () => {
    return (
        <div className="bg-white p-10 grid gap-10 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-blue-700 border-b pb-2">Profile</p>
            <div className="grid grid-cols-2 gap-6">
                <Input type="text" name="fname" title="Name" placeholder="Name" />
                <Input type="text" name="lname" title="Surname" placeholder="Surname" />
                <Input type="text" name="email" title="Email" placeholder="Email" />
                <Input type="text" name="phone" title="Phone" placeholder="Phone" />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-4 items-center">
                    <Radio name="Gender" />
                </div>
                <Combo name="City" data={cities} />
            </div>
        </div>
    );
};

export default Profile;
