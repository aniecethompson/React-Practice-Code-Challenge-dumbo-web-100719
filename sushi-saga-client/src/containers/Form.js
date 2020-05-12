import React from 'react';

const Form = (props) => {
    return (
         <form onSubmit={(e) => props.addMoney(e)}>
            <label>Add to Wallet</label>
            <input name= "budget" placeholder="Add amount"></input>
            <button>Submit</button>
        </form>
    );
}

export default Form;