import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

function App() {
  //return <UncontrolledForm />;
  //return <ControlledForm />;
  // return <UncontrolledModal />;

  /* Uncontrolled Onboarding Flow
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>Hello, World!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(true)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
  */

  /*  const StepOne = ({ goToNext }) => (
    <>
      <h1>Step One</h1>
      <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
    </>
  );
  const StepTwo = ({ goToNext }) => (
    <>
      <h1>Step Two</h1>
      <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
  );
  const StepThree = ({ goToNext }) => (
    <>
      <h1>Step Three</h1>
      <button onClick={() => goToNext({ hairColor: "Brown" })}>Next</button>
    </>
  );

  return (
    <UncontrolledOnboardingFlow
      onFinish={(data) => {
        console.log(data);
        alert("Onboarding Complete!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  ); */

  const [onBordingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const StepOne = ({ goToNext }) => (
    <>
      <h1>Step One</h1>
      <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
    </>
  );
  const StepTwo = ({ goToNext }) => (
    <>
      <h1>Step Two</h1>
      <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
  );

  const StepThree = ({ goToNext }) => (
    <>
      <h1>Step Three</h1>
      <p>Congratulations You qualify for our senior discount</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );

  const StepFour = ({ goToNext }) => (
    <>
      <h1>Step Four</h1>
      <button onClick={() => goToNext({ hairColor: "Brown" })}>Next</button>
    </>
  );

  const onNext = (stepData) => {
    setOnboardingData({ ...onBordingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onBordingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}

export default App;
