<template id="Vacation-Map">
    <div class="layout-wrapper layout-content-navbar">

        <div class="layout-container">
            <!-- Menu -->
            <Aside />

            <!-- / Menu -->

            <!-- Layout container -->
            <div class="layout-page">
                <!-- Navbar -->

                <Navbar />

                <!-- / Navbar -->

                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Content -->

                    <div class="container-xxl flex-grow-1 container-p-y">
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Vacation /</span> Map</h4>
                        <div class="row">
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                                    <li class="nav-item">
                                    </li>
                                </ul>
                                <div class="card mb-4">

                                    <div class="card-body">
                                        <div class="title-card">
                                            <h5 class="text-center">Selections Views</h5>
                                            <hr>
                                        </div>

                                        <div class="col-12">
                                            <div class="mb-3 row">
                                                <div class="col-md-8">
                                                    <div class="form-check form-switch mb-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckChecked" v-model="selectAll"
                                                            @change="toggleSelectAll">
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">See
                                                            all</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                        <div class="col-12">
                                            <div class="mb-3 row">
                                                <div class="col-md-12">
                                                    <div class="form-check form-switch mb-2"
                                                        v-for="(user, index) in allUsers" :key="index">
                                                        <input class="form-check-input" type="checkbox"
                                                            :id="'stackCheckbox' + index" v-model="user.selectedUser" />
                                                        <label class="form-check-label" :for="'stackCheckbox' + index">
                                                            {{ user.firstname }} {{ user.lastname }}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <!-- /Account -->
                                </div>

                            </div>

                            <div class="col-md-9">
                                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                                    <li class="nav-item">
                                    </li>
                                </ul>
                                <div class="card mb-4">

                                    <div class="card-body">
                                        <FullCalendar :options="calendarOptions">
                                            <template v-slot:eventContent="arg">

                                            </template>
                                        </FullCalendar>
                                    </div>
                                    <!-- /Account -->
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- / Content -->

                    <!-- Footer -->
                    <Footer />
                    <!-- / Footer -->

                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>
<script>
import Aside from '../../components/aside/index.vue';
import Navbar from '../../components/navbar/index.vue';
import Footer from '../../components/footer/index.vue';
import api from '../../services/auth/index'
import apiholiday from '../../services/holiday/index';
import apiVacation from "../../services/vacation/index";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default {
    name: 'Vacation-Map',
    components: {
        Aside,
        Navbar,
        Footer,
        FullCalendar,
    },
    data() {
        return {
            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            isLoading: false,
            mainDetails: true,

            selectedUsers: false,
            selectAll: false,
            allUsers: [],
            vacationEvents: [],
            holidayEvents: [],



            //Aqui está os campos
            holidadyname: '',
            date_start: '',
            date_end: '',
            city: '',
            selectOffice: false,
            //Fim dos campos


            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listYear'
                },
                initialView: "dayGridMonth",
                events: [{
                    title: "",
                    start: '',
                    description: "",
                    className: "",
                    color: "",
                    avatar: ''
                }],
                weekends: true,
                editable: true,
                eventStartEditable: true,
                eventDurationEditable: true,

            },

            msg_success: false,
            msg_success_delete: false,


        };
    },
    watch: {
        allUsers: {
            deep: true,
            handler() {
                this.updateEventsBasedOnUserSelection();
            }
        }
    },


    mounted() {
        Promise.all([
            apiVacation.vacations(),
            apiholiday.list()
        ]).then((responses) => {
            let vacationsResponse = responses[0].data.response;
            let holidaysResponse = responses[1].data.response;

            this.allUsers = [];
            const userSet = new Set();
            vacationsResponse.forEach(item => {
                if (item.tb_utilizadore && !userSet.has(item.tb_utilizadore.id_user)) {
                    userSet.add(item.tb_utilizadore.id_user);
                    this.allUsers.push({
                        ...item.tb_utilizadore,
                        selectedUser: true
                    });
                }
            });

            this.vacationEvents = vacationsResponse.map((item) => {
                return {
                    userId: item.tb_utilizadore.id_user, // Adicione esta linha
                    title: item?.tb_utilizadore.firstname,
                    start: item?.date_start,
                    end: item?.date_end || "",
                    color: item?.tb_utilizadore.color || "",
                    description: item?.activity || "",
                    avatar: `http://localhost:3000${item.tb_utilizadore.avatar}`,
                };
            });

            this.holidayEvents = holidaysResponse.map((item) => {
                return {
                    title: "🏖️ Hollyday",
                    start: item?.date_start,
                    end: item?.date_end || "",
                    color: "#f1c232",
                    description: item?.holiday_name || "",

                };
            });


            this.updateEventsBasedOnUserSelection();

        });

    },

    methods: {

        toggleSelectAll() {
            this.allUsers.forEach(user => {
                user.selectedUser = this.selectAll;
            });
        },


            updateEventsBasedOnUserSelection() {
                const filteredVacationEvents = this.vacationEvents.filter(event => {
                    const user = this.allUsers.find(u => u.id_user === event.userId);
                    return user ? user.selectedUser : false;
                });


                this.calendarOptions.events = [...filteredVacationEvents, ...this.holidayEvents];

                this.calendarOptions.eventContent = function (arg) {
                    let avatarImage = "";
                    if (arg.event.extendedProps.avatar) {
                        avatarImage = `<img src="${arg.event.extendedProps.avatar}" style="width:40px; height:40px; border-radius:50%; margin-right:5px; border: 2px solid #FFF;">`;
                    }

                    return {
                        html: `<div class="event-content">${avatarImage}${arg.event.title}</div>`
                    };
                };
            }


        }
    }
</script>
  
<style>
.btn {
    background: #0049ff;
    color: #fff;
}

.preview-area {
    width: 20%;
}

.btncircle {
    border-radius: 500px;
    width: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    margin-top: -30px;
    margin-left: 5%;

}

input[type=file] {
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}

.preview {
    position: relative;
    width: 120px;
    height: 120px;
    background: #f2f2f2;
    border-radius: 100%;
    overflow: hidden;
    border: 3px solid #E0E0E0;

    img {
        width: 120px;
        height: 120px;
        object-fit: contain;
    }

    .loadingLogo {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -35px;
        margin-top: -35px;
        width: 70px;
        height: 70px;
        border: 5px solid #69CD9B;
        border-top: 5px solid #2FDEC1;
        border-radius: 100%;
        animation: spin 500ms linear infinite;
    }

}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

#full-stars-example {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* set color of none icon when unchecked */
    .rating__icon--none {
        color: #eee;
    }

    /* if none icon is checked, make it red */
    .rating__input--none:checked+.rating__label .rating__icon--none {
        color: red;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make none icon grey on rating group hover */
    .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
        color: #eee;
    }

    /* make none icon red on hover */
    .rating__input--none:hover+.rating__label .rating__icon--none {
        color: red;
    }
}

#half-stars-example {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        /* if you change the left/right padding, update the margin-right property of .rating__label--half as well. */
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* add padding and positioning to half star labels */
    .rating__label--half {
        padding-right: 0;
        margin-right: -0.6em;
        z-index: 2;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* set color of none icon when unchecked */
    .rating__icon--none {
        color: #eee;
    }

    /* if none icon is checked, make it red */
    .rating__input--none:checked+.rating__label .rating__icon--none {
        color: red;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star,
    .rating-group:hover .rating__label--half .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star,
    .rating__input:hover~.rating__label--half .rating__icon--star {
        color: #ddd;
    }

    /* make none icon grey on rating group hover */
    .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
        color: #eee;
    }

    /* make none icon red on hover */
    .rating__input--none:hover+.rating__label .rating__icon--none {
        color: red;
    }
}

#full-stars-example-two {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* hide 'none' input from screenreaders */
    .rating__input--none {
        display: none
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star {
        color: #ddd;
    }
}
</style>