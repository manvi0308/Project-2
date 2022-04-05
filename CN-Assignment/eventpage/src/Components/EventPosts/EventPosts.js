import React, { useEffect, useState } from "react";
import "./EventPosts.css";

function EventPosts() {
  {
  }
  const [subCategory, setSubCategory] = useState([]);
  const [selectedtags, setSelectedTags] = useState([]);
  const [category, setCategory] = useState([]);
  const [eventData, setEventData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming&tag_list=Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Futuristic%20Tech&offset=0"
      );
      const data = await response.json();
      console.log(data);
      setEventData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tags = [
    "Interview Preparation",
    "Contest Solutions",
    "Competitive Programming",
    "Futuristic Tech",
    "Coding Concepts",
    "Career Guidance",
    "Web Development",
    "Android",
    "Machine Learning",
    "Campus Event",
    "Online Coding Event",
    "Hackathon",
    "Women Who Code",
    "GSoC",
    "Placement",
    "Aptitude Preparation",
    "Efficient Coding",
    "Programming Contest",
    "Coding Marathon",
    "All Night Coding",
    "Code Wars",
    "Scholarship Test",
  ];
  function categorySelected(e) {
    // var listItems = document.getElementsByClassName("navbarEvents__listItems");

    console.log("Fired");
    setCategory(e.target.innerText);

    // const val = listItems.innerText;
    //  console.log(eventCategory);
    e.target.classList.add("navbarEvents__listItemsSelected");
  }

  function subCategorySelected(e) {
    console.log("Sub category ho gyi h choose");
    setSubCategory(e.target.innerText);
    //  setIsSubCategory(true);
    console.log(subCategory);
    e.target.classList.add("navbarEvents__listItemsSelected");
  }

  function handleTagSelect(e) {
    console.log("Tag bhi ho gya h choose");
    setSelectedTags(e.target.innerText);
    console.log(selectedtags);
  }

  return (
    <div className="events-container">
      {/*? Event Category*/}
      <div className="navbarEvents__container">
        <ol className="navbarEvents__list">
          <button
            className="navbarEvents__listItems"
            onClick={categorySelected}
          >
            <span>
              <img
                src="https://www.codingninjas.com/assets-landing/images/all-events-selected.svg"
                alt=""
              />
            </span>
            All Events
          </button>
          <button
            className="navbarEvents__listItems"
            onClick={categorySelected}
          >
            <span>
              <img
                src="https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg"
                alt=""
              />
            </span>
            Webinars
          </button>
          <button
            className="navbarEvents__listItems"
            onClick={categorySelected}
          >
            <span>
              <img
                src="https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg"
                alt=""
              />
            </span>
            Coding Events
          </button>
          <button
            className="navbarEvents__listItems"
            onClick={categorySelected}
          >
            <span>
              <img
                src="https://files.codingninjas.in/bootcamp_events_unselected-5397.png"
                alt=""
                className="sizeReduce"
              />
            </span>
            Bootcamp Events
          </button>
          <button
            className="navbarEvents__listItems"
            onClick={categorySelected}
          >
            <span>
              <img
                src="https://files.codingninjas.in/workshop_unselected-5395.png"
                alt=""
                className="sizeReduce"
              />
            </span>
            Workshop
          </button>
        </ol>
      </div>
      {/*Event Sub Category*/}
      <div className="navbarevents__Timeline">
        <ol className="navbarevents__TimelineList">
          <button
            className="navbarevents__TimelineListItems"
            onClick={subCategorySelected}
            value={subCategory}
          >
            Upcoming
          </button>
          <button
            className="navbarevents__TimelineListItems"
            onClick={subCategorySelected}
          >
            Archived
          </button>
          <button
            className="navbarevents__TimelineListItems"
            onClick={subCategorySelected}
          >
            All Time Favourites
          </button>
        </ol>
      </div>
      {/*
    API CALLS Event Cards and Tags list*/}
      <div className="eventsCardsAndTagsDisplay">
        {/*Event Cards list*/}
        <div className="events-cards-list">
          {/*DISPLAY ALL THE EVENT UNIT CARDS MATCHING TO THE REQUIREMENTS     <GetEventCardData />*/}
          <div className="eventUnitCard">
            <img
              src="https://files.codingninjas.in/road-map-for-internship-preperation-desktop-version-10882.jpg"
              alt=""
              id="eventUnitCard__Image"
            />
            <h2>eventCaption</h2>
            <div className="eventUnitCardDetails">
              <ol className="itemLabel">
                <li>
                  <b>Starts On</b>
                </li>
                <li>
                  <b>Entry Fee</b>
                </li>
                <li>
                  <b>Venue</b>
                </li>
              </ol>
              <ol className="itemValue">
                <li>startTime</li>
                <li>entryFee</li>
                <li>venue</li>
              </ol>

              <p id="shortDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                ut odio, distinctio ratione optio nesciunt officiis animi itaque
                natus expedita nisi, et dicta. Ipsam fugit, reprehenderit sed
                nam asperiores voluptate.
              </p>
            </div>
            <button>REGISTER NOW</button>
          </div>

          <div className="eventUnitCard">
            <img
              src="https://files.codingninjas.in/road-map-for-internship-preperation-desktop-version-10882.jpg"
              alt=""
              id="eventUnitCard__Image"
            />
            <h2>eventCaption</h2>
            <div className="eventUnitCardDetails">
              <ol className="itemLabel">
                <li>
                  <b>Starts On</b>
                </li>
                <li>
                  <b>Entry Fee</b>
                </li>
                <li>
                  <b>Venue</b>
                </li>
              </ol>
              <ol className="itemValue">
                <li>startTime</li>
                <li>entryFee</li>
                <li>venue</li>
              </ol>

              <p id="shortDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                ut odio, distinctio ratione optio nesciunt officiis animi itaque
                natus expedita nisi, et dicta. Ipsam fugit, reprehenderit sed
                nam asperiores voluptate.
              </p>
            </div>
            <button>REGISTER NOW</button>
          </div>

          <div className="eventUnitCard">
            <img
              src="https://files.codingninjas.in/road-map-for-internship-preperation-desktop-version-10882.jpg"
              alt=""
              id="eventUnitCard__Image"
            />
            <h2>eventCaption</h2>
            <div className="eventUnitCardDetails">
              <ol className="itemLabel">
                <li>
                  <b>Starts On</b>
                </li>
                <li>
                  <b>Entry Fee</b>
                </li>
                <li>
                  <b>Venue</b>
                </li>
              </ol>
              <ol className="itemValue">
                <li>startTime</li>
                <li>entryFee</li>
                <li>venue</li>
              </ol>

              <p id="shortDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                ut odio, distinctio ratione optio nesciunt officiis animi itaque
                natus expedita nisi, et dicta. Ipsam fugit, reprehenderit sed
                nam asperiores voluptate.
              </p>
            </div>
            <button>REGISTER NOW</button>
          </div>
        </div>

        {/*Event Tags list*/}
        <div className="events-tags-list">
          <ul>
            {tags.map((tag) => {
              return <button onClick={handleTagSelect}>{tag}</button>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventPosts;
