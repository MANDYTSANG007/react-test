import React, { useState } from "react";
import { Typography, Box, Stack, Paper, Button } from "@mui/material";
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import questions from '../../assets/questions.json';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline>
                <div style={{ width: '100%', height: '100%' }}>
                    <Box sx={{ p: 5 }}>
                        <Button onClick={handleDarkModeChange}>
                            {darkMode ? <LightModeIcon /> : <NightlightIcon />}
                            {darkMode ? 'Light Mode' : 'Dark Mode'}

                        </Button>
                        <h1 style={{ textAlign: 'center' }}>Study Page</h1>

                        {questions.questions.map(q => (
                            <Stack sx={{ p: 2 }}>
                                <Item>
                                    <Panel
                                        key={q.question_id}
                                        id={q.question_id}
                                        question={q.question}
                                        answer={q.answer}
                                        translation={q.translation}
                                        translationAnswer={q.answer2}
                                    />
                                </Item>
                            </Stack>
                        ))}
                    </Box>
                </div>
            </CssBaseline>
        </ThemeProvider>
    );
};

function Panel({ id, question, answer, translation, translationAnswer }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);
    const [isTranslationAnsVisible, setIsTranslationAnsVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    const toggleTranslationVisibility = () => {
        setIsTranslationVisible(!isTranslationVisible);
    };

    const toggleTranslationAnsVisibility = () => {
        setIsTranslationAnsVisible(!isTranslationAnsVisible);
    };
    const theme = useTheme();


    return (
        <section>
            <h1>
                {id}. {question}
            </h1>
            {isAnswerVisible ? (
                <div>
                    <Typography sx={{ fontSize: "22px", color: theme.palette.mode === 'dark' ? 'yellow' : 'purple' }}>
                        {answer}
                    </Typography>
                    <Button sx={{ m: 2 }} variant="outlined" onClick={toggleAnswerVisibility}>Hide</Button>
                </div>
            ) : (
                <Button sx={{ m: 2 }} variant="outlined" onClick={toggleAnswerVisibility}>Show</Button>
            )}
            {isTranslationVisible ? (
                <div>
                    <p>{translation}</p>
                    <Button sx={{ m: 2 }} onClick={toggleTranslationVisibility}>隱藏中文</Button>
                </div>
            ) : (
                <Button sx={{ m: 2 }} onClick={toggleTranslationVisibility}>展示中文</Button>
            )}
            {isTranslationAnsVisible ? (
                <div>
                    <p>{translationAnswer}</p>
                    <Button sx={{ m: 2 }} variant="outlined" onClick={toggleTranslationAnsVisibility}>隱藏答案</Button>
                </div>
            ) : (
                <Button sx={{ m: 2 }} variant="outlined" onClick={toggleTranslationAnsVisibility}>展示答案</Button>
            )}
        </section>
    );
}


export default Home;


