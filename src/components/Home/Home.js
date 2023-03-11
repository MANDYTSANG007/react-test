import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import questions from '../../assets/questions.json';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));


const Home = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Box sx={{ p: 5 }}>
                <h1 style={{ textAlign: 'center' }}>Study Page</h1>
                {questions.questions.map((q) => (
                    <Stack sx={{ p: 2 }}>
                        <Item>
                            <Panel
                                key={q.id}
                                id={q.id}
                                question={q.question}
                                answer={q.answer}
                                translation={q.translation}
                            />
                        </Item>
                    </Stack>
                ))}
            </Box>
        </div>
    );
};

function Panel({ question_id, question, answer, translation }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    const toggleTranslationVisibility = () => {
        setIsTranslationVisible(!isTranslationVisible);
    };

    return (
        <section>
             <p>{question_id}</p>
            <h1>
               
                {question}
            </h1>
            {isAnswerVisible ? (
                <div>
                    <p style={{fontSize: "24px", color: "purple"}}>{answer}</p>
                    <Button variant="outlined" onClick={toggleAnswerVisibility}>Hide</Button>
                </div>
            ) : (
                <Button variant="outlined" onClick={toggleAnswerVisibility}>Show</Button>
            )}
            {isTranslationVisible ? (
                <div>
                    <p>{translation}</p>
                    <Button onClick={toggleTranslationVisibility}>隱藏中文</Button>
                </div>
            ) : (
                <Button onClick={toggleTranslationVisibility}>展示中文</Button>
            )}
        </section>
    );
}


export default Home;
