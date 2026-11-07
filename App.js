import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {FontAwesome6} from "@expo/vector-icons";
import QuizQuestion from './components/question';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');

     const correctAnswers = {
            q1: 'Iron Man',
            q2: 'Spider-Man',
            q3: 'Mjölnir',
            q4: 'Vibranium',
            q5: 'Cap',
            q6: 'Time Stone',
        };

        const resetAnswers = () => {
            setAnswer1('');
            setAnswer2('');
            setAnswer3('');
            setAnswer4('');
            setAnswer5('');
            setAnswer6('');
        };


    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>


            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Avengers Quiz <FontAwesome6 name="shield" size={32} color="red" />
            </Text>
            <QuizQuestion
                number={1}
                question="Which Avenger wears this iconic red and gold armor?"
                picture={{ uri: 'https://wallpapers.com/images/hd/iron-man-pictures-k83lqhe6vnh95b1m.jpg' }}
                option1="Loki"
                option2="Iron Man"
                option3="Hawkeye"
                option4="Star-Lord"
                answer={answer1}
                onChange={setAnswer1}
            />

            <QuizQuestion
                number={2}
                question="Which web-slinging hero got his powers from a radioactive spider bite?"
                picture={{ uri: 'data:image/webp;base64,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' }}
                option1="Spider-Man"
                option2="Deadpool"
                option3="Ant-Man"
                option4="Vision"
                answer={answer2}
                onChange={setAnswer2}
            />

            <QuizQuestion
                number={3}
                question="What is the name of Thor's magical hammer?"
                picture={{ uri: 'https://marvelofficial.com/wp-content/uploads/2020/10/thor-hammer-prop-replica.jpg' }}
                option1="Mjölnir"
                option2="Stormbreaker"
                option3="Gungnir"
                option4="Tesseract"
                answer={answer3}
                onChange={setAnswer3}
            />


            <QuizQuestion
                            number={4}
                            question="What fictional metal is Captain America's shield made of?"
                            picture={{ uri: 'https://th.bing.com/th/id/OIP.jmo1XKRKFOByj1OKL8QlTQHaFj?w=223&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' }}
                            option1="Adamantius"
                            option2="Vibranium"
                            option3="Uru"
                            option4="Kryptonite"
                            answer={answer4}
                            onChange={setAnswer4}
                        />

            <QuizQuestion
                            number={5}
                            question="What is Steve Rogers' superhero nickname?"
                            picture={{ uri: 'https://th.bing.com/th/id/OIP.Uvzei9pjd88jWcqHKsewMwHaIz?w=138&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' }}
                            option1="Cap"
                            option2="Winter Soldier"
                            option3="Falcon"
                            option4="Red Skull"
                            answer={answer5}
                            onChange={setAnswer5}
                        />

            <QuizQuestion
                            number={6}
                            question="Which Infinity Stone is contained within the Eye of Agamotto worn by Doctor Strange?"
                            picture={{ uri: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20220811185708' }}
                            option1="Space Stone"
                            option2="Mind Stone"
                            option3="Time Stone"
                            option4="Reality Stone"
                            answer={answer6}
                            onChange={setAnswer6}
                        />



            <Button
                title="Submit Answers"
                onPress={() => {
                    let score = 0;
                    if (answer1 === correctAnswers.q1) score++;
                    if (answer2 === correctAnswers.q2) score++;
                    if (answer3 === correctAnswers.q3) score++;
                    if (answer4 === correctAnswers.q4) score++;
                    if (answer5 === correctAnswers.q5) score++;
                    if (answer6 === correctAnswers.q6) score++;

                    if (score === 6) {
                        Alert.alert("🎉 Perfect!", "Congratulations! You got all answers correct!",[{ text: "Play Again", onPress: resetAnswers }]);
                    } else {
                        Alert.alert("Quiz Score", `You have ${score} correct answer(s)! Try Again!`, [{ text: "Try Again" }]);
                    }
                }}
            />
        </ScrollView>
    );
};

export default MyApp;