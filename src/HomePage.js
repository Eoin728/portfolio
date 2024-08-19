import React from "react";
import Project from "./Project";
import Stack from "@mui/material/Stack";
import background from "./backgroun2.jpg";
import { Typography } from "@mui/material";
import { info } from "./information";

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Typography
                variant="h2"
                style={{ fontFamily: "Ga Maamli", paddingBottom: 40 }}
            >
                Eoin Cummins
            </Typography>
            <Stack spacing={4}>
                {info.map((i) => {
                    return <Project info={i} link="none" />;
                })}
            </Stack>
        </div>
    );
};

export default HomePage;
