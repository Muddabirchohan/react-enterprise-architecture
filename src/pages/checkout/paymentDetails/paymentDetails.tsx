import { Input } from 'antd';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';


interface IPaymentState {
  number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: boolean;
}

const PaymentForm = () => {
  const [state, setState] = useState<IPaymentState>({
    number: '',
    expiry: '02/23',
    cvc: '',
    name: 'MUDDABIR CHOHAN',
    focus: false,
  });

  const handleInputChange = (evt: { target: { name: any; value: any; }; }) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt: { target: { name: any; }; }) => {
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