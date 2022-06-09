import React, { useState } from 'react'
import Button from './Button';
import Input from './Input';

const TestDemo: React.FC = () => {
    const [showDiv, setShowDiv] = useState(true);
    // console.log(showDiv);
    
    return (
        <div>
            <Input showDiv={showDiv}/>
            <Button/>
        </div>
    );
}

export default TestDemo;
