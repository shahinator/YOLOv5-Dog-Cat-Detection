/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
// import { shallowEqual, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import Button from "@material-ui/core/Button";

export function ProfileCard() {
    // const user = useSelector(({ auth }) => auth.user, shallowEqual);

    useEffect(() => {
        return () => {};
    }, []);

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexWrap: "wrap",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
    }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: "Organization Name",
        multiline: "Controlled",
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const [state, setState] = React.useState({
        forum: true,
        directory: true,
        jobs: true,
        events: true,
    });

    const handleToggleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <div className="flex-row-auto " id="kt_profile_aside">
                <div className="card card-custom card-stretch">
                    {/* begin::Body */}
                    <div className="card-body pt-4">
                        {/* begin::User */}
                        <div className="row">
                            <div className="col-md-3 d-flex p-5">
                                <div className="symbol symbol-130 symbol-xxl-100 mr-5 align-self-center align-self-xxl-center">
                                    <div>
                                        <div
                                            className="symbol-label"
                                            style={{
                                                backgroundImage: `url("/media/users/100_2.jpg")`,
                                                borderRadius: "50%",
                                            }}
                                        ></div>
                                    </div>
                                    <div>
                                        <div className="mt-2">
                                            <a
                                                href="#"
                                                className="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-7 px-xxl-5 my-1"
                                            >
                                                Upload Image
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-edit-form">
                                    <form
                                        className={classes.container}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="outlined-name"
                                            label="Organization Name"
                                            className={classes.textField}
                                            placeholder={values.name}
                                            onChange={handleChange("name")}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Organization Description"
                                            multiline
                                            rows="4"
                                            placeholder="Organization Description"
                                            // defaultValue="Organization Description"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* end::User */}
                    </div>

                    {/* begin::feature toggles */}
                    <div className="row">
                        <div className="card-body p-10">
                            <div className="col-md-4 p-5">
                                <h1>Feature Toggles</h1>

                                <FormGroup className="col-md-4">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.forum}
                                                onChange={handleToggleChange}
                                                name="forum"
                                            />
                                        }
                                        label="Forum"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.directory}
                                                onChange={handleToggleChange}
                                                name="directory"
                                            />
                                        }
                                        label="Directory"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.jobs}
                                                onChange={handleToggleChange}
                                                name="jobs"
                                            />
                                        }
                                        label="Jobs"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.events}
                                                onChange={handleToggleChange}
                                                name="events"
                                            />
                                        }
                                        label="Events"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons: start */}
                    {/* <div className=" p-4 d-flex align-items-center justify-content-end">
                        <Button
                            className="p-2 mx-2"
                            variant="contained"
                            color="secondary"
                        >
                            Deactivate
                        </Button>
                        <Button
                            className="p-2 mx-2"
                            variant="contained"
                            color="secondary"
                        >
                            Make Mentor
                        </Button>
                    </div> */}
                    {/* end::feature toggles */}
                    {/* end::Body */}
                </div>
            </div>
        </>
    );
}
