import { Input } from 'antd';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '02/23',
    cvc: '',
    name: 'MUDDABIR CHOHAN',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <Input
          name="number"
          maxLength={16}
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
      </form>
    </div>
  );
}

export default PaymentForm;