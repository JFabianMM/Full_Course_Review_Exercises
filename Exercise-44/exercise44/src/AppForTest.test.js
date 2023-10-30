import {render, screen, fireEvent} from '@testing-library/react';
import AppForTest from './AppForTest';

describe('Local and Session Hook Tests', ()=>{
  let setKey1To1Button;
  let getKey1ValueButton;
  let setKey2ToHELLOButton;
  let getKey2ValueButton;
  let resultKey1;
  let resultKey2;
  let goLocalInitialValuesButton;

  let setKey3To2Button;
  let getKey3ValueButton;
  let setKey4ToHIButton;
  let getKey4ValueButton;
  let resultKey3;
  let resultKey4;
  let goSessionInitialValuesButton;

  beforeEach(async ()=>{
      render(<AppForTest></AppForTest>
      );
      setKey1To1Button = await screen.getByText("Set the key 'myId' to 1");
      getKey1ValueButton = await screen.getByText("Get 'myId' value");
      setKey2ToHELLOButton = await screen.getByText("Set the key 'message' to HELLO!");
      getKey2ValueButton = await screen.getByText("Get 'message' value");
      resultKey1 = screen.getByTestId('resultKey1');
      resultKey2 = screen.getByTestId('resultKey2');
      goLocalInitialValuesButton = await screen.getByText("Go Local to initial values");
    
      setKey3To2Button = await screen.getByText("Set the key 'myId2' to 2");
      getKey3ValueButton = await screen.getByText("Get 'myId2' value");
      setKey4ToHIButton = await screen.getByText("Set the key 'message2' to HI!");
      getKey4ValueButton = await screen.getByText("Get 'message2' value");
      resultKey3 = screen.getByTestId('resultKey3');
      resultKey4 = screen.getByTestId('resultKey4');

      goSessionInitialValuesButton = await screen.getByText("Go Session to initial values");
  })

  test('The initial value of the key "myId" must be: 0',()=>{
    expect(resultKey1.textContent).toBe('The value of key "myId" is: 0')
  })
   
   test('After Set and Get the value of the key "myId" must be: 1',()=>{
    fireEvent.click(setKey1To1Button);
    fireEvent.click(getKey1ValueButton);
    expect(resultKey1.textContent).toBe('The value of key "myId" is: 1')
  })

  test('The initial value of the key "message" must be: "Nothing"',()=>{
    expect(resultKey2.textContent).toBe('The value of key "message" is: Nothing');
  })

  test('After Set and Get the value of the key "message" must be: "HELLO!"',()=>{
    fireEvent.click(setKey2ToHELLOButton);
    fireEvent.click(getKey2ValueButton);
    expect(resultKey2.textContent).toBe('The value of key "message" is: HELLO!')
  })  

  test('After going to initial values, the key "myId" must be: 0 and the key "message" must be: "Nothing"',()=>{
    fireEvent.click(goLocalInitialValuesButton);
    expect(resultKey1.textContent).toBe('The value of key "myId" is: 0');
    expect(resultKey2.textContent).toBe('The value of key "message" is: Nothing');
  })


  test('The initial value of the key "myId2" must be: 0',()=>{
    expect(resultKey3.textContent).toBe('The value of key "myId2" is: 0')
  })
   
   test('After Set and Get the value of the key "myId2" must be: 2',()=>{
    fireEvent.click(setKey3To2Button);
    fireEvent.click(getKey3ValueButton);
    expect(resultKey3.textContent).toBe('The value of key "myId2" is: 2')
  })

  test('The initial value of the key "message2" must be: "Nothing"',()=>{
    expect(resultKey4.textContent).toBe('The value of key "message2" is: Nothing');
  })

  test('After Set and Get the value of the key "message2" must be: "HI!"',()=>{
    fireEvent.click(setKey4ToHIButton);
    fireEvent.click(getKey4ValueButton);
    expect(resultKey4.textContent).toBe('The value of key "message2" is: HI!')
  })

  test('After going to initial values, the key "myId2" must be: 0 and the key "message2" must be: "Nothing"',()=>{
    fireEvent.click(goSessionInitialValuesButton);
    expect(resultKey3.textContent).toBe('The value of key "myId2" is: 0');
    expect(resultKey4.textContent).toBe('The value of key "message2" is: Nothing');
  })

})