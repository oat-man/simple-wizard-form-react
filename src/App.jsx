import { useState } from 'react'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nUsername: ${username}\nPassword: ${password}`);
  };
  

  return (
    <>
      <div className='container'>
        <h1>React Wizard Form</h1>
        <p>Step {currentStep}</p>
        
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <Step1 email={email} setEmail={setEmail} />
          )}
          {currentStep === 2 && (
            <Step2 username={username} setUsername={setUsername} />
          )}
          {currentStep === 3 && (
            <Step3 password={password} setPassword={setPassword} />
          )}

          <div style={{ margin: '20px' }}>
            {currentStep > 1 && (
              <button type="button" onClick={handlePrev}>
                Previous
              </button>
            )}
            {currentStep < 3 && (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {currentStep === 3 && (
              <button type="submit">Submit</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

function Step1({ email, setEmail }) {
  return (
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}


function Step2({username, setUsername}) {
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

function Step3({password, setPassword}) {
  return (
    <div className='form-group'>
      <label htmlFor='password'>Password</label>
      <input
        className='form-control'
        id='password'
        name='password'
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}


export default App
