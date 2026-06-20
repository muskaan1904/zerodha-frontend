import React from "react";
import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom'; 
//this is for checking tiime of delays data is load or not
import Hero from "../landing_page/home/Hero";

// Test Suite-- sweets pernounce in whic we can ive multiple test cases at a time
// for idividual task
describe('Hero Component', ()=>{

    test('render hero image',()=>{
        render(<Hero />)  ; //load component from browser
        const heroImage = screen.getByAltText("Hero Image"); // alt should same ,we are trying to read image, that will will present on browser alt text will hero image 
        expect(heroImage).toBeInTheDocument();// available in doucment,image should be in hm document , what actual resylt is expect
        expect(heroImage).toHaveAttribute("src", 'media/images/homeHero.png')// image src should same to original
    });




    // 2ns test--we can write all test cases of one component in one individual test case
    test("renders signup button", ()=>{
        render(<Hero />);
        const  signupButton = screen.getByRole("button", {name: "/signup"});
        expect (signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");;
        });

});
