

/*"use client";
//function let component remember a number.
import { useState } from "react";
//main page exported from this file.
//page is react component and componenet means a function that describes what will be shown on screen.
export default function Page() {
  //completed take its inital value from useState and setCompleted control it. 
  const [completed, setCompleted] = useState(0);
//what will be shown on web and its html , javascript conbination.
  return (
    <main>
      <h1>Completed lessons: {completed}</h1>
      //how setcompleted will know the previous value.
      //answer:When you use the functional form:React automatically provides the previous/current value to this function
      //So yes, this behavior is built into React's useState.
      <button onClick={() => setCompleted(previous => previous + 1)}>
        Complete one lesson
      </button>
      <button onClick={() => setCompleted(0)}>Reset</button>
    </main>
  );
}*/
import Link from "next/link"
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>WELCOME YEHIA TO YOUR ROADMAP</h1>
      <h2>here you will find all what u need in clear way from plan to opportonities to dasboard</h2>
      <h3>Always rememeber yehia consistency is the secret to reach your goal in two months</h3>
      <h4>press here for your plan</h4>
      <Link href="/plan">Plan</Link>
      <h4>press here for your  opportonities</h4>
      <Link href="/opportunities">opportunities</Link>
      

    </main>
  );
}
