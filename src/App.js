import React, {useState} from 'react';
import './App.css';

function App() {
  const questions = [
		{
			questionText: 'Which country invented tea?',
			answerOptions: [
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
				{ answerText: 'China', isCorrect: true },
				{ answerText: 'Thailand', isCorrect: false },
			],
		},
		{
			questionText: 'What is your body’s largest organ?',
			answerOptions: [
				{ answerText: 'Heart', isCorrect: false },
				{ answerText: 'Skin', isCorrect: true },
				{ answerText: 'Liver', isCorrect: false },
				{ answerText: 'Kidney', isCorrect: false },
			],
		},
		{
			questionText: 'Which American state is the largest (by area)?',
			answerOptions: [
				{ answerText: 'Alaska', isCorrect: true },
				{ answerText: 'Texas', isCorrect: false },
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'California', isCorrect: false },
			],
		},
		{
			questionText: 'Who did Forbes name the youngest self-made billionaire in 2019?',
			answerOptions: [
				{ answerText: 'Justin Bieber', isCorrect: false },
				{ answerText: 'Cardi B', isCorrect: false },
				{ answerText: 'Taylor Swift', isCorrect: false },
				{ answerText: 'Kylie Jenner', isCorrect: true },
			],
		},
  ];
  const [currentq, setcurrentq] = useState(0)
  const [showscore, setshowscore] = useState(false)
  const [score,setscore] = useState(0)


  const handleclick = (isCorrect) => {
    if(isCorrect === true){
      setscore(score + 1);
    }
    const nextq = currentq + 1;

    if(nextq < questions.length){
      setcurrentq(nextq)
    }else{
      setshowscore(true)

    }
  }

  return (
    <div className="App">
      {showscore ? (
        <>
        <div className="score-section">You scored {score} out of {questions.length}</div>

        </>
      ) : (
        <>
        <div className="q-section">
          <div className="q-count">
            <span>Question {currentq+1}</span>/{questions.length}
          </div>
          <div className="q-text">{questions[currentq].questionText}</div>
        </div>
        <div className="answer-section">
          {questions[currentq].answerOptions.map((answerOption)=> (
            <button className="btns"onClick={()=> handleclick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        </>
      )}
      
    </div>
  );
}

export default App;
