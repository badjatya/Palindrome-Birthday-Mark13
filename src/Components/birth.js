import React, { useState } from "react";

// Importing Components
import Header from "./Header";

// Importing Images
import happy from "../img/happy.svg";
import sad from "../img/sad.svg";

export default function Birth() {
  const [birthdayDate, setBirthdayDate] = useState();
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [message, setMessage] = useState("");

  // Submit
  const submitEventHandler = () => {
    const date = birthdayDate;
    const isPalindrome = palindrome(date);
    let text = "";
    if (isPalindrome) {
      text = "Yeah! Your birthday is a palindrome. ";
      setIsPalindrome(true);
      setMessage("");
    } else {
      text = "Na! Your birthday is not a palindrome. ";
      setIsPalindrome(false);
      setMessage(text);
    }
  };

  function palindrome(date) {
    const { day, month, year } = getDayMonthYear(date);
    const {
      reversedOne,
      reversedTwo,
      reversedThree,
      formatOne,
      formatTwo,
      formatThree,
    } = formatDateAndReverse(day, month, year);
    if (
      reversedOne === formatOne ||
      reversedTwo === formatTwo ||
      reversedThree === formatThree
    ) {
      return true;
    } else {
      return false;
    }
  }

  function getDayMonthYear(date) {
    return {
      day: date.slice(0, 2),
      month: date.slice(3, 5),
      year: date.slice(6),
    };
  }
  function formatDateAndReverse(day, month, year) {
    const formatOne = month + day + year;
    const formatTwo = day + month + year;
    const formatThree = day + month + year.slice(2);
    const reversedOne = formatOne.split("").reverse().join("");
    const reversedTwo = formatTwo.split("").reverse().join("");
    const reversedThree = formatThree.split("").reverse().join("");
    return {
      reversedOne,
      reversedTwo,
      reversedThree,
      formatOne,
      formatTwo,
      formatThree,
    };
  }

  return (
    <div>
      <Header />

      <main className="main">
        <div className="form">
          <div className="inputContainer">
            <label htmlFor="birthdayDate">Enter Your Birth Day:</label>
            <input
              type="date"
              id="birthdayDate"
              onChange={(e) => setBirthdayDate(e.target.value)}
            />
          </div>

          <div className="buttonContainer">
            <span onClick={submitEventHandler}>
              Check if your birthday is Palindrome
            </span>
          </div>
        </div>
        {isPalindrome && (
          <div>
            <img src={happy} alt="happy" />
            <p>You're birthday is Palindrome</p>
          </div>
        )}
        {message && (
          <div>
            <img src={sad} alt="sad" />
            <p>{message}</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <ul className="footer-list">
          <li className="list-item">
            <a className="list-link" href="https://instagram.com/badjatya">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="list-link" href="https://twitter.com/ArchitBadjatya">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="list-link" href="https://linkedin.com/in/badjatya">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <small>&copy;Badjatya 2020 </small>
      </footer>
    </div>
  );
}
