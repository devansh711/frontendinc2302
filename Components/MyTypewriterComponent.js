import {Typewriter} from 'react-simple-typewriter';

const MyTypewriterComponentt = () => {
  return (
    <Typewriter
        words={['Mutual Funds','Stocks','Start Investing Today','Best Advisor Advice']}
        typeSpeed={20}
        deleteSpeed={50}
        loop={true}
        cursor
        cursorStyle='_'
    />
  )
}

export default MyTypewriterComponentt