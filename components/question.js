import React from 'react';
import { View, Text, Button, Image, ScrollView, Alert } from 'react-native';

import { Picker } from '@react-native-picker/picker';

const QuizQuestion = ({
    number,
    question,
    picture,
    option1,
    option2,
    option3,
    option4,
    answer,
    onChange
}) => {


    return (
        <View style={{ marginBottom: 20 }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Question {number}
            </Text>

            <Text>{question}</Text>

            <Image
                source={picture}
                style={{ width: 400, height: 300, marginBottom: 10 }}
            />

            <Picker
                selectedValue={answer}
                onValueChange={onChange}
            >
                <Picker.Item label="Select Your Answer" value="" />
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
                <Picker.Item label={option4} value={option4} />
            </Picker>



        </View>
    );
};

export default QuizQuestion;