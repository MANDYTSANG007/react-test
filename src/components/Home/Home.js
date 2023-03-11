import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import questions from '../../assets/questions.json';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const [question, setQuestion] = useState(0);
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Box sx={{ p: 5 }}>
                <h1> Study Page</h1>
                {questions.questions.map((q) => (
                    <Stack sx={{p:2}}>
                        <Item>
                            <Panel
                                title={q.question}
                                isActive={question === 0}
                                onShow={() => setQuestion(0)}
                            >
                                {q.answer}
                            </Panel>
                        </Item>
                    </Stack>
                ))}
            </Box>
        </div>
    )
}
function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button onClick={() => setIsActive(true)}> Show </button>)}
        </section>
    )
}

export default Home;