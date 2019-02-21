//@flow
import React from 'react';

type CurrencyTypeProps = {
    value: string,
    name: string,
    type: string,
}

const CurrencyType = ({
    value,
    name,
    type,
}: CurrencyTypeProps) => (
    <div className={`currency__type ${type}`}>
        <div className="currency__type-name" >{name}</div>
        <div className="currency__type-value" dangerouslySetInnerHTML={{__html: value}} />
    </div>
);

export default CurrencyType;