import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Project = (props) => {
    return (
        <div>
            <Stack direction="row" justifyContent="center">
                <Paper
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "40%",
                        borderRadius: 25,
                        backgroundColor: "#987654",
                    }}
                    square={false}
                    elevation={32}
                >
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h3"
                            style={{ fontFamily: "Ga Maamli" }}
                            component="div"
                        >
                            {props.info.title}
                        </Typography>
                        <Typography
                            style={{
                                flex: 1,
                                fontFamily: "Kode Mono",
                                fontStyle: "italic",
                            }}
                            variant="body1"
                            color="text.secondary"
                        >
                            {props.info.description}
                        </Typography>
                        <ul
                            style={{
                                listStyleType: "circle",
                                // listStylePosition: "inside",
                                paddingLeft: 20,
                                textAlign: "start",
                                margin: 10,
                            }}
                        >
                            {props.info.bulletpoints.map((i) => {
                                return (
                                    <li style={{ paddingTop: 15 }}>
                                        <Typography
                                            style={{
                                                flex: 1,
                                                fontFamily: "Kode Mono",
                                            }}
                                            variant="body1"
                                            color="text.secondary"
                                        >
                                            {i}
                                        </Typography>
                                    </li>
                                );
                            })}
                        </ul>
                    </CardContent>
                    <CardActions>
                        <Button
                            style={{ backgroundColor: "#B57E3F" }}
                            size="large"
                            variant="contained"
                            as="a"
                            href={props.info.codelink}
                        >
                            <Typography style={{ fontFamily: "Kode Mono" }}>
                                {props.info.otherlink == null
                                    ? "View code/download"
                                    : "View code"}
                            </Typography>
                        </Button>
                        {props.info.otherlink != null && (
                            <Button
                                style={{ backgroundColor: "#B57E3F" }}
                                size="large"
                                variant="contained"
                                as="a"
                                href={props.info.otherlink}
                            >
                                <Typography style={{ fontFamily: "Kode Mono" }}>
                                    {props.info.otherlinkname}
                                </Typography>
                            </Button>
                        )}
                    </CardActions>
                </Paper>
                <img src={props.info.image} width="30%"></img>
            </Stack>
        </div>
    );
};

export default Project;
