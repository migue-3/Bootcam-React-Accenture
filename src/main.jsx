import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';
import {CounterApp} from './CounterApp';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
       { /*<FirstApp title="Hola, soy Goku" subTitle={123} /> */}
       <CounterApp title="CounterApp" value={247} />
       {/* <FirstApp title='Hola soy Vegeta!!'/> */}
    </React.StrictMode>
);