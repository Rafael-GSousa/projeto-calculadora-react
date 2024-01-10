import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  //Limpar a tela ao clicar no C
  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  //Remove apenas o último número com Backspace
  const handleBackspace = () => {
    if (currentNumber && currentNumber[0] !== "0" && currentNumber.length > 1) {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      console.log(currentNumber);
    } else {
      setCurrentNumber("0");
    }
  };

  //Adiciona um número na tela
  const handleAddNumber = (num) => {
    //Inicialmente, se o número clicado for 0, nenhum número é passado, do contrário é passado o número clicado
    if (
      (currentNumber !== "0" && num !== ".") ||
      (currentNumber === "0" && num === ".")
    ) {
      setCurrentNumber((prev) => `${prev}${num}`);
    } else {
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
    }
  };

  //Calcula o fatorial de um valor
  const handleFactorial = (num) => {
    let result = Number(num);
    if (Number(num) === 0 || Number(num) === 1) {
      setCurrentNumber("1");
    } else {
      while (Number(num) > 1) {
        Number(num--);
        result *= Number(num);
      }
      setCurrentNumber(String(result));
    }
  };

  //Soma dois valores
  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  //Divide dois valores
  const handleDivide = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  };

  //Subtrai dois valores
  const handleSubtraction = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
      setOperation("");
    }
  };

  //Multiplica dois valores
  const handleMultiplication = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation("");
    }
  };

  //Torna o valor corrente negativo ou positivo, ao clicar na tecla +/-
  const handleMoreLess = () => {
    if (currentNumber > 0 || currentNumber < 0) {
      setCurrentNumber(`${Number(currentNumber) * -1}`);
    } else {
      setCurrentNumber(`${currentNumber}`);
    }
  };

  //Faz a validação de cada operação e dá o resultado
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSubtraction();
          break;
        case "*":
          handleMultiplication();
          break;
        case "/":
          handleDivide();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleClear} />
          <Button label="&larr;" onClick={handleBackspace} />
          <Button label="&divide;" onClick={handleDivide} />
        </Row>
        <Row>
          <Button label="&#8508;" onClick={() => handleAddNumber(Math.PI)} />
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultiplication} />
        </Row>
        <Row>
          <Button label="n!" onClick={() => handleFactorial(currentNumber)} />
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleSubtraction} />
        </Row>
        <Row>
          <Button label="&#177;" onClick={handleMoreLess} />
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          {/* <Button label="(" onClick={() => handleAddNumber("(")} />
          <Button label=")" onClick={() => handleAddNumber(")")} /> */}
          <Button label="," onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
