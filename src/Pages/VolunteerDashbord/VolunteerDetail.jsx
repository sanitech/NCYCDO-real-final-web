import React, { useEffect, useState } from 'react'
import AdminPannel from '../../Components/Dashbord/DAshboard'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

function VolunteerDetail() {
    const [selectedVolunteer, setSelectedVolunteer]=useState([])
    const { id } = useParams()
    console.log(id)

    const fetchVolunteer = async () => {
        await axios.get(`http://localhost:5000/api/v1/volunteer/${id}`)
            .then(res => {console.log(res.data); setSelectedVolunteer(res.data)}).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        fetchVolunteer()
    }, [])
    return (
        <div>
            <AdminPannel />
            <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5   gap-6">
                    <div className="grid-col shadow py-6 px-8 col-span-2 dark:bg-gray-700">
                        <img className='h-20 rounded-md' src="https://flowbite.com/application-ui/demo/images/users/jese-leos-2x.png" alt="" />
                        <div className="font-bold my-2 text-xl md:text-lg" >{selectedVolunteer?.full_name}</div>
                        <div className="flex gap-2 my-1 items-center">
                            <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.16208 8.49969C2 9.60346 2 11.0495 2 13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13C22 11.0497 22 9.60364 21.8379 8.49989C19.5613 9.97971 18.1021 10.9235 16.7501 11.5047V12.0001C16.7501 12.4143 16.4143 12.7501 16.0001 12.7501C15.5914 12.7501 15.259 12.4231 15.2503 12.0165C13.12 12.5781 10.8802 12.5781 8.74991 12.0165C8.74121 12.4231 8.40883 12.7501 8.00009 12.7501C7.58587 12.7501 7.25009 12.4143 7.25009 12.0001V11.5046C5.89804 10.9234 4.43881 9.97957 2.16208 8.49969Z" fill="#050505"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5814 2.25L10.561 2.25C10.4474 2.24998 10.3591 2.24997 10.2755 2.25503C9.21507 2.31926 8.28647 2.98855 7.89021 3.97426C7.8588 4.05239 7.80711 4.20756 7.77024 4.31825L7.76636 4.32989C7.66326 4.60981 7.47709 4.85224 7.26157 5.02534C7.03409 5.0327 6.81683 5.0422 6.60915 5.05445C4.96519 5.15144 3.92193 5.42122 3.17157 6.17158C2.92691 6.41624 2.73334 6.69204 2.5802 7.00965C2.63777 7.0293 2.69387 7.05632 2.74721 7.09099C4.8475 8.45617 6.16709 9.31008 7.26356 9.85786C7.33001 9.51166 7.6345 9.25009 8.00009 9.25009C8.4143 9.25009 8.75009 9.58588 8.75009 10.0001V10.458C10.8695 11.0976 13.1306 11.0976 15.2501 10.458V10.0001C15.2501 9.58588 15.5859 9.25009 16.0001 9.25009C16.3657 9.25009 16.6702 9.5117 16.7366 9.85794C17.8331 9.31015 19.1527 8.45623 21.2531 7.09099C21.3064 7.05638 21.3624 7.02939 21.4199 7.00975C21.2667 6.6921 21.0731 6.41626 20.8284 6.17158C20.0781 5.42122 19.0348 5.15144 17.3909 5.05445C17.1937 5.04282 16.9879 5.03367 16.773 5.02648C16.7594 5.01545 16.7458 5.00406 16.7322 4.99231C16.4915 4.78435 16.3033 4.51011 16.2084 4.25288L16.2053 4.24344C16.1694 4.13576 16.1415 4.05195 16.1102 3.97426C15.714 2.98855 14.7854 2.31926 13.725 2.25503C13.6414 2.24997 13.553 2.24998 13.4395 2.25L10.5814 2.25ZM14.8176 4.81569L14.8131 4.80495L14.8082 4.79286L14.8037 4.78091L14.8 4.77097L14.7982 4.76596L14.794 4.75373L14.7902 4.74244L14.7881 4.73617L14.7853 4.72783L14.7831 4.72079L14.7813 4.7151C14.742 4.59708 14.7299 4.56204 14.7185 4.53375C14.5384 4.08571 14.1163 3.78148 13.6343 3.75229C13.602 3.75034 13.5625 3.75 13.4191 3.75H10.5814C10.438 3.75 10.3984 3.75034 10.3662 3.75229C9.88424 3.78148 9.46221 4.08561 9.28204 4.53354L9.2794 4.54052L9.27143 4.56245C9.2648 4.58104 9.25672 4.60429 9.2474 4.63156C9.23088 4.67994 9.21232 4.73546 9.19351 4.79186L9.19168 4.79777L9.18945 4.80481L9.18671 4.81314L9.18462 4.81941L9.18079 4.83071L9.17655 4.84295L9.17477 4.84796L9.17113 4.85791L9.16655 4.86987L9.16168 4.88199L9.15751 4.8919L9.15686 4.89336C9.14293 4.92921 9.12818 4.96498 9.11263 5.00064C9.39625 5 9.69183 5 10 5H14C14.3115 5 14.6101 5 14.8965 5.00066C14.868 4.93956 14.8417 4.87784 14.8176 4.81569Z" fill="#050505"></path> </g></svg>
                            <span className='font-normal'>{selectedVolunteer?.work_experience}</span>
                        </div>
                        <div className="flex gap-2 my-1">
                            <svg className='bi bi-geo-alt-fill h-5 w-5' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path> </g></svg>
                            <span className='font-normal'>{selectedVolunteer?.address}</span>
                        </div>

                        <div className="font-normal mt-3">Email address</div>
                        <div className="font-bold">{selectedVolunteer?.email}</div>

                        <div className="font-normal mt-3">Home address</div>
                        <div className="font-bold">{selectedVolunteer?.home_address}</div>

                        <div className="font-normal mt-3">Phone number</div>
                        <div className="font-bold">{selectedVolunteer?.phone}</div>

                        <div className="flex">

                        </div>

                    </div>

                    <div className="grid-col col-span-3 py-6 px-8 shadow dark:bg-gray-700">
                        <div className="font-bold my-3 text-2xl">General information</div>
                        <div className="font-bold mb-3 text-xl">About me</div>
                        <div className="font-normal">
                        {selectedVolunteer?.bio}
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="my-2">
                                <div className="font-normal">Education</div>
                                <div className="font-bold">{selectedVolunteer?.edu_background}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Work History</div>
                                <div className="font-bold">{selectedVolunteer?.work_history}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal ">Join Date</div>
                                <div className="font-bold">{selectedVolunteer?.create_at}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Languages</div>
                                <div className="font-bold">{selectedVolunteer.lang ? 'none':selectedVolunteer?.lang}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Organization</div>
                                <div className="font-bold">{selectedVolunteer?.programArea}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Role</div>
                                <div className="font-bold">{selectedVolunteer?.role}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Department</div>
                                <div className="font-bold">{selectedVolunteer?.programArea}</div>
                            </div>
                            <div className="my-2">
                                <div className="font-normal">Birthday</div>
                                <div className="font-bold">{selectedVolunteer?.dob}</div>
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default VolunteerDetail
