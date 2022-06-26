import {
    Accordion,
    Box,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { ExpandMoreOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import './App.css'
import Modal from "./Modal/Modal";
const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            accordion: {
            margin: theme.spacing(3),
            width: theme.spacing(100),
            },
        })
        );
        

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modal2Active, setModal2Active] = useState(false);
    const [add, setAdd] = useState([]);

    const addHandler = (e) =>{
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file))
            console.log(fileArray)
            setAdd((prevImages) =>prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) =>URL.revokeObjectURL(file)
            )
        }
    }
    const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};
    const [current, setCurrent] = useState(-1);

    const classes = useStyles();

    const changeState = (panel) => (e, newValue) => {
        setCurrent(newValue ? panel : -1);
};
    return ( 
        <div className="app">
            <header className="header">
                <div className="buttons-head">
                    <button className="open-btn" onClick={() => setModalActive(true)}>Если уже знакомы, сюда нажимай вац</button>
                    <button className="open-btn" onClick={() => setModal2Active(true)}>Если нет, сюда</button>
                </div>
                
            </header>
            <main>
                <div className="add-img">
                    <form>
                        <input onChange={addHandler} multiple  id="file" type="file"  />
                    </form>
                </div>
                <div className="result">{renderPhotos(add)}</div>
                <div className="accordion">
                <Box className={classes.accordion}>
                    <Accordion expanded={current === 0} onChange={changeState(0)}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography>Что делать если понравилась девушка в инсте?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Пишешь ей в директ "Есть вопрос", она полюбому забайтится, и напишет "?", вот тут
                        ты должен раскрыть свою фантазию на максимум и написать, что то цепляющее, только не пзрское
                        по типу "у тебя ляцо бомба говори адрес, завтра маму сватать отправлю", а что то дерзкое, что бы она 
                        поняла, что ты не Лабазан с кизилюрта.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Box>
                <Box className={classes.accordion}>
                    <Accordion expanded={current === 1} onChange={changeState(1)}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography>Как стать аварцем?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        никак.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Box>
                <Box className={classes.accordion}>
                    <Accordion expanded={current === 2} onChange={changeState(2)}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography>Лучший борец в мире и почему?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Саадулаев, потому что он с чароды... и я тоже.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Box>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="autorization">
                    <div className="form-input">
                        <div className="form-title">
                            <h1>Авторизация</h1>
                        </div>
                        <div className="form-field">
                            <h2 className="field-title">Email</h2>
                            <input name="email" type="text" placeholder= "Свою почту пиши вац"/>
                        </div>
                        <div className="form-field">
                            <h2 className="field-title">Пароль</h2>
                            <input name="password" type="password" placeholder= "И пароль накидай да тоже"/>
                        </div>
                    </div>
                    <div className="form-button__autorization">
                        <button name="autorization-button" type="submit" >Ай леф,все короче, заходи</button>
                    </div>
                </div>
            </Modal>
            <Modal active={modal2Active} setActive={setModal2Active}>
                <div className="registration">
                        <div className="form-input">
                            <div className="form-title">
                                <h1>Регистрация</h1>
                            </div>
                            <div className="form-field">
                                <h2 className="field-title">Аварец?</h2>
                                <input name="email" type="text" placeholder= "Свою почту пиши вац"/>
                            </div>
                            <div className="form-field">
                                <h2 className="field-title">Сколько мужчинских лет?</h2>
                                <input name="password" type="password" placeholder= "И пароль накидай да тоже"/>
                            </div>
                        </div>
                        <div className="form-button__autorization">
                            <button name="autorization-button" type="submit" >бич1ана?</button>
                        </div>
                    </div>
            </Modal>    
        </div>
    )
}

export default App;