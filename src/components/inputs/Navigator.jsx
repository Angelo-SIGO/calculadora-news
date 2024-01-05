import React from 'react';
import Button from './Button';


export default function Navigator({ isFirstStep, onPrevClick, onNextClick }) {
    return (
        <nav className="navigator">
          {isFirstStep ? (
            <Button text="Avançar" style="filled" iconPosition="left" onClick={onNextClick} />
          ) : (
            <>
              <Button text="Voltar" style="outline" iconPosition="left" onClick={onPrevClick} />
              <Button text="Novo Paciente" style="filled" iconPosition="right" onClick={onNextClick} />
            </>
          )}
        </nav>
      )
}